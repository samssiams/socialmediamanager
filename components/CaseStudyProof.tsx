import Image from "next/image";
import { Reveal } from "./Motion";
import { caseStudyInterface } from "@/content/case-studies/interface";

type Result = {
  value: string;
  label: string;
  context: string;
};

export type CaseStudyProofData = {
  problem: string;
  strategy: string;
  deliverables: readonly string[];
  execution: string;
  measuredResults: readonly Result[];
  analyticsImage: string;
  analyticsAlt: string;
  analyticsCaption: string;
};

export default function CaseStudyProof({ data, dark = false }: { data: CaseStudyProofData; dark?: boolean }) {
  const copy = caseStudyInterface.breakdown;

  return <Reveal className={`case-proof container ${dark ? "is-dark" : ""}`}>
    <div className="proof-heading"><p>{copy.eyebrow}</p><h3>{copy.title}</h3></div>
    <div className="proof-sections">
      <article className="proof-section">
        <div><small>01</small><h4>{copy.sections[0]}</h4></div>
        <p>{data.problem}</p>
      </article>
      <article className="proof-section">
        <div><small>02</small><h4>{copy.sections[1]}</h4></div>
        <p>{data.strategy}</p>
      </article>
      <article className="proof-section proof-deliverables">
        <div><small>03</small><h4>{copy.sections[2]}</h4></div>
        <ul>{data.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="proof-section">
        <div><small>04</small><h4>{copy.sections[3]}</h4></div>
        <p>{data.execution}</p>
      </article>
      <figure className="analytics-proof proof-results">
        <div className="analytics-label"><span>{copy.resultsLabel}</span><span>{copy.analyticsLabel}</span></div>
        <Image src={data.analyticsImage} alt={data.analyticsAlt} width={1080} height={720} sizes="(max-width: 900px) 100vw, 42vw"/>
        <figcaption>
          <p>{data.analyticsCaption}</p>
          <div>{data.measuredResults.map((result) => <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span><small>{result.context}</small></div>)}</div>
        </figcaption>
      </figure>
    </div>
  </Reveal>;
}
