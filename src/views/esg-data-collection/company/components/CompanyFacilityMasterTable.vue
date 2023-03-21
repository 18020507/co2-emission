<template>
  <table>
    <tr class="table-head">
      <th>Facility Type</th>
      <th>Facility Address</th>
      <th>Employees No</th>
      <th>Forklift No</th>
      <th>Forklift ID</th>
    </tr>
    <tr v-for="item in tableData" :key="item.id">
      <td>{{ item.facilityType }}</td>
      <td>{{ item.facilityAddress }}</td>
      <td>{{ item.employeeNo }}</td>
      <td>{{ item.forkliftNo }}</td>
      <td>{{ item.forkliftID }}</td>
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