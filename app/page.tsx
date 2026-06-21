import { ArrowDown, ArrowUpRight, BarChart3, BriefcaseBusiness as Linkedin, CalendarCheck, Camera, Camera as Instagram, Download, FileText, Mail, Megaphone, PenTool, Play, Rocket, Send, Shapes } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import MockupPhone from "@/components/MockupPhone";
import ContentCalendar from "@/components/ContentCalendar";
import ImpactChart from "@/components/ImpactChart";
import { ProgressBar, Reveal } from "@/components/Motion";
import { packages, services, skills, testimonials, tools } from "@/lib/data";
import { pageHeadings } from "@/content/page-headings";
import { profile } from "@/content/profile";
import { processSteps } from "@/content/methodology";
import { creativeDirection } from "@/content/creative-direction";
import { caseStudies } from "@/content/case-studies";
import { creativeOutput } from "@/content/creative-output";
import { impact } from "@/content/impact";
import { interfaceCopy } from "@/content/interface";

const process = processSteps.map((step, index) => ({
  ...step,
  icon: [BarChart3, CalendarCheck, PenTool, Rocket][index],
}));

export default function Home() {
  return <main>
    <section className="hero section-dark">
      <div className="hero-glow" /><header className="hero-top"><nav aria-label="Social links"><a href="#contact" aria-label="Instagram"><Instagram /></a><a href="#contact" aria-label="LinkedIn"><Linkedin /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a></nav></header>
      <div className="hero-grid"><Reveal className="hero-copy"><p className="micro red">{profile.hero.eyebrow}</p><h1>{profile.hero.titleTop}<br/><em>{profile.hero.titleScript}</em><br/>{profile.hero.titleBottom}<br/>{profile.hero.titleLast}</h1></Reveal><Reveal className="hero-phone" delay={.2}><MockupPhone /><div className="orbit orbit-one"/><div className="orbit orbit-two"/></Reveal></div>
      <div className="hero-bottom"><div><h3>{profile.name}</h3><p>{profile.hero.role}</p></div><p>{profile.hero.specialties}</p></div>
    </section>

    <section className="about section-cream"><div className="container about-grid"><Reveal className="portrait-wrap"><div className="portrait visual-placeholder"><span>{profile.about.portraitPlaceholder}</span></div><div className="name-card"><b>{profile.name}</b><span>{profile.about.role}</span></div></Reveal><Reveal className="about-copy"><span className="quote-mark">“</span><h2>{profile.about.headline}</h2><p>{profile.about.paragraph}</p><div className="facts">{profile.about.facts.map(([a,b])=><div key={a}><small>{a}</small><strong>{b}</strong></div>)}</div></Reveal></div></section>

    <section className="services section-light"><div className="container"><SectionHeader {...pageHeadings.services}/><div className="services-grid">{services.map((service, i)=><Reveal key={service.title} delay={i*.06}><ServiceCard {...service} index={i}/></Reveal>)}</div></div></section>

    <section className="arsenal section-dark"><div className="container"><SectionHeader eyebrow={pageHeadings.skills.eyebrow} title={pageHeadings.skills.title} light/><p className="section-intro">{pageHeadings.skills.intro}</p><div className="arsenal-grid"><Reveal className="skill-list">{skills.map(([name,value])=><div className="skill" key={name}><p><span>{name}</span><b>{value}%</b></p><ProgressBar value={value}/></div>)}</Reveal><Reveal className="tools-grid" delay={.15}>{tools.map((tool,i)=>{const Icon=[Megaphone,Instagram,Play,Shapes,Camera,Send,BarChart3,FileText][i];return <div className="tool-card hover-lift" key={tool}><Icon size={23}/><span>{tool}</span></div>})}</Reveal></div></div></section>

    <section className="moodboard section-cream"><div className="diagonal-pattern"/><div className="container"><SectionHeader {...pageHeadings.creativeDirection}/><div className="mood-grid"><Reveal className="type-card hover-lift"><small>{creativeDirection.typographyLabel}</small><h3>{creativeDirection.displayFont}</h3><p>{creativeDirection.displayDescription}</p><h4>{creativeDirection.bodyFont}</h4><p>{creativeDirection.bodyDescription}</p></Reveal><Reveal className="collage" delay={.1}><div className="photo photo-a visual-placeholder"><span>{creativeDirection.collageLabels[0]}</span></div><div className="photo photo-b visual-placeholder"><span>{creativeDirection.aestheticLabel}</span></div><div className="photo photo-c visual-placeholder"><span>{creativeDirection.collageLabels[1]}</span></div></Reveal><Reveal className="palette"><small>{creativeDirection.paletteLabel}</small><div><i/><i/><i/><i/></div><p>{creativeDirection.palette}</p></Reveal></div></div></section>

    <section className="process-section section-light"><div className="container"><SectionHeader {...pageHeadings.process}/><div className="timeline">{process.map((step,i)=><Reveal className="process-step" key={step.title}><div className="step-number">{i+1}</div><article className="hover-lift"><step.icon/><div><small>{interfaceCopy.processStepPrefix} 0{i+1}</small><h3>{step.title}</h3><p>{step.description}</p></div></article></Reveal>)}</div></div></section>

    <section className="case-fashion section-dark"><div className="fashion-backdrop visual-placeholder"/><div className="container case-grid"><Reveal className="case-copy"><p className="micro red">{caseStudies.lifestyle.label}</p><h2>{caseStudies.lifestyle.title}</h2><div className="case-detail"><div><small>{caseStudies.lifestyle.objectiveLabel}</small><p>{caseStudies.lifestyle.objective}</p></div><div><small>{caseStudies.lifestyle.platformsLabel}</small><p className="icon-line"><Instagram/> {caseStudies.lifestyle.platforms[0]} <Play/> {caseStudies.lifestyle.platforms[1]}</p></div></div><div className="case-stats">{caseStudies.lifestyle.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></Reveal><Reveal className="case-phone" delay={.15}><MockupPhone variant="feed"/><div className="post-card"><div className="visual-placeholder"/><p><Instagram/> <b>{caseStudies.lifestyle.account}</b></p><span>{caseStudies.lifestyle.postLabel}</span></div></Reveal></div></section>

    <section className="case-food section-cream"><div className="container"><div className="case-heading"><SectionHeader {...pageHeadings.caseStudyTwo}/><p>{caseStudies.cafe.intro}</p></div><div className="food-grid"><Reveal className="food-copy"><article><small>{caseStudies.cafe.challengeLabel}</small><h3>{caseStudies.cafe.challenge}</h3></article><article><small>{caseStudies.cafe.editLabel}</small><p>{caseStudies.cafe.edit}</p></article><blockquote>“{caseStudies.cafe.quote}”</blockquote></Reveal><Reveal className="food-visuals" delay={.12}><div className="food-photo visual-placeholder"><span>{caseStudies.cafe.imageLabel}</span></div><div className="food-photo visual-placeholder"><Play fill="currentColor"/></div><div className="food-stat"><strong>{caseStudies.cafe.stat}</strong><span>{caseStudies.cafe.statLabel}</span></div></Reveal></div></div></section>

    <section className="case-beauty section-light"><div className="container"><SectionHeader eyebrow={pageHeadings.caseStudyThree.eyebrow} title={pageHeadings.caseStudyThree.title} center/><div className="beauty-grid"><Reveal className="before-after"><div><small>{caseStudies.beauty.rawLabel}</small><div className="beauty-before visual-placeholder"><span>{caseStudies.beauty.rawPlaceholder}</span></div></div><div><small>{caseStudies.beauty.finalLabel}</small><div className="beauty-after visual-placeholder"><span>{caseStudies.beauty.finalPlaceholder}</span></div></div></Reveal><Reveal className="beauty-copy" delay={.12}><p className="micro red">{caseStudies.beauty.label}</p><h3>{caseStudies.beauty.title}</h3><p>{caseStudies.beauty.description}</p><div><small>{caseStudies.beauty.editingLabel}</small><p>{caseStudies.beauty.editing}</p></div><div><small>{caseStudies.beauty.instagramLabel}</small><p>{caseStudies.beauty.instagram}</p></div></Reveal></div></div></section>

    <section className="arsenal-content section-cream"><div className="container"><SectionHeader eyebrow={pageHeadings.creativeOutput.eyebrow} title={pageHeadings.creativeOutput.title}/><p className="section-intro dark-text">{pageHeadings.creativeOutput.intro}</p><div className="content-grid"><Reveal className="content-feature visual-placeholder"><span>{creativeOutput.feature}</span><ArrowUpRight/></Reveal><Reveal className="content-video visual-placeholder" delay={.06}><button aria-label="Play video"><Play fill="currentColor"/></button><span>{creativeOutput.video}</span></Reveal><Reveal className="content-quote" delay={.12}><small>{creativeOutput.audioLabel}</small><blockquote>“{creativeOutput.quote}”</blockquote></Reveal><Reveal className="content-small visual-placeholder" delay={.18}><Camera/><span>{creativeOutput.detail}</span></Reveal></div></div></section>

    <section className="calendar-section section-light"><div className="container"><SectionHeader eyebrow={pageHeadings.organization.eyebrow} title={pageHeadings.organization.title}/><p className="section-intro dark-text">{pageHeadings.organization.intro}</p><Reveal><ContentCalendar/></Reveal></div></section>

    <section className="impact section-red"><div className="container"><SectionHeader eyebrow={pageHeadings.impact.eyebrow} title={pageHeadings.impact.title} light/><p className="section-intro">{pageHeadings.impact.intro}</p><div className="impact-stats">{impact.stats.map((stat)=><StatCard key={stat.label} {...stat}/>)}</div><ImpactChart/><div className="impact-foot"><span>{impact.footerLeft}</span><span>{impact.footerRight}</span></div></div></section>

    <section className="endorsements section-cream"><div className="container"><SectionHeader eyebrow={pageHeadings.testimonials.eyebrow} title={pageHeadings.testimonials.title} center/><div className="testimonials-grid">{testimonials.map((item,i)=><Reveal key={item.name} delay={i*.1}><TestimonialCard {...item}/></Reveal>)}</div></div></section>

    <section className="investment section-light"><div className="container"><SectionHeader eyebrow={pageHeadings.pricing.eyebrow} title={pageHeadings.pricing.title}/><p className="section-intro dark-text">{pageHeadings.pricing.intro}</p><div className="pricing-grid">{packages.map((item,i)=><Reveal key={item.name} delay={i*.08}><PricingCard {...item}/></Reveal>)}</div></div></section>

    <section id="contact" className="contact section-red"><ArrowDown className="contact-arrow"/><div className="container"><p className="micro">{profile.contact.eyebrow}</p><Reveal><h2>{profile.contact.title}</h2></Reveal><div className="contact-bottom"><div><h3>{profile.contact.heading}</h3><a href={`mailto:${profile.email}`}><Mail/>{profile.email}</a><a href="#"><Instagram/>{profile.instagram}</a><a href="#"><Linkedin/>{profile.linkedin}</a></div><a className="download-button" href={`mailto:${profile.email}?subject=Portfolio%20PDF`}><Download/>{profile.contact.downloadLabel}</a></div><footer>{profile.contact.footer} <span>{profile.contact.footerServices}</span></footer></div>
    </section>
  </main>;
}
