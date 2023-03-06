<template>
  <div class="dashboard-card">
    <h3>{{ dashboardCardHeader }}</h3>
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
    },
}
</script>

<style scoped>
.dashboard-card {
    width: 200px;
    height: 150px;
    background-color:green;
    border-radius: 5%;
    text-align: center;
}

h3 {
  color: white;
}
</style>