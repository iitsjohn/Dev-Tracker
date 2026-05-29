<script setup lang="ts">
// imports
import type { DevStatus } from "@/types/devs";

// props
const props = defineProps<{
  developers: DevStatus;
}>();
</script>

<template>
  <div class="flex items-center justify-between rounded-2xl bg-white p-6 text-sm font-semibold">
    <div class="flex items-center gap-3">
      <img src="/developers/maykid24x.png" class="size-10 rounded-full" />
      <div>
        <h2 class="text-191c1e">{{ props.developers.name }}</h2>
        <p class="text-505f76">{{ props.developers.role }}</p>
      </div>
    </div>

    <div v-if="props.developers?.deployed">
      <p class="text-004ac6">{{ props.developers.projectStatus }}</p>
      <p class="text-434655">{{ props.developers.projectName }}</p>
    </div>
  </div>
</template>
