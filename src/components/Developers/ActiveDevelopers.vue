<script setup lang="ts">
// imports
import IconPing from "../icons/IconPing.vue";
import DeveloperCard from "./DeveloperCard.vue";
import type { DevStatus } from "@/types/devs.ts";

// data
const activeDevelopers: DevStatus[] = [
  {
    id: 1,
    name: "Maykid",
    role: "Frontend",
    projectStatus: "In Progress",
    projectName: "Project Alpha",
    deployed: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Backend",
    projectStatus: "Overdue",
    projectName: "Project Beta",
    deployed: true,
  },
];
</script>

<template>
  <div class="bg-f7f9fb bordeer border-c3c6d7 space-y-6 rounded-2xl p-6">
    <div class="flex items-center gap-3">
      <IconPing color="2563eb" />
      <h2 class="text-base font-semibold lg:text-xl">Deployed</h2>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <DeveloperCard
        v-for="developer in activeDevelopers"
        :key="developer.id"
        :developers="developer"
      />
    </div>
  </div>
</template>
