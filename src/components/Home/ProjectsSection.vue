<script setup lang="ts">
// imports
import ProjectOverviewMobile from "@/components/Projects/ProjectOverviewMobile.vue";
import ProjectOverviewDesktop from "@/components/Projects/ProjectOverviewDesktop.vue";
</script>

<template>
  <section class="bg-505f76/10 mx-auto my-10 w-full px-4 py-20 lg:my-20 xl:py-24">
    <div class="mb-12 flex w-full flex-col gap-4 md:flex-row md:justify-between">
      <div class="space-y-4">
        <h1 class="text-191c1e text-4xl font-bold xl:text-[3rem]">Project Roadmap</h1>
        <p class="text-434655 text-base">
          Seamlessly track progress across every phase of your product lifecycle.
        </p>
      </div>
      <RouterLink
        to="/projects"
        class="bg-004ac6 hover:bg-004ac6/80 mt-4 inline-block w-fit rounded-full px-5 py-3 text-sm font-medium text-white duration-200"
      >
        View Full Roadmap
      </RouterLink>
    </div>

    <ProjectOverviewMobile />
    <ProjectOverviewDesktop />
  </section>
</template>
