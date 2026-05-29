<script setup lang="ts">
// imports
import DeveloperCard from "./DeveloperCard.vue";
import IconPing from "../icons/IconPing.vue";
import type { DevStatus } from "@/types/devs";

// data
const benchedDevelopers: DevStatus[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Backend",
    projectStatus: null,
    projectName: null,
    deployed: false,
  },
  {
    id: 2,
    name: "John Smith",
    role: "Frontend",
    projectStatus: null,
    projectName: null,
    deployed: false,
  },
];
</script>

<template>
  <div class="bg-f7f9fb bordeer border-c3c6d7 space-y-6 rounded-2xl p-6">
    <div class="flex items-center gap-3">
      <IconPing color="737686" />
      <h2 class="text-base font-semibold lg:text-xl">On Bench</h2>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <DeveloperCard
        v-for="developer in benchedDevelopers"
        :key="developer.id"
        :developers="developer"
      />
    </div>
  </div>
</template>
