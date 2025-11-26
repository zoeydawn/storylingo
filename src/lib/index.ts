// place files you want to import through the `$lib` alias in this folder.

export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'zh'
export type LanguageLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2'
export const languages: Language[] = [
  'en',
  'es',
  'fr',
  'de',
  'it',
  'pt',
  'ru',
  'zh',
]
export const levels: LanguageLevel[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']

// this is only for commicating with the LLM, not for display.
// That's why it's hardcoded in English (we always speak to the LLM in English).
export type LanguageString =
  | 'English'
  | 'Spanish'
  | 'French'
  | 'German'
  | 'Italian'
  | 'Portuguese'
  | 'Russian'
  | 'Chinese'

export const languagesByCode: Record<Language, LanguageString> = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  pt: 'Portuguese',
  ru: 'Russian',
  zh: 'Chinese',
}
