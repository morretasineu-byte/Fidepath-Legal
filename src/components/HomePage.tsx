import React from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { SITE_COPY } from '../content/site';
import { Lang } from '../types/i18n';
import { HOME_ROUTES } from '../utils/routes';
import { ContactPrivacyNote } from './ContactPrivacyNote';

interface HomePageProps {
  lang: Lang;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate }) => {
  const site = SITE_COPY[lang];
  const homePath = HOME_ROUTES[lang];

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      onNavigate(`${homePath}#${sectionId}`);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium tracking-wide text-zinc-500 mb-5">
                  {site.hero.kicker}
                </p>
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-[1.1] text-balance max-w-2xl">
                  {site.hero.headline}
                </h1>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-600 max-w-[60ch]">
                  {site.hero.subheadline}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`${homePath}#contact`}
                  onClick={(e) => handleAnchor(e, 'contact')}
                  className="inline-flex items-center justify-center bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition-colors whitespace-nowrap shrink-0"
                >
                  {site.hero.primaryCta}
                </a>
                <a
                  href={`${homePath}#services`}
                  onClick={(e) => handleAnchor(e, 'services')}
                  className="inline-flex items-center justify-center border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:border-zinc-900 transition-colors whitespace-nowrap shrink-0"
                >
                  {site.hero.secondaryCta}
                </a>
              </div>

              <div className="mt-12 border-t border-zinc-200 pt-6">
                <p className="text-xs text-zinc-500">{site.hero.regionsLabel}</p>
                <p className="mt-1 text-sm font-medium text-zinc-900">{site.hero.regionsValue}</p>
              </div>
            </div>

            {/* Clean Technical Critical Path Diagram (SVG / HTML, zero external assets) */}
            <div className="lg:col-span-5 flex">
              <div className="w-full border border-zinc-200 bg-zinc-50 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                  <span className="text-xs font-semibold tracking-tight text-zinc-900">
                    {site.hero.diagramTitle}
                  </span>
                  <span className="text-xs font-mono tabular-nums text-zinc-500">
                    CPM · SCL / 29R-03
                  </span>
                </div>

                <div className="my-8 space-y-6">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-600 mb-2">
                      <span>{site.hero.diagramBaseline}</span>
                      <span className="font-mono tabular-nums text-zinc-500">W01 – W36</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 h-3">
                      <div className="col-span-3 bg-zinc-400" />
                      <div className="col-span-3 bg-zinc-600" />
                      <div className="col-span-3 bg-zinc-800" />
                      <div className="col-span-3 bg-zinc-200" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-600 mb-2">
                      <span>{site.hero.diagramCriticalEvent}</span>
                      <span className="font-mono tabular-nums text-zinc-900">+8W</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 h-3">
                      <div className="col-span-3 bg-zinc-100" />
                      <div className="col-span-3 bg-zinc-300" />
                      <div className="col-span-2 bg-zinc-950" />
                      <div className="col-span-4 bg-zinc-100" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-600 mb-2">
                      <span>{site.hero.diagramAsBuilt}</span>
                      <span className="font-mono tabular-nums text-zinc-500">W01 – W44</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 h-3">
                      <div className="col-span-3 bg-zinc-400" />
                      <div className="col-span-3 bg-zinc-600" />
                      <div className="col-span-2 bg-zinc-950" />
                      <div className="col-span-4 bg-zinc-700" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-200 pt-4 flex items-center justify-between">
                  <span className="text-xs text-zinc-600">{site.hero.diagramEntitlement}</span>
                  <span className="text-xs font-mono font-semibold tabular-nums text-zinc-950">
                    ΔT = +56d
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="services" className="scroll-mt-20 border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              {site.services.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              {site.services.intro}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-zinc-200 border border-zinc-200 md:grid-cols-2">
            {site.services.items.map((service) => (
              <div key={service.number} className="bg-white p-8 sm:p-10">
                <p className="text-xs font-mono tabular-nums text-zinc-500 mb-3">
                  {service.number}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytical Standards & Practice */}
      <section id="methodology" className="scroll-mt-20 border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                {site.methodology.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {site.methodology.intro}
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-zinc-200 border-t border-b border-zinc-200 bg-white">
              {site.methodology.standards.map((item, idx) => (
                <div key={idx} className="p-6 sm:p-8">
                  <h3 className="text-base font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal Practice */}
      <section id="practice" className="scroll-mt-20 border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                {site.practice.heading}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-b border-zinc-200 pb-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                  {site.practice.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-700">{site.practice.role}</p>
                <p className="mt-2 text-sm text-zinc-500">{site.practice.qualification}</p>
              </div>

              <p className="mt-6 text-base leading-relaxed text-zinc-600 max-w-[65ch]">
                {site.practice.summary}
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-zinc-200 pt-6">
                {site.practice.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs text-zinc-500">{fact.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-zinc-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section — NO form, direct links + ContactPrivacyNote */}
      <section id="contact" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
              {site.contact.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              {site.contact.intro}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a
                href="mailto:joan.perello@fidepath.com"
                className="group border border-zinc-200 bg-white p-5 hover:border-zinc-900 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>{site.contact.emailLabel}</span>
                  <Mail className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-zinc-950 break-all">
                  joan.perello@fidepath.com
                </span>
              </a>

              <a
                href="tel:+34615847893"
                className="group border border-zinc-200 bg-white p-5 hover:border-zinc-900 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>{site.contact.phoneLabel}</span>
                  <Phone className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium tabular-nums text-zinc-950">
                  +34 615 847 893
                </span>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-zinc-200 bg-white p-5 hover:border-zinc-900 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>{site.contact.linkedinLabel}</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-zinc-950">
                  {site.contact.linkedinAction}
                </span>
              </a>
            </div>

            <div className="mt-4 text-xs text-zinc-500">
              <span>{site.contact.addressLabel}: </span>
              <span className="text-zinc-700">{site.contact.addressValue}</span>
            </div>

            {/* First-layer basic data protection information directly under contact links */}
            <ContactPrivacyNote lang={lang} onNavigate={onNavigate} />
          </div>
        </div>
      </section>
    </main>
  );
};
