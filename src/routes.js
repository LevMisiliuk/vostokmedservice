import { createRouter, createWebHistory } from 'vue-router'
import homePage from './pages/homePage.vue'
import traumatologyPage from './pages/catalog/traumatology/traumatologyPage.vue'
import educationPage from './pages/educationPage.vue'
import certificatesPage from './pages/certificatesPage.vue'
import contactsPage from './pages/contactsPage.vue'
import catalogPage from './pages/catalog/catalogPage.vue'
import NotFound from './pages/error/NotFound.vue'
import IntramedullaryPinsPage from './pages/catalog/traumatology/IntramedullaryPinsPage.vue';
import calfPinPage from './pages/catalog/traumatology/intramedullary-pins/calfPinPage.vue'
import pinsVerticalZTypePage from './pages/catalog/traumatology/intramedullary-pins/pinsVerticalZTypePage.vue'
import thighPinsPage from './pages/catalog/traumatology/intramedullary-pins/thighPinsPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:lang',
            children: [
                { path: '', component: homePage },
                { path: 'catalog', component: catalogPage },
                { path: 'catalog/traumatology', component: traumatologyPage },
                { path: 'education', component: educationPage },
                { path: 'certificates', component: certificatesPage },
                { path: 'contacts', component: contactsPage },
                { path: 'catalog/traumatology/intramedullary-pins', component: IntramedullaryPinsPage },
                { path: '404', component: NotFound, },
                { path: 'catalog/traumatology/intramedullary-pins/calf-pin', component: calfPinPage },
                { path: 'catalog/traumatology/intramedullary-pins/pins-vertical-z-type', component: pinsVerticalZTypePage },
                { path: 'catalog/traumatology/intramedullary-pins/thigh-pins', component: thighPinsPage }
            ]
        }
    ]
})