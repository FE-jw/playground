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
    <div class="date">
      <myDatePicker @onUpdate="(e) => (date = e)" />
      {{ date }}
    </div>
    <button @click="show = !show">토글</button>
    <Transition
      @enter="(e) => console.log('enter')"
      @after-enter="(e) => console.log('after-enter')"
      @leave="(e) => console.log('leave')"
      @after-leave="(e) => console.log('after-leave')"
      ><p v-if="show">안녕</p></Transition
    >
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';

// Store
import { useDefaultStore } from './stores/default.js';
const { state: defaultState, action: defaultAction } = useDefaultStore();

// Components
import fileUpload from './components/fileUpload.vue';
import myDatePicker from './components/myDatePicker.vue';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';

// variable
const options = reactive(['korea', 'china', 'canada']);
const yon = reactive({
  isLoading: false,
  answer: '',
  image: ''
});
const date = ref();
const show = ref(false);

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
.v-enter-active,
.v-leave-active {
  width: 200px;
  background-color: #d33;
  transition:
    opacity 2s ease,
    width 1s ease;
}

.v-enter-from,
.v-leave-to {
  background-color: #d33;
  opacity: 0;
  width: 100px;
}
</style>
