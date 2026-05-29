<script setup lang="ts">
import ActiveDevelopers from "../Developers/ActiveDevelopers.vue";
import BenchedDevelopers from "../Developers/BenchedDevelopers.vue";
</script>

<template>
  <section class="mx-auto my-10 w-full max-w-480 px-4 lg:my-20">
    <div class="mb-12 w-full space-y-4">
      <h1 class="text-191c1e text-4xl font-bold xl:text-[3rem]">Team Availability</h1>
      <p class="text-434655 text-base">Real-time pulse of your engineering and design resources.</p>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-12">
      <ActiveDevelopers />
      <BenchedDevelopers />
    </div>
  </section>
</template>

<style scoped></style>
