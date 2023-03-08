<template>
  <table>
    <tr class="table-head">
      <th>Date</th>
      <th>Fuel Source</th>
      <th>Amount of Fuel</th>
      <th>Units</th>
      <th>CO2 (tonnes)</th>
    </tr>
    <tr v-for="item in tableData" :key="item.id">
      <td>{{ item.date }}</td>
      <td>{{ item.fuelSource }}</td>
      <td>{{ item.amountOfFuel }}</td>
      <td>{{ item.units }}</td>
      <td>{{ item.co2 }}</td>
    </tr>
  </table>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tableData: Array,
  },
});
</script>
  
<style scoped>
table, th, td {
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
  