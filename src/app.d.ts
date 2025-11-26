// See https://svelte.dev/docs/kit/types#app.d.ts
import { Session } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient
      getSession: () => Promise<Session | null>
    }
    interface PageData {
      session: Session | null
    }
    // Other interfaces as needed...
  }
}

interface ImportMeta {
  env: {
    PUBLIC_SUPABASE_URL: string
    PUBLIC_SUPABASE_ANON_KEY: string
  }
}

export {}
