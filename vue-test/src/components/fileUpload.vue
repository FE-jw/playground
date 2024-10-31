<template>
  <div>
    <button type="button" class="btn-disabled" @click="disabledUpload">비활성화 토글</button>
    <button type="button" class="btn-reverse" @click="reverseOrder">오름차순/내림차순</button>
    <div
      class="file-wrap"
      :class="{ uploaded: isUploaded, mouseenter: isMounseEnter, disabled: isDisabled }"
    >
      <input type="file" ref="inpFile" @change="uploadFile" :disabled="isDisabled" />
      <div class="total-data" v-if="totalDataLength">총 {{ totalDataLength }}건</div>
      <ul v-if="resultData">
        <li v-for="data in resultData" :key="data.id">
          {{ data }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const inpFile = ref(null);
const isUploaded = ref(false);
const isMounseEnter = ref(false);
const isDisabled = ref(false);
const resultData = ref([]);
const totalDataLength = ref(0);

// 파일 업로드
const uploadFile = (evt) => {
  console.log(evt.target.files[0]);
  if (evt.target.files.length > 0) {
    console.log(evt.target.name);
    isUploaded.value = true;
  }

  const file = evt.target.files[0];

  const reader = new FileReader();
  reader.onload = (event) => {
    const result = event.target.result.replaceAll('\n', ',').replaceAll('\r', '');
    const csvData = result.split(',');

    resultData.value = csvData;
    totalDataLength.value = csvData.length;
  };

  reader.readAsText(file);
};

// 비활성화
const disabledUpload = () => {
  isDisabled.value = !isDisabled.value;
};

// 오름차순/내림차순 변경
const reverseOrder = () => {
  resultData.value.reverse();
};
</script>

<style lang="scss" scoped>
.btn-reverse,
.btn-disabled {
  display: block;
  line-height: 1.2;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding: 20px;
  background-color: #000;
  cursor: pointer;
  border: none;
}

.file-wrap {
  width: calc(100% - 40px);
  margin: 20px auto 0;
  height: 200px;
  position: relative;
  border: 4px solid #000;
  border-radius: 5px;
  box-sizing: border-box;

  input[type='file'] {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;

    &:disabled {
      pointer-events: none;
    }
  }

  // 마우스 진입
  &.mouseenter {
    background-color: gray;
  }

  // 업로드 후
  &.uploaded {
    background-color: #d33;
  }

  // 비활성화
  &.disabled {
    background-color: #ccc;
  }
}
</style>
