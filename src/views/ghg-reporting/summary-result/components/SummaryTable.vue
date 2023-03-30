<template>
    <table>
      <tr class="table-head">
        <th>Scope</th>
        <th>Activity Type</th>
        <th>CO2 (tones)</th>
      </tr>
      <tr v-for="item in tableData" :key="item.id">
        <td>{{ item.scope }}</td>
        <td>{{ item.activityType }}</td>
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
  