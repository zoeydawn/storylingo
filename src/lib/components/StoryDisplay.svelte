<script lang="ts">
  import { copyToClipboard } from '$lib/utils'
  // import { Star, Copy, RefreshCcw } from '@lucide/svelte'
  import { Copy } from '@lucide/svelte'
  import { writable } from 'svelte/store'

  interface Question {
    question: string
    answers: string[]
    correctAnswer: number
  }

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

  <div class="card preset-filled-surface-100-900 mt-7 w-full p-4 text-center">
    <h6 class="h4">Questions</h6>

    {#each storyQuestions as question, index (index)}
      <h6 class="h6 mt-4">{question.question}</h6>

      {#each question.answers as answer, index (index)}
        <label class="flex items-center space-x-2">
          <input class="radio" type="radio" checked name="radio-direct" value={index} />
          <p>{answer}</p>
        </label>
      {/each}
    {/each}
  </div>
</div>

<style>
</style>
