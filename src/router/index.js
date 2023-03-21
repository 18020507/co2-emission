import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/dashboard/Dashboard.vue";
import GHGReportingView from "@/views/ghg-reporting/GHGReportingView.vue";
import ESGDataCollectionView from "@/views/esg-data-collection/ESGDataCollectionView.vue";
import HeavyTruckView from "@/views/esg-data-collection/heavy-truck/HeavyTruckView.vue";
import CompanyView from "@/views/esg-data-collection/company/CompanyView.vue"
import MobileCombustionView from "@/views/ghg-reporting/mobileCombustion/MobileCombustionView.vue";
import AccountSetupView from "@/views/account-setup/AccountSetupView.vue";
import CompanyInformationView from "@/views/account-setup/company-infomation/CompanyInformationView.vue"
import HomeView from "@/views/home/HomeVue.vue";
import LoginView from "@/views/login/LoginView.vue";

const home = [
  {
    path: "/home",
    component: HomeView,
  },
]

const login = [
  {
    path: "/login",
    component: LoginView,
  },
]

const esgDataCollection = [
  {
    path: "/esgDataCollection",
    component: ESGDataCollectionView,
    children: [
      {
        path: "heavy-truck",
        name: "dataCollection-heavyTruck",
        component: HeavyTruckView,
      },
      {
        path: "company",
        name: "dataCollection-company",
        component: CompanyView,
      },
    ],
  },
];

const ghgRepoting = [
  {
    path: "/ghgReporting",
    component: GHGReportingView,
    children: [
      {
        path: "mobile-combustion",
        name: "ghgReporting-mobileCombustion",
        component: MobileCombustionView,
      },
    ],
  },
];

const dashboard = [
  {
    path: "/dashboard",
    component: DashboardView,
  },
];

const accountSetup = [
  {
    path: "/account-setup",
    component: AccountSetupView,
    children: [
      {
        path: "companyInformation",
        name: "accountSetup-companyInformation",
        component: CompanyInformationView,
      },
    ],
  },
];

const routes = [
  ...esgDataCollection,
  ...ghgRepoting,
  ...dashboard,
  ...accountSetup,
  ...home,
  ...login,
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
