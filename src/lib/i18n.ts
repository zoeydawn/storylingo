// src/lib/i18n.ts
import { addMessages, init, locale } from 'svelte-i18n'
import { browser } from '$app/environment'

import en from '../locales/en.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'

addMessages('en', en)
addMessages('en-US', en)
addMessages('es', es)
addMessages('fr', fr)

init({
  fallbackLocale: 'fr',
  initialLocale: browser ? 
    (typeof window !== 'undefined' ? window.lang || localStorage.getItem('lang') : undefined) 
    : 'fr',
})

export { locale }
