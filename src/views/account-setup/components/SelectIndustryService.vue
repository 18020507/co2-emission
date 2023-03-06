<template>
  <div class="container-wrap">
    <div class="name-form-child">{{ nameFormChild }}</div>
    <div class="form-content"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VSelect from "../../components/VSelect.vue";

export default defineComponent({
  components: VSelect,
  props: {
    nameFormChild: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped></style>
