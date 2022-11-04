import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import TraumatologyPage from './pages/catalog/traumatology/TraumatologyPage.vue'
import EducationPage from './pages/EducationPage.vue'
import CertificatesPage from './pages/CertificatesPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import CatalogPage from './pages/catalog/CatalogPage.vue'
import NotFound from './pages/error/NotFound.vue'
import IntramedullaryPinsPage from './pages/catalog/traumatology/IntramedullaryPinsPage.vue';
import CalfPinPage from './pages/catalog/traumatology/intramedullary-pins/CalfPinPage.vue'
import PinsVerticalZTypePage from './pages/catalog/traumatology/intramedullary-pins/PinsVerticalZTypePage.vue'
import ThighPinsPage from './pages/catalog/traumatology/intramedullary-pins/ThighPinsPage.vue'
import ShoulderPins from './components/catalog/traumatology/ShoulderPins.vue'
import RetrogradeFemoralPins from './components/catalog/traumatology/RetrogradeFemoralPins.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:lang',
            children: [
                { path: '', component: HomePage },
                { path: 'catalog', component: CatalogPage },
                { path: 'catalog/traumatology', component: TraumatologyPage },
                { path: 'education', component: EducationPage },
                { path: 'certificates', component: CertificatesPage },
                { path: 'contacts', component: ContactsPage },
                { path: 'catalog/traumatology/intramedullary-pins', component: IntramedullaryPinsPage },
                { path: '404', component: NotFound, },
                { path: 'catalog/traumatology/intramedullary-pins/calf-pin', component: CalfPinPage },
                { path: 'catalog/traumatology/intramedullary-pins/pins-vertical-z-type', component: PinsVerticalZTypePage },
                { path: 'catalog/traumatology/intramedullary-pins/thigh-pins', component: ThighPinsPage },
                { path: 'catalog/traumatology/intramedullary-pins/shoulder-pins', component: ShoulderPins },
                { path: 'catalog/traumatology/intramedullary-pins/retrograde-femoral-pins', component: RetrogradeFemoralPins }
            ]
        }
    ]
})