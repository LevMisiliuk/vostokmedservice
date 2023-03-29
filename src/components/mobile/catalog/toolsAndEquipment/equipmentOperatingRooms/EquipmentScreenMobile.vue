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
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7a23v'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7a23v.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7a-23v`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7a23d'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7a23d.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/otsasyvatel-meditsinskii-elektricheskii-model-7a-23d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7s'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7s.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7s-dlya-iskusstvennogo-aborta`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.children7eb'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/children-7eb.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/detskii-model-7e-b`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.universal7ed'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/universal-7ed.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/universalnyi-model-7e-d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.pedal7c'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/pedal-7c.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/pedalnyi-model-7v`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.surgicalElema'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/surgical-elema.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/khirurgicheskii-elema-n-am1m`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.coagulator'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/coagulator.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/koagulyatory/coagulator`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL7412II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L7412II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/cvetilnik-l7412-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL200063II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L200063II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-3-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL735II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L735II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireZmdII'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-ZmdII.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-zmd-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL20006II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L20006II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL20003II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L20003II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l-2000-3-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL20003e'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L20003e.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-3e`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL739II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L739II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l739-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL735E'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L735E.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735e`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL734II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L734II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l734-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireSPR5eEma'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-SPR5eEma.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/cvetilnik-spr-5-e-ema`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL751IISingle'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L751IISingle.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-operatsionnyi-bestenevoi-l751-ii-odnoreflektornyi`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorEEma9'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-reflector-EEma9.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-statsionarnyi-s-reguliruemym-razmerom-rabochego-polya-sr-2-4-5-e-ema-9-ti-reflektornyi`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorEEma3'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilniki-khirurgicheskie-statsionarnye-s-reguliruemym-razmerom-rabochego-polya-sr-5-e-ema-3-kh-reflektornyi`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorEEma6'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-reflector-EEma6.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-statsionarnyi-s-reguliruemym-razmerom-rabochego-polya-sr-4-e-ema-6-i-reflektornyi`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorL35II5'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-reflector-L35II5.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-operatsionnyi-bestenevoi-l735-ii-pyatireflektornyi-peredvizhnoi`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electricTableDS1'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-table-DS1.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electricTableDS3'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-table-DS3.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-3`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.tableHydrDriven3008A'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/table-hydr-driven-3008A.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-a`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3008s'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/operating-table-3008s.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-s`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3006'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/operating-table-3006.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-peredvizhnoi-3006`
      },
    ])

    return {
      carts,
      modules: [Pagination],
    }
  },
};
</script>

<style lang="scss" >
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
    height: 320px;
    justify-content: center;
  }

  &__cart {
    max-height: 281px;
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
    border-radius: 0px 0px 16px 16px;
  }

  &__cart-img {
    margin-bottom: -10px;
    width: 310px;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
