<script lang="ts">
	import '../app.css';
	import '$lib/i18n.ts'; // Initialize i18n
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	let { children } = $props();
</script>

<nav class="navbar">
	<div class="nav-container">
		<div class="nav-brand">
			<h1>Language Learning App</h1>
		</div>

		<div class="nav-items">
			<a href="/" class="nav-link">Home</a>
			<a href="/lessons" class="nav-link">Lessons</a>
			<a href="/profile" class="nav-link">Profile</a>
			<LanguageSelector />
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	.navbar {
		background-color: #333;
		color: white;
		padding: 0 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		height: 60px;
	}

	.nav-brand h1 {
		margin: 0;
		font-size: 1.5rem;
	}

	.nav-items {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.nav-link {
		color: white;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.2s;
	}

	.nav-link:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	@media (max-width: 768px) {
		.nav-container {
			flex-direction: column;
			height: auto;
			padding: 1rem 0;
		}

		.nav-items {
			margin-top: 1rem;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
