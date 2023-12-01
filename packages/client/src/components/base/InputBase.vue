<script lang="ts" setup>
  import { type PropType } from 'vue';

  defineProps({
    error: {
      default: '',
      required: false,
      type: String,
    },
    id: {
      default: '',
      required: false,
      type: String,
    },
    label: {
      default: '',
      required: false,
      type: String,
    },
    modelValue: {
      default: '',
      type: [String, Number],
    },
    name: {
      default: null,
      required: false,
      type: String,
    },
    placeholder: String,
    type: {
      default: 'text',
      required: false,
      type: String,
    },
    variant: {
      default: 'base',
      required: false,
      type: String as PropType<'base' | 'input'>,
    },
  });

  const inputEmit = defineEmits([
    'update:modelValue',
    'input',
    'focus',
    'blur',
    'keydown',
    'keyup',
    'keypress',
    'change',
    'click',
  ]);

  const handleInput = (event: Event): void => {
    inputEmit('update:modelValue', (event?.target as HTMLInputElement)?.value);
  };

</script>

<template>
  <div
    class="input-base"
  >
    <label
      v-if="variant !== 'input'"
      :for="id"
      class="input-base__label"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      class="input-base__input"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="inputEmit('focus', $event)"
      @blur="inputEmit('blur', $event)"
      @keydown="inputEmit('keydown', $event)"
      @keyup="inputEmit('keyup', $event)"
      @keypress="inputEmit('keypress', $event)"
      @change="inputEmit('change', $event)"
      @click="inputEmit('click', $event)"
    >
    <div
      v-if="variant !== 'input'"
      data-testid="helper-text"
      class="input-base__help-text"
    >
      {{ error }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-base {
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  position: relative;

  &__label {
    color: $color-dark;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:has(+ input:focus) {
      color: $color-primary;
    }
  }

  &__input {
    box-sizing: border-box;
    border-radius: 6px;
    border: 0.12rem solid $color-dark;
    outline: none;
    block-size: 30px;
    inline-size: 100%;
    padding-inline-start: 10px;
    transition: all 0.2s ease-in-out;

    &:focus {
      border-color: $color-primary;
      border-width: 0.125rem;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    @include mq($until: desktop) {
      block-size: 40px;
      font-size: 16px;
    }

  }

  &__help-text {
    color: $color-danger;
    font-size: 12px;
    font-weight: 500;
    @include mq($from: desktop) {
      position: absolute;
      inset-block-start: 53px;
    }
  }
}
</style>
