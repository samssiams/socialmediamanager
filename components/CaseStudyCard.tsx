import { ArrowUpRight } from "lucide-react";

export default function CaseStudyCard({ label, title, className = "" }: { label: string; title: string; className?: string }) {
  return <article className={`case-mini hover-lift ${className}`}><div className="visual-placeholder" /><span>{label}</span><h3>{title}</h3><ArrowUpRight /></article>;
}
