import { supabase } from '$lib/supabaseClient'
import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

const supportedLanguages = ['en', 'es', 'fr']

export const handle: Handle = async ({ event, resolve }) => {
  // supabset auth
  event.locals.supabase = supabase
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  // Detect language from browser
  let lang = event.request.headers.get('accept-language')?.split(',')[0] || 'fr'

  // Validate and set language
  if (!supportedLanguages.includes(lang)) lang = 'fr'
  event.locals.lang = lang
  locale.set(lang) // Set for server-side rendering

  return resolve(event)
}
