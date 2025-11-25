<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { _ } from 'svelte-i18n';
	import Login from '$lib/components/Login.svelte';
	import {
		displaySettings,
		setTargetLevel,
		setTargetLanguage,
		loginAsGuest
	} from '$lib/stores';
	import { languages, levels, type Language, type LanguageLevel } from '$lib';
	// import { goto } from '$app/navigation';
	// import { resolve } from '$app/paths';

	type Step = 'language' | 'level' | 'none' | 'login';
	// State management
	let currentStep: Step = 'language';


	// Handle language selection
	function selectLanguage(languageId: Language) {
		setTargetLanguage(languageId);
		currentStep = 'none';
		// Transition to level selection after a short delay for visual feedback
		setTimeout(() => {
			currentStep = 'level';
		}, 300);
	}

	// Handle level selection
	function selectLevel(levelId: LanguageLevel) {
		setTargetLevel(levelId);

		console.log('Selected language:', $displaySettings.language, 'Level:', $displaySettings.level);

		currentStep = 'none';

		setTimeout(() => {
			currentStep = 'login';
		}, 300);
	}

	// Reset to language selection
	function resetSelection(step: Step) {
		currentStep = 'none';

		setTimeout(() => {
			currentStep = step;
			setTargetLanguage('');
			setTargetLevel('');
		}, 300);
	}
</script>

{#if currentStep === 'language'}
	<div in:fade={{ duration: 300, easing: quintOut }} out:fade={{ duration: 300, easing: quintOut }}>
		<h1 class="mb-6 text-center text-2xl font-bold">{$_('language.select')}</h1>

		<div class="grid grid-cols-2 gap-4">
			{#each languages as language (language)}
				<button
					type="button"
					class="btn flex h-20 items-center justify-center preset-filled text-lg"
					on:click={() => selectLanguage(language)}
				>
					{$_(`language.${language}`)}
				</button>
			{/each}
		</div>
	</div>
{:else if currentStep === 'level'}
	<div in:fade={{ duration: 300, easing: quintOut }} out:fade={{ duration: 300, easing: quintOut }}>
		<div class="mb-6 flex items-center justify-between">
			<button type="button" class="btn preset-outlined" on:click={() => resetSelection('language')}>
				← Back
			</button>
			<h1 class="flex-1 text-center text-2xl font-bold">
				{$_('level.header')}
			</h1>
			<div class="w-16"></div>
			<!-- Spacer for alignment -->
		</div>

		<div class="grid grid-cols-2 gap-4">
			{#each levels as level (level)}
				<button
					type="button"
					class="btn flex h-20 items-center justify-center preset-filled text-lg"
					on:click={() => selectLevel(level)}
				>
					{$_(`level.label${level}`)}
				</button>
			{/each}
		</div>
	</div>
{:else if currentStep === 'login'}
	<div in:fade={{ duration: 300, easing: quintOut }} out:fade={{ duration: 300, easing: quintOut }}>
		<button type="button" class="btn preset-outlined" on:click={() => resetSelection('level')}>
			← Back
		</button>
		<Login />
	</div>
{/if}

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
