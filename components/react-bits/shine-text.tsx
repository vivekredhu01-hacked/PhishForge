"use client";

import { cn } from "@/lib/utils";

interface ShineTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ShineText({ children, className = "" }: ShineTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600",
        "bg-clip-text text-transparent",
        "bg-[length:200%_auto]",
        "animate-[shine_3s_linear_infinite]",
        className
      )}
      style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

