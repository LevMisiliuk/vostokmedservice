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
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slidingLumbarVertebra'),
        img: require('@/assets/neurosurgery/sliding-lumbar-vertebra.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slindigCervicalVertebra'),
        img: require('@/assets/neurosurgery/slindig-cervical-vertebra.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slindigVertebraThoracicSpine'),
        img: require('@/assets/neurosurgery/slindig-vertebra-thoracicspine.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.slindigVertebraThoracicSpine2'),
        img: require('@/assets/neurosurgery/slindig-vertebra-thoracicspine2.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.lumbarIntervertebraldiscEdoprosthesis'),
        img: require('@/assets/neurosurgery/lumbar-intervertebraldisc-edoprosthesis.png'),
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.vertebralEndoprostheses.links.edoprosthesisCervicalIntervertebraldisc'),
        img: require('@/assets/neurosurgery/edoprosthesis-cervical-intervertebraldisc.png'),
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
