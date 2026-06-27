"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "fade" | "scale";

const HIDDEN: Record<Variant, string> = {
  up: "translate-y-8 opacity-0",
  left: "translate-x-8 opacity-0",
  right: "-translate-x-8 opacity-0",
  fade: "opacity-0",
  scale: "scale-95 opacity-0",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 650,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      className={`transition-all ease-out motion-reduce:!translate-x-0 motion-reduce:!translate-y-0 motion-reduce:!scale-100 motion-reduce:!opacity-100 motion-reduce:transition-none ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}