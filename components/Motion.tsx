"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="progress-track"><motion.span initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1.15, ease: "easeOut" }} /></div>;
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
