<template>
  <div class="container">
    <div class="head-page">
      <h2 class="head-page-content">Headquarter Data Collection Template</h2>
    </div>
    <div class="master-data-table">
      <div class="table">
        <HeadquaterDataCollectionTemplateTable />
      </div>
      <div class="form-button">
        <ButtonVue buttonText="Adopted" />
      </div>
    </div>

    <div class="head-page">
      <h2 class="head-page-content">Warehouse Data Collection Template</h2>
    </div>
    <div class="master-data-table">
      <div class="table">
        <WarehouseDataCollectionTemplateTable />
      </div>
      <div class="form-button">
        <ButtonVue buttonText="Adopted" />
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonVue from "@/components/Button.vue";
import HeadquaterDataCollectionTemplateTable from "./components/HeadquarterDataCollectionTemplateTable.vue";
import WarehouseDataCollectionTemplateTable from "./components/WarehouseDataCollectionTemplateTable.vue";

export default defineComponent({
  components: { HeadquaterDataCollectionTemplateTable, WarehouseDataCollectionTemplateTable, ButtonVue },
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
