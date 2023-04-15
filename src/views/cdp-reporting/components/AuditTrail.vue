<template>
  <div class="container">
    <h1>AUDIT TRAIL</h1>
    <div class="metrics-detail">
      <h4>Metrics Detail</h4>
      <p>CO2 (tonnes)</p>
    </div>
    <div class="fuel-source">
      <h4>Fuel Source</h4>
      <p>Gas</p>
    </div>
    <div class="source-data">
      <h4>Source Data</h4>
      <p>Gas</p>
    </div>
    <div class="prepare-by">
      <h4>Prepared By</h4>
      <p>Bill Tran</p>
      <p>Modified: Feb 12th, 2023 - 3.00PM</p>
      <p>Created: Feb 7th, 2023 - 9.00AM</p>
    </div>
    <div class="approve-by">
      <h4>Approved By</h4>
      <p>Roland Riverra</p>
      <p>Opened: Feb 11th, 2023 - 1.00PM</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.container {
  margin: 30px;
}

h1,
h4 {
  color: green;
}
</style>
