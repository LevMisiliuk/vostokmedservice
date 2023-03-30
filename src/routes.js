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
import CoagulatorPageScreen from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/Coagulator/CoagulatorPageScreen.vue'
import LuminaireEighthPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEighthPage.vue'
import LuminaireEleventhPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEleventhPage.vue'
import LuminaireEmaNinePage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireEmaNinePage.vue'
import LuminaireFfithPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireFfithPage.vue'
import LuminaireForthPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireForthPage.vue'
import LuminaireNinethPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireNinethPage.vue'
import LuminaireOnePage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireOnePage.vue'
import LuminaireReflectPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflectPage.vue'
import LuminaireReflectSecondPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflectSecondPage.vue'
import LuminaireReflectThirdPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireReflectThirdPage.vue'
import LuminaireSecondPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSecondPage.vue'
import LuminaireSeventhPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSeventhPage.vue'
import LuminaireSixthPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireSixthPage.vue'
import LuminaireTenthPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireTenthPage.vue'
import LuminaireThirdPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireThirdPage.vue'
import LuminaireTwelfthPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/LightsScreen/LuminaireTwelfthPage.vue'
import ElectricTableFifthPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableFifthPage.vue'
import ElectricTableForthPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableForthPage.vue'
import ElectricTableOnePage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableOnePage.vue'
import ElectricTableThirdPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableThirdPage.vue'
import MedicalFurnitureScreenPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalFurnitureScreenPage.vue'
import MedicalCabineOnePage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets/MedicalCabineOnePage.vue'
import MedicalCabineSecondPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets/MedicalCabineSecondPage.vue'
import MedicalCabineThirdPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalCabinets/MedicalCabineThirdPage.vue'
import AdjustableHeadrestCouchPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/AdjustableHeadrestCouchPage.vue'
import AdjustableMassegeCouchPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/AdjustableMassegeCouchPage.vue'
import BowelFlushingCouchPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/BowelFlushingCouchPage.vue'
import CartRemovableStretcherPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/CartRemovableStretcherPage.vue'
import DiagnosticCouchPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/DiagnosticCouchPage.vue'
import ExaminationCouchPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ExaminationCouchPage.vue'
import GynecologicalCouchKKGPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/GynecologicalCouchKKGPage.vue'
import NewbornBabyCartPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/NewbornBabyCartPage.vue'
import PatientTransferCartPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/PatientTransferCartPage.vue'
import PowerDrivenMessageCouchPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/PowerDrivenMessageCouchPage.vue'
import ProceduralCocuhTablePage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ProceduralCocuhTablePage.vue'
import ScrewChairBackrestPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ScrewChairBackrestPage.vue'
import ScrewChairwithBackrestPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ScrewChairwithBackrestPage.vue'
import ScrewChairwithoutBackrestPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/ScrewChairwithoutBackrestPage.vue'
import StationaryMessageCouchPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/StationaryMessageCouchPage.vue'
import AnesthesiologistsTablePage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/AnesthesiologistsTablePage.vue'
import ChangingTableSplPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/ChangingTableSplPage.vue'
import InsrumentTableCPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/InsrumentTableCPage.vue'
import ManipulationTableCmPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/ManipulationTableCmPage.vue'
import SurgicalTableSHPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/SurgicalTables/SurgicalTableSHPage.vue'
import StretcherMedicalFifthPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalFifthPage.vue'
import StretcherMedicalForthPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalForthPage.vue'
import StretcherMedicalOnePage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalOnePage.vue'
import StretcherMedicalSecondPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalSecondPage.vue'
import StretcherMedicalSixthPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalSixthPage.vue'
import StretcherMedicalThirdPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/MedicalStretcher/StretcherMedicalThirdPage.vue'
import GynecologicalChairElectricdrivePage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairElectricdrivePage.vue'
import GynecologicalChairOnePage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairOnePage.vue'
import GynecologicalChairSecondPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairSecondPage.vue'
import GynecologicalChairThirdPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalChairThirdPage.vue'
import GynecologicalPediatricChairPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/GynecologicalChairs/GynecologicalPediatricChairPage.vue'
import CardiologyScreenPage from '@/pages/catalog/toolsAndEquipment/cardiology/CardiologyScreenPage.vue'
import ElectroCardiographsPage from '@/pages/catalog/toolsAndEquipment/cardiology/ElectroCardiographsPage.vue'
import ElectrocardiogrphArmasoftPage from '@/pages/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphArmasoftPage.vue'
import ElectrocardiogrphChannelPage from '@/pages/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphChannelPage.vue'
import ElectrocardiogrphMiniaturePage from '@/pages/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphMiniaturePage.vue'
import MonitorResuscitationPage from '@/pages/catalog/toolsAndEquipment/cardiology/MonitorResuscitationPage.vue'
import MedicalInstrumentScreenPage from '@/pages/catalog/toolsAndEquipment/MedicalInstrumentScreenPage.vue'
import NeurosurgeryPage from '@/pages/catalog/neurosurgery/NeurosurgeryPage.vue'
import ElectricTableSecondPage from '@/pages/catalog/toolsAndEquipment/equipmentOperatingRooms/OperatingTables/ElectricTableSecondPage.vue'
import TreatmentCouchKPPage from '@/pages/catalog/toolsAndEquipment/medicalFurniture/ChairsScreen/TreatmentCouchKPPage.vue'
import DefibrillatorMonitorPage from '@/pages/catalog/toolsAndEquipment/DefibrillatorMonitorPage.vue'
import ElectrocardiogrphAksionPage from '@/pages/catalog/toolsAndEquipment/cardiology/ElectrocardiogrphAksionPage.vue'
import AboutScreenPage from './pages/AboutScreenPage.vue'

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
import SpinalScrews from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalScrews.vue'
import SpinalBeams from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalBeams.vue'
import SpinalHooks from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalHooks.vue'
import SpinalSystems from '@/components/catalog/neurosurgery/transpedicularFixation/SpinalSystems.vue'

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
        { path: 'about', component: AboutScreenPage },
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
          component: CoagulatorPageScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/',
          component: LightsScreen
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/cvetilnik-l7412-ii',
          component: LuminaireOnePage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-3-ii',
          component: LuminaireSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735-ii',
          component: LuminaireThirdPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-zmd-ii',
          component: LuminaireForthPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-ii',
          component: LuminaireFfithPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l-2000-3-ii',
          component: LuminaireSixthPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-3e',
          component: LuminaireSeventhPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l739-ii',
          component: LuminaireEighthPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735e',
          component: LuminaireNinethPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l734-ii',
          component: LuminaireTenthPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/cvetilnik-spr-5-e-ema',
          component: LuminaireEleventhPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-operatsionnyi-bestenevoi-l751-ii-odnoreflektornyi',
          component: LuminaireTwelfthPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-statsionarnyi-s-reguliruemym-razmerom-rabochego-polya-sr-2-4-5-e-ema-9-ti-reflektornyi',
          component: LuminaireEmaNinePage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilniki-khirurgicheskie-statsionarnye-s-reguliruemym-razmerom-rabochego-polya-sr-5-e-ema-3-kh-reflektornyi',
          component: LuminaireReflectPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-statsionarnyi-s-reguliruemym-razmerom-rabochego-polya-sr-4-e-ema-6-i-reflektornyi',
          component: LuminaireReflectSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-operatsionnyi-bestenevoi-l735-ii-pyatireflektornyi-peredvizhnoi',
          component: LuminaireReflectThirdPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/',
          component: OperatingTables
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-1',
          component: ElectricTableOnePage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-3',
          component: ElectricTableSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-a',
          component: ElectricTableThirdPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-s',
          component: ElectricTableForthPage
        },
        {
          path: 'catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-peredvizhnoi-3006',
          component: ElectricTableFifthPage
        },
        {
          path: 'catalog/tools-and-equipment/cardiology',
          component: CardiologyScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-trekhkanalnii-ek1t-1-3-07-aksion',
          component: ElectrocardiogrphAksionPage
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d',
          component: ElectrocardiogrphMiniaturePage
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d-s-programmoi-na-pk-armasoft-12-cardio',
          component: ElectrocardiogrphArmasoftPage
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-tryokhkanalnyi-miniatyurnyi-ek-3t-01-r-d',
          component: ElectrocardiogrphChannelPage
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/monitor_resuscitation',
          component: MonitorResuscitationPage
        },
        {
          path: 'catalog/tools-and-equipment/cardiology/defibrillyator-monitor',
          component: DefibrillatorMonitorPage
        },
        {
          path: 'catalog/tools-and-equipment/electrocardiograph',
          component: ElectroCardiographsPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture',
          component: MedicalFurnitureScreenPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets',
          component: MedicalCabinets
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-odnostvorchatyi-shm-1',
          component: MedicalCabineOnePage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-dvustvorchatyi-shm-2',
          component: MedicalCabineSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/medicine-cabinets/medicine_cabinets/shkaf-meditsinskii-odnostvorchatyi-s-seifom-shm-1s',
          component: MedicalCabineThirdPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/',
          component: SurgicalTables
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stol-pelenalnyi-spl',
          component: ChangingTableSplPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-instrumentalnyi-si-5',
          component: InsrumentTableCPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-khirurgicheskii-skh-1',
          component: SurgicalTableSHPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-anesteziologa-sa',
          component: AnesthesiologistsTablePage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-manipulyatsionnyi-sm-3',
          component: ManipulationTableCmPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/',
          component: ChairsScreen
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-ginekologicheskaya-kkg',
          component: GynecologicalCouchKKGPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-kp',
          component: TreatmentCouchKPPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-reguliruemaya-po-vysote-km-3',
          component: AdjustableMassegeCouchPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-s-elektroprivodom-kme',
          component: PowerDrivenMessageCouchPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-statsionarnaya-km-1',
          component: StationaryMessageCouchPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-s-reguliruemym-podgolovnikom-krp',
          component: AdjustableHeadrestCouchPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-s-tumbochkoi-krpt',
          component: ProceduralCocuhTablePage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-smotrovaya-ks-1',
          component: ExaminationCouchPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-novorozhdennykh-tn',
          component: NewbornBabyCartPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-perevozki-bolnykh-so-semnymi-nosilkami-tbs-150',
          component: CartRemovableStretcherPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-transportirovki-patsientov-s-regulirovkoi-vysoty-tpbr',
          component: PatientTransferCartPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-bez-spinki-sv',
          component: ScrewChairwithoutBackrestPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-so-spinkoi-peredvizhnoi-s-podstavkoi-dlya-nog-svps',
          component: ScrewChairwithBackrestPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-so-spinkoi-svs',
          component: ScrewChairBackrestPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-diagnosticheskaya-kd-1',
          component: DiagnosticCouchPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/couches/kushetka-dlya-promyvki-kishechnika-kpk',
          component: BowelFlushingCouchPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/',
          component: MedicalStretcher
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a03',
          component: StretcherMedicalOnePage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a16',
          component: StretcherMedicalSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a01',
          component: StretcherMedicalThirdPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v01',
          component: StretcherMedicalForthPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v03',
          component: StretcherMedicalFifthPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v11',
          component: StretcherMedicalSixthPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-detskoe-s-elektroprivodom-kg-3d',
          component: GynecologicalPediatricChairPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-kg-1m',
          component: GynecologicalChairOnePage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-1me',
          component: GynecologicalChairSecondPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-2m',
          component: GynecologicalChairThirdPage
        },
        {
          path: 'catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-s-elektroprivodom-kg-ze',
          component: GynecologicalChairElectricdrivePage
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
          component: MedicalInstrumentScreenPage
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
