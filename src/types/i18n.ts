export type Lang = 'en' | 'ca' | 'es';

export type LegalPageKey = 'legal-notice' | 'privacy-policy' | 'cookie-policy';

export interface RouteInfo {
  lang: Lang;
  page: 'home' | LegalPageKey;
}

export interface LegalTable {
  headers?: string[];
  rows: string[][];
}

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; table: LegalTable };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  key: LegalPageKey;
  route: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  tocTitle?: string;
  sections: LegalSection[];
}

export interface FirstLayerContent {
  title: string;
  rows: Array<{ label: string; value: string }>;
}

export interface LegalLanguageBundle {
  lang: Lang;
  firstLayer: FirstLayerContent;
  pages: Record<LegalPageKey, LegalDocument>;
}
