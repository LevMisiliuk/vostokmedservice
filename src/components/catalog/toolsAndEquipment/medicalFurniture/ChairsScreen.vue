<template>
  <ToolsAndEquipmentLayuot>
    <div class="chairs__carts">
      <a
        v-for="cart in chairsCarts"
        :key="cart"
        class="chairs__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="chairs__cart-img"
        />
        <div class="chairs__cart-title">
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

    const chairsCarts = computed(() => [
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
    ])

    return {
      chairsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.chairs {

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
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transition: all 0.2s;
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }

  &__cart-title {
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