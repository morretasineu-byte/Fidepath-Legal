import { Lang, LegalPageKey, RouteInfo } from '../types/i18n';

export const LEGAL_ROUTES: Record<Lang, Record<LegalPageKey, string>> = {
  en: {
    'legal-notice': '/en/legal-notice',
    'privacy-policy': '/en/privacy-policy',
    'cookie-policy': '/en/cookie-policy',
  },
  ca: {
    'legal-notice': '/ca/avis-legal',
    'privacy-policy': '/ca/politica-de-privadesa',
    'cookie-policy': '/ca/politica-de-cookies',
  },
  es: {
    'legal-notice': '/es/aviso-legal',
    'privacy-policy': '/es/politica-de-privacidad',
    'cookie-policy': '/es/politica-de-cookies',
  },
};

export const HOME_ROUTES: Record<Lang, string> = {
  en: '/en',
  ca: '/ca',
  es: '/es',
};

const ROUTE_LOOKUP: Record<string, RouteInfo> = {
  '/': { lang: 'en', page: 'home' },
  '/en': { lang: 'en', page: 'home' },
  '/ca': { lang: 'ca', page: 'home' },
  '/es': { lang: 'es', page: 'home' },
  '/en/legal-notice': { lang: 'en', page: 'legal-notice' },
  '/en/privacy-policy': { lang: 'en', page: 'privacy-policy' },
  '/en/cookie-policy': { lang: 'en', page: 'cookie-policy' },
  '/ca/avis-legal': { lang: 'ca', page: 'legal-notice' },
  '/ca/politica-de-privadesa': { lang: 'ca', page: 'privacy-policy' },
  '/ca/politica-de-cookies': { lang: 'ca', page: 'cookie-policy' },
  '/es/aviso-legal': { lang: 'es', page: 'legal-notice' },
  '/es/politica-de-privacidad': { lang: 'es', page: 'privacy-policy' },
  '/es/politica-de-cookies': { lang: 'es', page: 'cookie-policy' },
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function resolveRoute(pathname: string): RouteInfo {
  const clean = normalizePathname(pathname);
  if (ROUTE_LOOKUP[clean]) {
    return ROUTE_LOOKUP[clean];
  }
  if (clean.startsWith('/ca')) return { lang: 'ca', page: 'home' };
  if (clean.startsWith('/es')) return { lang: 'es', page: 'home' };
  return { lang: 'en', page: 'home' };
}

export function getEquivalentRoute(current: RouteInfo, targetLang: Lang): string {
  if (current.page === 'home') {
    return HOME_ROUTES[targetLang];
  }
  return LEGAL_ROUTES[targetLang][current.page];
}
