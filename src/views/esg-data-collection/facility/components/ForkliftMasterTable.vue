<template>
  <table>
    <tr class="table-head">
      <th>Forklift ID</th>
      <th>Forklift Model</th>
      <th>Fuel Type</th>
      <th>Fuel Efficiency</th>
      <th>Units</th>
      <th>Facility ID</th>
    </tr>
    <tr v-for="(item, index) in tableData" :key="item.id">
      <template v-if="item.isEditable">
        <td>
          <input
            :value="item.forkliftID"
            @change="(event) =>handleUpdateInput(index, 'forkliftID', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.forkliftModel"
            @change="(event) =>handleUpdateInput(index, 'forkliftModel', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.fuelType"
            @change="(event) =>handleUpdateInput(index, 'fuelType', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.fuelEfficiency"
            @change="(event) =>handleUpdateInput(index, 'fuelEfficiency', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.unit"
            @change="(event) => handleUpdateInput(index, 'unit', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.facilityID"
            @change="(event) =>handleUpdateInput(index, 'facilityID', event.target.value)"
          />
        </td>
      </template>
      <template v-else>
        <td>{{ item.forkliftID }}</td>
        <td>{{ item.forkliftModel }}</td>
        <td>{{ item.fuelType }}</td>
        <td>{{ item.fuelEfficiency }}</td>
        <td>{{ item.unit }}</td>
        <td>{{ item.facilityID }}</td>
      </template>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tableData: Array,
  },
  methods: {
    handleUpdateInput(index, type, value) {
      this.$emit("handleUpdateTableForkliftData", { index, type, value });
    },
  },
});
</script>

<style scoped>
table,
th,
td {
  border: 2px solid #b1b1b1;
  border-collapse: collapse;
}

tr {
  height: 38px;
  text-align: center;
  font-weight: bold;
}

input {
  width: 120px;
}

table {
  width: 80%;
}
.table-head {
  background-color: #b1b1b1;
}
</style>
