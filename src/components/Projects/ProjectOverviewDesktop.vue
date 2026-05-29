<script setup lang="ts">
// imports
import { projectList, UpcomingProjectList, OnHoldProjectList } from "@/constants/Projects";
import CardTitle from "./CardTitle.vue";
import ProjectCard from "./ProjectCard.vue";
import UpcomingCard from "./UpcomingCard.vue";
import OnHoldCard from "./OnHoldCard.vue";
</script>

<template>
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
