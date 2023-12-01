<script lang="ts" setup></script>

<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.2);
  width: 80dvw;
  height: 80dvh;
}
</style>
