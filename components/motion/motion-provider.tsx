"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

// Global reduced-motion guard: "user" disables transform/layout animations
// for anyone with prefers-reduced-motion set, across every motion component.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
