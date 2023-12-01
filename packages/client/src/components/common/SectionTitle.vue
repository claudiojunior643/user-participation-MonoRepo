<script lang="ts" setup>
  import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
  import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';

  defineProps({
    open: {
      default: true,
      required: true,
      type: Boolean,
    },
    title: {
      required: true,
      type: String,
    },
  });

  const emit = defineEmits(['change']);

</script>

<template>
  <div class="section-title">

    <h2
      class="section-title__title"
      @click="emit('change', !open)"
    >
      {{ title }}
      <ChevronUp v-if="open" />
      <ChevronDown v-else />
    </h2>

  </div>
</template>

<style lang="scss" scoped>
.section-title {
  border-radius: 6px;
  padding-block: 22px;
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.1);
  user-select: none;

  &__title {
    display: flex;
    place-content: center;
    font-size: 22px;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>
