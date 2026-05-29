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
    class="border-primary-100/20 hover:border-primary-100 cursor-pointer space-y-4 rounded-xl border-2 bg-white p-4 duration-200 xl:p-6"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <!-- <img src="@/assets/svg/gear.svg" class="bg-primary-100/10 size-9 rounded-lg p-2" /> -->
        <h3 class="text-191c1e text-lg font-bold xl:text-xl">{{ props.project.name }}</h3>
      </div>

      <p class="text-004ac6 bg-004ac6/10 rounded-full px-3 py-1 text-xs font-semibold">
        {{ props.project.priority }}
      </p>
    </div>

    <div class="space-y-2">
      <p
        v-for="desc in props.project?.description"
        :key="desc"
        class="text-505f76 text-xs font-semibold"
      >
        {{ desc }}
      </p>
    </div>

    <div class="space-y-2">
      <div class="flex w-full items-center justify-between text-sm">
        <p class="text-434655 font-semibold">Progress</p>
        <p class="text-191c1e font-bold">{{ props.project.progress }}%</p>
      </div>
      <ProgressBar :progress="props.project.progress" :has-percent="false" />
    </div>

    <div class="flex w-full items-center justify-between">
      <div class="flex -space-x-2">
        <div
          v-for="dev in props.project.devs"
          :key="dev.name"
          class="bg-004ac6/10 flex size-10 items-center justify-center overflow-hidden rounded-full border-4 border-white"
        >
          <template v-if="dev.image">
            <img :src="`/developers/${dev.image}.png`" :alt="dev.name" />
          </template>
          <template v-else>
            <p class="text-xs font-semibold">{{ dev.initials }}</p>
          </template>
        </div>
      </div>
      <p class="text-434655 text-xs font-semibold lg:text-sm">Due in {{ props.project.dueDate }}</p>
    </div>
  </div>
</template>
