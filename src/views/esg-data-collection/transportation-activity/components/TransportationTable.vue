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
      <tr v-for="item in tableData" :key="item.id">
        <td>{{ item.date }}</td>
        <td>{{ item.vehicleID }}</td>
        <td>{{ item.clientName }}</td>
        <td>{{ item.fuelSource }}</td>
        <td>{{ item.fuelAmount }}</td>
        <td>{{ item.distanceTravel }}</td>
      </tr>
    </table>
  </template>
  
  <script>
  export default {
    name: "FacilityTable",
    props: {
      tableData: Array
    }
  };
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
    width: 100%;
    table-layout: fixed;
  }
  .table-head {
    background-color: #B1B1B1;
  }
  </style>
  