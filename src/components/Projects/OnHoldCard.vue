<script setup lang="ts">
// imports
import type { OnHoldProject } from "@/types/projects";

// props
const props = defineProps<{
  project: OnHoldProject;
}>();
</script>

<template>
  <div
    class="border-943700/20 cursor-pointer space-y-4 rounded-xl border-2 bg-white p-4 duration-200 hover:border-943700 xl:p-6"
  >
    <div class="flex items-center gap-3">
      <img src="@/assets/svg/pause.svg" class="bg-943700/10 size-9 rounded-lg p-2" />
      <h3 class="text-191c1e text-lg font-bold xl:text-xl">{{ props.project.name }}</h3>
    </div>

    <div class="text-505f76 space-y-1 text-xs font-medium">
      <p v-for="desc in props.project?.description" :key="desc">{{ desc }}</p>
    </div>

    <p class="text-943700 bg-943700/10 w-fit rounded-full px-3 py-1 text-xs font-semibold">
      {{ props.project?.status }}
    </p>
  </div>
</template>
