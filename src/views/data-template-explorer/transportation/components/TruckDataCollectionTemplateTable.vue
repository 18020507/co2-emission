<template>
  <table>
    <tr class="table-head">
      <th>Date</th>
      <th>Vehicle ID</th>
      <th>Client Name</th>
      <th>Fuel Source</th>
      <th>Fuel Amount</th>
      <th>Distance Travel</th>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
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

table {
  width: 80%;
  table-layout: fixed;
}
.table-head {
  background-color: #b1b1b1;
}
</style>
