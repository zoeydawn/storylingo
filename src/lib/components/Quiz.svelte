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
        <p class:correct={isSubmitted && aIndex === question.correctAnswer}
           class:incorrect={isSubmitted && selectedAnswers[qIndex] === aIndex && aIndex !== question.correctAnswer}>
          {answer}
          {isSubmitted && aIndex === question.correctAnswer && ' ✓'}
        </p>
      </label>
    {/each}
  {/each}

  <div class="flex justify-center gap-4 mt-4">
    {#if isSubmitted && !perfectScore}
      <button 
        type="button" 
        class="btn preset-outlined-secondary-500"
        on:click={resetQuiz}
      >
        Try Again
      </button>
    {/if}
    
    <button 
      type="button" 
      class="btn preset-outlined-secondary-500"
      on:click={handleSubmit}
      disabled={!isSubmitted && selectedAnswers.includes(-1)}
    >
      {isSubmitted 
        ? perfectScore 
          ? 'Perfect!  🎉' 
          : `Score: ${score}/${questions.length}`
        : 'Submit'}
    </button>
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
