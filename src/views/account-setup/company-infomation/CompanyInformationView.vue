<template>
  <div class="container">
    <div class="section-head">Company Information</div>
    <div class="section-content">
      <div class="column">
        <div class="columnContent">
          <h3>Legal Name</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Legal Address</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Employer Identification Number (EIN)</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Company Number of Facilities</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Company Industry</h3>
          <input />
        </div>
      </div>
      <div class="column">
        <div class="columnContent">
          <h3>Contact Name</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Contact Email</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Contact Phone Number</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Company Sector</h3>
          <input />
        </div>
        <div class="columnContent">
          <h3>Company Services</h3>
          <input />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.container {
  margin-top: 34px;
  margin-left: 38px;
}

.section-head {
  font-weight: bold;
  color: green;
  font-size: 20px;
}

.section-content {
  display: flex;
  flex-direction: row;
  margin-left: 61px;
}

input {
  width: 337px;
  border-radius: 5px;
  padding: 10px 10px;
  border: none;
}

.column {
  margin-right: 100px;
}
</style>
