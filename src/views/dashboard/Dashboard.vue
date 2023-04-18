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
      <v-chart class="chart" :option="option" />
    </div>
    <div class="dashboard-filter">
      <FilterFormDashBoard />
    </div>
  </div>
</template>

<script>
import DashboardCardComponent from "../../components/Dashboard-card.vue";
import FilterFormDashBoard from "./components/FilterFormDashBoard.vue";
import { ref, defineComponent } from "vue";

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

export default defineComponent({
  name: "DashboardCardView",
  components: {
    DashboardCardComponent,
    FilterFormDashBoard,
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  setup() {
    const option = ref({
      title: {
        text: "Total Co2 Emission By Energy Sources",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        bottom: "bottom",
        data: ["Gas", "Diesol", "Propane", "Electricity"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "15%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Gas",
          type: "line",
          data: [120, 132, 101, 134, 90, 12, 43, 54, 76, 104, 69, 78],
        },
        {
          name: "Diesol",
          type: "line",
          data: [123, 50, 78, 28, 178, 89, 45, 72, 110, 17, 162, 196],
        },
        {
          name: "Propane",
          type: "line",
          data: [24, 141, 103, 89, 74, 144, 174, 60, 12, 164, 156, 98],
        },
        {
          name: "Electricity",
          type: "line",
          data: [129, 174, 22, 187, 166, 39, 163, 50, 103, 134, 67, 23],
        },
      ],
    });

    return { option };
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
  margin-left: 20px;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
