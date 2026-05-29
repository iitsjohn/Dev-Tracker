<script setup lang="ts">
// imports
import ProjectOverviewMobile from "@/components/Projects/ProjectOverviewMobile.vue";
import ProjectOverviewDesktop from "@/components/Projects/ProjectOverviewDesktop.vue";
</script>

<template>
  <section class="bg-505f76/10 mx-auto my-10 w-full px-4 py-20 lg:my-20 xl:py-24">
    <div class="mb-12 w-full space-y-4">
      <h1 class="text-191c1e text-4xl font-bold xl:text-[3rem]">Project Roadmap</h1>
      <p class="text-434655 text-base">
        Seamlessly track progress across every phase of your product lifecycle.
      </p>
    </div>

    <ProjectOverviewMobile />
    <ProjectOverviewDesktop />
  </section>
</template>
