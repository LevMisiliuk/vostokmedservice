<template>
  <ToolsAndEquipmentLayuot>
    <div class="sterilization-boxes__carts">
      <a
        v-for="cart in SterilizationBoxesCarts"
        :key="cart"
        class="sterilization-boxes__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="sterilization-boxes__cart-img"
        />
        <div class="sterilization-boxes__cart-title">
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

    const SterilizationBoxesCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxesLinks.sterilizationBoxesRound'),
        img: require('@/assets/toolsAndEquipment/sterilization-boxes-round.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/boxes-sterilization-round/boxes-sterilization-round`
      },
    ])

    return {
      SterilizationBoxesCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.sterilization-boxes {

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
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transition: all 0.2s;
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
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