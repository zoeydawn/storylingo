<script lang="ts">
  import { RefreshCw } from '@lucide/svelte';
  import { languagesByCode, type LanguageString } from '$lib';
  import StoryDisplay from '$lib/components/StoryDisplay.svelte';
  import TargetDropdown from '$lib/components/TargetDropdown.svelte';
  import { languageSettings } from '$lib/stores/languageSettings';

  // TODO: integrate i18n in this page

  const storyTopics = [
    'A day in the life of a butterfly',
    'The adventures of a lost sock',
    'A mysterious message in a bottle',
    'The secret life of a garden gnome',
    'A journey to the center of the Earth',
    'The tale of a talking tree',
    'An unexpected visitor from space',
    'The legend of the hidden treasure',
    'A race against time',
    'The curious case of the missing cat',
    'A magical day at the beach',
    'The quest for the golden key',
    'A picnic with dinosaurs',
    'The mystery of the haunted house',
    'A day in the life of a superhero',
    'The enchanted forest adventure',
    'A visit to a parallel universe',
    'The story of a brave little mouse',
    'A journey through a magical portal',
    'The secret of the ancient ruins',
    'A day at the wizard school',
    'The adventures of a pirate crew',
    'A night at the enchanted castle',
    'The mystery of the disappearing stars',
    'A quest to find the lost city',
  ];

  let storyTopic = storyTopics[Math.floor(Math.random() * storyTopics.length)];
  let storyContent = '';
  let storyTitle = '';
  let isLoading = false;
  let error: string | null = null;

  async function generateStory(event: Event) {
    event.preventDefault();
    if (!storyTopic.trim()) return;

    isLoading = true;
    error = null;
    storyContent = '';

    try {
      const language: LanguageString = languagesByCode[$languageSettings.targetLanguage];

      const response = await fetch('/story/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: storyTopic,
          language,
          level: $languageSettings.targetLevel,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();

      storyTitle = data.title;
      storyContent = data.body;
    } catch (err) {
      console.error('Story generation failed:', err);
      error = 'Failed to generate story. Please try again.';
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="m-auto mx-auto flex max-w-md flex-col items-center p-4">
  <h3 class="mb-6 text-2xl font-bold">Create a Micro-Story</h3>
  <TargetDropdown />

  <form class="w-full space-y-4 pt-1.5 pb-6" on:submit={generateStory}>
    <fieldset class="align-center flex space-y-2">
      <label class="label">
        <span class="label-text">Story Topic</span>
        <input
          class="input w-full"
          type="text"
          bind:value={storyTopic}
          placeholder="Enter a topic (e.g., 'a cat in the park')"
          disabled={isLoading}
          required
        />
      </label>
      <button
        type="button"
        class="preset-outlined-secondary btn justify-center"
        on:click={() => (storyTopic = storyTopics[Math.floor(Math.random() * storyTopics.length)])}
        disabled={isLoading}
      >
        <RefreshCw class="" />
      </button>
    </fieldset>

    <button
      type="submit"
      class="btn preset-outlined-primary-500 w-full justify-center"
      disabled={isLoading || !storyTopic.trim()}
    >
      {#if isLoading}
        Generating...
      {:else}
        Generate Story
      {/if}
    </button>

    {#if error}
      <div class="mt-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-800">
        {error}
      </div>
    {/if}

    <div class="mt-8">
      {#if storyContent}
        <StoryDisplay {storyContent} {storyTitle} />
      {:else if isLoading}
        <div class="space-y-4">
          <div class="h-6 w-1/2 animate-pulse rounded bg-gray-200"></div>
          <div class="h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div class="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
          <div class="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
        </div>
      {/if}
    </div>
  </form>
</div>
