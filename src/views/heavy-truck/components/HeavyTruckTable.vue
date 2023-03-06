<template>
  <table>
    <tr class="table-head">
      <th>Date</th>
      <th>Fuel Source</th>
      <th>Branch</th>
      <th>Vehicle</th>
      <th>Amount $</th>
      <th>Gallons</th>
      <th>Client</th>
    </tr>
    <tr v-for="item in tableData" :key="item.id">
      <td>{{ item.date }}</td>
      <td>{{ item.fuelSource }}</td>
      <td>{{ item.branch }}</td>
      <td>{{ item.vehicle }}</td>
      <td>{{ item.amount }}</td>
      <td>{{ item.gallons }}</td>
      <td>{{ item.client }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "HeavyTruckTable",
  props: {
    tableData: Array
  }
};
</script>

<style scoped>
table,
th,
td {
  border: 2px solid black;
  border-collapse: collapse;
}

tr {
  height: 40px;
}

table {
  width: 100%;
}
.table-head {
  background-color: lightgreen;
}
</style>
