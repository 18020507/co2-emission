import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/dashboard/Dashboard.vue";
import HeavyTruckView from "@/views/heavy-truck/HeavyTruckView.vue";
import AccountSetupView from "@/views/account-setup/AccountSetupView.vue"
import GHGReportingView from "@/views/ghg-reporting/GHGReportingView.vue"

const routes = [
  { path: "/heavy-truck", component: HeavyTruckView },
  { path: "/dashboard", component: DashboardView },
  { path: "/account-setup", component: AccountSetupView },
  { path: "/ghgReporting", component: GHGReportingView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router
