<script setup lang="ts">
// imports
import ProjectOverviewMobile from "@/components/Projects/ProjectOverviewMobile.vue";
import ProjectOverviewDesktop from "@/components/Projects/ProjectOverviewDesktop.vue";
</script>

<template>
  <section class="relative px-5 py-10">
    <div class="mb-10 space-y-3">
      <h1 class="text-191c1e text-3xl font-bold lg:text-4xl">Project Pipeline</h1>
      <p class="text-434655 text-base">Track your team's velocity and upcoming milestones.</p>
    </div>

    <div>
      <ProjectOverviewMobile />
      <ProjectOverviewDesktop />
    </div>
  </section>
</template>
