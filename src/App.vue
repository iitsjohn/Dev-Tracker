<script setup lang="ts">
// imports
import { ref } from "vue";
import { RouterView } from "vue-router";
import MainHeader from "./components/Layouts/MainHeader.vue";
import MainFooter from "./components/Layouts/MainFooter.vue";
import DrawerMenu from "@/components/Menu/DrawerMenu.vue";

// ref
const isDrawerOpen = ref(false);
</script>

<template>
  <div class="ml-15.75 grid grid-cols-1 lg:ml-0 lg:grid-cols-[auto_1fr]">
    <DrawerMenu :toggleMenu="isDrawerOpen" @toggle:menu="isDrawerOpen = !isDrawerOpen" />

    <div class="w-full">
      <MainHeader />
      <div
        class="relative flex size-full h-[calc(100svh-4.5625rem)] flex-col overflow-y-auto scroll-smooth"
      >
        <RouterView />
        <MainFooter />
      </div>
    </div>
  </div>
</template>
