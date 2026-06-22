import { BarChart3 } from "lucide-react";
import { Reveal } from "./Motion";
import { impact } from "@/content/main-page/impact";

export default function ImpactChart() {
  return <Reveal className="impact-chart"><div className="chart-copy"><BarChart3 /><small>{impact.chart.label}</small><strong>{impact.chart.value}</strong><p>{impact.chart.description}</p></div><div className="bars">{[34, 48, 55, 68, 82, 96].map((h, i) => <span key={impact.chart.periods[i]} style={{ height: `${h}%` }}><i>{impact.chart.periods[i]}</i></span>)}</div></Reveal>;
}
