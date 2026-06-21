import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return <article className="testimonial-card hover-lift"><Quote size={38} fill="currentColor" /><blockquote>“{quote}”</blockquote><footer><span>{name.slice(0, 1)}</span><div><strong>{name}</strong><small>{role}</small></div></footer></article>;
}
