<script lang="ts">
	import { _ } from 'svelte-i18n';
	import SelectTargets from '$lib/components/SelectTargets.svelte';
	import { authStore } from '../stores/authStore';
</script>

<div class="mx-auto max-w-md p-6">
	{#if $authStore.isLoggedIn}
		<h1 class="mb-6 text-center text-2xl font-bold">Logged in</h1>
	{:else}
		<SelectTargets />
	{/if}
</div>
