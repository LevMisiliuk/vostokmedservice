<template>
  <MobilePageWrapper>
    <div class="catalog-traumatology_mobile__links">
      <ButtonLinks />
    </div>
    <div class="intramedullary-pins_mobile__inner">
      <h2 class="intramedullary-pins_mobile__title">
        {{ $t('main.carts.traumatology.title') }}
      </h2>
      <div class="intramedullary-pins_mobile__inner-links">
        <Swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="true"
          :modules="modules"
        >
          <swiper-slide v-for="cart in traumatologyCarts" :key="cart">
            <div class="intramedullary-pins_mobile__carts">
              <a class="intramedullary-pins_mobile__cart" :href="cart.link">
                <img
                  :src="cart.img"
                  alt=""
                  class="intramedullary-pins_mobile__cart-img"
                />
                <div class="intramedullary-pins_mobile__cart-title">
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'

import 'swiper/css/pagination'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.links.calfPins'),
        img: require('@/assets/traumatology/calf-pins.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/calf-pin`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.pinsVerticalZType'),
        img: require('@/assets/traumatology/pins-vertical-z-type.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/pins-vertical-z-type`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.thighPins'),
        img: require('@/assets/traumatology/thigh-pins.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/thigh-pins`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.pinsForShoulder'),
        img: require('@/assets/traumatology/pins-for-shoulder.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/shoulder-pins`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.retrogradeFemoralPins'
        ),
        img: require('@/assets/traumatology/retrograde-femoral-pins.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/retrograde-femoral-pins`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.distalFemoralPins'),
        img: require('@/assets/traumatology/distal-femoral-nail.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/distal-femoral-pins`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.hipProximalPins'),
        img: require('@/assets/traumatology/hip-proximal-pins.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/hip-proximal-pins`
      }
    ])

    return {
      traumatologyCarts,
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss">
.intramedullary-pins_mobile {
  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 25px !important;
    width: 100%;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 50px 0px;

    h2 {
      color: $primary-blue;
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
    height: 340px;
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
    padding: 10px 0;
    border-radius: 0px 0px 16px 16px;
  }

  &__cart-img {
    margin-bottom: -10px;
    width: 100%;
    border-radius: 16px 16px 0px 0px;
  }
}
</style>
