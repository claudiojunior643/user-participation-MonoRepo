<script lang="ts" setup>
  import { computed, type ComputedRef, type PropType } from 'vue';
  import { PieChart, TableParticipation } from '@/components';
  import type { IParticipationChart, IUserParticipation } from '@/models';
  import { useEditUser, useRemoveUser } from '@/composables';

  const props = defineProps({
    data: {
      required: true,
      type: Array as PropType<IUserParticipation[]>,
    },
  });

  const emit = defineEmits(['change']);

  const { mutate: removeUser } = useRemoveUser({ onSuccess: () => emit('change') });
  const { mutate: editUser } = useEditUser({ onSuccess: () => emit('change') });

  const chartData: ComputedRef<IParticipationChart> = computed(() => ({
    data: props.data.map(item => item.stocks),
    labels: props.data.map(item => item.firstName),
  }));

</script>

<template>
  <div class="user-participation">
    <div
      class="user-participation__container"
    >
      <table-participation
        :data="data"
        class="user-participation__table"
        @remove-user="removeUser"
        @update-user="editUser"
      />
    </div>
    <div
      class="user-participation__chart"
    >
      <PieChart
        :data="chartData"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-participation {
  max-block-size: 100%;
  display: flex;
  flex-wrap: wrap;
  @include spacing(column-gap, 5);
  @include spacing(row-gap, 5);


  &__container {
    flex: 2;
    block-size: 100%;
    min-inline-size: 600px;
    max-inline-size: 1040px;
    overflow: auto;
  }

  &__table {
    inline-size: 100%;
  }

  &__chart {
    margin-inline: auto;
    @include mq($from: desktop, $until: desktop) {
      flex: 1
    }
  }
}
</style>
