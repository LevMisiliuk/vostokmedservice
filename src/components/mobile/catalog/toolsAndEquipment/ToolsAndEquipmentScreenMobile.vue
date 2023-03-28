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
        <swiper-slide v-for="cart in toolsAndEquipmentCarts" :key="cart">
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

    const toolsAndEquipmentCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.sterilization'),
        img: require('@/assets/toolsAndEquipment/sterilization.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.inhalersNebulizers'),
        img: require('@/assets/toolsAndEquipment/inhalers-nebulizers.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.equipmentForOperatingRooms'),
        img: require('@/assets/toolsAndEquipment/equipment-for-operating-rooms.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.medicalFurniture'),
        img: require('@/assets/toolsAndEquipment/medical-furniture.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.cardiology'),
        img: require('@/assets/toolsAndEquipment/cardiology.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.medicalInstrument'),
        img: require('@/assets/toolsAndEquipment/medical-instrument.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-instruments`
      },
    ])

    return {
      toolsAndEquipmentCarts,
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
