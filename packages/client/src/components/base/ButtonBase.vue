<script lang="ts" setup>

  import { type PropType } from 'vue';

  defineProps({
    id: String,
    label: {
      required: true,
      type: String,
    },
    type: {
      default: 'button',
      required: false,
      type: String as PropType<'reset' | 'button' | 'submit' | undefined>,
    },
  });

  const emitButton = defineEmits([
    'click',
  ]);

</script>

<template>
  <button
    :id="id"
    :type="type"
    class="button-base"
    @click="emitButton('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
.button-base {
  /* Layout */
  block-size: 29px;

  /* Background and Border */
  border-radius: 5px;
  border: none;
  background-color: $color-secondary;

  /* Spacing */
  @include spacing(padding-inline, 2);
  @include spacing(padding-block, 1);

  /* Text */
  color: $color-white;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  /* Cursor Behavior */
  cursor: pointer;

  @include mq($until: desktop) {
    inline-size: 100%;
    min-inline-size: 150px;
  }

  &:hover {
    filter: brightness(0.92);
  }

  &:disabled {
    background-color: $color-lightgrey;
    pointer-events: none;
  }
}
</style>
