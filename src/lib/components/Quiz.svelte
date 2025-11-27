<script lang="ts">
  import type { Question } from '$lib'

  export let questions: Question[]

  let selectedAnswers: number[] = Array(questions.length).fill(-1)
  let isSubmitted = false
  let score = 0
  let perfectScore = false

  function handleSubmit() {
    isSubmitted = true
    score = 0

    // Calculate score
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++
      }
    })

    perfectScore = score === questions.length
  }

  function resetQuiz() {
    isSubmitted = false
    selectedAnswers = Array(questions.length).fill(-1)
  }
</script>

<div class="card preset-filled-surface-100-900 mt-7 w-full p-4 text-center">
  <h6 class="h4">Quiz</h6>

  {#each questions as question, qIndex (qIndex)}
    <h6 class="h6 mt-4">{question.question}</h6>

    {#each question.answers as answer, aIndex (aIndex)}
      <label class="flex items-center space-x-2">
        <input
          class="radio"
          type="radio"
          name={`radio-${qIndex}`}
          value={aIndex}
          bind:group={selectedAnswers[qIndex]}
        />
        <p
          class:correct={isSubmitted &&
            selectedAnswers[qIndex] === question.correctAnswer &&
            aIndex === question.correctAnswer}
          class:incorrect={isSubmitted &&
            selectedAnswers[qIndex] === aIndex &&
            aIndex !== question.correctAnswer}
        >
          {answer}
          {isSubmitted &&
            selectedAnswers[qIndex] === question.correctAnswer &&
            aIndex === question.correctAnswer &&
            ' ✓'}
        </p>
      </label>
    {/each}
  {/each}

  {#if isSubmitted}
    <div class="my-4 text-lg font-medium">
      {#if perfectScore}
        100% 🎉
      {:else}
        Score: {score}/{questions.length}
      {/if}
    </div>
  {/if}

  <div class="mt-4 flex justify-center gap-4">
    {#if isSubmitted && !perfectScore}
      <button type="button" class="btn preset-outlined-surface-500" on:click={resetQuiz}>
        Clear
      </button>
    {/if}

    {#if !perfectScore}
      <button
        type="button"
        class="btn preset-outlined-secondary-500"
        on:click={handleSubmit}
        disabled={!isSubmitted && selectedAnswers.includes(-1)}
      >
        Submit
      </button>
    {/if}
  </div>
</div>

<style>
  .correct {
    color: green;
    font-weight: bold;
  }
  .incorrect {
    color: red;
  }
</style>
