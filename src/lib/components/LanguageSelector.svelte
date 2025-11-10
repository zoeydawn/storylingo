<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

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

<div class="language-switcher">
	<label>🌐 {$_('language.select')}</label>
	<select bind:value={currentLang} on:change={() => changeLanguage(currentLang)}>
		{#each Object.keys(languages) as lang (lang)}
			<option value={lang}>
				{languages[lang]}
			</option>
		{/each}
	</select>
</div>

<style>
	.language-switcher {
		padding: 0.5rem;
		background: #f0f0f0;
		border-radius: 8px;
		display: inline-block;
	}
</style>
