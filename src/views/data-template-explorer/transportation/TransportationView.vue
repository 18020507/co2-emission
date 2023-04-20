<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Truck Data Collection Template</h2>
    </div>
    <div class="master-data-table">
      <div class="table">
        <TruckDataCollectionTemplateTable />
      </div>
      <div class="form-button">
        <ButtonVue buttonText="Adopted" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "@/components/Button.vue";
import { defineComponent } from "vue";
import TruckDataCollectionTemplateTable from "./components/TruckDataCollectionTemplateTable.vue";

export default defineComponent({
  components: { TruckDataCollectionTemplateTable, ButtonVue },
});
</script>
<style scoped>
.head-page-content {
  color: green;
}

.form-button {
  margin-top: 10px;
  width: 80%;
  display: flex;
  justify-content: flex-end;
}
</style>
