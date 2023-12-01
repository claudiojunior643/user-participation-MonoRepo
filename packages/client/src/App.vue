<script lang="ts" setup>
  import { computed, reactive } from 'vue';
  import MainLayout from '@layout/MainLayout.vue';
  import HomePage from '@pages/HomePage.vue';

  const mousePosition = reactive({
    x: '50%',
    y: '0',
  });

  const backgroundGradient = computed(() => {
    const { x, y } = mousePosition;

    return {
      background: `radial-gradient(circle at ${x} ${y}, #1789E6, #0D4C80, #0F5B9A)`,
    };
  });

  const redefinePositions = (element: MouseEvent): void => {

    mousePosition.x = `${element?.clientX ?? 0}px`;
    mousePosition.y = `${element?.clientY ?? 0}px`;
  };

  const resetPositions = (): void => {
    mousePosition.x = '50%';
    mousePosition.y = '0';
  };
</script>

<template>
  <MainLayout
    class="app"
    :style="backgroundGradient"
    @mousemove="redefinePositions"
    @mouseleave="resetPositions"
  >
    <HomePage />
  </MainLayout>
</template>

<style lang="scss">
.app {
  background-color: $color-primary;
  height: 100dvh;
}
</style>
