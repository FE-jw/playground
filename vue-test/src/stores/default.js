import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useDefaultStore = defineStore('default', () => {
  // state
  const state = reactive({
    name: 'jw',
    selectedValue: ''
  });

  // action
  const action = {
    addName() {
      state.name += '+';
    },
    resetName() {
      state.name = '';
    }
  };

  return { state, action };
});
