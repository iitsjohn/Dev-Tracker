<script setup lang="ts">
const props = defineProps<{
  status?: string;
  color?: string;
  count: number;
}>();
</script>

<template>
  <div class="flex items-center justify-between font-semibold">
    <h2 :class="`relative text-sm transition-all text-${props.color}`">{{ props.status }}</h2>
    <div
      :class="`bg-${props.color}/10 text-${props.color} flex items-center justify-center rounded-sm px-2 py-0.5 text-[0.625rem]`"
    >
      {{ props.count }}
    </div>
  </div>
</template>
