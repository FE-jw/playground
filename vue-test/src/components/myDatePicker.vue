<template>
  <VueDatePicker
    class="my-datepicker"
    v-model="date"
    :enable-time-picker="false"
    @update:model-value="(e) => $emit('onUpdate', e)"
  />
</template>

<script setup>
import { ref } from 'vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();
</script>

<style lang="scss" scoped>
.my-datepicker {
  --dp-cell-border-radius: 50%;
  --dp-border-color: #000;

  width: 300px;

  &:deep(.dp__active_date) {
    --dp-primary-color: #d33;
  }
  &:deep(.dp__today) {
    --dp-primary-color: #d33;
  }
}
</style>
