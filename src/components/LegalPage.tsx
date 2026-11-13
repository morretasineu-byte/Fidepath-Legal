import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LEGAL_CONTENT } from '../content/legal';
import { SITE_COPY } from '../content/site';
import { Lang, LegalPageKey } from '../types/i18n';
import { HOME_ROUTES } from '../utils/routes';
import { LegalRichText } from './LegalRichText';

interface LegalPageProps {
  lang: Lang;
  pageKey: LegalPageKey;
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ lang, pageKey, onNavigate }) => {
  const doc = LEGAL_CONTENT[lang].pages[pageKey];
  const site = SITE_COPY[lang];
  const homePath = HOME_ROUTES[lang];

  return (
    <main className="bg-white py-14 sm:py-20">
      <article className="mx-auto max-w-[72ch] px-6">
        <div className="mb-8">
          <a
            href={homePath}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate(homePath);
              }
            }}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{site.legalUi.backToHome}</span>
          </a>
        </div>

        <header className="border-b border-zinc-200 pb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-balance">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm italic text-zinc-600">
            <LegalRichText text={doc.lastUpdated} onNavigate={onNavigate} />
          </p>
          {doc.intro && (
            <p className="mt-5 text-base leading-relaxed text-zinc-700">
              <LegalRichText text={doc.intro} onNavigate={onNavigate} />
            </p>
          )}
        </header>

        {doc.tocTitle && (
          <nav
            aria-label={doc.tocTitle}
            className="mt-8 border border-zinc-200 bg-zinc-50 p-5 sm:p-6"
          >
            <h2 className="text-sm font-semibold tracking-tight text-zinc-900 mb-3">
              {doc.tocTitle}
            </h2>
            <ol className="space-y-1.5 text-sm text-zinc-700">
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="hover:text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-800 transition-colors"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mt-10 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950 mb-4">
                {section.heading}
              </h2>

              <div className="space-y-4 text-[15px] sm:text-base leading-7 text-zinc-700">
                {section.blocks.map((block, bIdx) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={bIdx}>
                        <LegalRichText text={block.text} onNavigate={onNavigate} />
                      </p>
                    );
                  }

                  if (block.type === 'list') {
                    return (
                      <ul key={bIdx} className="list-disc pl-6 space-y-2">
                        {block.items.map((item, iIdx) => (
                          <li key={iIdx}>
                            <LegalRichText text={item} onNavigate={onNavigate} />
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === 'table') {
                    return (
                      <div
                        key={bIdx}
                        className="my-5 overflow-x-auto border border-zinc-200 bg-white"
                      >
                        <table className="w-full min-w-[520px] border-collapse text-left text-sm leading-relaxed">
                          {block.table.headers && (
                            <thead className="bg-zinc-100 border-b border-zinc-200">
                              <tr>
                                {block.table.headers.map((header, hIdx) => (
                                  <th
                                    key={hIdx}
                                    scope="col"
                                    className="px-4 py-3 font-semibold text-zinc-900"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                          )}
                          <tbody>
                            {block.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="border-t border-zinc-200 first:border-t-0"
                              >
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-3 align-top text-zinc-700">
                                    <LegalRichText text={cell} onNavigate={onNavigate} />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};
