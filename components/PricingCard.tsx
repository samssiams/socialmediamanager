import { ArrowUpRight, Check } from "lucide-react";
import { interfaceCopy } from "@/content/interface";

export default function PricingCard({ name, type, items, featured }: { name: string; type: string; items: string[]; featured?: boolean }) {
  return <article className={`pricing-card hover-lift ${featured ? "featured" : ""}`}>{featured && <span className="popular">{interfaceCopy.pricingFeatured}</span>}<p>{type}</p><h3>{name}</h3><ul>{items.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><a href="#contact">{interfaceCopy.pricingButton} <ArrowUpRight size={17} /></a></article>;
}
