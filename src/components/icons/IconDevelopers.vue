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
    :class="`lucide lucide-code-xml-icon lucide-code-xml ${props.iconClass || ''}`"
  >
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
</template>
