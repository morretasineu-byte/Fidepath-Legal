import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_COPY } from '../content/site';
import { Lang, RouteInfo } from '../types/i18n';
import { getEquivalentRoute, HOME_ROUTES } from '../utils/routes';

interface HeaderProps {
  route: RouteInfo;
  onNavigate: (path: string) => void;
}

const LANGUAGES: Array<{ code: Lang; label: string; name: string }> = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ca', label: 'CA', name: 'Català' },
  { code: 'es', label: 'ES', name: 'Español' },
];

export const Header: React.FC<HeaderProps> = ({ route, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = route;
  const site = SITE_COPY[lang];
  const homePath = HOME_ROUTES[lang];

  const navItems = [
    { id: 'services', label: site.nav.services },
    { id: 'methodology', label: site.nav.methodology },
    { id: 'practice', label: site.nav.practice },
    { id: 'contact', label: site.nav.contact },
  ];

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      setMobileOpen(false);
      onNavigate(`${homePath}#${sectionId}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      setMobileOpen(false);
      onNavigate(homePath);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <a
          href={homePath}
          onClick={handleHomeClick}
          className="text-lg font-semibold tracking-tight text-zinc-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
        >
          FidePath
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`${homePath}#${item.id}`}
              onClick={(e) => handleSectionClick(e, item.id)}
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center border border-zinc-200 bg-zinc-50 p-0.5"
          >
            {LANGUAGES.map((item) => {
              const targetHref = getEquivalentRoute(route, item.code);
              const isActive = lang === item.code;
              return (
                <a
                  key={item.code}
                  href={targetHref}
                  hrefLang={item.code}
                  aria-label={item.name}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      setMobileOpen(false);
                      onNavigate(targetHref);
                    }
                  }}
                  className={`px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-zinc-950 text-white'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-800 hover:bg-zinc-100 transition-colors"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-zinc-200 bg-white px-6 py-4"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`${homePath}#${item.id}`}
                onClick={(e) => handleSectionClick(e, item.id)}
                className="py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
