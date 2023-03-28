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
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.cervicalPlatesTitanium'),
        img: require('@/assets/neurosurgery/cervical-plates-titanium.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical/plastiny-sheinye-titanovye`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.hPlate'),
        img: require('@/assets/neurosurgery/h-plate.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical/plastina-h-obraznaya`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.trapezoidalPlate'),
        img: require('@/assets/neurosurgery/trapezoidal-plate.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical/plastina-trapetsioobraznaya`
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
    max-height: 235px;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
