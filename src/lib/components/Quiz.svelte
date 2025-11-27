<script lang="ts">
  import type { Question } from '$lib'

  export let questions: Question[]
</script>

<div class="card preset-filled-surface-100-900 mt-7 w-full p-4 text-center">
  <h6 class="h4">Questions</h6>

  {#each questions as question, index (index)}
    <h6 class="h6 mt-4">{question.question}</h6>

    {#each question.answers as answer, index (index)}
      <label class="flex items-center space-x-2">
        <input class="radio" type="radio" checked name="radio-direct" value={index} />
        <p>{answer}</p>
      </label>
    {/each}
  {/each}
</div>
