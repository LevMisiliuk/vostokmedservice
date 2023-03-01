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
        title: 'Невеликі пластини',
        img: require('@/assets/traumatology/small-plates.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-plates/small-plates`
      },
      {
        title: 'Динамічні системи стегнової кістки та кондилу',
        img: require('@/assets/traumatology/dynamical-hip-systems.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-plates/dynamic-femoral-and-condylar-systems`
      },
      {
        title: 'Мініпластини',
        img: require('@/assets/traumatology/mini-plates-card-img.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-plates/mini-plates`
      },
      {
        title: 'Спеціальні пластини',
        img: require('@/assets/traumatology/special-plates.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-plates/special-plates`
      },
      {
        title: 'Великі пластини',
        img: require('@/assets/traumatology/bit-plates.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/ao-screws/special-screws`
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
