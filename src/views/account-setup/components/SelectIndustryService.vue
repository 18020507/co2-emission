<template>
  <div class="container-wrap">
    <div class="name-form-child">{{ nameFormChild }}</div>
    <div class="form-content">
      <VSelect :options="options" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VSelect from "@/components/VSelect.vue";
export default defineComponent({
  components: { VSelect },
  props: {
    nameFormChild: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.container-wrap {
  display: flex;
}
.name-form-child {
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 10px;
}
</style>
