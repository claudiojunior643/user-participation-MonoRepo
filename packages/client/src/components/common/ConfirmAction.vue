<script lang="ts" setup>
  import Close from 'vue-material-design-icons/Close.vue';
  import Check from 'vue-material-design-icons/Check.vue';

  const emit = defineEmits(['cancel', 'confirm']);

</script>

<template>
  <button
    data-testid="cancel-button"
    class="confirm-action"
    @click="emit('cancel')"
  >
    <close fill-color="#E36800" />
  </button>

  <button
    data-testid="confirm-button"
    class="confirm-action"
    @click="emit('confirm')"
  >
    <check fill-color="#394b50" />
  </button>

</template>

<style lang="scss" scoped>
.confirm-action {
  border: none;
  cursor: pointer;
  margin-inline: 6px;
  background-color: transparent;

  &:hover {
    filter: brightness(0.9);
  }
}

</style>