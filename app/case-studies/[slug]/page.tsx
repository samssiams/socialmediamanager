import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import CaseStudyProof from "@/components/CaseStudyProof";
import { caseStudies } from "@/content/case-studies/case-studies";
import { caseStudyInterface } from "@/content/case-studies/interface";

const pages = {
  lifestyle: {
    eyebrow: caseStudies.lifestyle.label,
    title: caseStudies.lifestyle.title,
    summary: caseStudies.lifestyle.objective,
    image: caseStudies.lifestyle.heroImage,
    proof: caseStudies.lifestyle.proof,
  },
  cafe: {
    eyebrow: caseStudies.cafe.label,
    title: caseStudies.cafe.title,
    summary: caseStudies.cafe.intro,
    image: caseStudies.cafe.heroImage,
    proof: caseStudies.cafe.proof,
  },
  beauty: {
    eyebrow: caseStudies.beauty.caseLabel,
    title: caseStudies.beauty.title,
    summary: caseStudies.beauty.description,
    image: caseStudies.beauty.heroImage,
    proof: caseStudies.beauty.proof,
  },
} as const;

type CaseStudySlug = keyof typeof pages;

function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return slug in pages;
}

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isCaseStudySlug(slug)) return {};
  return { title: `${pages[slug].title} | ${caseStudyInterface.metadataSuffix}`, description: pages[slug].summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isCaseStudySlug(slug)) notFound();
  const page = pages[slug];

  return <main className="case-study-page">
    <header className="case-study-nav container"><Link href="/"><ArrowLeft/> {caseStudyInterface.backLabel}</Link><span>{caseStudyInterface.brandLabel}</span></header>
    <section className="case-study-hero container">
      <div className="case-study-hero-copy"><p>{page.eyebrow}</p><h1>{page.title}</h1><span>{page.summary}</span><div><i/>{caseStudyInterface.servicesLabel}</div></div>
      <figure><Image src={page.image.src} alt={page.image.alt} fill priority sizes="(max-width: 900px) 100vw, 42vw"/><figcaption>{caseStudyInterface.frameLabel}</figcaption></figure>
    </section>
    <div className="case-study-marquee">{caseStudyInterface.sectionLabels.map((label, index) => <span key={label}>{index > 0 && <i/>}{label}</span>)}</div>
    <CaseStudyProof data={page.proof} dark/>
    <nav className="case-study-more container" aria-label={caseStudyInterface.exploreAriaLabel}>
      <p>{caseStudyInterface.exploreLabel}</p>
      <div>{Object.entries(pages).filter(([key]) => key !== slug).map(([key, item]) => <Link key={key} href={`/case-studies/${key}`}><span>{item.eyebrow}</span>{item.title}<ArrowUpRight/></Link>)}</div>
    </nav>
  </main>;
}
