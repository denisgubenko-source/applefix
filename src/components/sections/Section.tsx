import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-wide text-zinc-500">{eyebrow}</div>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}