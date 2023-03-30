<template>
  <MobilePageWrapper>
    <div class="catalog-default_mobile__links">
      <ButtonLinks />
    </div>
    <div class="catalog-default_mobile__inner-links">
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="true"
          :modules="modules"
      >
        <swiper-slide v-for="cart in carts" :key="cart">
          <div class="catalog-default_mobile__carts">
            <a
                class="catalog-default_mobile__cart"
                :href="cart.link"
            >
              <img
                  :src="cart.img"
                  alt=""
                  class="catalog-default_mobile__cart-img"
              />
              <div class="catalog-default_mobile__cart-title">
                {{ cart.title }}
              </div>
            </a>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    const carts = computed(() => [
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
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-reguliruemaya-po-vysote-km-3`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.powerDrivenMessageCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/powerdriven-message-couch.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-s-elektroprivodom-kme`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stationaryMessageCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stationary-message-couch.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-massazhnaya-statsionarnaya-km-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.adjustableHeadrestCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/adjustable-headrest-couch.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-s-reguliruemym-podgolovnikom-krp`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.proceduralCocuhTable'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/procedural-cocuh-table.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-protsedurnaya-s-tumbochkoi-krpt`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.examinationCouch'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/examination-couch.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/kushetka-smotrovaya-ks-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.newbornBabyCartTN'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/newbornbaby-cart-TN.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-novorozhdennykh-tn`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.cartRemovableStretcher'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/cart-removable-stretcher.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-perevozki-bolnykh-so-semnymi-nosilkami-tbs-150`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.patientTransferCart'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/patient-transfer-cart.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/telezhka-dlya-transportirovki-patsientov-s-regulirovkoi-vysoty-tpbr`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithoutBackrest'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chair-without-backrest.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-bez-spinki-sv`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithBackrest'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chair-with-backrest.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-so-spinkoi-peredvizhnoi-s-podstavkoi-dlya-nog-svps`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithBackrestSVS'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chairwith-backrest-SVS.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/couches/stul-vintovoi-so-spinkoi-svs`
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
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a03`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA16'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A16.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a16`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA01'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A01.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a01`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB01'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B01.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v01`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB03'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B03.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v03`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB11'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B11.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v11`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalPediatricChairElectricDrive'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-pediatricchair-electricdrive.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-detskoe-s-elektroprivodom-kg-3d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1M'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1M.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-kg-1m`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1ME'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1ME.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-1me`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG2M'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG2M.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-2m`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairElectricDrive'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-electricdrive.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-s-elektroprivodom-kg-ze`
      }
    ])

    return {
      carts,
      modules: [Pagination],
    }
  },
};
</script>

<style lang="scss" scoped>
.catalog-default_mobile {
  &__links {
    margin-top: 80px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    h2 {
      color:$primary-blue;
      margin-bottom: 14px;
    }

    &-links {
      display: flex;
      color: #000;
      justify-content: center;
      align-items: center;
    }
  }

  &__carts {
    display: flex;
    height: 420px;
    justify-content: center;
  }

  &__cart {
    max-height: 281px;
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    max-width: 340px;
    font-size: 16px;
    padding: 10px 0;
    border-radius: 0px 0px 16px 16px;
  }

  &__cart-img {
    margin-bottom: -10px;
    width: 100%;
    min-width: 310px;
    min-height: 235px;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
