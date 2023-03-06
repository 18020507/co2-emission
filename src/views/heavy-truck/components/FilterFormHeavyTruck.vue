<template>
  <div class="filter-form">
    <input type="text" placeholder="What are you looking for?" />
    <div class="list-button-filter">
      <VSelect :options="fuelOptions"/>
      <VSelect :options="branchOptions"/>
      <SelectClient />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VSelect from "@/components/VSelect.vue";
import {SelectClient} from "@/views/components/select"
export default defineComponent({
  components: {
    VSelect,
    SelectClient,
  },
  data() {
    return {
      fuelOptions: [
        { label: "gas", value: "Gas" },
        { label: "diesel", value: "Diesel" },
      ],
      branchOptions: [
        { label: "009", value: "009" },
        { label: "008", value: "008" },
      ],
    };
  },
});
</script>

<style scoped>
.filter-form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.list-button-filter {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 100px;
}
</style>
