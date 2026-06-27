"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms per character (higher = slower)
  startDelay?: number; // ms before typing starts once visible
  className?: string;
  once?: boolean; // type only the first time it enters view
  threshold?: number; // how much must be visible before typing (0–1)
};

/* -------------------------------------------------------------------------- */
/*  Shared singletons (created once for ALL instances, not per card)          */
/* -------------------------------------------------------------------------- */

// One reduced-motion check shared across every instance.
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A single IntersectionObserver shared by every TypewriterText on the page.
// Each element registers a callback; the one observer fans out to all of them.
type IOEntryCb = (isIntersecting: boolean) => void;
const ioCallbacks = new WeakMap<Element, IOEntryCb>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(threshold: number) {
  if (typeof window === "undefined") return null;
  // One observer is enough; threshold is read from the first mount. For mixed
  // thresholds you'd key a map by threshold, but a single value is the norm.
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ioCallbacks.get(entry.target)?.(entry.isIntersecting);
        }
      },
      { threshold },
    );
  }
  return sharedObserver;
}

/* -------------------------------------------------------------------------- */

export default function TypewriterText({
  text,
  speed = 90,
  startDelay = 0,
  className = "",
  once = false,
  threshold = 0.4,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const visibleRef = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);
  const doneRef = useRef(false);

  // Visibility via the shared observer.
  useEffect(() => {
    const el = ref.current;
    const observer = getObserver(threshold);
    if (!el || !observer) return;

    ioCallbacks.set(el, (isIntersecting) => {
      if (isIntersecting) {
        setInView(true);
        if (once) {
          observer.unobserve(el);
          ioCallbacks.delete(el);
        }
      } else if (!once && !doneRef.current === false) {
        setInView(false);
      } else if (!once) {
        setInView(false);
      }
    });

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      ioCallbacks.delete(el);
    };
  }, [once, threshold]);

  // Type when in view — writes to the DOM directly via rAF, so React does NOT
  // re-render once per character (the expensive part of the old version).
  useEffect(() => {
    const node = visibleRef.current;
    if (!node || !inView) return;

    if (prefersReducedMotion()) {
      node.textContent = text;
      return;
    }

    // Respect speed/startDelay while driving updates off requestAnimationFrame
    // (one paint per frame, throttles automatically when the tab is hidden).
    let raf = 0;
    let start = 0;
    let lastCount = -1;

    const tick = (now: number) => {
      if (!start) start = now + startDelay;
      const elapsed = now - start;
      const count =
        elapsed < 0 ? 0 : Math.min(text.length, Math.floor(elapsed / speed) + 1);

      if (count !== lastCount) {
        node.textContent = text.slice(0, Math.max(0, count));
        lastCount = count;
      }
      if (count < text.length) {
        raf = requestAnimationFrame(tick);
      }
    };

    node.textContent = ""; // reset before typing
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [inView, text, speed, startDelay]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Reserves final size so content below never jumps as it types */}
      <span aria-hidden className="invisible">
        {text}
      </span>

      {/* Full text for SEO, screen readers, and no-JS */}
      <span className="sr-only">{text}</span>

      {/* Visible typed text — updated imperatively, no per-char React renders */}
      <span ref={visibleRef} aria-hidden className="absolute inset-0" />
    </span>
  );
}