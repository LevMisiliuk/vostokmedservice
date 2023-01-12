<template>
  <NeurosurgeryLayuot>
    <div class="neurosurgery__carts">
      <a
        v-for="cart in neurosurgeryCarts"
        :key="cart"
        class="neurosurgery__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="neurosurgery__cart-img"
        />
        <div class="neurosurgery__cart-title">
          {{ cart.title }}
        </div>
      </a>
    </div>
  </NeurosurgeryLayuot>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {
    const neurosurgeryCarts = computed(() => [
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
        link: '/404'
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
      neurosurgeryCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.neurosurgery {
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