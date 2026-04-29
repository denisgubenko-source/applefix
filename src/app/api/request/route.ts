import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RepairRequestSchema, type RepairRequestInput } from "@/lib/repairRequest";
import { rateLimit } from "@/lib/rateLimit";

function getIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  const xr = req.headers.get("x-real-ip");
  if (xr) return xr.trim();
  return "unknown";
}

async function verifyTurnstile({
  token,
  ip,
}: {
  token: string;
  ip: string;
}): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip && ip !== "unknown") body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

function formatEmail(input: RepairRequestInput) {
  const safe = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  return [
    `Name: ${safe(input.name)}`,
    `Contact: ${safe(input.contact)}`,
    `Email: ${safe(input.email)}`,
    `Device type: ${safe(input.deviceType)}`,
    `Model: ${safe(input.deviceModel)}`,
    `Color: ${safe(input.deviceColor)}`,
    `Repair type: ${safe(input.repairType)}`,
    `Comment: ${safe(input.comment)}`,
    "",
    `Language: ${safe(input.language)}`,
    `Page URL: ${safe(input.pageUrl)}`,
    `Timestamp: ${safe(input.timestamp)}`,
    `Source: ${safe(input.source)}`,
  ].join("\n");
}

export async function POST(req: Request) {
  const ip = getIp(req);

  const rl = rateLimit({ key: `request:${ip}`, limit: 5, windowMs: 60_000 });
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, code: "RATE_LIMIT" },
      {
        status: 429,
        headers: {
          "retry-after": String(Math.ceil(rl.retryAfterMs / 1000)),
        },
      },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    console.error("request:invalid_json", { ip });
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = RepairRequestSchema.safeParse(json);
  if (!parsed.success) {
    console.error("request:validation_failed", { ip, issues: parsed.error.issues });
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const input = parsed.data;

  // Honeypot
  if (input.hp && input.hp.trim().length > 0) {
    console.warn("request:honeypot", { ip });
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const turnstileOk = await verifyTurnstile({ token: input.turnstileToken, ip });
  if (!turnstileOk) {
    console.warn("request:turnstile_failed", { ip });
    return NextResponse.json({ ok: false, code: "TURNSTILE" }, { status: 403 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM || "AppleFix <info@applefix.ee>";
  const to = "info@applefix.ee";

  if (!host || !user || !pass) {
    console.error("request:missing_smtp_env");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `New request from applefix.ee [${input.deviceType}]`;
  const text = formatEmail(input);

  try {
    const info = await transport.sendMail({
      from,
      to,
      replyTo: input.email,
      subject,
      text,
    });

    console.info("request:email_sent", { ip, messageId: info.messageId });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("request:email_failed", { ip, err });
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}