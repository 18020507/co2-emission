<template>
  <div class="list-button">
    <ButtonVue buttonText="Add new row" />
    <ButtonVue buttonText="Import Excel" />
    <ButtonVue buttonText="Connect App" />
    <ButtonVue buttonText="Commit Data" />
  </div>
</template>

<script>
import ButtonVue from "@/components/Button.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { ButtonVue },
});
</script>

<style scoped>
.list-button {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
</style>
