<script lang="ts">
  import '../app.css'
  import '$lib/i18n' // Initialize i18n
  import Navbar from '$lib/components/Navbar.svelte'
  import { page } from '$app/stores'
  import { locale } from 'svelte-i18n'
  
  let { children } = $props()
  
  // Set language from page data
  $: $page.data?.lang && locale.set($page.data.lang)
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
