<template>
  <MobilePageWrapper>
    <div class="catalog-traumatology_mobile__links">
      <ButtonLinks />
    </div>
    <div class="catalog-traumatology_mobile__inner-links">
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        :pagination="true"
        :modules="modules"
      >
        <swiper-slide v-for="cart in traumatologyCarts" :key="cart">
          <div class="catalog-traumatology_mobile__carts">
            <a
              class="catalog-traumatology_mobile__cart"
              :href="cart.link"
            >
              <img
                :src="cart.img"
                alt=""
                class="catalog-traumatology_mobile__cart-img"
              />
              <div class="catalog-traumatology_mobile__cart-title">
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
    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.intramedullaryPins'
        ),
        img: require('@/assets/traumatology/intramedullary-pins.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
        img: require('@/assets/traumatology/blocked-plates.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blocked-plates`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.tool'),
        img: require('@/assets/traumatology/tools.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.screwsAT'),
        img: require('@/assets/traumatology/screews-at.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        img: require('@/assets/traumatology/plates-at.png'),
        link: '/404'
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        img: require('@/assets/traumatology/needles-etc.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        img: require('@/assets/traumatology/microsurgery.png'),
        link: '/404'
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.ilizarovsApparatus'
        ),
        img: require('@/assets/traumatology/ilizarovs-apparatus.png'),
        link: '/404'
      }
    ])

    return {
      traumatologyCarts,
      modules: [Pagination],
    }
  },
};
</script>

<style lang="scss" >
.catalog-traumatology_mobile {
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
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
