import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './components/MainScreen.vue'
import CatalogScreen from './components/CatalogScreen.vue'
import EducationScreen from './components/EducationScreen.vue'
import CertificatesScreen from './components/CertificatesScreen.vue'
import ContactScreen from './components/ContactsScreen'
// import i18n from './i18n'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:lang',
            children: [
                { path: '', component: MainScreen },
                { path: 'catalog', component: CatalogScreen },
                { path: 'education', component: EducationScreen },
                { path: 'certificates', component: CertificatesScreen },
                { path: 'contacts', component: ContactScreen },
            ]
        }
    ]
})