<script lang="ts">
  import { locale } from 'svelte-i18n'
  import { Languages } from '@lucide/svelte'
  import { defaultLanguage } from '$lib'

  let currentLang = $locale || defaultLanguage
  const languages: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
  }

  function changeLanguage(lang: string): void {
    locale.set(lang)
    localStorage.setItem('lang', lang)
    currentLang = lang
  }
</script>

<div class="flex">
  <Languages />
  <select
    class="select ml-1 cursor-pointer"
    bind:value={currentLang}
    on:change={() => changeLanguage(currentLang)}
  >
    {#each Object.keys(languages) as lang (lang)}
      <option value={lang} selected={lang === currentLang}>
        {languages[lang]}
      </option>
    {/each}
  </select>
</div>

<style>
</style>
