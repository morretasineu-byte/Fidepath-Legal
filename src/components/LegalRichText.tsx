import React from 'react';

interface LegalRichTextProps {
  text: string;
  onNavigate: (path: string) => void;
}

type Segment =
  | { type: 'text'; content: string }
  | { type: 'mark'; content: string }
  | { type: 'link'; label: string; href: string };

function parseLegalText(input: string): Segment[] {
  const segments: Segment[] = [];
  let i = 0;
  let buffer = '';

  const flushBuffer = () => {
    if (buffer.length > 0) {
      segments.push({ type: 'text', content: buffer });
      buffer = '';
    }
  };

  while (i < input.length) {
    if (input[i] === '[') {
      // Find matching closing bracket, supporting nested brackets
      let depth = 0;
      let j = i;
      while (j < input.length) {
        if (input[j] === '[') depth++;
        else if (input[j] === ']') {
          depth--;
          if (depth === 0) break;
        }
        j++;
      }

      if (j < input.length && depth === 0) {
        const inner = input.slice(i + 1, j);
        // Check if this is a markdown link: [label](url)
        if (input[j + 1] === '(') {
          const closeParen = input.indexOf(')', j + 2);
          if (closeParen !== -1) {
            const href = input.slice(j + 2, closeParen);
            flushBuffer();
            segments.push({ type: 'link', label: inner, href });
            i = closeParen + 1;
            continue;
          }
        }

        // Check if this is a [COMPLETAR...] placeholder
        if (inner.startsWith('COMPLETAR')) {
          flushBuffer();
          segments.push({ type: 'mark', content: input.slice(i, j + 1) });
          i = j + 1;
          continue;
        }
      }
    }

    buffer += input[i];
    i++;
  }

  flushBuffer();
  return segments;
}

export const LegalRichText: React.FC<LegalRichTextProps> = ({ text, onNavigate }) => {
  const segments = parseLegalText(text);

  return (
    <>
      {segments.map((seg, idx) => {
        if (seg.type === 'mark') {
          return (
            <mark key={idx} className="bg-amber-100 text-zinc-900 px-1 py-0.5 rounded-xs">
              {seg.content}
            </mark>
          );
        }

        if (seg.type === 'link') {
          const isInternal = seg.href.startsWith('/');
          if (isInternal) {
            return (
              <a
                key={idx}
                href={seg.href}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate(seg.href);
                  }
                }}
                className="underline decoration-zinc-400 underline-offset-4 text-zinc-900 hover:decoration-zinc-900 transition-colors"
              >
                {seg.label}
              </a>
            );
          }

          return (
            <a
              key={idx}
              href={seg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-4 text-zinc-900 hover:decoration-zinc-900 transition-colors"
            >
              {seg.label}
            </a>
          );
        }

        return <React.Fragment key={idx}>{seg.content}</React.Fragment>;
      })}
    </>
  );
};
