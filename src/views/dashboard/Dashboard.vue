<template>
  <div class="list-dashboard-card">
    <DashboardCardComponent dashboardCardHeader="TOTAL" />
    <DashboardCardComponent dashboardCardHeader="GAS" />
    <DashboardCardComponent dashboardCardHeader="DIESEL" />
    <DashboardCardComponent dashboardCardHeader="PROPANE" />
    <DashboardCardComponent dashboardCardHeader="ELECTRICITY" />
  </div>
  <div class="dashboard-content">
    <div class="dashboard-chart"></div>
    <div class="dashboard-filter">
      <FilterFormDashBoard />
    </div>
  </div>
</template>

<script>
import DashboardCardComponent from "../../components/Dashboard-card.vue";
import FilterFormDashBoard from "./components/FilterFormDashBoard.vue"
export default {
  name: "DashboardCardView",
  components: {
    DashboardCardComponent,
    FilterFormDashBoard,
  },
};
</script>

<style scoped>
.list-dashboard-card {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 40px;
}

.dashboard-content {
  display: flex;
}

.dashboard-chart {
  width: 1000px;
  height: 300px;
  background-color: blue;
  margin-left: 30px;
}


</style>