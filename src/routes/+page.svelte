<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// Define the 6 most commonly studied languages
	const languages = [
		{ id: 'english', name: 'English' },
		{ id: 'spanish', name: 'Spanish' },
		{ id: 'french', name: 'French' },
		{ id: 'german', name: 'German' },
		{ id: 'italian', name: 'Italian' },
		{ id: 'chinese', name: 'Chinese' }
	];

	// Define CEFR levels
	const levels = [
		{ id: 'a1', name: 'A1 - Beginner' },
		{ id: 'a2', name: 'A2 - Elementary' },
		{ id: 'b1', name: 'B1 - Intermediate' },
		{ id: 'b2', name: 'B2 - Upper Intermediate' },
		{ id: 'c1', name: 'C1 - Advanced' },
		{ id: 'c2', name: 'C2 - Proficiency' }
	];

	// State management
	let currentStep: 'language' | 'level' | 'none' = 'language';
	let selectedLanguage: string | null = null;
	let selectedLevel: string | null = null;

	// Handle language selection
	function selectLanguage(languageId: string) {
		selectedLanguage = languageId;
		currentStep = 'none';
		// Transition to level selection after a short delay for visual feedback
		setTimeout(() => {
			currentStep = 'level';
		}, 300);
	}

	// Handle level selection
	function selectLevel(levelId: string) {
		selectedLevel = levelId;
		// Here you would typically navigate to the next page or perform an action
		console.log('Selected language:', selectedLanguage, 'Level:', selectedLevel);
	}

	// Reset to language selection
	function resetSelection() {
		currentStep = 'none';

		setTimeout(() => {
			currentStep = 'language';
			selectedLanguage = null;
			selectedLevel = null;
		}, 300);
	}
</script>

<div class="mx-auto max-w-md p-6">
	{#if currentStep === 'language'}
		<div
			in:fade={{ duration: 300, easing: quintOut }}
			out:fade={{ duration: 300, easing: quintOut }}
		>
			<h1 class="mb-6 text-center text-2xl font-bold">What Language are you learning?</h1>

			<div class="grid grid-cols-2 gap-4">
				{#each languages as language (language.id)}
					<button
						type="button"
						class="btn flex h-20 items-center justify-center preset-filled text-lg"
						on:click={() => selectLanguage(language.id)}
					>
						{language.name}
					</button>
				{/each}
			</div>
		</div>
	{:else if currentStep === 'level'}
		<div
			in:fade={{ duration: 300, easing: quintOut }}
			out:fade={{ duration: 300, easing: quintOut }}
		>
			<div class="mb-6 flex items-center justify-between">
				<button type="button" class="btn preset-outlined" on:click={resetSelection}>
					← Back
				</button>
				<h1 class="flex-1 text-center text-2xl font-bold">What is your level?</h1>
				<div class="w-16"></div>
				<!-- Spacer for alignment -->
			</div>

			<div class="grid grid-cols-2 gap-4">
				{#each levels as level (level.id)}
					<button
						type="button"
						class="btn flex h-20 items-center justify-center preset-filled text-lg"
						on:click={() => selectLevel(level.id)}
					>
						{level.name}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Additional styling for better visual appearance */
	.btn.preset-filled {
		transition: all 0.2s ease;
	}

	.btn.preset-filled:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
</style>
