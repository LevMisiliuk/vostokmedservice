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
import MedicalCabineSecond from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets/MedicalCabineSecond.vue'
import MedicalCabineThird from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets/MedicalCabineThird.vue'
import ChangingTableSpl from '@/components/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/ChangingTableSpl.vue'
import InsrumentTableC from '@/components/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/InsrumentTableC.vue'
import SurgicalTableSH from '@/components/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/SurgicalTableSH.vue'
import AnesthesiologistsTable from '@/components/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/AnesthesiologistsTable.vue'
import ManipulationTableCm from '@/components/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/ManipulationTableCm.vue'
import GynecologicalCouchKKG from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/GynecologicalCouchKKG.vue'
import TreatmentCouchKP from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/TreatmentCouchKP.vue'
import DiagnosticCouch from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/DiagnosticCouch.vue'
import BowelFlushingCouch from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/BowelFlushingCouch.vue'
import SpecialScrews from '@/components/catalog/traumatology/ao-screws/special-screws/SpecialScrews.vue'
import AboutScreen from '@/components/mainScreens/AboutScreen.vue'
import AdjustableMassegeCouch from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/AdjustableMassegeCouch.vue'
import PowerDrivenMessageCouch from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/PowerDrivenMessageCouch.vue'
import StationaryMessageCouch from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/StationaryMessageCouch.vue'
import AdjustableHeadrestCouch from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/AdjustableHeadrestCouch.vue'
import ProceduralCocuhTable from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ProceduralCocuhTable.vue'
import ExaminationCouch from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ExaminationCouch.vue'
import NewbornBabyCart from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/NewbornBabyCart.vue'
import CartRemovableStretcher from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/CartRemovableStretcher.vue'
import PatientTransferCart from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/PatientTransferCart.vue'
import ScrewChairwithoutBackrest from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ScrewChairwithoutBackrest.vue'
import ScrewChairwithBackrest from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ScrewChairwithBackrest.vue'
import ScrewChairBackrest from '@/components/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ScrewChairBackrest.vue'
import StretcherMedicalOne from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalOne.vue'
import StretcherMedicalSecond from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalSecond.vue'
import StretcherMedicalThird from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalThird.vue'
import StretcherMedicalForth from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalForth.vue'
import StretcherMedicalFifth from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalFifth.vue'
import StretcherMedicalSixth from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalSixth.vue'
import GynecologicalPediatricChair from '@/components/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalPediatricChair.vue'
import GynecologicalChairOne from '@/components/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairOne.vue'
import GynecologicalChairSecond from '@/components/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairSecond.vue'
import GynecologicalChairThird from '@/components/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairThird.vue'
import GynecologicalChairElectricdrive from '@/components/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairElectricdrive.vue'
import DefibrillatorMonitor from '@/components/catalog/toolsAndEquipment/DefibrillatorMonitor/DefibrillatorMonitor.vue'
import PolyaxialScrew from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalScrews/PolyaxialScrew.vue'
import CompressorInhalerDolphin from '@/components/catalog/toolsAndEquipment/inhalersNebulizers/CompressorInhalerDolphin.vue'
import CompressorInhalerBoreal from '@/components/catalog/toolsAndEquipment/inhalersNebulizers/CompressorInhalerBoreal.vue'
import InhalerOne from '@/components/catalog/toolsAndEquipment/inhalersNebulizers/InhalerOne.vue'
import OmronOne from '@/components/catalog/toolsAndEquipment/inhalersNebulizers/OmronOne.vue'
import OmronSecond from '@/components/catalog/toolsAndEquipment/inhalersNebulizers/OmronSecond.vue'
import OmronThird from '@/components/catalog/toolsAndEquipment/inhalersNebulizers/OmronThird.vue'
import MonoaxialScrew from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalScrews/MonoaxialScrew.vue'
import StaightGirder from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalBeams/StaightGirder.vue'
import CurvedBeam from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalBeams/CurvedBeam.vue'
import CrossBar from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalBeams/CrossBar.vue'
import ConnectionHook from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks/ConnectionHook.vue'
import ClosedPedicleHook from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks/ClosedPedicleHook.vue'
import OpenPedicleHook from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks/OpenPedicleHook.vue'
import OpenLaminarFlowHook from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks/OpenLaminarFlowHook.vue'
import ClosedLaminarHook from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks/ClosedLaminarHook.vue'
import CurvedLaminarHook from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks/CurvedLaminarHook.vue'
import SacredBlock from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalSystems/SacredBlock.vue'
import SacralScrew from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalSystems/SacralScrew.vue'
import InstrumentOne from '@/components/catalog/neurosurgery/neurosurgicalInstrument/InstrumentOne.vue'
import InstrumentSecond from '@/components/catalog/neurosurgery/neurosurgicalInstrument/InstrumentSecond.vue'
import InstrumentThird from '@/components/catalog/neurosurgery/neurosurgicalInstrument/InstrumentThird.vue'
import InstrumentForth from '@/components/catalog/neurosurgery/neurosurgicalInstrument/InstrumentForth.vue'
import InstrumentFifth from '@/components/catalog/neurosurgery/neurosurgicalInstrument/InstrumentFifth.vue'
import InstrumentSixth from '@/components/catalog/neurosurgery/neurosurgicalInstrument/InstrumentSixth.vue'
import InstrumentSeventh from '@/components/catalog/neurosurgery/neurosurgicalInstrument/InstrumentSeventh.vue'
import AntiAdhesionGel from '@/components/catalog/neurosurgery/AntiAdhesionGel.vue'
import LoveGruenwald from '@/components/catalog/neurosurgery/neurosurgicalInstrument/LoveGruenwald.vue'
import MicroCupForceps from '@/components/catalog/neurosurgery/neurosurgicalInstrument/MicroCupForceps.vue'
import MicroAlligatorShaft from '@/components/catalog/neurosurgery/neurosurgicalInstrument/MicroAlligatorShaft.vue'
import LunbraLaminaSpreader from '@/components/catalog/neurosurgery/neurosurgicalInstrument/LunbraLaminaSpreader.vue'
import ClowardOne from '@/components/catalog/neurosurgery/neurosurgicalInstrument/ClowardOne.vue'
import MicroGraspingSerrated from '@/components/catalog/neurosurgery/neurosurgicalInstrument/MicroGraspingSerrated.vue'
import MicroAlligatorStraight from '@/components/catalog/neurosurgery/neurosurgicalInstrument/MicroAlligatorStraight.vue'
import IlizarovApparatus from '@/components/catalog/traumatology/Ilizarov-apparatus/IlizarovApparatus.vue'
import MicroSurgery from '@/components/catalog/traumatology/micro-surgery/MicroSurgery.vue'
import NeedlesRobsCerclage from '@/components/catalog/traumatology/needles-robs-cerclage/NeedlesRobsCerclage.vue'
import ElectrocardiogrphAksion from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphAksion.vue'
import ElectrocardiogrphMiniature from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphMiniature.vue'
import ElectrocardiogrphArmasoft from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphArmasoft.vue'
import ElectrocardiogrphChannel from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphChannel.vue'
import MonitorResuscitation from '@/components/catalog/toolsAndEquipment/cardiology/MonitorResuscitation.vue'
import CervicalPlatesTitanium from '@/components/catalog/neurosurgery/neurosurgicalPlates/CervicalPlatesTitanium.vue'
import Hplate from '@/components/catalog/neurosurgery/neurosurgicalPlates/Hplate.vue'
import TrapezoidalPlate from '@/components/catalog/neurosurgery/neurosurgicalPlates/TrapezoidalPlate.vue'
import CerclageScreen from '@/components/catalog/traumatology/needles-robs-cerclage/cerclage/CerclageScreen.vue'
import NeedlesScreen from '@/components/catalog/traumatology/needles-robs-cerclage/needles/NeedlesScreen.vue'
import RobsScreen from '@/components/catalog/traumatology/needles-robs-cerclage/robs/RobsScreen.vue'
import AoPlates from '@/components/catalog/traumatology/ao-plates/AoPlates.vue'
import SmallPlates from '@/components/catalog/traumatology/ao-plates/small-plates/SmallPlates.vue'
import DynamicalFemoralSystems from '@/components/catalog/traumatology/ao-plates/dynamical-femoral-systems/DynamicalFemoralSystems.vue'
import MiniPlates from '@/components/catalog/traumatology/ao-plates/mini-plates/MiniPlates.vue'
import SpecialPlates from '@/components/catalog/traumatology/ao-plates/specials-plates/SpecialPlates.vue'
import ScrewsWithInsertForAngularStability from '@/components/catalog/traumatology/ao-screws/screws-with-insert-for-angular-stability/ScrewsWithInsertForAngularStability.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:lang',
      children: [
        { path: '', component: HomePage },
        { path: 'catalog', component: CatalogPage },
        {
          path: 'catalog/traumatology',
          component: TraumatologyPage,
          name: 'catalog-traumatology'
        },
        { path: 'education', component: EducationPage },
        { path: 'certificates', component: CertificatesPage },
        { path: 'contacts', component: ContactsPage },
        { path: 'about', component: AboutScreen },
        { path: 'catalog/traumatology/micro-surgery', component: MicroSurgery },
        {
          path: 'catalog/traumatology/needles-robs-cerclage',
          component: NeedlesRobsCerclage
        },
        {
          path: 'catalog/traumatology/needles-robs-cerclage/cerclage',
          component: CerclageScreen
        },
        {
          path: 'catalog/traumatology/needles-robs-cerclage/needles',
          component: NeedlesScreen
        },
        {
          path: 'catalog/traumatology/needles-robs-cerclage/robs',
          component: RobsScreen
        },
        { path: 'catalog/traumatology/ao-plates', component: AoPlates },
        {
          path: 'catalog/traumatology/ao-plates/small-plates',
          component: SmallPlates
        },
        {
          path: 'catalog/traumatology/ao-plates/dynamic-femoral-and-condylar-systems',
          component: DynamicalFemoralSystems
        },
        {
          path: 'catalog/traumatology/ao-plates/mini-plates',
          component: MiniPlates
        },
        {
          path: 'catalog/traumatology/ao-plates/special-plates',
          component: SpecialPlates
        },
        {
          path: 'catalog/traumatology/ao-screws/screws-with-inserts-for-angular-stability',
          component: ScrewsWithInsertForAngularStability
        },
        {
          path: 'catalog/traumatology/ilizarovs-apparatus',
          component: IlizarovApparatus
        },
        {
          path: 'catalog/surgery',
          component: CatalogSurgery,
          name: 'catalog-surgery'
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
          path: 'catalog/traumatology/ao-screws/sponge-screw',
          component: SpongeScrews
        },
        {
          path: 'catalog/traumatology/ao-screws/cortical-screw',
          component: CorticalScrews
        },
        {
          path: 'catalog/traumatology/ao-screws/thread-resistance-screw',
          component: ThreadResistantScrews
        },
        {
          path: 'catalog/traumatology/ao-screws/special-screws',
          component: SpecialScrews
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
          component: ToolsAndEquipmentPage,
          name: 'catalog-tools-and-equipment'
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
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-trekhkanalnii-ek1t-1-3-07-aksion',
          component: ElectrocardiogrphAksion
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d',
          component: ElectrocardiogrphMiniature
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d-s-programmoi-na-pk-armasoft-12-cardio',
          component: ElectrocardiogrphArmasoft
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-tryokhkanalnyi-miniatyurnyi-ek-3t-01-r-d',
          component: ElectrocardiogrphChannel
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/monitor_resuscitation',
          component: MonitorResuscitation
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/defibrillyator-monitor',
          component: DefibrillatorMonitor
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
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-dvustvorchatyi-shm-2',
          component: MedicalCabineSecond
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets/medicine_cabinets/shkaf-meditsinskii-odnostvorchatyi-s-seifom-shm-1s',
          component: MedicalCabineThird
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/',
          component: SurgicalTables
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stol-pelenalnyi-spl',
          component: ChangingTableSpl
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-instrumentalnyi-si-5',
          component: InsrumentTableC
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-khirurgicheskii-skh-1',
          component: SurgicalTableSH
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-anesteziologa-sa',
          component: AnesthesiologistsTable
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-manipulyatsionnyi-sm-3',
          component: ManipulationTableCm
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/',
          component: ChairsScreen
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-ginekologicheskaya-kkg',
          component: GynecologicalCouchKKG
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-kp',
          component: TreatmentCouchKP
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-reguliruemaya-po-vysote-km-3',
          component: AdjustableMassegeCouch
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-s-elektroprivodom-kme',
          component: PowerDrivenMessageCouch
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-statsionarnaya-km-1',
          component: StationaryMessageCouch
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-s-reguliruemym-podgolovnikom-krp',
          component: AdjustableHeadrestCouch
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-s-tumbochkoi-krpt',
          component: ProceduralCocuhTable
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-smotrovaya-ks-1',
          component: ExaminationCouch
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-novorozhdennykh-tn',
          component: NewbornBabyCart
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-perevozki-bolnykh-so-semnymi-nosilkami-tbs-150',
          component: CartRemovableStretcher
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-transportirovki-patsientov-s-regulirovkoi-vysoty-tpbr',
          component: PatientTransferCart
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-bez-spinki-sv',
          component: ScrewChairwithoutBackrest
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-so-spinkoi-peredvizhnoi-s-podstavkoi-dlya-nog-svps',
          component: ScrewChairwithBackrest
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-so-spinkoi-svs',
          component: ScrewChairBackrest
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-diagnosticheskaya-kd-1',
          component: DiagnosticCouch
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-dlya-promyvki-kishechnika-kpk',
          component: BowelFlushingCouch
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/',
          component: MedicalStretcher
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a03',
          component: StretcherMedicalOne
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a16',
          component: StretcherMedicalSecond
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a01',
          component: StretcherMedicalThird
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v01',
          component: StretcherMedicalForth
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v03',
          component: StretcherMedicalFifth
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v11',
          component: StretcherMedicalSixth
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-detskoe-s-elektroprivodom-kg-3d',
          component: GynecologicalPediatricChair
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-kg-1m',
          component: GynecologicalChairOne
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-1me',
          component: GynecologicalChairSecond
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-2m',
          component: GynecologicalChairThird
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-s-elektroprivodom-kg-ze',
          component: GynecologicalChairElectricdrive
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
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-delfin',
          component: CompressorInhalerDolphin
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-boreal',
          component: CompressorInhalerBoreal
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/ingalyator-403a-kompressornyi',
          component: InhalerOne
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c30-comp-a-i-r-elite',
          component: OmronOne
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c29-comp-a-i-r-pro',
          component: OmronSecond
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c28-comp-a-i-r',
          component: OmronThird
        },
        {
          path: 'catalog/tools-and-equipment/medical-instruments',
          component: MedicalInstrumentScreen
        },
        {
          path: 'catalog/neurosurgery',
          component: NeurosurgeryPage,
          name: 'catalog-neurosurgery'
        },
        {
          path: 'catalog/neurosurgery/gel_protivospaechny',
          component: AntiAdhesionGel
        },
        {
          path: 'catalog/neurosurgery/transpedikulyarnaya-fiksatsiya-pozvonochnika',
          component: TranspedicularFixationScreen
        },
        { path: 'catalog/neurosurgery/spinal-screws', component: SpinalScrews },
        {
          path: 'catalog/neurosurgery/spinal-screws/poliaksialnyi-vint',
          component: PolyaxialScrew
        },
        {
          path: 'catalog/neurosurgery/spinal-screws/monoaksialnyi-vint',
          component: MonoaxialScrew
        },
        { path: 'catalog/neurosurgery/spinal-beam', component: SpinalBeams },
        {
          path: 'catalog/neurosurgery/spinal-beam/pryamayabalka',
          component: StaightGirder
        },
        {
          path: 'catalog/neurosurgery/spinal-beam/izognutaya-balka',
          component: CurvedBeam
        },
        {
          path: 'catalog/neurosurgery/spinal-beam/perekrestnayabalk',
          component: CrossBar
        },
        { path: 'catalog/neurosurgery/spinal-hooks', component: SpinalHooks },
        {
          path: 'catalog/neurosurgery/spinal-hooks/soedinitelnyi-kryuchok',
          component: ConnectionHook
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/zakrytyi-pedikulyarnyi-kryuchok',
          component: ClosedPedicleHook
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/otkrytyi-pedikulyarnyi-kryuchok',
          component: OpenPedicleHook
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/otkrytyi-laminarnyi-kryuchok',
          component: OpenLaminarFlowHook
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/zakrytyi-laminarnyi-kryuchok',
          component: ClosedLaminarHook
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/izognutyi-laminarnyi-kryuchok',
          component: CurvedLaminarHook
        },
        {
          path: 'catalog/neurosurgery/spinal-system',
          component: SpinalSystems
        },
        {
          path: 'catalog/neurosurgery/spinal-system/sakralnyi-blok',
          component: SacredBlock
        },
        {
          path: 'catalog/neurosurgery/spinal-system/sakralnyi-vint',
          component: SacralScrew
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical',
          component: NeurosurgicalPlates
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical/plastina-h-obraznaya',
          component: Hplate
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical/plastina-trapetsioobraznaya',
          component: TrapezoidalPlate
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical/plastiny-sheinye-titanovye',
          component: CervicalPlatesTitanium
        },
        {
          path: 'catalog/neurosurgery/vertebrae-implants',
          component: VertebralEndoprostheses
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool',
          component: NeurosurgicalInstrument
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/cloward-11-201-160-16-cm',
          component: InstrumentOne
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/11-202-140-14-cm',
          component: InstrumentSecond
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/inge-11-195-160-16-cm-small-pattern',
          component: InstrumentThird
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/inge-11-196-170-17-cm',
          component: InstrumentForth
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/inge-26-cm-11-197-260-jaw-with-5-mm-11-198-260-jaw-with-10-mm-large-pattern',
          component: InstrumentFifth
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/cushing',
          component: InstrumentSixth
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/gloward-type-serrated-cup-jaws',
          component: InstrumentSeventh
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/love-gruenwald',
          component: LoveGruenwald
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-cup-forceps',
          component: MicroCupForceps
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-alligator-f0rceps-with-tubular-shaft-18-cm',
          component: MicroAlligatorShaft
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/lumbar-lamina-spreader-11-200-00-arm-length-87-5-mm-spread-37-5-mm',
          component: LunbraLaminaSpreader
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/cloward-11-199-130-13-cm',
          component: ClowardOne
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-grasping-11-153-00-serrated-straight',
          component: MicroGraspingSerrated
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-alligator-11-154-00-straight',
          component: MicroAlligatorStraight
        }
      ]
    }
  ]
})
