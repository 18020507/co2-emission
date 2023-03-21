<template>
  <table>
    <tr class="table-head">
      <th>Vehicle ID</th>
      <th>truck Make</th>
      <th>Truck Model</th>
      <th>Truck Year</th>
      <th>Truck Mileage</th>
    </tr>
    <tr v-for="item in tableData" :key="item.id">
      <td>{{ item.vehicleID }}</td>
      <td>{{ item.truckMake }}</td>
      <td>{{ item.truckModel }}</td>
      <td>{{ item.truckYear }}</td>
      <td>{{ item.truckMileage }}</td>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({
    props: {
    tableData: Array
  }
})
</script>

<style scoped>
table,
th,
td {
  border: 2px solid #B1B1B1;
  border-collapse: collapse;
}

tr {
  height: 38px;
  text-align: center;
  font-weight: bold;
}

table {
  width: 80%;
}
.table-head {
  background-color: #B1B1B1;
}
</style>