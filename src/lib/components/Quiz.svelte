<script lang="ts">
  import type { Question } from '$lib'

  export let questions: Question[]
</script>

<div class="card preset-filled-surface-100-900 mt-7 w-full p-4 text-center">
  <h6 class="h4">Quiz</h6>

  {#each questions as question, qIndex (qIndex)}
    <h6 class="h6 mt-4">{question.question}</h6>

    {#each question.answers as answer, aIndex (aIndex)}
      <label class="flex items-center space-x-2">
        <input class="radio" type="radio" name={`radio-${qIndex}`} value={aIndex} />
        <p>{answer}</p>
      </label>
    {/each}
  {/each}

  <button type="button" class="btn preset-outlined-secondary-500 mt-4">Submit</button>
</div>
