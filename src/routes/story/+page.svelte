<script lang="ts">
  // import { _ } from 'svelte-i18n'
  import SelectTargets from '$lib/components/SelectTargets.svelte'
  import StoryGeneration from '$lib/components/StoryGeneration.svelte'
  import { authStore } from '$lib/stores/authStore'
</script>

<div class="mx-auto max-w-md">
  {#if $authStore.isLoggedIn}
    <StoryGeneration />
  {:else}
    <!-- TODO: "Login or Get Started" options -->
    <SelectTargets />
  {/if}
</div>
