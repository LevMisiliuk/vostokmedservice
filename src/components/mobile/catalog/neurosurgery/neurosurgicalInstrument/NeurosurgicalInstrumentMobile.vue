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
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.CLOWARD1120116016cm'),
        img: require('@/assets/neurosurgery/CLOWARD-1120116016cm.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/cloward-11-201-160-16-cm`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.1120214014CM'),
        img: require('@/assets/neurosurgery/1120214014CM.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/11-202-140-14-cm`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGE1119516016CMSMALLPATTERN'),
        img: require('@/assets/neurosurgery/INGE-1119516016CM-SMALL-PATTERN.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/inge-11-195-160-16-cm-small-pattern`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGE1119617017CM'),
        img: require('@/assets/neurosurgery/INGE-1119617017CM.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/inge-11-196-170-17-cm`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGELARGEPATTERN'),
        img: require('@/assets/neurosurgery/INGE-LARGE-PATTERN.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/inge-26-cm-11-197-260-jaw-with-5-mm-11-198-260-jaw-with-10-mm-large-pattern`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.cushing'),
        img: require('@/assets/neurosurgery/cushing.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/cushing`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.glowardTypeCupJaws'),
        img: require('@/assets/neurosurgery/glowardtype-cup-jaws.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/gloward-type-serrated-cup-jaws`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.loveGruenwald'),
        img: require('@/assets/neurosurgery/love-gruenwald.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/love-gruenwald`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microCupForceps'),
        img: require('@/assets/neurosurgery/micro-cup-forceps.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/micro-cup-forceps`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microAlligatorShaft'),
        img: require('@/assets/neurosurgery/micro-alligator-shaft.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/micro-alligator-f0rceps-with-tubular-shaft-18-cm`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.lunbraLaminaSpreader'),
        img: require('@/assets/neurosurgery/lunbra-lamina-spreader.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/lumbar-lamina-spreader-11-200-00-arm-length-87-5-mm-spread-37-5-mm`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.cloward1119913013CM'),
        img: require('@/assets/neurosurgery/cloward-1119913013CM.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/cloward-11-199-130-13-cm`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microGraspingSerrated'),
        img: require('@/assets/neurosurgery/micro-grasping-serrated.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/micro-grasping-11-153-00-serrated-straight`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.microAlligatorStraight'),
        img: require('@/assets/neurosurgery/micro-alligator-straight.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool/micro-alligator-11-154-00-straight`
      }
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
    width: 340px;
    min-width: 310px;
    min-height: 235px;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
