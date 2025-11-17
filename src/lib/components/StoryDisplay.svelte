<script lang="ts">
	import { copyToClipboard } from '$lib/utils';
	import { Save, RefreshCw, Copy } from '@lucide/svelte';

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
				class="btn-icon text-surface-700 hover:text-surface-900"
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
		{storyContent}
	</article>

	<footer class="flex items-center justify-between gap-4 p-4">
		<button class="btn preset-outlined opacity-60">
			<Save />
			Save
		</button>
		<button class="btn preset-outlined opacity-60">
			<RefreshCw />
			Regenerate
		</button>
	</footer>
</div>

<style>
</style>
