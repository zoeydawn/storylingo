<script lang="ts">
	import { copyToClipboard } from '$lib/utils';
	import { Star, Copy } from '@lucide/svelte';

	export let storyContent: string;
	export let storyTitle: string;
</script>

<div class="w-full card preset-filled-surface-100-900 p-4">
	<header class="mb-4">
		<div class="flex items-start justify-between">
			<h2 class="text-xl font-semibold">
				{storyTitle}
			</h2>
			<button
				class="btn-icon text-surface-500 hover:text-surface-700"
				on:click={() => copyToClipboard(storyContent)}
				title="Copy to clipboard"
				aria-label="Copy story to clipboard"
			>
				<Copy />
			</button>
		</div>
		<div class="mt-2 h-1 w-12 rounded bg-primary-500"></div>
	</header>
	<article class="space-y-4 p-4">
		{#each storyContent.split('\n') as paragraph, index (index)}
			<p>{paragraph}</p>
		{/each}
	</article>

	<footer class="flex items-center justify-between gap-4 p-4">
		<button class="preset btn opacity-60" on:click={(e) => e.preventDefault()}>
			<Star />
			<!-- <Star fill="currentColor" /> -->
		</button>
	</footer>
</div>

<style>
</style>
