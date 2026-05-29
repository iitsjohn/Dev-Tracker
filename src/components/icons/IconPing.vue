<script setup lang="ts">
const props = defineProps<{
  size?: string;
  color?: string;
}>();
</script>

<template>
  <span class="relative flex" :class="`size-${props.size || '3'}`">
    <span
      :class="`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`"
      :style="`background-color: #${props.color || '2563eb'}`"
    ></span>
    <span
      :class="`relative inline-flex ${props.size ? `size-${props.size}` : 'size-3'} rounded-full`"
      :style="`background-color: #${props.color || '2563eb'}`"
    ></span>
  </span>
</template>
