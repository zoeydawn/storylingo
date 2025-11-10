<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { Languages } from '@lucide/svelte';
	let currentLang = 'en'; // default

	const languages: Record<string, string> = {
		en: 'English',
		es: 'Español'
	};

	function changeLanguage(lang: string): void {
		currentLang = lang;
		locale.set(lang); // Use locale.set instead of set
		// Optional: save preference
		localStorage.setItem('lang', lang);
	}

	// Restore saved language on mount
	onMount(() => {
		const saved = localStorage.getItem('lang');
		if (saved && languages[saved]) {
			changeLanguage(saved);
		}
	});
</script>

<div class="flex">
	<!-- <label>🌐 {$_('language.select')}</label> -->

	<Languages />
	<select
		class="ml-1 cursor-pointer"
		bind:value={currentLang}
		on:change={() => changeLanguage(currentLang)}
	>
		{#each Object.keys(languages) as lang (lang)}
			<option value={lang}>
				{languages[lang]}
			</option>
		{/each}
	</select>
</div>

<style>
</style>
