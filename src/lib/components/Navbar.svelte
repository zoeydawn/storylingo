<script lang="ts">
  import { resolve } from '$app/paths'
  import { MenuIcon } from '@lucide/svelte'
  import { AppBar } from '@skeletonlabs/skeleton-svelte'
  import LanguageSelector from './LanguageSelector.svelte'
</script>

<AppBar>
  <AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
    <AppBar.Lead>
      <button type="button" class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></button>
    </AppBar.Lead>
    <AppBar.Headline>
      <a href={resolve('/')} class="hover:text-primary-500 text-2xl">StoryLingo</a>
    </AppBar.Headline>
    <AppBar.Trail>
      <LanguageSelector />
    </AppBar.Trail>
  </AppBar.Toolbar>
</AppBar>
