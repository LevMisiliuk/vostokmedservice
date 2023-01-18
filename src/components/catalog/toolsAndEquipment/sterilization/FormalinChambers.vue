<template>
  <ToolsAndEquipmentLayuot>
    <div class="formalin-chambers__carts">
      <a
        v-for="cart in FormalinChambersCarts"
        :key="cart"
        class="formalin-chambers__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="formalin-chambers__cart-img"
        />
        <div class="formalin-chambers__cart-title">
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

    const FormalinChambersCarts = computed(() => [
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
    ])

    return {
      FormalinChambersCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.formalin-chambers {

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