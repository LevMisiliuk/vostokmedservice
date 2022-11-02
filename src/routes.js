import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './components/mainScreens/MainScreen'
import CatalogTraumatology from './components/catalog/CatalogTraumatology'
import EducationScreen from './components/mainScreens/EducationScreen'
import CertificatesScreen from './components/mainScreens/CertificatesScreen'
import ContactScreen from './components/mainScreens/ContactsScreen'
import CataologSreen from './components/catalog/CatalogScreen'
import PageNotFound from './components/PageNotFound'
import IntramedullaryPins from './components/catalog/traumatology/IntramedullaryPins';
import CalfPin from './components/catalog/traumatology/CalfPin'
import PinsVerticalZType from './components/catalog/traumatology/PinsVerticalZType'
import ThighPins from './components/catalog/traumatology/ThighPins'
import ShoulderPins from './components/catalog/traumatology/ShoulderPins'

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
                { path: 'catalog/traumatology/intramedullary-pins/thigh-pins', component: ThighPins },
                { path: 'catalog/traumatology/intramedullary-pins/shoulder-pins', component: ShoulderPins }
            ]
        }
    ]
})