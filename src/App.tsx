import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { LegalPage } from './components/LegalPage';
import { ANALYTICS_ENABLED } from './config/privacy';
import { LEGAL_CONTENT } from './content/legal';
import { RouteInfo } from './types/i18n';
import { resolveRoute } from './utils/routes';

function getCurrentFullPath(): string {
  return `${window.location.pathname}${window.location.hash}`;
}

export default function App() {
  const [fullPath, setFullPath] = useState<string>(() => getCurrentFullPath());

  const [pathname, hash] = fullPath.split('#');
  const route: RouteInfo = resolveRoute(pathname || '/');

  const navigate = useCallback((target: string) => {
    const [nextPath, nextHash] = target.split('#');
    const currentPath = window.location.pathname;
    const normalizedNext = nextPath || '/';

    if (currentPath !== normalizedNext || window.location.hash !== (nextHash ? `#${nextHash}` : '')) {
      window.history.pushState({}, '', nextHash ? `${normalizedNext}#${nextHash}` : normalizedNext);
    }

    setFullPath(nextHash ? `${normalizedNext}#${nextHash}` : normalizedNext);

    if (nextHash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(nextHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setFullPath(getCurrentFullPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Sync <html lang> and <title> with active route and language
    document.documentElement.lang = route.lang;
    if (route.page === 'home') {
      document.title = 'FidePath Expert Services — Forensic Planning & Delay Analysis';
    } else {
      const doc = LEGAL_CONTENT[route.lang].pages[route.page];
      document.title = `${doc.title} — FidePath Expert Services`;
    }
  }, [route.lang, route.page]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [hash]);

  // Analytics remain disabled by default; see src/config/privacy.ts
  void ANALYTICS_ENABLED;

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <Header route={route} onNavigate={navigate} />
      <div className="flex-1">
        {route.page === 'home' ? (
          <HomePage lang={route.lang} onNavigate={navigate} />
        ) : (
          <LegalPage lang={route.lang} pageKey={route.page} onNavigate={navigate} />
        )}
      </div>
      <Footer lang={route.lang} onNavigate={navigate} />
    </div>
  );
}
