<script lang="ts">
	import StoryDisplay from '$lib/components/StoryDisplay.svelte';
	import TargetDropdown from '$lib/components/TargetDropdown.svelte';
	import { displaySettings, languageSettings } from '../../stores/languageSettings';

	let storyTopic = ''; // TODO: populate with a random topic
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
			const response = await fetch('/story/generate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					topic: storyTopic,
					language: $languageSettings.targetLanguage,
					level: $languageSettings.targetLevel
				})
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

<div class="mx-auto max-w-3xl p-4">
	<h1 class="mb-6 text-3xl font-bold">Create a Micro-Story</h1>

	<TargetDropdown />

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
					required
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
</div>
