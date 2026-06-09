<script setup lang="ts">
// imports
import { ref } from "vue";
import ProjectOverviewMobile from "@/components/Projects/ProjectOverviewMobile.vue";
import ProjectOverviewDesktop from "@/components/Projects/ProjectOverviewDesktop.vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from "primevue/dialog";

// ref
const visible = ref(false);
</script>

<template>
  <section class="relative px-5 py-10">
    <div class="flex items-start gap-2">
      <div class="mb-10 space-y-3">
        <h1 class="text-191c1e text-3xl font-bold lg:text-4xl">Project Pipeline</h1>
        <p class="text-434655 text-base">Track your team's velocity and upcoming milestones.</p>
      </div>
    </div>

    <div>
      <ProjectOverviewMobile />
      <ProjectOverviewDesktop />
    </div>
  </section>

  <!-- Modal -->
  <div class="card flex justify-center">
    <Button label="Show" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
      <span class="text-surface-500 dark:text-surface-400 mb-8 block"
        >Update your information.</span
      >
      <div class="mb-4 flex items-center gap-4">
        <label for="username" class="w-24 font-semibold">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="mb-8 flex items-center gap-4">
        <label for="email" class="w-24 font-semibold">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>
  </div>
</template>
