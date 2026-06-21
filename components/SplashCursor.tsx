"use client";

import { useEffect, useRef } from "react";

type Drop = { x: number; y: number; vx: number; vy: number; radius: number; life: number; color: string };

const colors = ["#e6002d", "#ff3157", "#ff7890", "#ffffff"];

export default function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let lastX = innerWidth / 2;
    let lastY = innerHeight / 2;
    const drops: Drop[] = [];

    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addDrops = (x: number, y: number, count: number, speed = 1) => {
      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const force = (.3 + Math.random() * 1.4) * speed;
        drops.push({ x, y, vx: Math.cos(angle) * force, vy: Math.sin(angle) * force, radius: 5 + Math.random() * 18, life: 1, color: colors[Math.floor(Math.random() * colors.length)] });
      }
      if (drops.length > 180) drops.splice(0, drops.length - 180);
    };

    const move = (event: PointerEvent) => {
      const speed = Math.min(Math.hypot(event.clientX - lastX, event.clientY - lastY) / 10, 3);
      addDrops(event.clientX, event.clientY, 2 + Math.ceil(speed), .65 + speed * .35);
      lastX = event.clientX;
      lastY = event.clientY;
    };
    const splash = (event: PointerEvent) => addDrops(event.clientX, event.clientY, 24, 2.2);

    const draw = () => {
      context.clearRect(0, 0, innerWidth, innerHeight);
      context.globalCompositeOperation = "lighter";
      for (let index = drops.length - 1; index >= 0; index -= 1) {
        const drop = drops[index];
        drop.x += drop.vx;
        drop.y += drop.vy;
        drop.vx *= .975;
        drop.vy = drop.vy * .975 + .008;
        drop.life -= .018;
        drop.radius *= .992;
        if (drop.life <= 0) { drops.splice(index, 1); continue; }
        const gradient = context.createRadialGradient(drop.x, drop.y, 0, drop.x, drop.y, drop.radius);
        gradient.addColorStop(0, `${drop.color}${Math.round(drop.life * 145).toString(16).padStart(2, "0")}`);
        gradient.addColorStop(.45, `${drop.color}${Math.round(drop.life * 65).toString(16).padStart(2, "0")}`);
        gradient.addColorStop(1, `${drop.color}00`);
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    addEventListener("resize", resize);
    addEventListener("pointermove", move, { passive: true });
    addEventListener("pointerdown", splash, { passive: true });
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); removeEventListener("resize", resize); removeEventListener("pointermove", move); removeEventListener("pointerdown", splash); };
  }, []);

  return <canvas ref={canvasRef} className="splash-cursor" aria-hidden="true" />;
}
