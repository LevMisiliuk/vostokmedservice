<template>
  <ToolsAndEquipmentLayuot>
    <div class="sterilization__carts">
      <a
        v-for="cart in traumatologyCarts"
        :key="cart"
        class="sterilization__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="sterilization__cart-img"
        />
        <div class="sterilization__cart-title">
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

    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraMedium'),
        img: require('@/assets/toolsAndEquipment/uv-camera-medium.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraLarge'),
        img: require('@/assets/toolsAndEquipment/uv-camera-large.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraSmall'),
        img: require('@/assets/toolsAndEquipment/uv-camera-small.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerNotPassable'),
        img: require('@/assets/toolsAndEquipment/air-sterilizer-not-passable.png'),
        link: '/404'
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
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers420'),
        img: require('@/assets/toolsAndEquipment/electric-sterilizers-420.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers320'),
        img: require('@/assets/toolsAndEquipment/electric-sterilizers-320.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxesLinks.sterilizationBoxesRound'),
        img: require('@/assets/toolsAndEquipment/sterilization-boxes-round.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberBig'),
        img: require('@/assets/toolsAndEquipment/formalin-chamber-big.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberSmall'),
        img: require('@/assets/toolsAndEquipment/formalin-chamber-small.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator1Lamp'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-1Lamp.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator2Lamp150M'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-2Lamp150M.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator2Lamp150MP'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-2Lamp150MP.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator4Lamp300M'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-4Lamp300M.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator3Lamp225M'),
        img: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-3Lamp225M.png'),
        link: '/404'
      },
    ])

    return {
      traumatologyCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.sterilization {

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