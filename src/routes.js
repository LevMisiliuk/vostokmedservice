import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './components/MainScreen'
import CatalogTraumatology from './components/CatalogTraumatology'
import EducationScreen from './components/EducationScreen'
import CertificatesScreen from './components/CertificatesScreen'
import ContactScreen from './components/ContactsScreen'
import CataologSreen from './components/CatalogScreen'
import PageNotFound from './components/PageNotFound'
import IntramedullaryPins from './components/IntramedullaryPins';
import CalfPin from './components/CalfPin'

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
                { path: 'catalog/traumatology/intramedullary-pins', component: IntramedullaryPins },
                { path: "404", component: PageNotFound },
                { path: 'catalog/traumatology/intramedullary-pins/calf-pin', component: CalfPin },
            ]
        }
    ]
})