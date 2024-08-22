import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const defaultStore = defineStore('default', () => {
  // state
  const state = reactive({
    name: 'jw'
  });

  // actions
  const actions = {
    init() {
      console.log('init');
    }
  };

  return { state, actions };
});