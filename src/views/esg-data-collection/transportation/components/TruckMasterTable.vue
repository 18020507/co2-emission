<template>
  <table>
    <tr class="table-head">
      <th>Vehicle ID</th>
      <th>Truck Make</th>
      <th>Truck Model</th>
      <th>Truck Year</th>
      <th>Truck Mileage</th>
    </tr>
    <tr v-for="(item, index) in tableData" :key="item.id">
      <template v-if="item.isEditable">
        <td>
          <input
            :value="item.vehicleID"
            @change="(event) =>handleUpdateInput(index, 'vehicleID', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.truckMake"
            @change="(event) =>handleUpdateInput(index, 'truckMake', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.truckModel"
            @change="(event) =>handleUpdateInput(index, 'truckModel', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.truckYear"
            @change="(event) =>handleUpdateInput(index, 'truckYear', event.target.value)"
          />
        </td>
        <td>
          <input
            :value="item.truckMileage"
            @change="(event) => handleUpdateInput(index, 'truckMileage', event.target.value)"
          />
        </td>
      </template>
      <template v-else>
        <td>{{ item.vehicleID }}</td>
        <td>{{ item.truckMake }}</td>
        <td>{{ item.truckModel }}</td>
        <td>{{ item.truckYear }}</td>
        <td>{{ item.truckMileage }}</td>
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
      console.log({ index, type });
      this.$emit("handleUpdateTableTransData", { index, type, value });
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
  table-layout: fixed;
}
.table-head {
  background-color: #b1b1b1;
}
</style>
