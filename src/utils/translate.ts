import { Language, translations } from '../data/translations';

export const translate = (lang: Language, key: string) => {
  return translations[lang][key];
};
