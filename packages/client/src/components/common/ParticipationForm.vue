<script lang="ts" setup>
  import { reactive } from 'vue';
  import * as yup from 'yup';
  import { StringSchema } from 'yup';
  import type { IUserForm } from '@/models';
  import { ButtonBase, InputBase } from '@/components';

  const emit = defineEmits(['submit']);

  // Types
  interface CustomEvent extends Event {
    target: EventTarget & {
      name: string;
      value: string;
    };
  }

  // States
  const formData = reactive<IUserForm>({
    firstName: '',
    lastName: '',
    stocks: '',
  });

  const errors = reactive<IUserForm>({
    firstName: '',
    lastName: '',
    stocks: '',
  });

  // Methods
  const clearFormData = (): void => {
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        formData[key as keyof IUserForm] = '';
        errors[key as keyof IUserForm] = '';
      }
    }
  };
  const submit = (): void => {

    emit('submit', formData);

    clearFormData();
  };

  const fieldSchema: Record<string, StringSchema> = {
    firstName: yup.string().required('Field is required'),
    lastName: yup.string().required('Field is required'),
    stocks: yup.string().required('Field is required'),
  };

  const validationSchema = yup.object({
    firstName: fieldSchema.firstName,
    lastName: fieldSchema.lastName,
    stocks: fieldSchema.stocks,
  });

  const checkField = (event: CustomEvent): void => {
    const { value, name } = event.target;
    try {

      fieldSchema[name].validateSync(value);

      errors[name as keyof IUserForm] = '';

    } catch (err) {
      if (err instanceof Error) {
        errors[name as keyof IUserForm] = err.message;
      }
    }
  };

  const isFormDataFilled = (): boolean => {
    return Object.values(formData).filter(item => item).length === 3;
  };

  const isValidFormData = (): boolean => {

    try {
      if (!isFormDataFilled()) {
        return false;
      }
      validationSchema.validate(formData);
      return true;
    } catch (err) {
      return false;
    }
  };
</script>

<template>
  <form
    class="participation-form"
    @submit.prevent="submit"
  >
    <input-base
      class="participation-form__input"
      label="First name"
      name="firstName"
      placeholder="User First name"
      :error="errors.firstName"
      v-model="formData.firstName"
      @blur="checkField"
    />

    <input-base
      class="participation-form__input"
      label="Last name"
      name="lastName"
      placeholder="User Last name"
      :error="errors.lastName"
      v-model="formData.lastName"
      @blur="checkField"
    />

    <input-base
      type="number"
      class="participation-form__input participation-form__input--sm"
      label="Stocks"
      name="stocks"
      placeholder="Quantity"
      :error="errors.stocks"
      v-model="formData.stocks"
      @blur="checkField"
    />

    <button-base
      class="participation-form__button"
      label="Submit"
      @click="submit"
      :disabled="!isValidFormData()"

    />
  </form>
</template>

<style lang="scss" scoped>
.participation-form {
  box-sizing: border-box;
  inline-size: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @include spacing(column-gap, 4);
  @include spacing(row-gap, 4);
  align-items: end;

  @include mq($until: desktop) {
    inline-size: 60%;
    margin-inline: auto;
    min-inline-size: 100px;
    flex-direction: column;
    align-items: center;
  }

  &__input {
    flex: 3;

    &--sm {
      flex: 1;
    }
  }

  &__button {
    flex: 1;
  }

}
</style>
