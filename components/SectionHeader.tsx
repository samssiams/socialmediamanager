import { Reveal } from "./Motion";

export default function SectionHeader({ eyebrow, title, light = false, center = false }: { eyebrow: string; title: string; light?: boolean; center?: boolean }) {
  return <Reveal className={`section-header ${light ? "is-light" : ""} ${center ? "is-center" : ""}`}><p>{eyebrow}</p><h2>{title}</h2></Reveal>;
}
