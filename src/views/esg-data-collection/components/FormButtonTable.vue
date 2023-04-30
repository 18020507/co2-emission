<template>
  <div class="list-button">
    <ButtonVue buttonText="Add new row" @click="addNewRow" />
    <ButtonVue buttonText="Import Excel" />
    <ButtonVue buttonText="Connect App" />
    <ButtonVue buttonText="Save" @click="commitData" />
  </div>
</template>

<script>
import ButtonVue from "@/components/Button.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { ButtonVue },
  props: {
    addNewRow: {
      type: Function,
      default: () => ({}),
    },
    commitData: {
      type: Function,
      default: () => ({}),
    },
  },
});
</script>

<style scoped>
.list-button {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
</style>
