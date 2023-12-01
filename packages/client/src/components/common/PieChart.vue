<script lang="ts" setup>
  import type { ChartData, ChartOptions } from 'chart.js';
  import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
  import type { ComputedRef, PropType } from 'vue';
  import { computed } from 'vue';
  import { Pie } from 'vue-chartjs';
  import type { IParticipationChart } from '@models/participationChart.types';

  ChartJS.register(ArcElement, Tooltip, Legend);

  const props = defineProps({
    data: {
      required: true,
      type: Object as PropType<IParticipationChart>,
    },
  });

  const chartDataForm: ComputedRef<ChartData> = computed((data = props.data) => {
    return {
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [...data.data],
        },
      ],
      labels: [...data.labels],
      legend: {
        position: 'bottom',
      },
    };
  });
  const options: ChartOptions = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          borderRadius: 10000,
          boxHeight: 25,
          boxWidth: 25,
        },
        position: 'bottom',
      },
    },
    responsive: true,
  };
</script>

<template>
  <div class="chart-pie">
    <Pie
      id="participation-chart"
      :data="chartDataForm as any"
      :options="options"
    />
  </div>
</template>

<style lang="scss" scoped>
.chart-pie {
  block-size: 300px;
}
</style>
