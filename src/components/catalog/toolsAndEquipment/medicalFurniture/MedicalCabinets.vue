<template>
  <ToolsAndEquipmentLayuot>
    <div class="medical-cabinets__carts">
      <a
        v-for="cart in medicalCabinetsCarts"
        :key="cart"
        class="medical-cabinets__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="medical-cabinets__cart-img"
        />
        <div class="medical-cabinets__cart-title">
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

    const medicalCabinetsCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM1'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/medical-cabinet-SHM1.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-odnostvorchatyi-shm-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM2'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/medical-cabinet-SHM2.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/medicine-cabinets/shkaf-meditsinskii-dvustvorchatyi-shm-2`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM1S'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/medical-cabinet-SHM1S.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/medicine-cabinets/medicine_cabinets/shkaf-meditsinskii-odnostvorchatyi-s-seifom-shm-1s`
      },
    ])

    return {
      medicalCabinetsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.medical-cabinets {

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