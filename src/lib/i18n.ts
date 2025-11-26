// src/lib/i18n.ts
import { addMessages, init, locale } from 'svelte-i18n'

import en from '../locales/en.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'

addMessages('en', en)
addMessages('es', es)
addMessages('fr', fr)

init({
  fallbackLocale: 'en',
  initialLocale: 'en',
})

export { locale }
