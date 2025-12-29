"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedText({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.8 
}: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration,
          delay,
          ease: "power3.out"
        }
      );
    }
  }, [delay, duration]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
}


