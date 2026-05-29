<script setup lang="ts">
// imports
import ProjectList from "@/components/Projects/ProjectList.vue";
import { projectList } from "@/constants/Projects";

// variables
const colors = ["#BA1A1A", "#943700", "#2563EB"];
</script>

<template>
  <section
    class="mx-auto my-10 grid w-full max-w-300 grid-cols-1 justify-between gap-20 px-4 lg:my-20 lg:grid-cols-2"
  >
    <div class="w-full max-w-146 space-y-4 lg:space-y-6">
      <div class="bg-d0e1fb flex w-fit items-center gap-2 rounded-full px-3 py-1">
        <img src="@/assets/svg/flash.svg" class="size-2.5" />
        <p class="text-[0.6875rem] font-semibold">New: Collaborative Roadmap 2.0</p>
      </div>
      <h1 class="text-191c1e text-4xl font-bold xl:text-[3rem]">
        Project Management, <span class="text-004ac6">Simplified</span>
      </h1>
      <p class="text-434655 text-base">
        Manage task flow, visualize progress in real-time, and keep your remote teams perfectly in
        sync without the overhead of complex legacy tools.
      </p>
    </div>

    <div
      class="border-c3c6d7 w-full space-y-5.5 rounded-2xl border py-5 pr-2 pl-4 shadow-lg duration-200 ease-in-out lg:max-w-146.75"
    >
      <div class="border-c3c6d7 flex w-full items-center justify-between border-b pr-2 pb-6">
        <div class="flex items-center gap-3">
          <img src="@/assets/svg/project-icon.svg" alt="Project Logo" />
          <h2 class="text-xl font-semibold">Ongoing Projects</h2>
        </div>

        <div class="flex items-center gap-2">
          <div
            v-for="color in colors"
            :key="color"
            :style="{ backgroundColor: color }"
            class="size-4 rounded-full"
          ></div>
        </div>
      </div>

      <div class="border-c3c6d7 h-full max-h-100 space-y-1.5 overflow-y-auto border-b pr-2 pb-6">
        <ProjectList v-for="item in projectList" :key="item.id" :project="item" />
      </div>
    </div>
  </section>
</template>
