<template>
  <div class="intramedullary-pins">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/`">
          {{ $t('main.carts.traumatology.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">
            {{ $t('main.carts.traumatology.links.intramedullaryPins') }}
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="intramedullary-pins__inner">
        <LeftLinksMenu />
        <div class="intramedullary-pins__block">
          <div class="intramedullary-pins__carts">
            <a
              v-for="cart in traumatologyCarts"
              :key="cart"
              class="intramedullary-pins__cart"
              :href="cart.link"
            >
              <img
                :src="cart.img"
                alt=""
                class="intramedullary-pins__cart-img"
              />
              <div class="intramedullary-pins__cart-title">
                {{ cart.title }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'IntramedullaryPins',
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
        link: '/404'
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.retrogradeFemoralPins'
        ),
        img: require('@/assets/traumatology/retrograde-femoral-pins.jpeg'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.distalFemoralNail'),
        img: require('@/assets/traumatology/distal-femoral-nail.jpeg'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.hipProximalPins'),
        img: require('@/assets/traumatology/hip-proximal-pins.jpeg'),
        link: '/404'
      }
    ])

    return {
      traumatologyCarts
    }
  }
}
</script>

<style lang="scss" scoped>
.intramedullary-pins {
  &__inner {
    display: flex;
  }

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    width: 300px;
    max-height: 290px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
    transition: transform 0.05s linear, -webkit-transform 0.05s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__cart-img {
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }
}
</style>