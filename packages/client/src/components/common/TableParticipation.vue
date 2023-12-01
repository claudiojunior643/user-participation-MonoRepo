<script lang="ts" setup>
  import { computed, type PropType, reactive, type Ref, ref } from 'vue';
  import type { IUserParticipation } from '@models/userParticipation.types';
  import Delete from 'vue-material-design-icons/Delete.vue';
  import AccountEdit from 'vue-material-design-icons/AccountEdit.vue';
  import { ConfirmAction, InputBase } from '@components/index';

  const props = defineProps({
    data: {
      required: true,
      type: Array as PropType<IUserParticipation[]>,
    },
  });

  const emit = defineEmits(['removeUser', 'updateUser']);

  const isEdit = ref(false);

  const isRemove: Ref<number[]> = ref([]);

  const formData: IUserParticipation = reactive({
    firstName: '',
    id: -1,
    lastName: '',
    stocks: -1,
  });

  const editUser = (user: IUserParticipation): void => {
    formData.id = user.id;
    formData.firstName = user.firstName;
    formData.lastName = user.lastName;
    formData.stocks = user.stocks;
    isEdit.value = true;
  };

  const resetFormData = (): void => {
    formData.id = -1;
    formData.firstName = '';
    formData.lastName = '';
    formData.stocks = -1;
    isEdit.value = false;
  };

  const handleCancel = (id: number): void => {
    isRemove.value = isRemove.value.filter((el) => el !== id);
  };

  const sendNewFormData = (): void => {
    emit('updateUser', formData);

    setTimeout(() =>
      resetFormData(), 100,
    );
  };

  const tableOptions = computed(() => ({
    headers: ['First name', 'Last name', 'Stocks', 'Actions'],
    rows: props.data ?? [],
  }));
</script>

<template>
  <table class="table-participation">
    <tr class="table-participation__row">
      <th class="table-participation__cell table-participation__cell--header" />
      <th
        v-for="header of tableOptions.headers"
        :key="`header-${header}`"
        class="table-participation__cell table-participation__cell--header"
      >
        {{ header }}
      </th>
    </tr>
    <tr
      v-for="(user, index) of tableOptions.rows"
      :key="`user-${index}`"
      class="table-participation__row"
    >
      <td
        data-testid="table-index"
        class="table-participation__cell"
      >
        {{ index + 1 }}
      </td>
      <td class="table-participation__cell">
        <div class="table-participation__cell--container">
          <input-base
            v-if="isEdit && user.id === formData.id"
            data-testid="edit-first-name"
            placeholder="New first name" variant="input"
            v-model="formData.firstName"
          />
          <template v-else>
            {{ user.firstName }}
          </template>
        </div>
      </td>

      <td class="table-participation__cell">
        <div class="table-participation__cell--container">
          <input-base
            v-if="isEdit && user.id === formData.id"
            data-testid="edit-last-name"
            placeholder="New last name"
            variant="input"
            v-model="formData.lastName"
          />
          <template v-else>
            {{ user.lastName }}
          </template>
        </div>
      </td>

      <td class="table-participation__cell">
        <div class="table-participation__cell--container">
          <input-base
            v-if="isEdit && user.id === formData.id"
            data-testid="edit-stocks"
            placeholder="New stocks"
            variant="input"
            v-model="formData.stocks"
          />
          <template v-else>
            {{ user.stocks.toLocaleString('pt-BR') }}
          </template>
        </div>
      </td>
      <td
        class="table-participation__cell table-participation__cell--center"
      >
        <template v-if="user.id && isRemove.includes(user.id)">
          <p>Confirm to remove:</p>
          <confirm-action
            @cancel="handleCancel(user.id ?? 0)"
            @confirm="emit('removeUser', user.id)"
          />

        </template>
        <confirm-action
          v-else-if="isEdit && user.id === formData.id"
          @cancel="resetFormData()"
          @confirm="sendNewFormData()"
        />
        <template v-else>

          <button
            :id="`delete-${user.id}`"
            data-testid="delete-button"
            class="table-participation__button"
            @click="user.id && isRemove.push(user.id)"
          >
            <delete :id="`delete-icon-${user.id}`" fill-color="#E36800" />
          </button>

          <button
            data-testid="edit-button"
            class="table-participation__button"
            @click="editUser(user)"
          >
            <account-edit fill-color="#394b50" />
          </button>
        </template>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.table-participation {
  block-size: fit-content;

  &__popup {
    position: absolute;
    background-color: lightgreen;
    width: 100px;
    border-radius: 10px;
    height: 20px;
    box-shadow: 1px 1px 1px 1px black;
  }

  &__cell {
    border: 1px solid black;
    max-inline-size: 80px;
    vertical-align: middle;

    &:first-child {
      text-align: center;
    }

    &:last-child {
      padding: 6px 18px;
      max-inline-size: 30px
    }

    &--header {
      font-weight: 700;
    }

    &--center {
      text-align: center;
    }

    &--container {
      box-sizing: border-box;
      block-size: 18px;
      height: 100%;
      display: flex;
      align-items: center;
      @include spacing(padding-inline, 3);
    }

  }

  &__button {
    border: none;
    cursor: pointer;
    margin-inline: 6px;
    background-color: transparent;

    &:hover {
      filter: brightness(0.9);
    }
  }
}
</style>
