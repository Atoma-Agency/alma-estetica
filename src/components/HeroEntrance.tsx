"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

interface HeroEntranceProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  fromY?: number;
  fromScale?: number;
}

export function HeroEntrance({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  duration = 1200,
  fromY = 24,
  fromScale = 1,
}: HeroEntranceProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const style = {
    "--hero-enter-y": `${fromY}px`,
    "--hero-enter-scale": fromScale,
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  } as CSSProperties;

  return (
    <Component
      className={`transition-[opacity,transform] ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-[opacity,transform] motion-reduce:!translate-y-0 motion-reduce:!scale-100 motion-reduce:!opacity-100 motion-reduce:!transition-none ${entered
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-[var(--hero-enter-y)] scale-[var(--hero-enter-scale)] opacity-0"
        } ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
