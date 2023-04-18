import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faBars,
  faChevronRight,
  faList,
  faBoxArchive,
  faLayerGroup,
  faArrowsRotate,
  faPlus,
  faFileImport,
  faLink,
  faUser,
  faFileExport,
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import router from "./router";
import App from "./App.vue";

// Import echarts and vue-echarts components
import * as echarts from 'echarts';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';

library.add(
  faUserSecret,
  faBars,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faList,
  faBoxArchive,
  faLayerGroup,
  faArrowsRotate,
  faPlus,
  faFileImport,
  faLink,
  faUser,
  faFileExport
);

import VueCustomSelectBox from "vue-custom-select-box";
import "vue-custom-select-box/style.css";

import { createPinia } from "pinia";

const pinia = createPinia();

axios.defaults.baseURL = "http://localhost:8000";
const accessToken = localStorage.getItem("access_token");
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

const app = createApp(App)
  .component(
    "font-awesome-icon",
    FontAwesomeIcon,
  )
  .component('v-chart', ECharts)
  .component('VueCustomSelectBox', VueCustomSelectBox);

app.config.globalProperties.$echarts = echarts;

app.use(pinia);
app.use(router);
app.mount("#app");
