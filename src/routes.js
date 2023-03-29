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
import SmallInsertsWithAngularStabilityPage from '@/pages/catalog/traumatology/blocked-plates/SmallInsertsWithAngularStabilityPage.vue'
import SpecialInsertsWithAngularStabilityPage from '@/pages/catalog/traumatology/blocked-plates/SpecialInsertsWithAngularStabilityPage.vue'
import InsertsWithAngularStabilityPage from '@/pages/catalog/traumatology/blocked-plates/InsertsWithAngularStabilityPage.vue'
import LargeInsertsWithAngularStabilityPage from '@/pages/catalog/traumatology/blocked-plates/LargeInsertsWithAngularStabilityPage.vue'
import ToolsAndEquipmentPage from '@/pages/catalog/toolsAndEquipment/ToolsAndEquipmentPage.vue'
import TraumatologyToolsPage from '@/pages/catalog/traumatology/TraumatologyTools/TraumatologyToolsPage.vue'
import InstrumentsCalfThighRetrogradetThighPage from '@/pages/catalog/traumatology/TraumatologyTools/InstrumentsCalfThighRetrogradetThighPage.vue'
import ZTypeTrochantericStudToolKitPage from '@/pages/catalog/traumatology/TraumatologyTools/ZTypeTrochantericStudToolKitPage.vue'
import HumerusToolPage from '@/pages/catalog/traumatology/TraumatologyTools/HumerusToolPage.vue'
import ToolDtssDcssInsertPage from '@/pages/catalog/traumatology/TraumatologyTools/ToolDtssDcssInsertPage.vue'
import ToolTraumatologyPage from '@/pages/catalog/traumatology/TraumatologyTools/ToolTraumatologyPage.vue'
import AoScrewsPage from '@/pages/catalog/traumatology/AoScrews/AoScrewsPage.vue'
import MicroScrewPage from '@/pages/catalog/traumatology/AoScrews/MicroScrewPage.vue'
import SpongeScrewsPage from '@/pages/catalog/traumatology/AoScrews/SpongeScrewsPage.vue'
import CorticalScrewsPage from '@/pages/catalog/traumatology/AoScrews/CorticalScrewsPage.vue'
import ThreadResistantScrewsPage from '@/pages/catalog/traumatology/AoScrews/ThreadResistantScrewsPage.vue'
import SpecialScrewsPage from '@/pages/catalog/traumatology/AoScrews/SpecialScrewsPage.vue'
import ScrewsWithInsertForAngularStabilityPage from '@/pages/catalog/traumatology/AoScrews/ScrewsWithInsertForAngularStabilityPage.vue'
import AoPlatesPage from '@/pages/catalog/traumatology/AoPlates/AoPlatesPage.vue'
import SmallPlatesPage from '@/pages/catalog/traumatology/AoPlates/SmallPlatesPage.vue'
import DynamicalFemoralSystemsPage from '@/pages/catalog/traumatology/AoPlates/DynamicalFemoralSystemsPage.vue'
import MiniPlatesPage from '@/pages/catalog/traumatology/AoPlates/MiniPlatesPage.vue'
import SpecialPlatesPage from '@/pages/catalog/traumatology/AoPlates/SpecialPlatesPage.vue'
import NeedlesRobsCerclagePage from '@/pages/catalog/traumatology/NeedlesRobsCerclage/NeedlesRobsCerclagePage.vue'
import CerclageScreenPage from '@/pages/catalog/traumatology/NeedlesRobsCerclage/CerclageScreenPage.vue'
import NeedlesScreenPage from '@/pages/catalog/traumatology/NeedlesRobsCerclage/NeedlesScreenPage.vue'
import RobsScreenPage from '@/pages/catalog/traumatology/NeedlesRobsCerclage/RobsScreenPage.vue'
import MicroSurgeryPage from '@/pages/catalog/traumatology/MicroSurgeryPage.vue'
import IlizarovApparatusPage from '@/pages/catalog/traumatology/IlizarovApparatusPage.vue'
import CatalogSurgeryPage from '@/pages/catalog/surgery/CatalogSurgeryPage.vue'
import SutureMaterialsPage from '@/pages/catalog/surgery/SutureMaterialsPage.vue'
import UniflexScreenPage from '@/pages/catalog/surgery/SutureMaterials/UniflexScreenPage.vue'
import MonoamidScreenPage from '@/pages/catalog/surgery/SutureMaterials/MonoamidScreenPage.vue'
import MonofilScreenPage from '@/pages/catalog/surgery/SutureMaterials/MonofilScreenPage.vue'
import KapronScreenPage from '@/pages/catalog/surgery/SutureMaterials/KapronScreenPage.vue'
import LavsanScreenPage from '@/pages/catalog/surgery/SutureMaterials/LavsanScreenPage.vue'
import CaprogentScreenPage from '@/pages/catalog/surgery/SutureMaterials/CaprogentScreenPage.vue'
import FtorlinScreenPage from '@/pages/catalog/surgery/SutureMaterials/FtorlinScreenPage.vue'
import SilkScreenPage from '@/pages/catalog/surgery/SutureMaterials/SilkScreenPage.vue'
import FtorexScreenPage from '@/pages/catalog/surgery/SutureMaterials/FtorexScreenPage.vue'
import UltrasorbScreenPage from '@/pages/catalog/surgery/SutureMaterials/UltrasorbScreenPage.vue'
import PgaRapidPage from '@/pages/catalog/surgery/SutureMaterials/PgaRapidPage.vue'
import PgaScreenPage from '@/pages/catalog/surgery/SutureMaterials/PgaScreenPage.vue'
import SimpleCatgutPage from '@/pages/catalog/surgery/SutureMaterials/SimpleCatgutPage.vue'
import MonosorbScreenPage from '@/pages/catalog/surgery/SutureMaterials/MonosorbScreenPage.vue'
import EndoprosthesesPolymerMeshesPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/EndoprosthesesPolymerMeshesPage.vue'
import EsfilTPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/EsfilTPage.vue'
import EsfilLPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/EsfilLPage.vue'
import EsfilScreenPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/EsfilScreenPage.vue'
import FlexilenScreenPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/FlexilenScreenPage.vue'
import EslanScreenPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/EslanScreenPage.vue'
import FtorexSencondScreenPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/FtorexSencondScreenPage.vue'
import GyneflexScreenPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/GyneflexScreenPage.vue'
import UniflexSecondScreenPage from '@/pages/catalog/surgery/endoprosthesesPolymerMeshes/UniflexSecondScreenPage.vue'
import EndoprosthesesForUrogynecologyPage from '@/pages/catalog/surgery/EndoprosthesesForUrogynecology/EndoprosthesesForUrogynecologyPage.vue'
import UrofixPlPage from '@/pages/catalog/surgery/EndoprosthesesForUrogynecology/UrofixPlPage.vue'
import UrofixToPage from '@/pages/catalog/surgery/EndoprosthesesForUrogynecology/UrofixToPage.vue'
import UroslingScreenPage from '@/pages/catalog/surgery/EndoprosthesesForUrogynecology/UroslingScreenPage.vue'
import AntiadhesionsGelPage from '@/pages/catalog/surgery/AntiadhesionsGelPage.vue'
import WoundDressingsPage from '@/pages/catalog/surgery/WoundDressingsPage.vue'
import HemostaticSpongePage from '@/pages/catalog/surgery/HemostaticSpongePage.vue'
import ZmProductionPage from '@/pages/catalog/surgery/zmProduction/ZmProductionPage.vue'
import ScotchkastPlusPage from '@/pages/catalog/surgery/zmProduction/ScotchkastPlusPage.vue'
import SoftcastScreenPage from '@/pages/catalog/surgery/zmProduction/SoftcastScreenPage.vue'
import AyobanScreenPage from '@/pages/catalog/surgery/zmProduction/AyobanScreenPage.vue'
import CobanScreenPage from '@/pages/catalog/surgery/zmProduction/CobanScreenPage.vue'
import PlasterSkinSuturePage from '@/pages/catalog/surgery/zmProduction/PlasterSkinSuturePage.vue'
import MediporeScreenPage from '@/pages/catalog/surgery/zmProduction/MediporeScreenPage.vue'
import TransporScreenPage from '@/pages/catalog/surgery/zmProduction/TransporScreenPage.vue'
import DuraporScreenPage from '@/pages/catalog/surgery/zmProduction/DuraporScreenPage.vue'
import MediporPlusPadPage from '@/pages/catalog/surgery/zmProduction/MediporPlusPadPage.vue'
import TegadermScreenPage from '@/pages/catalog/surgery/zmProduction/TegadermScreenPage.vue'
import MicroFomPage from '@/pages/catalog/surgery/zmProduction/MicroFomPage.vue'
import TranspedicularFixationScreenPage from '@/pages/catalog/neurosurgery/transpedicularFixation/TranspedicularFixationScreenPage.vue'
import PolyaxialScrewPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalScrews/PolyaxialScrewPage.vue'
import MonoaxialScrewPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalScrews/MonoaxialScrewPage.vue'
import StaightGirderPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalBeams/StaightGirderPage.vue'
import CurvedBeamPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalBeams/CurvedBeamPage.vue'
import CrossBarPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalBeams/CrossBarPage.vue'
import ConnectionHookPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalHooks/ConnectionHookPage.vue'
import ClosedPedicleHookPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalHooks/ClosedPedicleHookPage.vue'
import OpenPedicleHookPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalHooks/OpenPedicleHookPage.vue'
import OpenLaminarFlowHookPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalHooks/OpenLaminarFlowHookPage.vue'
import ClosedLaminarHookPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalHooks/ClosedLaminarHookPage.vue'
import CurvedLaminarHookPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalHooks/CurvedLaminarHookPage.vue'
import SacralScrewPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalSystems/SacralScrewPage.vue'
import SacredBlockPage from '@/pages/catalog/neurosurgery/transpedicularFixation/SpinalSystems/SacredBlockPage.vue'
import NeurosurgicalPlatesPage from '@/pages/catalog/neurosurgery/neurosurgicalPlates/NeurosurgicalPlatesPage.vue'
import CervicalPlatesTitaniumPage from '@/pages/catalog/neurosurgery/neurosurgicalPlates/CervicalPlatesTitaniumPage.vue'
import HplatePage from '@/pages/catalog/neurosurgery/neurosurgicalPlates/HplatePage.vue'
import TrapezoidalPlatePage from '@/pages/catalog/neurosurgery/neurosurgicalPlates/TrapezoidalPlatePage.vue'
import VertebralEndoprosthesesPage from '@/pages/catalog/neurosurgery/vertebralEndoprostheses/VertebralEndoprosthesesPage.vue'
import NeurosurgicalInstrumentPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/NeurosurgicalInstrumentPage.vue'
import InstrumentOnePage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/InstrumentOnePage.vue'
import InstrumentSecondPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/InstrumentSecondPage.vue'
import InstrumentThirdPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/InstrumentThirdPage.vue'
import InstrumentForthPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/InstrumentForthPage.vue'
import InstrumentFifthPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/InstrumentFifthPage.vue'
import InstrumentSixthPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/InstrumentSixthPage.vue'
import InstrumentSeventhPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/InstrumentSeventhPage.vue'
import LoveGruenwaldPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/LoveGruenwaldPage.vue'
import MicroCupForcepsPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/MicroCupForcepsPage.vue'
import MicroAlligatorShaftPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/MicroAlligatorShaftPage.vue'
import LunbraLaminaSpreaderPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/LunbraLaminaSpreaderPage.vue'
import ClowardOnePage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/ClowardOnePage.vue'
import MicroGraspingSerratedPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/MicroGraspingSerratedPage.vue'
import MicroAlligatorStraightPage from '@/pages/catalog/neurosurgery/neurosurgicalInstrument/MicroAlligatorStraightPage.vue'
import AntiAdhesionGelPage from '@/pages/catalog/neurosurgery/AntiAdhesionGelPage.vue'
import SterilizationScreenPage from '@/pages/catalog/toolsAndEquipment/sterilization/SterilizationScreenPage.vue'
import UvCameraMediumPage from '@/pages/catalog/toolsAndEquipment/sterilization/PanmedCamers/UvCameraMediumPage.vue'
import UvCameraLargePage from '@/pages/catalog/toolsAndEquipment/sterilization/PanmedCamers/UvCameraLargePage.vue'
import UvCameraSmallPage from '@/pages/catalog/toolsAndEquipment/sterilization/PanmedCamers/UvCameraSmallPage.vue'
import AirSterilizerNotpassablePage from '@/pages/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerNotpassablePage.vue'
import AirSterilizerUkrainePage from '@/pages/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerUkrainePage.vue'
import AirSterilizerBDPage from '@/pages/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerBDPage.vue'
import AirSterilizerSpuPage from '@/pages/catalog/toolsAndEquipment/sterilization/AirSterilizer/AirSterilizerSpuPage.vue'
import SterilizationCabinetPage from '@/pages/catalog/toolsAndEquipment/sterilization/AirSterilizer/SterilizationCabinetPage.vue'
import ElectricSterilizersFirstPage from '@/pages/catalog/toolsAndEquipment/sterilization/ElectricSterilizers/ElectricSterilizersFirstPage.vue'
import ElectricSterilizersSecondPage from '@/pages/catalog/toolsAndEquipment/sterilization/ElectricSterilizers/ElectricSterilizersSecondPage.vue'
import SterilizationBoxesRoundPage from '@/pages/catalog/toolsAndEquipment/sterilization/SterilizationBoxes/SterilizationBoxesRoundPage.vue'
import FormalinChamberBigPage from '@/pages/catalog/toolsAndEquipment/sterilization/FormalinChambers/FormalinChamberBigPage.vue'
import FormalinChamberSmallPage from '@/pages/catalog/toolsAndEquipment/sterilization/FormalinChambers/FormalinChamberSmallPage.vue'
import BactericidalIrradiator1LampPage from '@/pages/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator1LampPage.vue'
import BactericidalIrradiator2Lamp150MPage from '@/pages/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator2Lamp150MPage.vue'
import BactericidalIrradiator2Lamp150MPPage from '@/pages/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator2Lamp150MPPage.vue'
import BactericidalIrradiator3Lamp225MPage from '@/pages/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator3Lamp225MPage.vue'
import BactericidalIrradiator4Lamp300MPage from '@/pages/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators/BactericidalIrradiator4Lamp300MPage.vue'
import AirSterilizerPage from '@/pages/catalog/toolsAndEquipment/sterilization/AirSterilizerPage.vue'
import InhalersNebulizersScreenPage from '@/pages/catalog/toolsAndEquipment/inhalersNebulizers/InhalersNebulizersScreenPage.vue'
import CompressorInhalerBorealPage from '@/pages/catalog/toolsAndEquipment/inhalersNebulizers/CompressorInhalerBorealPage.vue'
import CompressorInhalerDolphinPage from '@/pages/catalog/toolsAndEquipment/inhalersNebulizers/CompressorInhalerDolphinPage.vue'
import InhalerOnePage from '@/pages/catalog/toolsAndEquipment/inhalersNebulizers/InhalerOnePage.vue'
import OmronOnePage from '@/pages/catalog/toolsAndEquipment/inhalersNebulizers/OmronOnePage.vue'
import OmronSecondPage from '@/pages/catalog/toolsAndEquipment/inhalersNebulizers/OmronSecondPage.vue'
import OmronThirdPage from '@/pages/catalog/toolsAndEquipment/inhalersNebulizers/OmronThirdPage.vue'
import EquipmentScreenPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/EquipmentScreenPage.vue'
import ChildrenOnePage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ChildrenOnePage.vue'
import ElectricOneScreenPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ElectricOneScreenPage.vue'
import ElectricSecondScreenPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ElectricSecondScreenPage.vue'
import ElectricThirdScreenPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/ElectricThirdScreenPage.vue'
import PedalOnePage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/PedalOnePage.vue'
import SurgicalElemaPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/SurgicalElemaPage.vue'
import UniversalOnePage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits/UniversalOnePage.vue'

