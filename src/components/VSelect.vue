<template>
  <select class="select" :value="value" @change="handleChange">
    <option v-if="placeholder" value="" disabled selected hidden>{{ placeholder }}</option>
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
    placeholder: {
      type: String,
    },
    value: {
      type: String
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('update:value', event.target.value)
      this.$emit('change', event.target.value)
    }
  },
  emits: ["update:value", "change"]
});
</script>

<style scoped>
.select {
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 0px 10px;
  background-color: green;
  color: white;
  width: 160px;
}

option {
  background-color: white;
  color: black;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 25px;
  margin: 0px 10px;
}
</style>
