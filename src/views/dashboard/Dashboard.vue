<template>
  <div class="list-dashboard-card">
    <DashboardCardComponent
      dashboardCardHeader="TOTAL"
      :fuelValue="total_value"
    />
    <DashboardCardComponent dashboardCardHeader="GAS" :fuelValue="gas_value" />
    <DashboardCardComponent
      dashboardCardHeader="DIESEL"
      :fuelValue="diesel_value"
    />
    <DashboardCardComponent
      dashboardCardHeader="PROPANE"
      :fuelValue="propane_value"
    />
    <DashboardCardComponent
      dashboardCardHeader="ELECTRICITY"
      :fuelValue="electricity_value"
    />
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
import { useUserStore } from "@/store/userStore";
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
import { getDashboardChartData, getDashboardData } from "@/api";

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
    const userStore = useUserStore();
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
          data: [],
        },
        {
          name: "Diesol",
          type: "line",
          data: [],
        },
        {
          name: "Propane",
          type: "line",
          data: [],
        },
        {
          name: "Electricity",
          type: "line",
          data: [],
        },
      ],
    });

    return { option, userStore };
  },
  async created() {
    if (!this.userStore.getUserInfo()) {
      this.$router.go("/home");
    }

    let { total, gas, diesel, propane, electricity } = (
      await getDashboardData(this.userStore.getUserInfo().company_id)
    ).data.data;

    this.total_value = total;
    this.gas_value = gas;
    this.diesel_value = diesel;
    this.propane_value = propane;
    this.electricity_value = electricity;

    let { chart_gas, chart_diesel, chart_propane, chart_electricity } = (
      await getDashboardChartData(this.userStore.getUserInfo().company_id)
    ).data.data;

    this.option.series[0].data = chart_gas;
    this.option.series[1].data = chart_diesel;
    this.option.series[2].data = chart_propane;
    this.option.series[3].data = chart_electricity;
  },
  data() {
    return {
      total_value: 0,
      gas_value: 0,
      diesel_value: 0,
      propane_value: 0,
      electricity_value: 0,
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
  margin-left: 20px;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
