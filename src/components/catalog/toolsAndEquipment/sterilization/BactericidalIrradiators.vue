<template>
  <ToolsAndEquipmentLayuot>
    <div class="bactericida-iIrradiators__carts">
      <a
        v-for="cart in BactericidalIrradiatorsCarts"
        :key="cart"
        class="bactericida-iIrradiators__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="bactericida-iIrradiators__cart-img"
        />
        <div class="bactericida-iIrradiators__cart-title">
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

    const BactericidalIrradiatorsCarts = computed(() => [
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
      BactericidalIrradiatorsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.bactericida-iIrradiators {

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