<template>
  <MobilePageWrapper>
    <div class="catalog-default_mobile__links" style="text-align: center; margin-bottom: 10px;">
      <h2>Ендопротези – сітки полімерні</h2>
    </div>
    <div class="catalog-default_mobile__inner-links">
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="true"
          :modules="modules"
      >
        <swiper-slide v-for="cart in EndoprosthesesPolymerMeshesCard" :key="cart">
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

    const EndoprosthesesPolymerMeshesCard = computed(() => [
      {
        title: 'есфіл т',
        img: require('@/assets/surgery/esfilt.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/esfil-t`
      },
      {
        title: 'есфіл л',
        img: require('@/assets/surgery/esfil-l.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/esfil-l`
      },
      {
        title: 'есфіл',
        img: require('@/assets/surgery/esfil.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/esfil`
      },
      {
        title: 'флексилен',
        img: require('@/assets/surgery/flexile.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/flexilen`
      },
      {
        title: 'еслан',
        img: require('@/assets/surgery/eslan.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/eslan`
      },
      {
        title: 'фторекс',
        img: require('@/assets/surgery/fluorex-2.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/ftorex`
      },
      {
        title: 'гінефлекс',
        img: require('@/assets/surgery/gyneflex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/gyneflex`
      },
      {
        title: 'уніфлекс',
        img: require('@/assets/surgery/uniflex-2.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/polymer-meshes/uniflex`
      }
    ])

    return {
      EndoprosthesesPolymerMeshesCard,
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
