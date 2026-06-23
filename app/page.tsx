import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness as Linkedin,
  CalendarCheck,
  Camera,
  Camera as Instagram,
  Download,
  FileText,
  Mail,
  Megaphone,
  PenTool,
  Play,
  Rocket,
  Send,
  Shapes,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import MockupPhone from "@/components/MockupPhone";
import ContentCalendar from "@/components/ContentCalendar";
import ImpactChart from "@/components/ImpactChart";
import BackToTopButton from "@/components/BackToTopButton";
import { ProgressBar, Reveal, RevealFooter, RevealHeader } from "@/components/Motion";
import { packages, services, skills, testimonials, tools } from "@/lib/data";
import { pageHeadings } from "@/content/main-page/page-headings";
import { profile } from "@/content/main-page/profile";
import { processSteps } from "@/content/main-page/methodology";
import { creativeDirection } from "@/content/main-page/creative-direction";
import { caseStudies } from "@/content/case-studies/case-studies";
import { creativeOutput } from "@/content/main-page/creative-output";
import { impact } from "@/content/main-page/impact";
import { mainPageInterface as interfaceCopy } from "@/content/main-page/interface";

const process = processSteps.map((step, index) => ({
  ...step,
  icon: [BarChart3, CalendarCheck, PenTool, Rocket][index],
}));

