<script lang="ts">
	import StoryDisplay from '$lib/components/StoryDisplay.svelte';

	// Hardcoded values
	const targetLanguage = 'Spanish';
	const languageLevel = 'Intermediate';

	let storyTopic = '';
	let storyContent = '';
	let isLoading = false;
	let error: string | null = null;

	async function generateStory() {
		if (!storyTopic.trim()) return;

		isLoading = true;
		error = null;
		storyContent = '';

		try {
			// Simulate API call delay
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Simulated responses
			if (storyTopic.toLowerCase().includes('cat')) {
				storyContent = 'El gato saltó sobre la mesa. Buscaba su comida favorita.';
			} else if (storyTopic.toLowerCase().includes('park')) {
				storyContent = 'En el parque, los niños jugaban al fútbol. Un perro perseguía la pelota.';
			} else {
				storyContent = `Esta es una historia sobre ${storyTopic} en ${targetLanguage} para nivel ${languageLevel}.`;
			}
		} catch (err) {
			error = 'Failed to generate story. Please try again.';
			console.error('Story generation error:', err);
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="mx-auto max-w-3xl p-4">
	<h1 class="mb-6 text-3xl font-bold">Create a Micro-Story</h1>

	<div class="mb-6 rounded-lg bg-primary-800/20 p-4">
		<p class="font-semibold">Current settings:</p>
		<p>Language: {targetLanguage} | Level: {languageLevel}</p>
	</div>

	<form class="w-full space-y-4" on:submit={generateStory}>
		<fieldset class="space-y-2">
			<label class="label">
				<span class="label-text">Story Topic</span>
				<input
					class="input w-full"
					type="text"
					bind:value={storyTopic}
					placeholder="Enter a topic (e.g., 'a cat in the park')"
					disabled={isLoading}
				/>
			</label>
			<p class="mt-1 text-sm text-surface-500">What should your story be about?</p>
		</fieldset>

		<button
			type="submit"
			class="preset-filled-primary btn w-full justify-center sm:w-auto"
			disabled={isLoading || !storyTopic.trim()}
		>
			{#if isLoading}
				Generating...
			{:else}
				Generate Story
			{/if}
		</button>
	</form>

	{#if error}
		<div class="mt-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-800">
			{error}
		</div>
	{/if}

	<div class="mt-8">
		{#if storyContent}
			<StoryDisplay {storyContent} {targetLanguage} {languageLevel} />
		{:else if isLoading}
			<div class="space-y-4">
				<!-- Skeleton loading indicator -->
				<div class="h-6 w-1/2 animate-pulse rounded bg-gray-200"></div>
				<div class="h-4 w-full animate-pulse rounded bg-gray-200"></div>
				<div class="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
				<div class="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
			</div>
		{/if}
	</div>
</div>
