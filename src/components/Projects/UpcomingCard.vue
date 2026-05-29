<script setup lang="ts">
// imports
import type { UpcomingProject } from "@/types/projects";

// props
const props = defineProps<{
  project: UpcomingProject;
}>();
</script>

<template>
  <div
    class="border-191c1e/20 hover:border-191c1e cursor-pointer space-y-4 rounded-xl border-2 bg-white p-4 duration-200 xl:p-6"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="@/assets/svg/calendar.svg" class="bg-505f76/10 size-9 rounded-lg p-2" />
        <h3 class="text-191c1e text-lg font-bold xl:text-xl">{{ props.project.name }}</h3>
      </div>

      <p class="text-191c1e bg-004ac6/10 rounded-full px-3 py-1 text-xs font-semibold">
        {{ props.project.priority }}
      </p>
    </div>

    <div class="text-505f76 space-y-1 text-xs font-medium">
      <p v-for="desc in props.project?.description" :key="desc">{{ desc }}</p>
    </div>

    <div class="flex items-center gap-2">
      <img src="@/assets/svg/time.svg" class="size-3" />
      <p class="text-191c1e text-xs font-semibold lg:text-sm">
        Estimated start date:
        {{ props.project.startDate === "TBD" ? "TBD" : props.project.startDate }}
      </p>
    </div>
  </div>
</template>
