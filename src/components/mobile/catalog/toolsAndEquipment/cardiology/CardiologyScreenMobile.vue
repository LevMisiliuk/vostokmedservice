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
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphAksion'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-aksion.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-trekhkanalnii-ek1t-1-3-07-aksion`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphMiniature'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-miniature.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphRDArmasoft'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-rd-armasoft.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-dvenadtsatikanalnyi-s-registratsiei-ekg-v-ruchnom-i-avtomaticheskom-rezhimakh-miniatyurnyi-ek-12t-01-r-d-s-programmoi-na-pk-armasoft-12-cardio`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphSingleThreeChannel'),
        img: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-single-three-channel.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/elektrokardiograf-odno-tryokhkanalnyi-miniatyurnyi-ek-3t-01-r-d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.monitorResuscitation'),
        img: require('@/assets/toolsAndEquipment/cardiology/monitor-resuscitation.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/monitor_resuscitation`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.defibrillatorMonitor'),
        img: require('@/assets/toolsAndEquipment/cardiology/defibrillator-monitor.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology/defibrillyator-monitor`
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
