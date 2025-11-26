import { d as s, w as g } from './ZIxVAD3j.js';
const t = g({ targetLanguage: 'fr', targetLevel: 'a1' }),
  n = s(t, (e) => ({
    language: e.targetLanguage.toUpperCase(),
    level: e.targetLevel.toUpperCase(),
    description: `Learning ${e.targetLanguage} at ${e.targetLevel.toUpperCase()} level`,
  })),
  l = (e) => {
    t.update((a) => ({ ...a, targetLanguage: e }));
  },
  o = (e) => {
    t.update((a) => ({ ...a, targetLevel: e }));
  },
  u = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh'],
  p = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'],
  i = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    pt: 'Portuguese',
    ru: 'Russian',
    zh: 'Chinese',
  };
export { p as a, t as b, o as c, i as d, n as e, u as l, l as s };
