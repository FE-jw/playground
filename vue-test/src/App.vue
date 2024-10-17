<template>
  <div>
    <Multiselect
      v-model="defaultState.selectedValue"
      :options="options"
      placeholder="select"
      @update:modelValue="onUpdate"
    />
    <div>
      <button type="button" @click="defaultAction.addName">이름 +추가</button><br />
      <button type="button" @click="defaultAction.resetName">이름 초기화</button><br />
      {{ defaultState.name }}
    </div>
    <button type="button" @click="getYesOrNo">yes or no</button>
    <template v-if="yon.isLoading">
      <div>답변: {{ yon.answer }}</div>
      <div><img :src="yon.image" alt="" /></div>
    </template>
    <fileUpload />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useDefaultStore } from './stores/default.js';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';
import axios from 'axios';

// Components
import fileUpload from './components/fileUpload.vue';

// store
const { state: defaultState, action: defaultAction } = useDefaultStore();

// variable
const options = reactive(['korea', 'china', 'canada']);
const yon = reactive({
  isLoading: false,
  answer: '',
  image: ''
});

const onUpdate = (value) => {
  defaultState.selectedValue = value;
};

const getYesOrNo = () => {
  yon.isLoading = false;

  axios.get('https://yesno.wtf/api').then((res) => {
    const { data } = res;

    yon.answer = data.answer;
    yon.image = data.image;
    yon.isLoading = true;
  });
};
</script>

<style lang="scss" scoped>
.multiselect {
  width: 50%;
  margin: 50px;
}
</style>
