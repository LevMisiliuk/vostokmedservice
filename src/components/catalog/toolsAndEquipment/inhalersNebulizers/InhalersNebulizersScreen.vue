<template>
  <ToolsAndEquipmentLayuot>
    <div class="inhalers-nebulizers__carts">
      <a
        v-for="cart in inhalersNebulizersCarts"
        :key="cart"
        class="inhalers-nebulizers__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="inhalers-nebulizers__cart-img"
        />
        <div class="inhalers-nebulizers__cart-title">
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

    const inhalersNebulizersCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerDolphin'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-dolphin.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerBoreal'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-boreal.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.inhaler403A'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/inhaler-403A.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC30'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C30.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC29'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C29.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC28'),
        img: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C28.png'),
        link: '/404'
      },
    ])

    return {
      inhalersNebulizersCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.inhalers-nebulizers {

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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    height: 78px;
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