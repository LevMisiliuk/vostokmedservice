<template>
  <MobilePageWrapper>
    <div class="main-page_mobile__inner">
      <h2 class="main-page_mobile__title">{{ $t('main.carts.traumatology.title') }}</h2>
      <div class="main-page_mobile__inner-links">
        <Swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="true"
          :modules="modules"
        >
          <swiper-slide v-for="cart in traumatologyCarts" :key="cart">
            <div class="main-page_mobile__carts">
              <a
                class="main-page_mobile__cart"
                :href="cart.link"
              >
                <img
                  :src="cart.img"
                  alt=""
                  class="main-page_mobile__cart-img"
                />
                <div class="main-page_mobile__cart-title">
                  {{ cart.title }}
                </div>
              </a>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
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
          'main.carts.traumatology.links.microscrews'
        ),
        img: require('@/assets/traumatology/microscrews.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/micro-screws/microscrew`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.cancellousScrews'
        ),
        img: require('@/assets/traumatology/cancellous-screws.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/sponge-screw`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.corticalScrews'
        ),
        img: require('@/assets/traumatology/cortical-screws.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/cortical-screw`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.threadResistantScrews'
        ),
        img: require('@/assets/traumatology/screws-thread-stable.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/thread-resistance-screw`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.specialScrews'
        ),
        img: require('@/assets/traumatology/special-screws.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/special-screws`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.screwsInsertsWithAngularStability'
        ),
        img: require('@/assets/traumatology/screws-for-plates-with-angular-stability.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/screws-with-inserts-for-angular-stability`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.cannulatedScrews'
        ),
        img: require('@/assets/traumatology/cannulated-screws.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      }
    ])

    return {
      traumatologyCarts,
      modules: [Pagination],
    }
  },
};
</script>

<style lang="scss">
.main-page_mobile {
  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 25px !important;
    width: 100%;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    margin: 80px 0px 50px 0px;

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
    height: 380px;
    justify-content: center;
  }

  &__cart {
    width: 330px;
    max-height: 281px;
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 10px;
    border-radius: 0px 0px 16px 16px;
  }

  &__cart-img {
    margin-bottom: -10px;
    width: 100%;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
