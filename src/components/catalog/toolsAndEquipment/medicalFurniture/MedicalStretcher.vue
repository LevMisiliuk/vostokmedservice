<template>
  <ToolsAndEquipmentLayuot>
    <div class="medical-stretcher__carts">
      <a
        v-for="cart in MedicalStretcherCart"
        :key="cart"
        class="medical-stretcher__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="medical-stretcher__cart-img"
        />
        <div class="medical-stretcher__cart-title">
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

    const MedicalStretcherCart = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA03'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A03.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a03`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA16'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A16.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a16`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA01'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A01.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-a01`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB01'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B01.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v01`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB03'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B03.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v03`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB11'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B11.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/nosilki-meditsinskie-v11`
      },
    ])

    return {
      MedicalStretcherCart,
    }
  }
}
</script>

<style lang="scss" scoped>
.medical-stretcher {

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