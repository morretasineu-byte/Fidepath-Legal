import { Lang, LegalLanguageBundle } from '../types/i18n';
import { legalCa } from './legal.ca';
import { legalEn } from './legal.en';
import { legalEs } from './legal.es';

export const LEGAL_CONTENT: Record<Lang, LegalLanguageBundle> = {
  en: legalEn,
  ca: legalCa,
  es: legalEs,
};
