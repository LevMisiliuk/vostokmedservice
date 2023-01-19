import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import TraumatologyPage from './pages/catalog/traumatology/TraumatologyPage.vue'
import EducationPage from './pages/EducationPage.vue'
import CertificatesPage from './pages/CertificatesPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import CatalogPage from './pages/catalog/CatalogPage.vue'
import NotFound from './pages/error/NotFound.vue'
import IntramedullaryPinsPage from './pages/catalog/traumatology/IntramedullaryPinsPage.vue'
import CalfPinPage from './pages/catalog/traumatology/intramedullary-pins/СalfPinPage.vue'
import PinsVerticalZTypePage from './pages/catalog/traumatology/intramedullary-pins/PinsVerticalZTypePage.vue'
import ThighPinsPage from './pages/catalog/traumatology/intramedullary-pins/ThighPinsPage.vue'
import ShoulderPinsPage from './pages/catalog/traumatology/intramedullary-pins/ShoulderPinsPage.vue'
import RetrogradeFemoralPinsPage from './pages/catalog/traumatology/intramedullary-pins/RetrogradeFemoralPinsPage.vue'
import DistalFemoralPinsPage from './pages/catalog/traumatology/intramedullary-pins/DistalFemoralPinsPage.vue'
import HipProximalPinsPage from './pages/catalog/traumatology/intramedullary-pins/HipProximalPinsPage.vue'
import BlockedPlatesPage from '@/pages/catalog/traumatology/blocked-plates/BlockedPlatesPage.vue'
import SmallInsertsWithAngularStabilityPage from '@/components/catalog/traumatology/blocked-plates/small-inserts-with-angular-stability/SmallInsertsWithAngularStability.vue'
import SpecialInsertsWithAngularStability from '@/components/catalog/traumatology/blocked-plates/special-inserts-with-angular-stability/SpecialInsertsWithAngularStability.vue'
import InsertsWithAngularStability from '@/components/catalog/traumatology/blocked-plates/inserts-with-angular-stability/InsertsWithAngularStability.vue'
import ToolsAndEquipmentPage from '@/pages/catalog/toolsAndEquipment/ToolsAndEquipmentPage.vue'
import SterilizationScreen from '@/components/catalog/toolsAndEquipment/sterilization/SterilizationScreen.vue'
import EquipmentScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/EquipmentScreen.vue'
import CardiologyScreen from '@/components/catalog/toolsAndEquipment/cardiology/CardiologyScreen.vue'
import InhalersNebulizersScreen from '@/components/catalog/toolsAndEquipment/inhalersNebulizers/InhalersNebulizersScreen.vue'
import MedicalInstrumentScreen from '@/components/catalog/toolsAndEquipment/medicalInstrument/MedicalInstrumentScreen.vue'
import MedicalFurnitureScreen from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalFurnitureScreen.vue'
import LargeInsertsWithAngularStability from '@/components/catalog/traumatology/blocked-plates/large-inserts-with-angular-stability/LargeInsertsWithAngularStability.vue'
import TraumatologyTools from '@/components/catalog/traumatology/tools/TraumatologyTools.vue'
import InstrumentsCalfThighRetrogradetThigh from '@/components/catalog/traumatology/tools/instruments-calf-thigh-retrogradet-tight/InstrumentsCalfThighRetrogradetThigh.vue'
import ZTypeTrochantericStudToolKit from '@/components/catalog/traumatology/tools/z-type-trochanteric-stud-tool-kit/ZTypeTrochantericStudToolKit.vue'
import HumerusTool from '@/components/catalog/traumatology/tools/humerus-tool/HumerusTool.vue'
import ToolDtssDcssInsert from '@/components/catalog/traumatology/tools/tool-dtss-dcss-insert/ToolDtssDcssInsert.vue'
import ToolTraumatology from '@/components/catalog/traumatology/tools/tool-traumatology/ToolTraumatology.vue'
import AoScrews from '@/components/catalog/traumatology/ao-screws/AoScrews.vue'
import MicroScrew from '@/components/catalog/traumatology/ao-screws/micro-screws/MicroScrew.vue'
import NeurosurgeryPage from '@/pages/catalog/neurosurgery/NeurosurgeryPage.vue'
import TranspedicularFixationScreen from '@/components/catalog/neurosurgery/transpedicularFixation/TranspedicularFixationScreen.vue'
import NeurosurgicalPlates from '@/components/catalog/neurosurgery/neurosurgicalPlates/NeurosurgicalPlates.vue'
import VertebralEndoprostheses from '@/components/catalog/neurosurgery/vertebralEndoprostheses/VertebralEndoprostheses.vue'
import NeurosurgicalInstrument from '@/components/catalog/neurosurgery/neurosurgicalInstrument/NeurosurgicalInstrument.vue'
import PanmedCamers from '@/components/catalog/toolsAndEquipment/sterilization/PanmedCamers.vue'
import AirSterilizer from '@/components/catalog/toolsAndEquipment/sterilization/AirSterilizer.vue'
import ElectricSterilizers from '@/components/catalog/toolsAndEquipment/sterilization/ElectricSterilizers.vue'
import SterilizationBoxes from '@/components/catalog/toolsAndEquipment/sterilization/SterilizationBoxes.vue'
import FormalinChambers from '@/components/catalog/toolsAndEquipment/sterilization/FormalinChambers.vue'
import BactericidalIrradiators from '@/components/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators.vue'
import SuctionUnits from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits.vue'
import CoagulatorsScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/CoagulatorsScreen.vue'
import LightsScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen.vue'
import OperatingTables from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables.vue'
import SpongeScrews from '@/components/catalog/traumatology/ao-screws/sponge-screws/SpongeScrews.vue'
import MedicalCabinets from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets.vue'
import SurgicalTables from '@/components/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables.vue'
import ChairsScreen from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen.vue'
import MedicalStretcher from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher.vue'
import GynecologicalChairs from '@/components/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs.vue'
import ElectroCardiographs from '@/components/catalog/toolsAndEquipment/cardiology/ElectroCardiographs.vue'

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
        {
          path: 'catalog/traumatology/intramedullary-pins',
          component: IntramedullaryPinsPage
        },
        {
          path: 'catalog/traumatology/blocked-plates',
          component: BlockedPlatesPage
        },
        {
          path: 'catalog/traumatology/blockedPlates/small-inserts-with-angular-stability',
          component: SmallInsertsWithAngularStabilityPage
        },
        {
          path: 'catalog/traumatology/blockedPlates/special-inserts-with-angular-stability',
          component: SpecialInsertsWithAngularStability
        },
        {
          path: 'catalog/traumatology/blockedPlates/inserts-with-angular-stability',
          component: InsertsWithAngularStability
        },
        {
          path: 'catalog/traumatology/blockedPlates/large-inserts-with-angular-stability',
          component: LargeInsertsWithAngularStability
        },
        {
          path: 'catalog/traumatology/tools',
          component: TraumatologyTools
        },
        {
          path: 'catalog/traumatology/tools/instruments-calf-thigh-retrogradet-thigh',
          component: InstrumentsCalfThighRetrogradetThigh
        },
        {
          path: 'catalog/traumatology/tools/z-type-trochanteric-stud-tool-kit',
          component: ZTypeTrochantericStudToolKit
        },
        {
          path: 'catalog/traumatology/tools/humerus-tool',
          component: HumerusTool
        },
        {
          path: 'catalog/traumatology/tools/tool-dtss-dcss-inserts',
          component: ToolDtssDcssInsert
        },
        {
          path: 'catalog/traumatology/tools/tool-traumatology',
          component: ToolTraumatology
        },
        {
          path: 'catalog/traumatology/ao-screws',
          component: AoScrews
        },
        {
          path: 'catalog/traumatology/ao-screws/micro-screws/microscrew',
          component: MicroScrew
        },
        {
          path: 'catalog/traumatology/ao-screws/micro-screws/sponge-screw',
          component: SpongeScrews
        },
        { path: '404', component: NotFound },
        {
          path: 'catalog/traumatology/intramedullary-pins/calf-pin',
          component: CalfPinPage
        },
        {
          path: 'catalog/traumatology/intramedullary-pins/pins-vertical-z-type',
          component: PinsVerticalZTypePage
        },
        {
          path: 'catalog/traumatology/intramedullary-pins/thigh-pins',
          component: ThighPinsPage
        },
        {
          path: 'catalog/traumatology/intramedullary-pins/shoulder-pins',
          component: ShoulderPinsPage
        },
        {
          path: 'catalog/traumatology/intramedullary-pins/retrograde-femoral-pins',
          component: RetrogradeFemoralPinsPage
        },
        {
          path: 'catalog/traumatology/intramedullary-pins/distal-femoral-pins',
          component: DistalFemoralPinsPage
        },
        {
          path: 'catalog/traumatology/intramedullary-pins/hip-proximal-pins',
          component: HipProximalPinsPage
        },
        { path: 'catalog/tools-and-equipment', component: ToolsAndEquipmentPage },
        { path: 'catalog/tools-and-equipment/sterilization', component: SterilizationScreen },
        { path: 'catalog/tools-and-equipment/sterilization/camera-panmed/', component: PanmedCamers },
        { path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/', component: AirSterilizer },
        { path: 'catalog/tools-and-equipment/sterilization/electric-sterilizer/', component: ElectricSterilizers },
        { path: 'catalog/tools-and-equipment/sterilization/boxes-sterilization-round/', component: SterilizationBoxes },
        { path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/', component: BactericidalIrradiators },
        { path: 'catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/', component: FormalinChambers },
        { path: 'catalog/tools-and-equipment/operational-equipment', component: EquipmentScreen },
        { path: 'catalog/tools-and-equipment/operational-equipment/suction/', component: SuctionUnits },
        { path: 'catalog/tools-and-equipment/operational-equipment/koagulyatory/', component: CoagulatorsScreen },
        { path: 'catalog/tools-and-equipment/operational-equipment/fixtures/', component: LightsScreen },
        { path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/', component: OperatingTables },
        { path: 'catalog/tools-and-equipment/cardiology', component: CardiologyScreen },
        { path: 'catalog/tools-and-equipment/electrocardiograph', component: ElectroCardiographs },
        { path: 'catalog/tools-and-equipment/medical-furniture', component: MedicalFurnitureScreen },
        { path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets', component: MedicalCabinets },
        { path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/', component: SurgicalTables },
        { path: 'catalog/tools-and-equipment/medical-furniture/couches/', component: ChairsScreen },
        { path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/', component: MedicalStretcher },
        { path: 'catalog/tools-and-equipment/medical-furniture/armchair-gynecological/', component: GynecologicalChairs },
        { path: 'catalog/tools-and-equipment/inhalers-nebulizers', component: InhalersNebulizersScreen },
        { path: 'catalog/tools-and-equipment/medical-instruments', component: MedicalInstrumentScreen },
        { path: 'catalog/neurosurgery', component: NeurosurgeryPage },
        { path: 'catalog/neurosurgery/transpedikulyarnaya-fiksatsiya-pozvonochnika', component: TranspedicularFixationScreen },
        { path: 'catalog/neurosurgery/plates-neurosurgical', component: NeurosurgicalPlates },
        { path: 'catalog/neurosurgery/vertebrae-implants', component: VertebralEndoprostheses },
        { path: 'catalog/neurosurgery/neurosurgical-tool', component: NeurosurgicalInstrument },
      ]
    }
  ]
})
