<script setup lang="ts">
// imports
import ProgressBar from "@/components/Projects/ProgressBar.vue";
import UpdateProjectModal from "@/components/Projects/UpdateProjectModal.vue";
import type { Project } from "@/types/projects";

// props
const props = defineProps<{
  project: Project;
}>();

// ref / const
const MAX_VISIBLE_DEVS = 2;
</script>

<template>
  <div
    class="border-primary-100/20 xl:p-vc6 hover:border-primary-100 cursor-pointer space-y-4 rounded-xl border-2 bg-white p-4 duration-200 xl:p-6 xl:pt-6"
  >
    <div class="flex w-full items-center">
      <div class="mr-auto flex items-center gap-3">
        <h3 class="text-191c1e text-lg font-bold xl:text-xl">{{ props.project.name }}</h3>
      </div>

      <p class="text-004ac6 bg-004ac6/10 mr-2 rounded-full px-3 py-1 text-xs font-semibold">
        {{ props.project.priority }}
      </p>

      <UpdateProjectModal :project="props.project" />
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
          v-for="dev in props.project.devs.slice(0, MAX_VISIBLE_DEVS)"
          :key="dev.name"
          class="bg-004ac6/10 flex size-8 items-center justify-center overflow-hidden rounded-full border-4 border-white"
        >
          <template v-if="dev.image">
            <img :src="`/developers/${dev.image}.png`" :alt="dev.name" />
          </template>
          <template v-else>
            <p class="text-xs font-semibold">{{ dev.initials }}</p>
          </template>
        </div>

        <div
          v-if="props.project.devs.length > MAX_VISIBLE_DEVS"
          class="flex size-8 items-center justify-center rounded-full border-4 border-white bg-gray-200 text-xs font-medium text-gray-600"
        >
          +{{ props.project.devs.length - MAX_VISIBLE_DEVS }}
        </div>
      </div>
      <p class="text-434655 text-xs font-semibold lg:text-sm">Due in {{ props.project.dueDate }}</p>
    </div>
  </div>
</template>
