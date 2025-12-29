"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "purple" | "cyan" | "rainbow";
}

const gradients = {
  purple: "from-purple-400 via-pink-400 to-purple-600",
  cyan: "from-cyan-400 via-blue-400 to-purple-400",
  rainbow: "from-purple-400 via-pink-400 via-cyan-400 to-blue-400",
};

export function GradientText({ 
  children, 
  className = "",
  gradient = "purple"
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        gradients[gradient],
        className
      )}
    >
      {children}
    </span>
  );
}

