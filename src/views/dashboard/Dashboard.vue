<template>
  <div class="list-dashboard-card">
    <DashboardCardComponent dashboardCardHeader="TOTAL" />
    <DashboardCardComponent dashboardCardHeader="GAS" />
    <DashboardCardComponent dashboardCardHeader="DIESEL" />
    <DashboardCardComponent dashboardCardHeader="PROPANE" />
    <DashboardCardComponent dashboardCardHeader="ELECTRICITY" />
  </div>
  <div class="dashboard-content">
    <div class="dashboard-chart">
      <v-chart :options="chartOptions" />
    </div>
    <div class="dashboard-filter">
      <FilterFormDashBoard />
    </div>
  </div>
</template>

<script>
import DashboardCardComponent from "../../components/Dashboard-card.vue";
import FilterFormDashBoard from "./components/FilterFormDashBoard.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "DashboardCardView",
  components: {
    DashboardCardComponent,
    FilterFormDashBoard,
  },
  data() {
    return {
      chartOptions: {
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Line 1",
            type: "line",
            data: [5, 3, 4, 2, 4, 3, 5],
          },
        ],
      },
    };
  },
});
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
  justify-content: space-around;
}

.dashboard-chart {
  width: 1300px;
  height: 500px;
}
</style>
