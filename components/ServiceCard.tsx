import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, description, icon: Icon, index }: { title: string; description: string; icon: LucideIcon; index: number }) {
  return <article className="service-card hover-lift"><div className="service-icon"><Icon size={24} strokeWidth={1.8} /></div><div><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div><ArrowUpRight className="card-arrow" size={20} /></article>;
}
