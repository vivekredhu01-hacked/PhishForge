"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowButtonProps extends ButtonProps {
  glowColor?: "purple" | "cyan" | "pink";
  children: ReactNode;
}

const glowColors = {
  purple: "shadow-[0_0_20px_rgba(168,85,247,0.5),0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7),0_0_50px_rgba(168,85,247,0.5)]",
  cyan: "shadow-[0_0_20px_rgba(34,211,238,0.5),0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7),0_0_50px_rgba(34,211,238,0.5)]",
  pink: "shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7),0_0_50px_rgba(236,72,153,0.5)]",
};

export function GlowButton({ 
  children, 
  className,
  glowColor = "purple",
  ...props 
}: GlowButtonProps) {
  return (
    <Button
      className={cn(
        "transition-all duration-300",
        glowColors[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

