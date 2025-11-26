<script lang="ts">
  import '../app.css';
  import '$lib/i18n.ts'; // Initialize i18n
  import Navbar from '$lib/components/Navbar.svelte';
  let { children } = $props();
</script>

<Navbar />

<main>
  {@render children()}
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
</style>
