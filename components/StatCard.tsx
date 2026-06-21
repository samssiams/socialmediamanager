import { Counter } from "./Motion";

export default function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return <article className="stat-card hover-lift"><strong><Counter value={value} suffix={suffix} /></strong><p>{label}</p></article>;
}
