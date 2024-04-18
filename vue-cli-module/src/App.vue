<template>
  <button type="button" @click="evtHandler">버튼</button>
</template>

<script setup>
const evtHandler = () => {
  console.log('evtHandler');
};
</script>

<style scoped>
button  {background-color:#000;color:#fff;}
</style>