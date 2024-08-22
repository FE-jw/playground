<template>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, at.
    <Multiselect
      :options="options"
      placeholder="select"
      @update:modelValue="onUpdate"
      @select="onSelect"
    ></Multiselect>
  </div>
</template>

<script setup>
// import { useCounterStore } from './stores/counter';
// console.log(useCounterStore);
import { reactive } from 'vue';
import Multiselect from 'vue-multiselect';

const options = reactive(['korea', 'china', 'canada']);

const onSelect = () => {
  console.log('onSelect');
};
const onUpdate = () => {
  console.log('onUpdate');
};
</script>

<style lang="scss" scoped></style>
