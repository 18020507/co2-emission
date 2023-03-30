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
      <tr v-for="item in tableData" :key="item.id">
        <td>{{ item.forkliftID }}</td>
        <td>{{ item.forkliftModel }}</td>
        <td>{{ item.fuelType }}</td>
        <td>{{ item.fuelEfficiency }}</td>
        <td>{{ item.unit }}</td>
        <td>{{ item.facilityID }}</td>
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