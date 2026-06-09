<script setup lang="ts">
// imports
import { projectList, UpcomingProjectList, OnHoldProjectList } from "@/constants/Projects";
import CardTitle from "./CardTitle.vue";
import ProjectCard from "./ProjectCard.vue";
import UpcomingCard from "./UpcomingCard.vue";
import OnHoldCard from "./OnHoldCard.vue";

import { useAddProject } from "@/composables/useAddProject";
</script>

<template>
  <button
    class="border-c3c6d7 text-191c1e hover:bg-c3c6d7/10 ml-auto rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200"
    @click="useAddProject().fnAddProject(projectList)"
  >
    Add Project
  </button>

  <section class="hidden w-full grid-cols-3 gap-3 lg:grid xl:gap-6">
    <div class="space-y-4">
      <CardTitle status="ONGOING" color="004ac6" :count="projectList.length" />
      <ProjectCard v-for="project in projectList" :key="project.id" :project="project" />
    </div>

    <div class="space-y-4">
      <CardTitle status="UPCOMING" color="191c1e" :count="UpcomingProjectList.length" />
      <UpcomingCard
        v-for="upcomingProject in UpcomingProjectList"
        :key="upcomingProject.id"
        :project="upcomingProject"
      />
    </div>

    <div class="space-y-4">
      <CardTitle status="ONHOLD" color="943700" :count="OnHoldProjectList.length" />
      <OnHoldCard
        v-for="onHoldProject in OnHoldProjectList"
        :key="onHoldProject.id"
        :project="onHoldProject"
      />
    </div>
  </section>
</template>
