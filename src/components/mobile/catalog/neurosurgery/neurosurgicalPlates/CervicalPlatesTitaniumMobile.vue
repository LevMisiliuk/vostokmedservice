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
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin1'),
        img: require('@/assets/neurosurgery/plastin1.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin2'),
        img: require('@/assets/neurosurgery/plastin2.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin3'),
        img: require('@/assets/neurosurgery/plastin3.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin4'),
        img: require('@/assets/neurosurgery/plastin4.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin5'),
        img: require('@/assets/neurosurgery/plastin5.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin6'),
        img: require('@/assets/neurosurgery/plastin6.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin7'),
        img: require('@/assets/neurosurgery/plastin7.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin8'),
        img: require('@/assets/neurosurgery/plastin8.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin9'),
        img: require('@/assets/neurosurgery/plastin9.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin10'),
        img: require('@/assets/neurosurgery/plastin10.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin11'),
        img: require('@/assets/neurosurgery/plastin11.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin12'),
        img: require('@/assets/neurosurgery/plastin12.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin13'),
        img: require('@/assets/neurosurgery/plastin13.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.cervicalPlatesTitanium.plastin14'),
        img: require('@/assets/neurosurgery/plastin14.png'),
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
    height: 320px;
    justify-content: center;
  }

  &__cart {
    max-height: 281px;
  }

  &__cart-title {
    color: $primary-white;
    font-size: 13px;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
    border-radius: 0px 0px 16px 16px;
  }

  &__cart-img {
    margin-bottom: -30px;
    width: 400px;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
