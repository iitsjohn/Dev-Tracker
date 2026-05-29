<script setup lang="ts">
// imports
import IconLogin from "@/components/icons/IconLogin.vue";
import IconDashboard from "@/components/icons/IconDashboard.vue";

// props
const props = defineProps<{
  navs: { name: string; path: string }[];
  closeCallback: () => void;
}>();
</script>

<template>
  <div class="flex size-full flex-col py-6">
    <button class="mr-4 mb-4 size-8 self-end" @click="closeCallback">
      <img src="@/assets/svg/close.svg" />
    </button>

    <ul class="border-191c1e border-t font-medium">
      <li v-for="nav in props.navs" :key="nav.path" class="w-full">
        <RouterLink
          :to="nav.path"
          class="hover:bg-primary-100 border-191c1e flex w-full items-center gap-3 border-b p-4 duration-200 hover:text-white"
        >
          <IconDashboard />
          {{ nav.name }}
        </RouterLink>
      </li>
    </ul>

    <RouterLink
      to="/login"
      class="bg-primary-100 hover:text-191c1e mt-auto flex items-center justify-between p-4 font-medium text-white duration-200 hover:bg-white"
    >
      Login
      <IconLogin />
    </RouterLink>
  </div>
</template>
