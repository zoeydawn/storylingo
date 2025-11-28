import { supabase } from '$lib/supabaseClient'
import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

export const handle: Handle = async ({ event, resolve }) => {
  // supabset auth
  event.locals.supabase = supabase
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  // i18n language setting
  const lang = event.request.headers.get('accept-language')?.split(',')[0]
  console.log('lang in hooks:', lang)
  if (lang) {
    locale.set(lang)
  }

  return resolve(event)
}
