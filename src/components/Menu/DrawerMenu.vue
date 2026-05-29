<script setup lang="ts">
// imports
import { computed } from "vue";
import IconLogin from "../icons/IconLogin.vue";
import IconDashboard from "../icons/IconDashboard.vue";
import IconProjects from "../icons/IconProjects.vue";
import IconDevelopers from "../icons/IconDevelopers.vue";
import IconLayers from "../icons/IconLayers.vue";

// props
const props = defineProps<{
  toggleMenu: boolean;
}>();

// emit
const emit = defineEmits<{
  (e: "toggle:menu"): void;
}>();

// computed
const sidebarWidth = computed(() => (props.toggleMenu ? "!w-75 px-4 left-0" : "left-0 p-0"));

// const
const navItems = [
  {
    label: "Dashboard",
    icon: IconDashboard,
    route: "/dashboard",
  },
  {
    label: "Projects",
    icon: IconProjects,
    route: "/projects",
  },
  {
    label: "Developers",
    icon: IconDevelopers,
    route: "/developers",
  },
  {
    label:
      "laksdnklaskldasdlkaskdklasdasdalsdklasdkalskdmkasmlkdmaklsmdklamskldmaklmkldaskldmklasmkl",
    icon: IconLayers,
    route: "/dashboard",
  },
];
</script>

<template>
  <aside
    class="border-c3c6d7 fixed top-0 z-10 flex min-h-screen w-16 flex-col overflow-hidden border-r bg-white px-2 py-4 duration-200 ease-in-out lg:relative"
    :class="sidebarWidth"
  >
    <button
      :class="`mt-2.25 mb-10 min-w-6 ${toggleMenu ? 'self-end' : 'self-center'}`"
      @click="emit('toggle:menu')"
    >
      <img v-if="toggleMenu" src="@/assets/svg/square-chevron-left.svg" />
      <img v-else src="@/assets/svg/square-chevron-right.svg" />
    </button>

    <!-- NAV -->
    <nav class="text-191c1e space-y-2">
      <RouterLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.route"
        class="hover:bg-191c1e/10 flex w-full items-center gap-3 rounded-xl p-3"
      >
        <component :is="item.icon" icon-class="min-w-6" />

        <span v-if="props.toggleMenu" class="truncate">
          {{ item.label }}
        </span>
      </RouterLink>
    </nav>

    <button
      class="hover:bg-191c1e/10 mt-auto flex w-full items-center gap-3 rounded-xl p-3"
      @click="console.log('Login Clicked')"
    >
      <IconLogin icon-class="min-w-6" />
      <span v-if="props.toggleMenu" class="truncate"> Login </span>
    </button>
  </aside>
</template>
