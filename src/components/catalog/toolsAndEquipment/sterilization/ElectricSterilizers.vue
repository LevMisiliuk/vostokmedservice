<template>
  <ToolsAndEquipmentLayuot>
    <div class="electric-sterilizers__carts">
      <a
        v-for="cart in ElectricSterilizersCarts"
        :key="cart"
        class="electric-sterilizers__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="electric-sterilizers__cart-img"
        />
        <div class="electric-sterilizers__cart-title">
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

    const ElectricSterilizersCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers420'),
        img: require('@/assets/toolsAndEquipment/electric-sterilizers-420.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-420-e-kipyatilnik`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers320'),
        img: require('@/assets/toolsAndEquipment/electric-sterilizers-320.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/electric-sterilizer/sterilizator-elektricheskii-320-e-kipyatilnik`
      },
    ])

    return {
      ElectricSterilizersCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.electric-sterilizers {

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