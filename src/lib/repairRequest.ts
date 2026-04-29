import { z } from "zod";
import type { DeviceType, RepairType } from "@/i18n/types";

export const DeviceTypeValues = [
  "macbook",
  "iphone",
  "ipad",
  "watch",
] as const satisfies readonly DeviceType[];

export const RepairTypeValues = [
  "screen",
  "battery",
  "keyboard",
  "trackpad",
  "camera",
  "charging_port",
  "diagnostics",
  "other",
] as const satisfies readonly RepairType[];

export const RepairRequestSchema = z.object({
  name: z.string().trim().min(1),
  contact: z.string().trim().min(1),
  email: z.string().trim().email(),
  deviceType: z.enum(DeviceTypeValues),
  repairType: z.enum(RepairTypeValues),

  deviceModel: z.string().trim().max(120).optional().or(z.literal("")),
  deviceColor: z.string().trim().max(60).optional().or(z.literal("")),
  comment: z.string().trim().max(1000).optional().or(z.literal("")),

  // anti-spam/system
  turnstileToken: z.string().trim().min(1),
  hp: z.string().optional().or(z.literal("")),

  language: z.string().trim().min(2).max(5),
  pageUrl: z.string().trim().min(1).max(2048),
  timestamp: z.string().trim().min(1).max(60),
  source: z.literal("applefix.ee"),
});

export type RepairRequestInput = z.infer<typeof RepairRequestSchema>;