import CardiologyScreen from '@/components/catalog/toolsAndEquipment/cardiology/CardiologyScreen.vue'
import MedicalInstrumentScreen from '@/components/catalog/toolsAndEquipment/medicalInstrument/MedicalInstrumentScreen.vue'
import MedicalFurnitureScreen from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalFurnitureScreen.vue'
import NeurosurgeryPage from '@/pages/catalog/neurosurgery/NeurosurgeryPage.vue'
import PanmedCamers from '@/components/catalog/toolsAndEquipment/sterilization/PanmedCamers.vue'
import ElectricSterilizers from '@/components/catalog/toolsAndEquipment/sterilization/ElectricSterilizers.vue'
import SterilizationBoxes from '@/components/catalog/toolsAndEquipment/sterilization/SterilizationBoxes.vue'
import FormalinChambers from '@/components/catalog/toolsAndEquipment/sterilization/FormalinChambers.vue'
import BactericidalIrradiators from '@/components/catalog/toolsAndEquipment/sterilization/BactericidalIrradiators.vue'
import SuctionUnits from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/SuctionUnits.vue'
import CoagulatorsScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/CoagulatorsScreen.vue'
import LightsScreen from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen.vue'
import OperatingTables from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables.vue'
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
import CoagulatorPage from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/Coagulator/CoagulatorPage.vue'
import LuminaireOne from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireOne.vue'
import LuminaireSecond from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSecond.vue'
import LuminaireThird from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireThird.vue'
import LuminaireForth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireForth.vue'
import LuminaireFfith from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireFfith.vue'
import LuminaireSixth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSixth.vue'
import LuminaireSeventh from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSeventh.vue'
import LuminaireEighth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEighth.vue'
import LuminaireNineth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireNineth.vue'
import LuminaireTenth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireTenth.vue'
import LuminaireEleventh from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEleventh.vue'
import LuminaireTwelfth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireTwelfth.vue'
import LuminaireEmaNine from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEmaNine.vue'
import LuminaireReflect from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflect.vue'
import LuminaireReflectSecond from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflectSecond.vue'
import LuminaireReflectThird from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflectThird.vue'
import ElectricTableOne from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableOne.vue'
import ElectricTableSecond from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableSecond.vue'
import ElectricTableThird from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableThird.vue'
import ElectricTableForth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableForth.vue'
import ElectricTableFifth from '@/components/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableFifth.vue'
import MedicalCabineOne from '@/components/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets/MedicalCabineOne.vue'
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
import ElectrocardiogrphAksion from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphAksion.vue'
import ElectrocardiogrphMiniature from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphMiniature.vue'
import ElectrocardiogrphArmasoft from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphArmasoft.vue'
import ElectrocardiogrphChannel from '@/components/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphChannel.vue'
import MonitorResuscitation from '@/components/catalog/toolsAndEquipment/cardiology/MonitorResuscitation.vue'

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
        { path: 'catalog/traumatology/micro-surgery', component: MicroSurgeryPage },
        {
          path: 'catalog/traumatology/needles-robs-cerclage',
          component: NeedlesRobsCerclagePage
        },
        {
          path: 'catalog/traumatology/needles-robs-cerclage/cerclage',
          component: CerclageScreenPage
        },
        {
          path: 'catalog/traumatology/needles-robs-cerclage/needles',
          component: NeedlesScreenPage
        },
        {
          path: 'catalog/traumatology/needles-robs-cerclage/robs',
          component: RobsScreenPage
        },
        { path: 'catalog/traumatology/ao-plates', component: AoPlatesPage },
        {
          path: 'catalog/traumatology/ao-plates/small-plates',
          component: SmallPlatesPage
        },
        {
          path: 'catalog/traumatology/ao-plates/dynamic-femoral-and-condylar-systems',
          component: DynamicalFemoralSystemsPage
        },
        {
          path: 'catalog/traumatology/ao-plates/mini-plates',
          component: MiniPlatesPage
        },
        {
          path: 'catalog/traumatology/ao-plates/special-plates',
          component: SpecialPlatesPage
        },
        {
          path: 'catalog/traumatology/ao-screws/screws-with-inserts-for-angular-stability',
          component: ScrewsWithInsertForAngularStabilityPage
        },
        {
          path: 'catalog/traumatology/ilizarovs-apparatus',
          component: IlizarovApparatusPage
        },
        {
          path: 'catalog/surgery',
          component: CatalogSurgeryPage,
          name: 'catalog-surgery'
        },
        {
          path: 'catalog/surgery/suture-materials',
          component: SutureMaterialsPage
        },
        {
          path: 'catalog/surgery/endoprostheses-polymer-meshes',
          component: EndoprosthesesPolymerMeshesPage
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology',
          component: EndoprosthesesForUrogynecologyPage
        },
        {
          path: 'catalog/surgery/antiadhesions',
          component: AntiadhesionsGelPage
        },
        {
          path: 'catalog/surgery/wound-dressings',
          component: WoundDressingsPage
        },
        {
          path: 'catalog/surgery/hemostatic-sponge',
          component: HemostaticSpongePage
        },
        {
          path: 'catalog/surgery/zm-production',
          component: ZmProductionPage
        },
        {
          path: 'catalog/surgery/zm-production/scotchkast-plus',
          component: ScotchkastPlusPage
        },
        {
          path: 'catalog/surgery/zm-production/softcast',
          component: SoftcastScreenPage
        },
        {
          path: 'catalog/surgery/zm-production/ayoban',
          component: AyobanScreenPage
        },
        {
          path: 'catalog/surgery/zm-production/coban',
          component: CobanScreenPage
        },
        {
          path: 'catalog/surgery/zm-production/plaster-skin-suture',
          component: PlasterSkinSuturePage
        },
        {
          path: 'catalog/surgery/zm-production/medipore',
          component: MediporeScreenPage
        },
        {
          path: 'catalog/surgery/zm-production/transpor',
          component: TransporScreenPage
        },
        {
          path: 'catalog/surgery/zm-production/durapor',
          component: DuraporScreenPage
        },
        {
          path: 'catalog/surgery/zm-production/medipor-plus-pad',
          component: MediporPlusPadPage
        },
        {
          path: 'catalog/surgery/zm-production/tegaderm',
          component: TegadermScreenPage
        },
        {
          path: 'catalog/surgery/zm-production/microfom',
          component: MicroFomPage
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology/urosling',
          component: UroslingScreenPage
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology/urofix-pl',
          component: UrofixPlPage
        },
        {
          path: 'catalog/surgery/endoprostheses-for-urogynecology/urofix-to',
          component: UrofixToPage
        },
        {
          path: 'catalog/surger/polymer-meshes/esfil-t',
          component: EsfilTPage
        },
        {
          path: 'catalog/surger/polymer-meshes/esfil-l',
          component: EsfilLPage
        },
        {
          path: 'catalog/surger/polymer-meshes/esfil',
          component: EsfilScreenPage
        },
        {
          path: 'catalog/surger/polymer-meshes/flexilen',
          component: FlexilenScreenPage
        },
        {
          path: 'catalog/surger/polymer-meshes/eslan',
          component: EslanScreenPage
        },
        {
          path: 'catalog/surger/polymer-meshes/ftorex',
          component: FtorexSencondScreenPage
        },
        {
          path: 'catalog/surger/polymer-meshes/gyneflex',
          component: GyneflexScreenPage
        },
        {
          path: 'catalog/surger/polymer-meshes/uniflex',
          component: UniflexSecondScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/uniflex',
          component: UniflexScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/monoamid',
          component: MonoamidScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/capron',
          component: KapronScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/lavsan',
          component: LavsanScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/caprogent',
          component: CaprogentScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/ftorlin',
          component: FtorlinScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/silk',
          component: SilkScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/ultrasorb',
          component: UltrasorbScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/ftorex',
          component: FtorexScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/monofil',
          component: MonofilScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/pga',
          component: PgaScreenPage
        },
        {
          path: 'catalog/surger/suture-materials/simple-catgut',
          component: SimpleCatgutPage
        },
        {
          path: 'catalog/surger/suture-materials/pga-rapid',
          component: PgaRapidPage
        },
        {
          path: 'catalog/surger/suture-materials/monosorb',
          component: MonosorbScreenPage
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
          component: SpecialInsertsWithAngularStabilityPage
        },
        {
          path: 'catalog/traumatology/blockedPlates/inserts-with-angular-stability',
          component: InsertsWithAngularStabilityPage
        },
        {
          path: 'catalog/traumatology/blockedPlates/large-inserts-with-angular-stability',
          component: LargeInsertsWithAngularStabilityPage
        },
        {
          path: 'catalog/traumatology/tools',
          component: TraumatologyToolsPage
        },
        {
          path: 'catalog/traumatology/tools/instruments-calf-thigh-retrogradet-thigh',
          component: InstrumentsCalfThighRetrogradetThighPage
        },
        {
          path: 'catalog/traumatology/tools/z-type-trochanteric-stud-tool-kit',
          component: ZTypeTrochantericStudToolKitPage
        },
        {
          path: 'catalog/traumatology/tools/humerus-tool',
          component: HumerusToolPage
        },
        {
          path: 'catalog/traumatology/tools/tool-dtss-dcss-inserts',
          component: ToolDtssDcssInsertPage
        },
        {
          path: 'catalog/traumatology/tools/tool-traumatology',
          component: ToolTraumatologyPage
        },
        {
          path: 'catalog/traumatology/ao-screws',
          component: AoScrewsPage
        },
        {
          path: 'catalog/traumatology/ao-screws/micro-screws/microscrew',
          component: MicroScrewPage
        },
        {
          path: 'catalog/traumatology/ao-screws/sponge-screw',
          component: SpongeScrewsPage
        },
        {
          path: 'catalog/traumatology/ao-screws/cortical-screw',
          component: CorticalScrewsPage
        },
        {
          path: 'catalog/traumatology/ao-screws/thread-resistance-screw',
          component: ThreadResistantScrewsPage
        },
        {
          path: 'catalog/traumatology/ao-screws/special-screws',
          component: SpecialScrewsPage
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
          component: SterilizationScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/',
          component: PanmedCamers
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-large',
          component: UvCameraLargePage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-medium',
          component: UvCameraMediumPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-small',
          component: UvCameraSmallPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/',
          component: AirSterilizerPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-320-bd-neprokhodnoi-gpd-320-prokhodnoi-usovershenstvovannye-analogi-shss-250p-i-shss-250pr',
          component: AirSterilizerNotpassablePage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-20-gp-40-gp-80-ukraina',
          component: AirSterilizerUkrainePage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-160bd-gp-640-bd-gp-1300-bd',
          component: AirSterilizerBDPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-20-spu-gp-40-spu-gp-80-spu',
          component: AirSterilizerSpuPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/air-sterilizer/shkaf-sushilno-sterilizatsionnyi-shs-80',
          component: SterilizationCabinetPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/electric-sterilizer/',
          component: ElectricSterilizers
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-420-e-kipyatilnik',
          component: ElectricSterilizersFirstPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-320-e-kipyatilnik',
          component: ElectricSterilizersSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/boxes-sterilization-round/',
          component: SterilizationBoxes
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/boxes-sterilization-round/boxes-sterilization-round',
          component: SterilizationBoxesRoundPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/',
          component: BactericidalIrradiators
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-3-lampovyi-peredvizhnoi-obpe-225m',
          component: BactericidalIrradiator3Lamp225MPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-4-lampovyi-obn-300m',
          component: BactericidalIrradiator4Lamp300MPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-2-lampovyi-obn-150mp',
          component: BactericidalIrradiator2Lamp150MPPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/reflectors_bactericidal/obluchatel-bakteritsidnyi-2-lampovyi-obn-150m',
          component: BactericidalIrradiator2Lamp150MPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/reflectors-bactericidal/obluchatel-bakteritsidnyi-1-lampovyi-obn-75',
          component: BactericidalIrradiator1LampPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/',
          component: FormalinChambers
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/kamera-paroformalinovaya-kkhi-dlya-sterilizatsii-medizdelii-i-instrumenta-malaya',
          component: FormalinChamberSmallPage
        },
        {
          path: 'catalog/tools-and-equipment/sterilization/camera-paroformalinovaya/kamera-paroformalinovaya-kkhi-dlya-sterilizatsii-medizdelii-i-instrumenta-bolshaya',
          component: FormalinChamberBigPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment',
          component: EquipmentScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/',
          component: SuctionUnits
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7a-23v',
          component: ElectricOneScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/otsasyvatel-meditsinskii-elektricheskii-model-7a-23d',
          component: ElectricSecondScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7s-dlya-iskusstvennogo-aborta',
          component: ElectricThirdScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/detskii-model-7e-b',
          component: ChildrenOnePage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/universalnyi-model-7e-d',
          component: UniversalOnePage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/pedalnyi-model-7v',
          component: PedalOnePage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/suction/khirurgicheskii-elema-n-am1m',
          component: SurgicalElemaPage
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
          component: InhalersNebulizersScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-delfin',
          component: CompressorInhalerDolphinPage
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-boreal',
          component: CompressorInhalerBorealPage
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/ingalyator-403a-kompressornyi',
          component: InhalerOnePage
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c30-comp-a-i-r-elite',
          component: OmronOnePage
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c29-comp-a-i-r-pro',
          component: OmronSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c28-comp-a-i-r',
          component: OmronThirdPage
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
          component: AntiAdhesionGelPage
        },
        {
          path: 'catalog/neurosurgery/transpedikulyarnaya-fiksatsiya-pozvonochnika',
          component: TranspedicularFixationScreenPage
        },
        { path: 'catalog/neurosurgery/spinal-screws', component: SpinalScrews },
        {
          path: 'catalog/neurosurgery/spinal-screws/poliaksialnyi-vint',
          component: PolyaxialScrewPage
        },
        {
          path: 'catalog/neurosurgery/spinal-screws/monoaksialnyi-vint',
          component: MonoaxialScrewPage
        },
        { path: 'catalog/neurosurgery/spinal-beam', component: SpinalBeams },
        {
          path: 'catalog/neurosurgery/spinal-beam/pryamayabalka',
          component: StaightGirderPage
        },
        {
          path: 'catalog/neurosurgery/spinal-beam/izognutaya-balka',
          component: CurvedBeamPage
        },
        {
          path: 'catalog/neurosurgery/spinal-beam/perekrestnayabalk',
          component: CrossBarPage
        },
        { path: 'catalog/neurosurgery/spinal-hooks', component: SpinalHooks },
        {
          path: 'catalog/neurosurgery/spinal-hooks/soedinitelnyi-kryuchok',
          component: ConnectionHookPage
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/zakrytyi-pedikulyarnyi-kryuchok',
          component: ClosedPedicleHookPage
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/otkrytyi-pedikulyarnyi-kryuchok',
          component: OpenPedicleHookPage
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/otkrytyi-laminarnyi-kryuchok',
          component: OpenLaminarFlowHookPage
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/zakrytyi-laminarnyi-kryuchok',
          component: ClosedLaminarHookPage
        },
        {
          path: 'catalog/neurosurgery/spinal-hooks/izognutyi-laminarnyi-kryuchok',
          component: CurvedLaminarHookPage
        },
        {
          path: 'catalog/neurosurgery/spinal-system',
          component: SpinalSystems
        },
        {
          path: 'catalog/neurosurgery/spinal-system/sakralnyi-blok',
          component: SacredBlockPage
        },
        {
          path: 'catalog/neurosurgery/spinal-system/sakralnyi-vint',
          component: SacralScrewPage
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical',
          component: NeurosurgicalPlatesPage
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical/plastina-h-obraznaya',
          component: HplatePage
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical/plastina-trapetsioobraznaya',
          component: TrapezoidalPlatePage
        },
        {
          path: 'catalog/neurosurgery/plates-neurosurgical/plastiny-sheinye-titanovye',
          component: CervicalPlatesTitaniumPage
        },
        {
          path: 'catalog/neurosurgery/vertebrae-implants',
          component: VertebralEndoprosthesesPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool',
          component: NeurosurgicalInstrumentPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/cloward-11-201-160-16-cm',
          component: InstrumentOnePage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/11-202-140-14-cm',
          component: InstrumentSecondPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/inge-11-195-160-16-cm-small-pattern',
          component: InstrumentThirdPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/inge-11-196-170-17-cm',
          component: InstrumentForthPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/inge-26-cm-11-197-260-jaw-with-5-mm-11-198-260-jaw-with-10-mm-large-pattern',
          component: InstrumentFifthPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/cushing',
          component: InstrumentSixthPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/gloward-type-serrated-cup-jaws',
          component: InstrumentSeventhPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/love-gruenwald',
          component: LoveGruenwaldPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-cup-forceps',
          component: MicroCupForcepsPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-alligator-f0rceps-with-tubular-shaft-18-cm',
          component: MicroAlligatorShaftPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/lumbar-lamina-spreader-11-200-00-arm-length-87-5-mm-spread-37-5-mm',
          component: LunbraLaminaSpreaderPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/cloward-11-199-130-13-cm',
          component: ClowardOnePage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-grasping-11-153-00-serrated-straight',
          component: MicroGraspingSerratedPage
        },
        {
          path: 'catalog/neurosurgery/neurosurgical-tool/micro-alligator-11-154-00-straight',
          component: MicroAlligatorStraightPage
        }
      ]
    }
  ]
})
