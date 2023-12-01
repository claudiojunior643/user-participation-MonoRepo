<script lang="ts" setup>
  import HeaderDefault from '@components/layout/HeaderDefault.vue';

  const emit = defineEmits(['mousemove', 'mouseleave']);
</script>

<template>
  <div
    @mousemove="(event) => emit('mousemove', event)"
    @mouseleave="(event) => emit('mouseleave', event)"
  >
    <HeaderDefault />
    <slot />
  </div>
</template>
