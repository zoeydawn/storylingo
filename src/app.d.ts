// See https://svelte.dev/docs/kit/types#app.d.ts
import { Session } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient
      getSession: () => Promise<Session | null>
      lang: string
    }
    interface PageData {
      session: Session | null
      lang: string
    }
    // Other interfaces as needed...
  }
}

declare global {
  // Augment the ImportMeta interface for Vite environment variables
  interface ImportMeta {
    env: {
      PUBLIC_SUPABASE_URL: string
      PUBLIC_SUPABASE_ANON_KEY: string
    }
  }
}

export {}
