import React from 'react';
import { SITE_COPY } from '../content/site';
import { Lang } from '../types/i18n';
import { HOME_ROUTES, LEGAL_ROUTES } from '../utils/routes';

interface FooterProps {
  lang: Lang;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const site = SITE_COPY[lang];
  const legalRoutes = LEGAL_ROUTES[lang];
  const homePath = HOME_ROUTES[lang];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-zinc-700">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-2">
            <a
              href={homePath}
              onClick={(e) => handleLinkClick(e, homePath)}
              className="text-base font-semibold tracking-tight text-zinc-950 inline-block"
            >
              {site.footer.copyright}
            </a>
            <p className="text-sm text-zinc-600">{site.footer.tagline}</p>
            <p className="text-xs text-zinc-500">{site.contact.addressValue}</p>
          </div>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href={legalRoutes['legal-notice']}
              onClick={(e) => handleLinkClick(e, legalRoutes['legal-notice'])}
              className="text-zinc-600 hover:text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors whitespace-nowrap"
            >
              {site.footer.legalLinks.legalNotice}
            </a>
            <a
              href={legalRoutes['privacy-policy']}
              onClick={(e) => handleLinkClick(e, legalRoutes['privacy-policy'])}
              className="text-zinc-600 hover:text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors whitespace-nowrap"
            >
              {site.footer.legalLinks.privacyPolicy}
            </a>
            <a
              href={legalRoutes['cookie-policy']}
              onClick={(e) => handleLinkClick(e, legalRoutes['cookie-policy'])}
              className="text-zinc-600 hover:text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors whitespace-nowrap"
            >
              {site.footer.legalLinks.cookiePolicy}
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-zinc-500">
          <span>© 2026 {site.footer.copyright}</span>
          <span>joan.perello@fidepath.com</span>
        </div>
      </div>
    </footer>
  );
};
