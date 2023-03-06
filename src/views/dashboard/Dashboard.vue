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
      <ButtonComponent
        buttonText="SELECT CLIENT"
        buttonIcon="fa-solid fa-arrow-down"
      />
      <ButtonComponent
        buttonText="SELECT VENDOR"
        buttonIcon="fa-solid fa-arrow-down"
      />
      <ButtonComponent
        buttonText="SELECT FACILITY"
        buttonIcon="fa-solid fa-arrow-down"
      />
      <ButtonComponent class="button-style"
        buttonText="SELECT VEHICLE"
        buttonIcon="fa-solid fa-arrow-down"
      />
    </div>
  </div>
</template>

<script>
import DashboardCardComponent from "../../components/Dashboard-card.vue";
import ButtonComponent from "../../components/Button.vue";
export default {
  name: "DashboardCardView",
  components: {
    DashboardCardComponent,
    ButtonComponent,
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

.dashboard-filter {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
}
</style>