<script lang="ts">
  import { copyToClipboard } from '$lib/utils'
  // import { Star, Copy, RefreshCcw } from '@lucide/svelte'
  import { Copy } from '@lucide/svelte'
  import Quiz from './Quiz.svelte'
  import { writable } from 'svelte/store'

  import type { Question } from '$lib'

  export let storyContent: string
  export let storyTitle: string
  export let storyQuestions: Question[]

  let copied = writable(false)

  const handleCopy = (e: Event, storyContent: string) => {
    e.preventDefault()
    copyToClipboard(storyContent)
    copied.set(true)
    setTimeout(() => copied.set(false), 1500)
  }
</script>

<div class="w-full p-4">
  <header class="mb-4">
    <div class="flex items-start justify-between">
      <h2 class="text-xl font-semibold">
        {storyTitle}
      </h2>
      <button
        class="btn btn-sm text-surface-500 hover:text-surface-700"
        on:click={(e) => handleCopy(e, storyContent)}
        title="Copy to clipboard"
        aria-label="Copy story to clipboard"
      >
        {#if $copied}
          Copied!
        {:else}
          <Copy size={16} /> Copy
        {/if}
      </button>
    </div>
    <div class="bg-primary-500 mt-2 h-1 w-12 rounded"></div>
  </header>
  <article class="space-y-4">
    {#each storyContent.split('\n') as paragraph, index (index)}
      <p>{paragraph}</p>
    {/each}
  </article>

  <!-- <footer class="flex items-center justify-between gap-4 p-4"> -->
  <!--   <button class="preset btn opacity-60" on:click={(e) => e.preventDefault()}> -->
  <!--     <Star /> -->
  <!--     <!-- <Star fill="currentColor" /> -->
  <!--   </button> -->
  <!---->
  <!--   <button class="preset btn opacity-60"> -->
  <!--     <RefreshCcw /> -->
  <!--   </button> -->
  <!-- </footer> -->

  <Quiz {storyQuestions} />
</div>

<style>
</style>
