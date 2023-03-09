import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faBars, faChevronRight, faList, faBoxArchive, faLayerGroup, faArrowsRotate, faPlus, faFileImport, faLink, faUser, faFileExport, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import router from './router'
library.add(faUserSecret, faBars, faChevronRight, faChevronDown, faList, faBoxArchive, faLayerGroup, faArrowsRotate, faPlus, faFileImport, faLink, faUser, faFileExport)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app');
