<template>
  <MobilePageWrapper>
    <div class="catalog-default_mobile__links" style="text-align: center; margin-bottom: 10px;">
      <h2>Шовні матеріали</h2>
      <h4 style="color: #000;">Нерозсмоктуються</h4>
    </div>
    <div class="catalog-default_mobile__inner-links">
        <Swiper
        :slides-per-view="1"
        :space-between="50"
        :pagination="true"
        :modules="modules1"
      >
        <swiper-slide v-for="cart in sutureMaterialsCardsFirst" :key="cart">
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
    <div class="catalog-default_mobile__links" style="text-align: center; margin-bottom: 10px; margin-top: 10px;">
      <h4 style="color: #000;">Розсмоктуються</h4>
    </div>
    <div class="catalog-default_mobile__inner-links">
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        :pagination="true"
        :modules="modules2"
      >
        <swiper-slide v-for="cart in sutureMaterialsCardsSecond" :key="cart">
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

    const sutureMaterialsCardsFirst = computed(() => [
      {
        title: 'уніфлекс',
        img: require('@/assets/surgery/uniflex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/uniflex`
      },
      {
        title: 'моноамід',
        img: require('@/assets/surgery/monoamide.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/monoamid`
      },
      {
        title: 'монофіл',
        img: require('@/assets/surgery/monofil.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/monofil`
      },
      {
        title: 'капрон',
        img: require('@/assets/surgery/capron.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/capron`
      },
      {
        title: 'лавсан',
        img: require('@/assets/surgery/lavsan.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/lavsan`
      },
      {
        title: 'капрогент',
        img: require('@/assets/surgery/caprogent.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/caprogent`
      },
      {
        title: 'фторлін',
        img: require('@/assets/surgery/fluorolin.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/ftorlin`
      },
      {
        title: 'шовк',
        img: require('@/assets/surgery/silk.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/silk`
      },
      {
        title: 'фторекс',
        img: require('@/assets/surgery/fluorex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/ftorex`
      }
    ])

    const sutureMaterialsCardsSecond = computed(() => [
      {
        title: 'ультрасорб',
        img: require('@/assets/surgery/ultrasorb.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/ultrasorb`
      },
      {
        title: 'пга',
        img: require('@/assets/surgery/pga.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/pga`
      },
      {
        title: 'кетгут простий',
        img: require('@/assets/surgery/simple-catgut.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/simple-catgut`
      },
      {
        title: 'пга-рапід',
        img: require('@/assets/surgery/pga-rapid.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/pga-rapid`
      },
      {
        title: 'моносорб',
        img: require('@/assets/surgery/uniflex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/monosorb`
      }
    ])

    return {
      sutureMaterialsCardsFirst,
      sutureMaterialsCardsSecond,
      modules1: [Pagination],
      modules2: [Pagination],
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
