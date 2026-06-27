<script setup lang="ts">
// imports
import { projectList, UpcomingProjectList, OnHoldProjectList } from "@/constants/Projects";
import CardTitle from "./CardTitle.vue";
import ProjectCard from "./ProjectCard.vue";
import UpcomingCard from "./UpcomingCard.vue";
import OnHoldCard from "./OnHoldCard.vue";
import AddProjectModal from "./AddProjectModal.vue";
import { computed, onMounted } from "vue";
import { useStorage } from "@vueuse/core";

// ref
const storedProjects = useStorage("stored-projects", { ...projectList });
const activeProjectsList = computed(() => {
  if (storedProjects) return projectList;

  return storedProjects;
});

console.log(activeProjectsList);

onMounted(() => {
  // useStorage("my-store", { test: projectList });
  // console.log("onMounted");
});
</script>

<template>
  <section class="hidden w-full grid-cols-3 gap-3 lg:grid xl:gap-6">
    <div class="space-y-4">
      <div class="flex items-center justify-between gap-4">
        <CardTitle status="ONGOING" color="004ac6" :count="activeProjectsList.length" />
        <AddProjectModal />
      </div>

      <ProjectCard v-for="project in activeProjectsList" :key="project.id" :project="project" />
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
