import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/dashboard/Dashboard.vue";
import HeavyTruckView from "@/views/heavy-truck/HeavyTruckView.vue";

const routes = [
  { path: "/heavy-truck", component: HeavyTruckView },
  { path: "/dashboard", component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router
