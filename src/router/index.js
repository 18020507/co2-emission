import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/dashboard/Dashboard.vue";
import GHGReportingView from "@/views/ghg-reporting/GHGReportingView.vue";
import ESGDataCollectionView from "@/views/esg-data-collection/ESGDataCollectionView.vue";
import TransportationView from "@/views/esg-data-collection/transportation/TransportationView.vue"
import MobileCombustionView from "@/views/ghg-reporting/mobile-combustion/MobileCombustionView.vue";
import SummaryReportView from "@/views/ghg-reporting/summary-result/SummaryResultView.vue";
import StationaryCombustionView from "@/views/ghg-reporting/stationary-combustion/StationaryCombustionView.vue";
import AccountSetupView from "@/views/account-setup/AccountSetupView.vue";
import CompanyInformationView from "@/views/account-setup/company-infomation/CompanyInformationView.vue"
import HomeView from "@/views/home/HomeVue.vue";
import LoginView from "@/views/login/LoginView.vue";
import FacilityView from "@/views/esg-data-collection/facility/FacilityView.vue"
import FacilityActivityView from "@/views/esg-data-collection/facility-activity/FacilityActivityView.vue";
import TransportationActivityView from "@/views/esg-data-collection/transportation-activity/TransportationActivityView.vue";
import CDPReportingViewVue from "@/views/cdp-reporting/CDPReportingView.vue";

const home = [
  {
    path: "/home",
    name: 'home',
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
        path: "transport-master",
        name: "dataCollection-trans",
        component: TransportationView,
      },
      {
        path: "transport-activity",
        name: "dataCollection-transportActivity",
        component: TransportationActivityView,
      },
      {
        path: "facility-master",
        name: "dataCollection-facilityMaster",
        component: FacilityView,
      },
      {
        path: "facility-activity",
        name: "dataCollection-facilityActivity",
        component: FacilityActivityView,
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
        path: "summary-result",
        name: "ghgReporting-summaryResult",
        component: SummaryReportView,
      },
      {
        path: "mobile-combustion",
        name: "ghgReporting-mobileCombustion",
        component: MobileCombustionView,
      },
      {
        path: "stationary-combustion",
        name: "ghgReporting-stationaryCombustion",
        component: StationaryCombustionView,
      },
    ],
  },
];

const cdpRepoting = [
  {
    path: "/cdpReporting",
    component: CDPReportingViewVue,
    children: [],
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
  {
    path: "/",
    redirect: "/login",
  },
  ...esgDataCollection,
  ...ghgRepoting,
  ...cdpRepoting,
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
