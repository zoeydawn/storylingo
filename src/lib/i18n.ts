// src/lib/i18n.ts
import { addMessages, init, locale } from 'svelte-i18n'
import { browser } from '$app/environment'
import { page } from '$app/stores'

import en from '../locales/en.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'

addMessages('en', en)
addMessages('en-US', en)
addMessages('es', es)
addMessages('fr', fr)

// Use page store only in browser
if (browser) {
  page.subscribe((value) => {
    if (value.data.lang) {
      locale.set(value.data.lang)
    }
  })
}

init({
  fallbackLocale: 'fr',
  initialLocale: browser ? undefined : 'fr', // Set by server for SSR
})

export { locale }
