<template>
  <select class="select">
    <option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</option>
  </select>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.select {
  text-align: center;
  font-size: 10px;
  border-radius: 6px;
  padding: 10px 25px;
  margin: 0px 10px;
}
</style>
