import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faBars, faChevronRight, faList, faBoxArchive, faLayerGroup, faArrowsRotate, faPlus, faFileImport, faLink, faUser, faFileExport, faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import router from './router'
library.add(faUserSecret, faBars, faChevronRight, faChevronLeft, faChevronDown, faList, faBoxArchive, faLayerGroup, faArrowsRotate, faPlus, faFileImport, faLink, faUser, faFileExport)

import VueCustomSelectBox from 'vue-custom-select-box';
import "vue-custom-select-box/style.css";


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon, 'vue-custom-select-box', VueCustomSelectBox)
app.use(router)
app.mount('#app');
