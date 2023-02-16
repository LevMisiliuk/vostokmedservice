<template>
  <ToolsAndEquipmentLayuot>
    <div class="medical-furniture__carts">
      <a
        v-for="cart in medicalFurnitureCarts"
        :key="cart"
        class="medical-furniture__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="medical-furniture__cart-img"
        />
        <div class="medical-furniture__cart-title">
          {{ cart.title }}
        </div>
      </a>
    </div>
  </ToolsAndEquipmentLayuot>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {

    const medicalFurnitureCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM1'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/medical-cabinet-SHM1.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-odnostvorchatyi-shm-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM2'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/medical-cabinet-SHM2.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-dvustvorchatyi-shm-2`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM1S'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/medical-cabinet-SHM1S.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/medicine-cabinets/medicine_cabinets/shkaf-meditsinskii-odnostvorchatyi-s-seifom-shm-1s`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalCouchKKG'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-couch-KKG.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-ginekologicheskaya-kkg`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.treatmentCouchKP'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/treatment-couch-KP.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-kp`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.diagnosticCouchCD1'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/diagnostic-couch-CD1.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-diagnosticheskaya-kd-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.bowelFlushingCouchCPC'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/bowel-flushingcouch-CPC.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-dlya-promyvki-kishechnika-kpk`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.adjustableMassegeCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/adjustable-massege-couch.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.powerDrivenMessageCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/powerdriven-message-couch.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stationaryMessageCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stationary-message-couch.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.adjustableHeadrestCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/adjustable-headrest-couch.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.proceduralCocuhTable'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/procedural-cocuh-table.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.examinationCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/examination-couch.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.newbornBabyCartTN'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/newbornbaby-cart-TN.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.cartRemovableStretcher'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/cart-removable-stretcher.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.patientTransferCart'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/patient-transfer-cart.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithoutBackrest'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chair-without-backrest.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithBackrest'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chair-with-backrest.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithBackrestSVS'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chairwith-backrest-SVS.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.changingTableSPL'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/changing-table-SPL.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stol-pelenalnyi-spl`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.insrumentTableC5'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/instrument-table-C5.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-instrumentalnyi-si-5`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.surgicalTableSH1'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/surgical-table-SH1.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-khirurgicheskii-skh-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.anesthesiologistsTable'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/anesthesiologists-table.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-anesteziologa-sa`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.manipulationTableCM3'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/manipulation-table-CM3.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-manipulyatsionnyi-sm-3`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA03'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A03.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA16'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A16.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA01'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A01.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB01'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B01.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB03'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B03.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB11'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B11.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalPediatricChairElectricDrive'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-pediatricchair-electricdrive.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1M'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1M.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1ME'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1ME.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG2M'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG2M.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairElectricDrive'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-electricdrive.png'),
        link: '/404'
      }
    ])

    return {
      medicalFurnitureCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.medical-furniture {

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    img {
      width: 100%;
    }
  }

  &__cart {
    width: 300px;
    max-height: 281px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
    transition: transform 0.05s linear, -webkit-transform 0.05s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__cart-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    height: 78px;
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__cart-img {
    margin-bottom: -10px;
  }
}
</style>