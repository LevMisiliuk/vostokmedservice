<template>
  <ToolsAndEquipmentLayuot>
    <div class="air-sterilizer__carts">
      <a
        v-for="cart in AirSterilizerCarts"
        :key="cart"
        class="air-sterilizer__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="air-sterilizer__cart-img"
        />
        <div class="air-sterilizer__cart-title">
          {{ cart.title }}
        </div>
      </a>
    </div>
  </ToolsAndEquipmentLayuot>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {

    const AirSterilizerCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerNotPassable'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-not-passable.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/air-sterilizer/sterilizatory-vozdushnye-gp-320-bd-neprokhodnoi-gpd-320-prokhodnoi-usovershenstvovannye-analogi-shss-250p-i-shss-250pr`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerUkraine'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-ukraine.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerGP'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-GP.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerSpu'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-spu.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.sterilizationCabinet'),
        img: require('@/assets/toolsAndEquipment/sterilization-cabinet.png'),
        link: '/404'
      },
    ])

    return {
      AirSterilizerCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.air-sterilizer {

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    img {
      width: 100%;
    }
  }

  &__cart {
    width: 300px;
    max-height: 281px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
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
    margin-bottom: -10px;
  }
}
</style>