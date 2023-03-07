<template>
  <div class="container-wrap">
    <div class="head-page">
      <h2 class="head-page-content">Scope 1 - Mobile Combusion</h2>
      <SelectConversion />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SelectConversion from "./components/SelectConversion.vue";
export default defineComponent({
  components: SelectConversion,
});
</script>

<style scoped>
.container-wrap {
  margin: 30px;
}
.head-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.head-page-content {
  color: green;
}
</style>