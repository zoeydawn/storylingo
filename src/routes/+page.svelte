<script lang="ts">
  import { _ } from 'svelte-i18n'
  import SelectTargets from '$lib/components/SelectTargets.svelte'
  import { authStore } from '$lib/stores/authStore'
  import { goto } from '$app/navigation'
  import { resolve } from '$app/paths'
</script>

<div class="mx-auto max-w-md p-6">
  {#if $authStore.isLoggedIn}
    <div class="mb-6 flex items-center justify-between">
      <button
        on:click={() => goto(resolve('/story'))}
        type="button"
        class="btn preset-outlined-primary-500 m-auto mx-auto"
        >{$_('navigation.generateStory')}</button
      >
    </div>
  {:else}
    <SelectTargets />
  {/if}
</div>
