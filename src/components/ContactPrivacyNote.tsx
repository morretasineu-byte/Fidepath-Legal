import React from 'react';
import { LEGAL_CONTENT } from '../content/legal';
import { Lang } from '../types/i18n';
import { LegalRichText } from './LegalRichText';

interface ContactPrivacyNoteProps {
  lang: Lang;
  onNavigate: (path: string) => void;
}

export const ContactPrivacyNote: React.FC<ContactPrivacyNoteProps> = ({ lang, onNavigate }) => {
  const { firstLayer } = LEGAL_CONTENT[lang];

  return (
    <div className="mt-10 border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8">
      <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-4">
        {firstLayer.title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm leading-relaxed text-zinc-700">
          <tbody>
            {firstLayer.rows.map((row, idx) => (
              <tr key={idx} className="border-t border-zinc-200 last:border-b">
                <th
                  scope="row"
                  className="py-3 pr-4 align-top font-semibold text-zinc-900 w-36 sm:w-44 whitespace-nowrap sm:whitespace-normal"
                >
                  {row.label}
                </th>
                <td className="py-3 align-top text-zinc-700">
                  <LegalRichText text={row.value} onNavigate={onNavigate} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
