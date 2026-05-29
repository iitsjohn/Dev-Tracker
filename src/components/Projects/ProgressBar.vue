<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    progress?: number;
    hasPercent?: boolean;
  }>(),
  {
    hasPercent: true,
  },
);
</script>

<template>
  <div
    class="bg-d0e1fb relative h-3 w-full overflow-hidden rounded-full text-center text-[0.625rem]"
  >
    <span
      v-if="props.hasPercent"
      class="text-191c1e absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >{{ props.progress }}%</span
    >
    <div class="bg-primary-100 h-full" :style="{ width: `${props.progress}%` }"></div>
  </div>
</template>
