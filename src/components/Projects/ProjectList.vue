<script setup lang="ts">
// imports
import ProgressBar from "@/components/Projects/ProgressBar.vue";
import type { Project } from "@/types/projects";

// props
const props = defineProps<{
  project: Project;
}>();
</script>

<template>
  <div
    class="border-c3c6d7/20 hover:border-primary-100 hover:bg-primary-100/10 cursor-pointer rounded-xl border-2 p-4 duration-200"
  >
    <div class="mb-5 flex items-center justify-between">
      <div class="space-y-0.5 font-semibold">
        <h3 class="text-lg lg:text-xl">{{ props.project.name }}</h3>
        <p class="text-505f76 text-xs font-semibold lg:text-sm">
          Due in {{ props.project.dueDate }}
        </p>
      </div>

      <p class="text-004ac6 bg-004ac6/10 rounded-full px-3 py-1 text-xs font-semibold">
        {{ props.project.priority }}
      </p>
    </div>

    <ProgressBar :progress="props.project.progress" />
  </div>
</template>
