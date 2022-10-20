import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './components/MainScreen'
import CatalogTraumatology from './components/CatalogTraumatology'
import EducationScreen from './components/EducationScreen'
import CertificatesScreen from './components/CertificatesScreen'
import ContactScreen from './components/ContactsScreen'
import CataologSreen from './components/CatalogScreen'
import PageNotFound from './components/PageNotFound'
import IntramedullaryPins from './components/traumatology/IntramedullaryPins';
import CalfPin from './components/traumatology/CalfPin'
import PinsVerticalZType from './components/traumatology/PinsVerticalZType'
import ThighPins from './components/traumatology/ThighPins'

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
                { path: '404', component: PageNotFound, },
                { path: 'catalog/traumatology/intramedullary-pins/calf-pin', component: CalfPin },
                { path: 'catalog/traumatology/intramedullary-pins/pins-vertical-z-type', component: PinsVerticalZType },
                { path: 'catalog/traumatology/intramedullary-pins/thigh-pins', component: ThighPins }
            ]
        }
    ]
})