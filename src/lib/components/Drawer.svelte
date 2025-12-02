<script lang="ts">
  import { XIcon } from '@lucide/svelte'
  import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte'
  import { MenuIcon } from '@lucide/svelte'

  // Animations:
  const animBackdrop =
    'transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100'
  const animModal =
    'transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0'
</script>

<Dialog>
  <Dialog.Trigger class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop
      class="bg-surface-50-950/50 fixed inset-0 z-50 transition transition-discrete {animBackdrop}"
    />
    <Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
      <Dialog.Content
        class="card bg-surface-100-900 h-screen w-sm space-y-4 p-4 shadow-xl {animModal}"
      >
        <header class="flex items-center justify-between">
          <Dialog.Title class="text-2xl font-bold">StoryLingo</Dialog.Title>
          <Dialog.CloseTrigger class="btn-icon preset-tonal">
            <XIcon />
          </Dialog.CloseTrigger>
        </header>
        <p>A slide out drawer panel.</p>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog>
