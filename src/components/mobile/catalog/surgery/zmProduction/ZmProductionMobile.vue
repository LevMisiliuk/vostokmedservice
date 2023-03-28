<template>
  <MobilePageWrapper>
    <div class="catalog-default_mobile__links" style="text-align: center; margin-bottom: 10px;">
      <h2>Продукція компанії ЗМ</h2>
    </div>
    <div class="catalog-default_mobile__inner-links">
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="true"
          :modules="modules"
      >
        <swiper-slide v-for="cart in zmProductionMobileCard" :key="cart">
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

    const zmProductionMobileCard = computed(() => [
      {
        title: 'Скотчкаст Плюс',
        img: require('@/assets/surgery/scotchcast-plus.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/scotchkast-plus`
      },
      {
        title: 'Софткаст',
        img: require('@/assets/surgery/softcast.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/softcast`
      },
      {
        title: 'Айобан',
        img: require('@/assets/surgery/ayoban.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/ayoban`
      },
      {
        title: 'Кобан',
        img: require('@/assets/surgery/coban.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/coban`
      },
      {
        title: 'Пластирний шкірний шов',
        img: require('@/assets/surgery/plaster-skin-suture.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/plaster-skin-suture`
      },
      {
        title: 'Медіпор',
        img: require('@/assets/surgery/medipore.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/medipore`
      },
      {
        title: 'Транспор',
        img: require('@/assets/surgery/transpor.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/transpor`
      },
      {
        title: 'Дюрапор',
        img: require('@/assets/surgery/durapore.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/durapor`
      },
      {
        title: 'Медіпор плюс Пад',
        img: require('@/assets/surgery/medipore-plus-pad.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/medipor-plus-pad`
      },
      {
        title: 'Тегадерм',
        img: require('@/assets/surgery/tegaderm.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/tegaderm`
      },
      {
        title: 'Мікрофом',
        img: require('@/assets/surgery/microfom.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surgery/zm-production/microfom`
      }
    ])

    return {
      zmProductionMobileCard,
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