export default function Home() {
  return (
    <main>
      <section className="hero section-dark">
        <div className="hero-glow" />
        <RevealHeader className="hero-top">
          <span className="hero-wordmark">Bel</span>
          <nav aria-label={interfaceCopy.socialNavLabel}>
            <a href={profile.instagramUrl} aria-label={interfaceCopy.socialLabels.instagram}>
              {interfaceCopy.socialLabels.instagram}
            </a>
            <a href={profile.linkedinUrl} aria-label={interfaceCopy.socialLabels.linkedin}>
              {interfaceCopy.socialLabels.linkedin}
            </a>
            <a href={`mailto:${profile.email}`} aria-label={interfaceCopy.socialLabels.email}>
              {interfaceCopy.socialLabels.email}
            </a>
          </nav>
        </RevealHeader>
        <div className="hero-grid hero-grid-no-phone">
          <Reveal className="hero-copy" variant="soft">
            <h1>
              {profile.hero.titleTop}
              <br />
              <em>{profile.hero.titleScript}</em>
              <br />
              {profile.hero.titleBottom}
              <br />
              {profile.hero.titleLast}
            </h1>
          </Reveal>
        </div>
        <Reveal className="hero-bottom" delay={0.12}>
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.hero.role}</p>
          </div>
          <p>{profile.hero.specialties}</p>
        </Reveal>
      </section>

      <section className="about section-cream">
        <div className="container about-grid">
          <Reveal className="portrait-wrap" variant="left">
            <div className="portrait visual-placeholder">
              <span>{profile.about.portraitPlaceholder}</span>
            </div>
            <div className="name-card">
              <b>{profile.name}</b>
              <span>{profile.about.role}</span>
            </div>
          </Reveal>
          <Reveal className="about-copy" variant="right" delay={0.08}>
            <span className="quote-mark">“</span>
            <h2>{profile.about.headline}</h2>
            <p>{profile.about.paragraph}</p>
            <div className="facts">
              {profile.about.facts.map(([a, b]) => (
                <div key={a}>
                  <small>{a}</small>
                  <strong>{b}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="services section-light">
        <div className="container">
          <SectionHeader {...pageHeadings.services} />
          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06} variant="scale">
                <ServiceCard {...service} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="arsenal section-dark">
        <div className="container">
          <SectionHeader
            eyebrow={pageHeadings.skills.eyebrow}
            title={pageHeadings.skills.title}
            light
          />
          <p className="section-intro">{pageHeadings.skills.intro}</p>
          <div className="arsenal-grid">
            <Reveal className="skill-list" variant="left">
              {skills.map(([name, value]) => (
                <div className="skill" key={name}>
                  <p>
                    <span>{name}</span>
                    <b>{value}%</b>
                  </p>
                  <ProgressBar value={value} />
                </div>
              ))}
            </Reveal>
            <Reveal className="tools-grid" delay={0.15} variant="right">
              {tools.map((tool, i) => {
                const Icon = [
                  Megaphone,
                  Instagram,
                  Play,
                  Shapes,
                  Camera,
                  Send,
                  BarChart3,
                  FileText,
                ][i];
                return (
                  <div className="tool-card hover-lift" key={tool}>
                    <Icon size={23} />
                    <span>{tool}</span>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="moodboard section-cream">
        <div className="diagonal-pattern" />
        <div className="container">
          <SectionHeader {...pageHeadings.creativeDirection} />
          <div className="mood-grid">
            <Reveal className="type-card hover-lift" variant="left">
              <small>{creativeDirection.typographyLabel}</small>
              <h3>{creativeDirection.displayFont}</h3>
              <p>{creativeDirection.displayDescription}</p>
              <h4>{creativeDirection.bodyFont}</h4>
              <p>{creativeDirection.bodyDescription}</p>
            </Reveal>
            <Reveal className="collage" delay={0.1} variant="right">
              <div className="photo photo-a visual-placeholder">
                <Image
                  src={creativeDirection.images.first.src}
                  alt={creativeDirection.images.first.alt}
                  fill
                  sizes="20vw"
                />
                <span>{creativeDirection.collageLabels[0]}</span>
              </div>
              <div className="photo photo-b visual-placeholder">
                <Image
                  src={creativeDirection.images.second.src}
                  alt={creativeDirection.images.second.alt}
                  fill
                  sizes="23vw"
                />
                <span>{creativeDirection.aestheticLabel}</span>
              </div>
              <div className="photo photo-c visual-placeholder">
                <Image
                  src={creativeDirection.images.third.src}
                  alt={creativeDirection.images.third.alt}
                  fill
                  sizes="19vw"
                />
                <span>{creativeDirection.collageLabels[1]}</span>
              </div>
            </Reveal>
            <Reveal className="palette" variant="soft">
              <small>{creativeDirection.paletteLabel}</small>
              <div>
                <i />
                <i />
                <i />
                <i />
              </div>
              <p>{creativeDirection.palette}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="process-section section-light">
        <div className="container">
          <SectionHeader {...pageHeadings.process} />
          <div className="timeline">
            {process.map((step, i) => (
              <Reveal className="process-step" key={step.title} delay={i * 0.05} variant={i % 2 === 0 ? "left" : "right"}>
                <div className="step-number">{i + 1}</div>
                <article className="hover-lift">
                  <step.icon />
                  <div>
                    <small>
                      {interfaceCopy.processStepPrefix} 0{i + 1}
                    </small>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="case-fashion section-dark">
        <div className="fashion-backdrop visual-placeholder" />
        <div className="container case-grid">
          <Reveal className="case-copy" variant="left">
            <p className="micro red">{caseStudies.lifestyle.label}</p>
            <h2>{caseStudies.lifestyle.title}</h2>
            <div className="case-detail">
              <div>
                <small>{caseStudies.lifestyle.objectiveLabel}</small>
                <p>{caseStudies.lifestyle.objective}</p>
              </div>
              <div>
                <small>{caseStudies.lifestyle.platformsLabel}</small>
                <p className="icon-line">
                  <Instagram /> {caseStudies.lifestyle.platforms[0]} <Play />{" "}
                  {caseStudies.lifestyle.platforms[1]}
                </p>
              </div>
            </div>
            <div className="case-stats">
              {caseStudies.lifestyle.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <Link className="case-study-link" href="/case-studies/lifestyle">
              {interfaceCopy.viewCaseStudyLabel} <ArrowUpRight />
            </Link>
          </Reveal>
          <Reveal className="case-phone" delay={0.15} variant="right">
            <MockupPhone variant="feed" />
            <div className="post-card">
              <div className="visual-placeholder">
                <Image
                  src={caseStudies.lifestyle.previewImage.src}
                  alt={caseStudies.lifestyle.previewImage.alt}
                  fill
                  sizes="210px"
                />
              </div>
              <p>
                <Instagram /> <b>{caseStudies.lifestyle.account}</b>
              </p>
              <span>{caseStudies.lifestyle.postLabel}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-food section-cream">
        <div className="container">
          <div className="case-heading">
            <SectionHeader {...pageHeadings.caseStudyTwo} />
            <p>{caseStudies.cafe.intro}</p>
          </div>
          <div className="food-grid">
            <Reveal className="food-copy" variant="left">
              <article>
                <small>{caseStudies.cafe.challengeLabel}</small>
                <h3>{caseStudies.cafe.challenge}</h3>
              </article>
              <article>
                <small>{caseStudies.cafe.editLabel}</small>
                <p>{caseStudies.cafe.edit}</p>
              </article>
              <blockquote>“{caseStudies.cafe.quote}”</blockquote>
              <Link
                className="case-study-link dark-link"
                href="/case-studies/cafe"
              >
                {interfaceCopy.viewCaseStudyLabel} <ArrowUpRight />
              </Link>
            </Reveal>
            <Reveal className="food-visuals" delay={0.12} variant="right">
              <div className="food-photo visual-placeholder">
                <Image
                  src={caseStudies.cafe.primaryImage.src}
                  alt={caseStudies.cafe.primaryImage.alt}
                  fill
                  sizes="30vw"
                />
                <span>{caseStudies.cafe.imageLabel}</span>
              </div>
              <div className="food-photo visual-placeholder">
                <Image
                  src={caseStudies.cafe.secondaryImage.src}
                  alt={caseStudies.cafe.secondaryImage.alt}
                  fill
                  sizes="30vw"
                />
                <Play fill="currentColor" />
              </div>
              <div className="food-stat">
                <strong>{caseStudies.cafe.stat}</strong>
                <span>{caseStudies.cafe.statLabel}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="case-beauty section-light">
        <div className="container">
          <SectionHeader
            eyebrow={pageHeadings.caseStudyThree.eyebrow}
            title={pageHeadings.caseStudyThree.title}
            center
          />
          <div className="beauty-grid">
            <Reveal className="before-after" variant="left">
              <div>
                <small>{caseStudies.beauty.rawLabel}</small>
                <div className="beauty-before visual-placeholder">
                  <Image
                    src={caseStudies.beauty.rawImage.src}
                    alt={caseStudies.beauty.rawImage.alt}
                    fill
                    sizes="27vw"
                  />
                  <span>{caseStudies.beauty.rawPlaceholder}</span>
                </div>
              </div>
              <div>
                <small>{caseStudies.beauty.finalLabel}</small>
                <div className="beauty-after visual-placeholder">
                  <Image
                    src={caseStudies.beauty.finalImage.src}
                    alt={caseStudies.beauty.finalImage.alt}
                    fill
                    sizes="27vw"
                  />
                  <span>{caseStudies.beauty.finalPlaceholder}</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="beauty-copy" delay={0.12} variant="right">
              <p className="micro red">{caseStudies.beauty.label}</p>
              <h3>{caseStudies.beauty.title}</h3>
              <p>{caseStudies.beauty.description}</p>
              <div>
                <small>{caseStudies.beauty.editingLabel}</small>
                <p>{caseStudies.beauty.editing}</p>
              </div>
              <div>
                <small>{caseStudies.beauty.instagramLabel}</small>
                <p>{caseStudies.beauty.instagram}</p>
              </div>
              <Link
                className="case-study-link dark-link"
                href="/case-studies/beauty"
              >
                {interfaceCopy.viewCaseStudyLabel} <ArrowUpRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="arsenal-content section-cream">
        <div className="container">
          <SectionHeader
            eyebrow={pageHeadings.creativeOutput.eyebrow}
            title={pageHeadings.creativeOutput.title}
          />
          <p className="section-intro dark-text">
            {pageHeadings.creativeOutput.intro}
          </p>
          <div className="content-grid">
            <Reveal className="content-feature visual-placeholder" variant="scale">
              <Image
                src={creativeOutput.featureImage.src}
                alt={creativeOutput.featureImage.alt}
                fill
                sizes="40vw"
              />
              <span>{creativeOutput.feature}</span>
              <ArrowUpRight />
            </Reveal>
            <Reveal className="content-video visual-placeholder" delay={0.06} variant="right">
              <Image
                src={creativeOutput.videoImage.src}
                alt={creativeOutput.videoImage.alt}
                fill
                sizes="25vw"
              />
              <button aria-label={interfaceCopy.playVideoLabel}>
                <Play fill="currentColor" />
              </button>
              <span>{creativeOutput.video}</span>
            </Reveal>
            <Reveal className="content-quote" delay={0.12} variant="soft">
              <small>{creativeOutput.audioLabel}</small>
              <blockquote>“{creativeOutput.quote}”</blockquote>
            </Reveal>
            <Reveal className="content-small visual-placeholder" delay={0.18} variant="scale">
              <Image
                src={creativeOutput.detailImage.src}
                alt={creativeOutput.detailImage.alt}
                fill
                sizes="25vw"
              />
              <Camera />
              <span>{creativeOutput.detail}</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="calendar-section section-light">
        <div className="container">
          <SectionHeader
            eyebrow={pageHeadings.organization.eyebrow}
            title={pageHeadings.organization.title}
          />
          <p className="section-intro dark-text">
            {pageHeadings.organization.intro}
          </p>
          <Reveal variant="scale">
            <ContentCalendar />
          </Reveal>
        </div>
      </section>

      <section className="impact section-red">
        <div className="container">
          <SectionHeader
            eyebrow={pageHeadings.impact.eyebrow}
            title={pageHeadings.impact.title}
            light
          />
          <p className="section-intro">{pageHeadings.impact.intro}</p>
          <div className="impact-stats">
            {impact.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} variant="scale">
                <StatCard {...stat} />
              </Reveal>
            ))}
          </div>
          <ImpactChart />
          <div className="impact-foot">
            <span>{impact.footerLeft}</span>
            <span>{impact.footerRight}</span>
          </div>
        </div>
      </section>

      <section className="endorsements section-cream">
        <div className="container">
          <SectionHeader
            eyebrow={pageHeadings.testimonials.eyebrow}
            title={pageHeadings.testimonials.title}
            center
          />
          <div className="testimonials-grid">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.1} variant="scale">
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="investment section-light">
        <div className="container">
          <SectionHeader
            eyebrow={pageHeadings.pricing.eyebrow}
            title={pageHeadings.pricing.title}
          />
          <p className="section-intro dark-text">
            {pageHeadings.pricing.intro}
          </p>
          <div className="pricing-grid">
            {packages.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08} variant="scale">
                <PricingCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-red">
        <ArrowDown className="contact-arrow" />
        <div className="container">
          <p className="micro">{profile.contact.eyebrow}</p>
          <Reveal variant="soft">
            <h2>{profile.contact.title}</h2>
          </Reveal>
          <Reveal className="contact-bottom" delay={0.08} variant="left">
            <div>
              <h3>{profile.contact.heading}</h3>
              <a href={`mailto:${profile.email}`}>
                <Mail />
                {profile.email}
              </a>
              <a href={profile.instagramUrl}>
                <Instagram />
                {profile.instagram}
              </a>
              <a href={profile.linkedinUrl}>
                <Linkedin />
                {profile.linkedin}
              </a>
            </div>
            <div className="contact-actions">
              <a
                className="download-button"
                href={`mailto:${profile.email}?subject=${encodeURIComponent(profile.contact.portfolioEmailSubject)}`}
              >
                <Download />
                {profile.contact.downloadLabel}
              </a>
              <BackToTopButton />
            </div>
          </Reveal>
          <RevealFooter delay={0.16}>
            {profile.contact.footer}{" "}
            <span>{profile.contact.footerServices}</span>
          </RevealFooter>
        </div>
      </section>
    </main>
  );
}
