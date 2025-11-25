<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Mail } from '@lucide/svelte';
	import { loginAsGuest, loginWithGoogle } from '$lib/stores';
	import { supabase } from '$lib/supabaseClient';

	let email = '';
	let emailSent = false;
	let errorMessage = '';

	const handleEmailLogin = async () => {
		try {
			await supabase.auth.signInWithOtp({
				email: email,
				options: {
					emailRedirectTo: window.location.origin
				}
			});
			emailSent = true;
		} catch (err) {
			errorMessage = err.message;
		}
	};
</script>

<div class="mx-auto w-full max-w-md space-y-4">
	<h1 class="mb-6 text-center text-2xl font-bold">{$_('login.header')}</h1>

	<button
		on:click={loginWithGoogle}
		type="button"
		class="btn flex w-full items-center justify-center preset-filled"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="mr-2">
			<path
				fill="#4285F4"
				d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
			/>
			<path
				fill="#34A853"
				d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			/>
			<path
				fill="#FBBC05"
				d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
			/>
			<path
				fill="#EA4335"
				d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
			/>
		</svg>
		{$_('login.google')}
	</button>

	{#if emailSent}
		<div class="text-center">
			<p>{$_('login.emailSent')}</p>
		</div>
	{:else}
		<form on:submit|preventDefault={handleEmailLogin} class="space-y-2">
			<div class="space-y-2">
				<label for="email" class="block text-sm font-medium">{$_('login.email')}</label>

				<input
					id="email"
					type="email"
					bind:value={email}
					required
					placeholder="email@example.com"
					class="input"
				/>
			</div>
			<button type="submit" class="btn w-full preset-filled">
				<Mail class="mr-2" />
				{$_('login.email')}
			</button>
			{#if errorMessage}
				<p class="text-red-500">{errorMessage}</p>
			{/if}
		</form>
	{/if}

	<hr class="hr border-surface-950-50" />

	<button type="button" class="btn w-full preset-outlined" on:click={loginAsGuest}>
		{$_('login.guest')}
	</button>
</div>
