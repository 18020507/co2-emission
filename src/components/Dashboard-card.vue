<template>
  <div class="dashboard-card">
    <h3>{{ dashboardCardHeader }}</h3>
    <p>{{ fuelValue }}</p>
    <p>(CO2 tons)</p>
  </div>
</template>

<script>
export default {
  name: "DashboardCardComponent",
  props: {
    dashboardCardHeader: {
      type: String,
      default: () => "Text",
    },
    fuelValue: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.dashboard-card {
  width: 270px;
  height: 150px;
  background-color: green;
  border-radius: 5%;
  text-align: center;
}

h3 {
  color: white;
}

p {
  color: white;
  font-weight: bold;
}
</style>
