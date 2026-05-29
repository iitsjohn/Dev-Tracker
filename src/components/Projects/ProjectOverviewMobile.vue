<script setup lang="ts">
// imports
import { ref } from "vue";
import { projectList, UpcomingProjectList, OnHoldProjectList } from "@/constants/Projects";
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import UpcomingCard from "./UpcomingCard.vue";
import OnHoldCard from "./OnHoldCard.vue";

// types
type Tab = "ONGOING" | "UPCOMING" | "ONHOLD";
type TabDetails = {
  name: Tab;
  color: string;
  count: number;
};

// ref
const activeTab = ref<Tab>("ONGOING");
const tabs = ref<TabDetails[]>([
  {
    name: "ONGOING",
    color: "2563eb",
    count: projectList.length,
  },
  {
    name: "UPCOMING",
    color: "505f76",
    count: UpcomingProjectList.length,
  },
  {
    name: "ONHOLD",
    color: "943700",
    count: 3,
  },
]);

// functions
const handleTabChange = (tab: Tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <section id="projects" class="pt-5 lg:hidden">
    <div class="border-c3c6d7/50 mx-auto mb-8 flex w-fit border-b duration-200 ease-in-out">
      <a
        href="#projects"
        v-for="tab in tabs"
        :key="tab.name"
        class="relative px-5 py-3 text-sm font-medium transition-all"
        :style="activeTab === tab.name ? `color: #${tab.color}` : ''"
        @click="handleTabChange(tab.name as Tab)"
      >
        {{ tab.name }}
        <span
          v-if="activeTab === tab.name"
          class="absolute bottom-0 left-0 h-0.5 w-full"
          :class="`bg-${tab.color}`"
          :style="activeTab === tab.name ? `background-color: #${tab.color}` : ''"
        />
        <span
          class="bg-191c1e/10 absolute top-0 right-0 flex items-center justify-center rounded-full px-1.5 py-0.5 text-[0.625rem] font-semibold"
          :style="
            activeTab === tab.name ? `background-color: #${tab.color}1A; color: #${tab.color}` : ''
          "
          >{{ tab.count }}</span
        >
      </a>
    </div>

    <div v-if="activeTab === 'ONGOING'" class="space-y-4">
      <ProjectCard v-for="project in projectList" :key="project.id" :project="project" />
    </div>
    <div v-if="activeTab === 'UPCOMING'" class="space-y-4">
      <UpcomingCard
        v-for="upcomingProject in UpcomingProjectList"
        :key="upcomingProject.id"
        :project="upcomingProject"
      />
    </div>
    <div v-if="activeTab === 'ONHOLD'" class="space-y-4">
      <OnHoldCard
        v-for="onHoldProject in OnHoldProjectList"
        :key="onHoldProject.id"
        :project="onHoldProject"
      />
    </div>
  </section>
</template>
