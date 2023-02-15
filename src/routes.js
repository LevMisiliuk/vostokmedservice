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
import uvCameraMedium from '@/components/catalog/toolsAndEquipment/sterilization/PanmedCamers/UvCameraMedium.vue'
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
import SpinalScrews from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalScrews.vue'
import SpinalBeams from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalBeams.vue'
import SpinalHooks from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks.vue'
import SpinalSystems from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalSystems.vue'
import UvCameraLarge from '@/components/catalog/toolsAndEquipment/sterilization/PanmedCamers/UvCameraLarge.vue'
import UvCameraSmall from '@/components/catalog/toolsAndEquipment/sterilization/PanmedCamers/UvCameraSmall.vue'
import AirSterilizerNotpassable from '@/components/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerNotpassable.vue'
import AirSterilizerUkraine from '@/components/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerUkraine.vue'
import AirSterilizerBD from '@/components/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerBD.vue'
import AirSterilizerSpu from '@/components/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerSpu.vue'
import SterilizationCabinet from '@/components/catalog/toolsAndEquipment/sterilization/AirSterilizer/SterilizationCabinet.vue'
import ElectricSterilizersFirst from '@/components/catalog/toolsAndEquipment/sterilization/ElectricSterilizers/ElectricSterilizersFirst.vue'
import ElectricSterilizersSecond from '@/components/catalog/toolsAndEquipment/sterilization/ElectricSterilizers/ElectricSterilizersSecond.vue'
import SterilizationBoxesRound from '@/components/catalog/toolsAndEquipment/sterilization/SterilizationBoxes/SterilizationBoxesRound.vue'
import CorticalScrews from '@/components/catalog/traumatology/ao-screws/cortical-screws/CorticalScrews.vue'
import ThreadResistantScrews from '@/components/catalog/traumatology/ao-screws/thread-resistant-screws/ThreadResistantScrews.vue'
import FormalinChamberBig from '@/components/catalog/toolsAndEquipment/sterilization/FormalinChambers/FormalinChamberBig'
import FormalinChamberSmall from '@/components/catalog/toolsAndEquipment/sterilization/FormalinChambers/FormalinChamberSmall'
import BactericidalIrradiator1Lamp from '@/components/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator1Lamp.vue'
import BactericidalIrradiator2Lamp150M from '@/components/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator2Lamp150M.vue'
import BactericidalIrradiator2Lamp150MP from '@/components/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator2Lamp150MP.vue'
import BactericidalIrradiator4Lamp300M from '@/components/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator4Lamp300M.vue'
import BactericidalIrradiator3Lamp225M from '@/components/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator3Lamp225M.vue'
import ElectricOneScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ElectricOneScreen.vue'
import ElectricSecondScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ElectricSecondScreen.vue'
import ElectricThirdScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ElectricThirdScreen.vue'
import ChildrenOne from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ChildrenOne.vue'
import UniversalOne from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/UniversalOne.vue'
import PedalOne from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/PedalOne.vue'
import SurgicalElema from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/SurgicalElema.vue'
import CoagulatorPage from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/Coagulator/CoagulatorPage.vue'
import CatalogSurgery from '@/components/catalog/CatalogSurgery'
import LuminaireOne from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireOne.vue'
import LuminaireSecond from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSecond.vue'
import LuminaireThird from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireThird.vue'
import LuminaireForth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireForth.vue'
import LuminaireFfith from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireFfith.vue'
import LuminaireSixth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSixth.vue'
import SutureMaterials from '@/components/catalog/surgery/suture-materials/SutureMaterials.vue'
import LuminaireSeventh from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSeventh.vue'
import LuminaireEighth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEighth.vue'
import LuminaireNineth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireNineth.vue'
import LuminaireTenth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireTenth.vue'
import EndoprosthesesPolymerMeshes from '@/components/catalog/surgery/endoprostheses-polymer-meshes/EndoprosthesesPolymerMeshes.vue'
import EndoprosthesesForUrogynecology from '@/components/catalog/surgery/endoprostheses-for-urogynecology/EndoprosthesesForUrogynecology.vue'
import AntiadhesionsGel from '@/components/catalog/surgery/antiadhesions/AntiadhesionsGel.vue'
import LuminaireEleventh from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEleventh.vue'
import LuminaireTwelfth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireTwelfth.vue'
import LuminaireEmaNine from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEmaNine.vue'
import WoundDressings from '@/components/catalog/surgery/wound-dressings/WoundDressings.vue'
import HemostaticSponge from '@/components/catalog/surgery/hemostatic-sponge/HemostaticSponge'
import ZmProduction from '@/components/catalog/surgery/zm-production/ZmProduction'
import ScotchkastPlus from '@/components/catalog/surgery/zm-production/ScotchkastPlus'
import SoftcastScreen from '@/components/catalog/surgery/zm-production/SoftcastScreen'
import LuminaireReflect from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflect.vue'
import AyobanScreen from '@/components/catalog/surgery/zm-production/AyobanScreen.vue'
import CobanScreen from '@/components/catalog/surgery/zm-production/CobanScreen.vue'
import PlasterSkinSuture from '@/components/catalog/surgery/zm-production/PlasterSkinSuture.vue'
import MediporeScreen from '@/components/catalog/surgery/zm-production/MediporeScreen.vue'
import TransporScreen from '@/components/catalog/surgery/zm-production/TransporScreen.vue'
import DuraporScreen from '@/components/catalog/surgery/zm-production/DuraporScreen.vue'
import MediporPlusPad from '@/components/catalog/surgery/zm-production/MediporPlusPad.vue'
import TegadermScreen from '@/components/catalog/surgery/zm-production/TegadermScreen.vue'
import MicroFom from '@/components/catalog/surgery/zm-production/MicroFom.vue'
import UroslingScreen from '@/components/catalog/surgery/endoprostheses-for-urogynecology/UroslingScreen.vue'
import LuminaireReflectSecond from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflectSecond.vue'
import UrofixPl from '@/components/catalog/surgery/endoprostheses-for-urogynecology/UrofixPl.vue'
import UrofixTo from '@/components/catalog/surgery/endoprostheses-for-urogynecology/UrofixTo.vue'
import LuminaireReflectThird from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflectThird.vue'
import ElectricTableOne from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableOne.vue'
import ElectricTableSecond from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableSecond.vue'
import ElectricTableThird from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableThird.vue'
import ElectricTableForth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableForth.vue'
import ElectricTableFifth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableFifth.vue'
import EsfilT from '@/components/catalog/surgery/endoprostheses-polymer-meshes/EsfilT.vue'
import EsfilL from '@/components/catalog/surgery/endoprostheses-polymer-meshes/EsfilL.vue'
import EsfilScreen from '@/components/catalog/surgery/endoprostheses-polymer-meshes/EsfilScreen.vue'
import FlexilenScreen from '@/components/catalog/surgery/endoprostheses-polymer-meshes/FlexilenScreen.vue'
import EslanScreen from '@/components/catalog/surgery/endoprostheses-polymer-meshes/EslanScreen.vue'
import FtorexScreen from '@/components/catalog/surgery/endoprostheses-polymer-meshes/FtorexScreen.vue'
import GyneflexScreen from '@/components/catalog/surgery/endoprostheses-polymer-meshes/GyneflexScreen.vue'
import UniflexScreen from '@/components/catalog/surgery/endoprostheses-polymer-meshes/UniflexScreen.vue'
import Uniflex from '@/components/catalog/surgery/suture-materials/UniflexScreen.vue'
import MonoamidScreen from '@/components/catalog/surgery/suture-materials/MonoamidScreen.vue'
import KapronScreen from '@/components/catalog/surgery/suture-materials/KapronScreen.vue'
import LavsanScreen from '@/components/catalog/surgery/suture-materials/LavsanScreen.vue'
import CaprogentScreen from '@/components/catalog/surgery/suture-materials/CaprogentScreen.vue'
import FtorlinScreen from '@/components/catalog/surgery/suture-materials/FtorlinScreen.vue'
import SilkScreen from '@/components/catalog/surgery/suture-materials/SilkScreen.vue'
import Ftorex from '@/components/catalog/surgery/suture-materials/FtorexScreen.vue'
import MonofilScreen from '@/components/catalog/surgery/suture-materials/MonofilScreen.vue'
import MedicalCabineOne from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets/MedicalCabineOne.vue'
import UltrasorbScreen from '@/components/catalog/surgery/suture-materials/UltrasorbScreen.vue'
import PgaScreen from '@/components/catalog/surgery/suture-materials/PgaScreen.vue'
import SimpleCatgut from '@/components/catalog/surgery/suture-materials/SimpleCatgut.vue'
import PgaRapid from '@/components/catalog/surgery/suture-materials/PgaRapid.vue'
import MonosorbScreen from '@/components/catalog/surgery/suture-materials/MonosorbScreen.vue'

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
          path: 'catalog/surgery',
          component: CatalogSurgery
        },
        {
          path: 'catalog/surgery/suture-materials',
          component: SutureMaterials
        },
        {
          path: 'catalog/surgery/endoprostheses-polymer-meshes',
          component: EndoprosthesesPolymerMeshes
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology',
          component: EndoprosthesesForUrogynecology
        },
        {
          path: 'catalog/surgery/antiadhesions',
          component: AntiadhesionsGel
        },
        {
          path: 'catalog/surgery/wound-dressings',
          component: WoundDressings
        },
        {
          path: 'catalog/surgery/hemostatic-sponge',
          component: HemostaticSponge
        },
        {
          path: 'catalog/surgery/zm-production',
          component: ZmProduction
        },
        {
          path: 'catalog/surgery/zm-production/scotchkast-plus',
          component: ScotchkastPlus
        },
        {
          path: 'catalog/surgery/zm-production/softcast',
          component: SoftcastScreen
        },
        {
          path: 'catalog/surgery/zm-production/ayoban',
          component: AyobanScreen
        },
        {
          path: 'catalog/surgery/zm-production/coban',
          component: CobanScreen
        },
        {
          path: 'catalog/surgery/zm-production/plaster-skin-suture',
          component: PlasterSkinSuture
        },
        {
          path: 'catalog/surgery/zm-production/medipore',
          component: MediporeScreen
        },
        {
          path: 'catalog/surgery/zm-production/transpor',
          component: TransporScreen
        },
        {
          path: 'catalog/surgery/zm-production/durapor',
          component: DuraporScreen
        },
        {
          path: 'catalog/surgery/zm-production/medipor-plus-pad',
          component: MediporPlusPad
        },
        {
          path: 'catalog/surgery/zm-production/tegaderm',
          component: TegadermScreen
        },
        {
          path: 'catalog/surgery/zm-production/microfom',
          component: MicroFom
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology/urosling',
          component: UroslingScreen
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology/urofix-pl',
          component: UrofixPl
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology/urofix-to',
          component: UrofixTo
        },
        {
          path: 'catalog/surger/polymer-meshes/esfil-t',
          component: EsfilT
        },
        {
          path: 'catalog/surger/polymer-meshes/esfil-l',
          component: EsfilL
        },
        {
          path: 'catalog/surger/polymer-meshes/esfil',
          component: EsfilScreen
        },
        {
          path: 'catalog/surger/polymer-meshes/flexilen',
          component: FlexilenScreen
        },
        {
          path: 'catalog/surger/polymer-meshes/eslan',
          component: EslanScreen
        },
        {
          path: 'catalog/surger/polymer-meshes/ftorex',
          component: FtorexScreen
        },
        {
          path: 'catalog/surger/polymer-meshes/gyneflex',
          component: GyneflexScreen
        },
        {
          path: 'catalog/surger/polymer-meshes/uniflex',
          component: UniflexScreen
        },
        {
          path: 'catalog/surger/suture-materials/uniflex',
          component: Uniflex
        },
        {
          path: 'catalog/surger/suture-materials/monoamid',
          component: MonoamidScreen
        },
        {
          path: 'catalog/surger/suture-materials/capron',
          component: KapronScreen
        },
        {
          path: 'catalog/surger/suture-materials/lavsan',
          component: LavsanScreen
        },
        {
          path: 'catalog/surger/suture-materials/caprogent',
          component: CaprogentScreen
        },
        {
          path: 'catalog/surger/suture-materials/ftorlin',
          component: FtorlinScreen
        },
        {
          path: 'catalog/surger/suture-materials/silk',
          component: SilkScreen
        },
        {
          path: 'catalog/surger/suture-materials/ftorex',
          component: Ftorex
        },
        {
          path: 'catalog/surger/suture-materials/monofil',
          component: MonofilScreen
        },
        {
          path: 'catalog/surger/suture-materials/ultrasorb',
          component: UltrasorbScreen
        },
        {
          path: 'catalog/surger/suture-materials/pga',
          component: PgaScreen
        },
        {
          path: 'catalog/surger/suture-materials/simple-catgut',
          component: SimpleCatgut
        },
        {
          path: 'catalog/surger/suture-materials/pga-rapid',
          component: PgaRapid
        },
        {
          path: 'catalog/surger/suture-materials/monosorb',
          component: MonosorbScreen
        },
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
        {
          path: 'catalog/traumatology/ao-screws/micro-screws/cortical-screw',
          component: CorticalScrews
        },
        {
          path: 'catalog/traumatology/ao-screws/micro-screws/thread-resistance-screw',
          component: ThreadResistantScrews
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
        {
          path: 'catalog/tools-and-equipment',
          component: ToolsAndEquipmentPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization',
          component: SterilizationScreen
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/',
          component: PanmedCamers
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-large',
          component: UvCameraLarge
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-medium',
          component: uvCameraMedium
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-small',
          component: UvCameraSmall
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/',
          component: AirSterilizer
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-320-bd-neprokhodnoi-gpd-320-prokhodnoi-usovershenstvovannye-analogi-shss-250p-i-shss-250pr',
          component: AirSterilizerNotpassable
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-20-gp-40-gp-80-ukraina',
          component: AirSterilizerUkraine
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-160bd-gp-640-bd-gp-1300-bd',
          component: AirSterilizerBD
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-20-spu-gp-40-spu-gp-80-spu',
          component: AirSterilizerSpu
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/shkaf-sushilno-sterilizatsionnyi-shs-80',
          component: SterilizationCabinet
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/electric-sterilizer/',
          component: ElectricSterilizers
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-420-e-kipyatilnik',
          component: ElectricSterilizersFirst
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-320-e-kipyatilnik',
          component: ElectricSterilizersSecond
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/boxes-sterilization-round/',
          component: SterilizationBoxes
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/boxes-sterilization-round/boxes-sterilization-round',
          component: SterilizationBoxesRound
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/',
          component: BactericidalIrradiators
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-3-lampovyi-peredvizhnoi-obpe-225m',
          component: BactericidalIrradiator3Lamp225M
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-4-lampovyi-obn-300m',
          component: BactericidalIrradiator4Lamp300M
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-2-lampovyi-obn-150mp',
          component: BactericidalIrradiator2Lamp150MP
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/reflectors_bactericidal/obluchatel-bakteritsidnyi-2-lampovyi-obn-150m',
          component: BactericidalIrradiator2Lamp150M
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-1-lampovyi-obn-75',
          component: BactericidalIrradiator1Lamp
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/',
          component: FormalinChambers
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/kamera-paroformalinovaya-kkhi-dlya-sterilizatsii-medizdelii-i-instrumenta-malaya',
          component: FormalinChamberSmall
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/kamera-paroformalinovaya-kkhi-dlya-sterilizatsii-medizdelii-i-instrumenta-bolshaya',
          component: FormalinChamberBig
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment',
          component: EquipmentScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/',
          component: SuctionUnits
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7a-23v',
          component: ElectricOneScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/otsasyvatel-meditsinskii-elektricheskii-model-7a-23d',
          component: ElectricSecondScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7s-dlya-iskusstvennogo-aborta',
          component: ElectricThirdScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/detskii-model-7e-b',
          component: ChildrenOne
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/universalnyi-model-7e-d',
          component: UniversalOne
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/pedalnyi-model-7v',
          component: PedalOne
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/khirurgicheskii-elema-n-am1m',
          component: SurgicalElema
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/koagulyatory/',
          component: CoagulatorsScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/koagulyatory/coagulator',
          component: CoagulatorPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/',
          component: LightsScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/cvetilnik-l7412-ii',
          component: LuminaireOne
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-3-ii',
          component: LuminaireSecond
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735-ii',
          component: LuminaireThird
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-zmd-ii',
          component: LuminaireForth
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-ii',
          component: LuminaireFfith
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l-2000-3-ii',
          component: LuminaireSixth
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-3e',
          component: LuminaireSeventh
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l739-ii',
          component: LuminaireEighth
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735e',
          component: LuminaireNineth
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l734-ii',
          component: LuminaireTenth
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/cvetilnik-spr-5-e-ema',
          component: LuminaireEleventh
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-operatsionnyi-bestenevoi-l751-ii-odnoreflektornyi',
          component: LuminaireTwelfth
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-statsionarnyi-s-reguliruemym-razmerom-rabochego-polya-sr-2-4-5-e-ema-9-ti-reflektornyi',
          component: LuminaireEmaNine
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilniki-khirurgicheskie-statsionarnye-s-reguliruemym-razmerom-rabochego-polya-sr-5-e-ema-3-kh-reflektornyi',
          component: LuminaireReflect
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-statsionarnyi-s-reguliruemym-razmerom-rabochego-polya-sr-4-e-ema-6-i-reflektornyi',
          component: LuminaireReflectSecond
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-operatsionnyi-bestenevoi-l735-ii-pyatireflektornyi-peredvizhnoi',
          component: LuminaireReflectThird
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/',
          component: OperatingTables
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-1',
          component: ElectricTableOne
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-3',
          component: ElectricTableSecond
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-a',
          component: ElectricTableThird
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-s',
          component: ElectricTableForth
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-peredvizhnoi-3006',
          component: ElectricTableFifth
        },
        {
          path: 'catalog/tools-and-equipment/cardiology',
          component: CardiologyScreen
        },
        {
          path: 'catalog/tools-and-equipment/electrocardiograph',
          component: ElectroCardiographs
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture',
          component: MedicalFurnitureScreen
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets',
          component: MedicalCabinets
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-odnostvorchatyi-shm-1',
          component: MedicalCabineOne
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/',
          component: SurgicalTables
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/',
          component: ChairsScreen
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/',
          component: MedicalStretcher
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/armchair-gynecological/',
          component: GynecologicalChairs
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers',
          component: InhalersNebulizersScreen
        },
        {
          path: 'catalog/tools-and-equipment/medical-instruments',
          component: MedicalInstrumentScreen
        },
        { path: 'catalog/neurosurgery', component: NeurosurgeryPage },
        {
          path: 'catalog/neurosurgery/transpedikulyarnaya-fiksatsiya-pozvonochnika',
          component: TranspedicularFixationScreen
        },
        { path: 'catalog/neurosurgery/spinal-screws', component: SpinalScrews },
        { path: 'catalog/neurosurgery/spinal-beam', component: SpinalBeams },
        { path: 'catalog/neurosurgery/spinal-hooks', component: SpinalHooks },
        {
          path: 'catalog/neurosurgery/spinal-system',
          component: SpinalSystems
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical',
          component: NeurosurgicalPlates
        },
        {
          path: 'catalog/neurosurgery/vertebrae-implants',
          component: VertebralEndoprostheses
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool',
          component: NeurosurgicalInstrument
        }
      ]
    }
  ]
})
