import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './components/MainScreen.vue'
import CatalogTraumatology from './components/CatalogTraumatology.vue'
import EducationScreen from './components/EducationScreen.vue'
import CertificatesScreen from './components/CertificatesScreen.vue'
import ContactScreen from './components/ContactsScreen'
import CataologSreen from './components/CatalogScreen'
import PageNotFound from './components/PageNotFound'
// import IntramedullaryPins from "./components/IntramedullaryPins";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:lang',
            children: [
                { path: '', component: MainScreen },
                { path: 'catalog', component: CataologSreen },
                { path: 'catalog/traumatology', component: CatalogTraumatology },
                { path: 'education', component: EducationScreen },
                { path: 'certificates', component: CertificatesScreen },
                { path: 'contacts', component: ContactScreen },
                // { path: 'catalog/traumatology/intramedullary-pins', component: IntramedullaryPins },
                { path: "404", component: PageNotFound },
            ]
        }
    ]
})