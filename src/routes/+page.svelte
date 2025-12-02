<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { goto } from '$app/navigation'
  import { resolve } from '$app/paths'
</script>

<!-- TODO: add descriptive text -->
<div class="mx-auto max-w-md p-6">
  <div class="mb-6 flex items-center justify-between">
    <button
      on:click={() => goto(resolve('/story'))}
      type="button"
      class="btn preset-outlined-primary-500 m-auto mx-auto"
      >{$_('navigation.generateStory')}</button
    >
  </div>
</div>
