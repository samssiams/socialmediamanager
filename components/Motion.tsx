"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import type { Transition } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealVariant = "up" | "left" | "right" | "soft" | "scale";

const revealStyles: Record<RevealVariant, { initial: Record<string, number | string>; visible: Record<string, number | string> }> = {
  up: {
    initial: { opacity: 0, y: 48, scale: 0.992, clipPath: "inset(0 0 14% 0)" },
    visible: { opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)" },
  },
  left: {
    initial: { opacity: 0, x: -42, y: 14, scale: 0.995, clipPath: "inset(0 10% 0 0)" },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0 0)" },
  },
  right: {
    initial: { opacity: 0, x: 42, y: 14, scale: 0.995, clipPath: "inset(0 0 0 10%)" },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0 0)" },
  },
  soft: {
    initial: { opacity: 0, y: 22, clipPath: "inset(0 0 8% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
  },
  scale: {
    initial: { opacity: 0, y: 26, scale: 0.965 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

const revealTransition = (delay = 0): Transition => ({
  duration: 0.88,
  delay,
  ease: [0.16, 1, 0.3, 1] as const,
});

const revealViewport = { once: true, amount: 0.22 };

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

function getRevealMotion(variant: RevealVariant) {
  return revealStyles[variant];
}

export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const motionStyle = getRevealMotion(variant);
  return (
    <motion.div
      className={className}
      initial={motionStyle.initial}
      whileInView={motionStyle.visible}
      viewport={revealViewport}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.div>
  );
}

export function RevealHeader({ children, className = "", delay = 0, variant = "soft" }: RevealProps) {
  const motionStyle = getRevealMotion(variant);
  return (
    <motion.header
      className={className}
      initial={motionStyle.initial}
      whileInView={motionStyle.visible}
      viewport={revealViewport}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.header>
  );
}

export function RevealFooter({ children, className = "", delay = 0, variant = "soft" }: RevealProps) {
  const motionStyle = getRevealMotion(variant);
  return (
    <motion.footer
      className={className}
      initial={motionStyle.initial}
      whileInView={motionStyle.visible}
      viewport={revealViewport}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.footer>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="progress-track"><motion.span initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }} /></div>;
}

export function Counter({ value, prefix = "+", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 70, damping: 18 });
  useEffect(() => { if (inView) raw.set(value); }, [inView, raw, value]);
  useEffect(() => spring.on("change", (latest: number) => { if (ref.current) ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`; }), [spring, prefix, suffix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}
