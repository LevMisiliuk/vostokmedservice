<template>
  <ToolsAndEquipmentLayuot>
    <div class="tools-equipment__carts">
      <a
        v-for="cart in toolsAndEquipmentCarts"
        :key="cart"
        class="tools-equipment__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="tools-equipment__cart-img"
        />
        <div class="tools-equipment__cart-title">
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
    const toolsAndEquipmentCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.sterilization'),
        img: require('@/assets/toolsAndEquipment/sterilization.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.inhalersNebulizers'),
        img: require('@/assets/toolsAndEquipment/inhalers-nebulizers.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.equipmentForOperatingRooms'),
        img: require('@/assets/toolsAndEquipment/equipment-for-operating-rooms.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.medicalFurniture'),
        img: require('@/assets/toolsAndEquipment/medical-furniture.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.cardiology'),
        img: require('@/assets/toolsAndEquipment/cardiology.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.links.medicalInstrument'),
        img: require('@/assets/toolsAndEquipment/medical-instrument.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-instruments`
      },
    ])

    return {
      toolsAndEquipmentCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.tools-equipment {
  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    img {
      width: 100%;
    }
  }

  &__cart {
    width: 280px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78px;
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px;
  }

  &__cart-img {
    margin-bottom: -10px;
  }
}
</style>