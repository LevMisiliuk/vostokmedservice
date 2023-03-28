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
        title: i18n.global.t('main.carts.neurosurgery.spinalScrewsLinks.polyaxialScrew'),
        img: require('@/assets/neurosurgery/polyaxial-screw.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-screws/poliaksialnyi-vint`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalScrewsLinks.monoaxialScrew'),
        img: require('@/assets/neurosurgery/monoaxial-screw.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-screws/monoaksialnyi-vint`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.staightGirder'),
        img: require('@/assets/neurosurgery/staight-girder.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-beam/pryamayabalka`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.curvedBeam'),
        img: require('@/assets/neurosurgery/curved-beam.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-beam/izognutaya-balka`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.crossBar'),
        img: require('@/assets/neurosurgery/cross-bar.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-beam/perekrestnayabalk`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.connectionHook'),
        img: require('@/assets/neurosurgery/connection-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/soedinitelnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.closedPedicleHook'),
        img: require('@/assets/neurosurgery/closed-pedicle-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/zakrytyi-pedikulyarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.openPedicleHook'),
        img: require('@/assets/neurosurgery/open-pedicle-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/otkrytyi-pedikulyarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.openLaminarFlowHook'),
        img: require('@/assets/neurosurgery/open-laminar-flowhook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/otkrytyi-laminarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.closedLaminarHook'),
        img: require('@/assets/neurosurgery/closed-laminar-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/zakrytyi-laminarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.curvedLaminarHook'),
        img: require('@/assets/neurosurgery/curved-laminar-hook.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-hooks/izognutyi-laminarnyi-kryuchok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalSystemsLinks.sacredBlock'),
        img: require('@/assets/neurosurgery/sacred-block.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-system/sakralnyi-blok`
      },
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalSystemsLinks.sacralScrew'),
        img: require('@/assets/neurosurgery/sacral-screw.png'),
        link: `/${i18n.global.locale.value}/catalog/neurosurgery/spinal-system/sakralnyi-vint`
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
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
