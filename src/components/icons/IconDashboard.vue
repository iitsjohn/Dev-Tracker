<script setup lang="ts">
const props = defineProps<{
  size?: string;
  color?: string;
  iconClass?: string;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size || '24'"
    :height="props.size || '24'"
    viewBox="0 0 24 24"
    :fill="props.color || 'none'"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="`lucide lucide-layout-dashboard-icon lucide-layout-dashboard ${props.iconClass || ''}`"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
</template>
