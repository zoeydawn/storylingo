<script lang="ts">
  import { languages, levels, type Language, type LanguageLevel } from '$lib'
  import { _ } from 'svelte-i18n'
  import { setTargetLanguage, languageSettings, setTargetLevel } from '$lib/stores'

  function handleLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement
    setTargetLanguage(target.value as Language)
  }

  function handleLevelChange(event: Event) {
    const target = event.target as HTMLSelectElement
    setTargetLevel(target.value as LanguageLevel)
  }
</script>

<div class="mb-3.5 flex">
  <select
    class="select w-36 cursor-pointer"
    value={$languageSettings.targetLanguage}
    on:change={handleLanguageChange}
  >
    {#each languages as lang (lang)}
      <option value={lang}>
        {$_(`language.${lang}`)}
      </option>
    {/each}
  </select>

  <select
    class="select ml-4 w-36 cursor-pointer"
    value={$languageSettings.targetLevel}
    on:change={handleLevelChange}
  >
    {#each levels as level (level)}
      <option value={level}>
        {$_(`level.label${level}`)}
      </option>
    {/each}
  </select>
</div>
