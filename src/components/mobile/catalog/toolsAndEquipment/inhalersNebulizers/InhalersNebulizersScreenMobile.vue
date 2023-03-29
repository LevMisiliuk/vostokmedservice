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
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerDolphin'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-dolphin.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-delfin`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerBoreal'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-boreal.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/komprescornyi-ingalyator-nebulaizer-boreal`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.inhaler403A'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/inhaler-403A.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/ingalyator-403a-kompressornyi`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC30'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C30.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c30-comp-a-i-r-elite`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC29'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C29.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c29-comp-a-i-r-pro`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC28'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C28.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers/omron-ne-c28-comp-a-i-r`
      },
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
    height: 360px;
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
