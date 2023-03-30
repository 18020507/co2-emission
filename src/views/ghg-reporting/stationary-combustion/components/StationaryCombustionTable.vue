<template>
    <table>
      <tr class="table-head">
        <th>Year</th>
        <th>Facility ID</th>
        <th>Amount of Fuel</th>
        <th>Units</th>
        <th>CO2 (tonnes)</th>
      </tr>
      <tr v-for="item in tableData" :key="item.id">
        <td>{{ item.year }}</td>
        <td>{{ item.facilityID }}</td>
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
    width: 100%;
  }
  .table-head {
    background-color: #b1b1b1;
  }
  </style>
  