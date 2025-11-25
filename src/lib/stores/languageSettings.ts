import type { Language, LanguageLevel } from '$lib';
import { writable, derived } from 'svelte/store';

export interface LanguageSettings {
	targetLanguage: Language;
	targetLevel: LanguageLevel | '';
}

// Initialize store with defaults
export const languageSettings = writable<LanguageSettings>({
	targetLanguage: 'fr',
	targetLevel: 'a1'
});

// Derived store for formatted display
export const displaySettings = derived(languageSettings, ($settings) => ({
	language: $settings.targetLanguage.toUpperCase(),
	level: $settings.targetLevel.toUpperCase(),
	description: `Learning ${$settings.targetLanguage} at ${$settings.targetLevel.toUpperCase()} level`
}));

// Update helpers
export const setTargetLanguage = (lang: Language) => {
	languageSettings.update((settings) => ({ ...settings, targetLanguage: lang }));
};

export const setTargetLevel = (level: LanguageLevel) => {
	languageSettings.update((settings) => ({ ...settings, targetLevel: level }));
};
