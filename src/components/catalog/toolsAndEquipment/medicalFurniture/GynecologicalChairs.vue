<template>
  <ToolsAndEquipmentLayuot>
    <div class="gynecological-chairs__carts">
      <a
        v-for="cart in GynecologicalChairsCart"
        :key="cart"
        class="gynecological-chairs__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="gynecological-chairs__cart-img"
        />
        <div class="gynecological-chairs__cart-title">
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

    const GynecologicalChairsCart = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalPediatricChairElectricDrive'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-pediatricchair-electricdrive.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-detskoe-s-elektroprivodom-kg-3d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1M'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1M.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/litters-medical/kreslo-ginekologicheskoe-kg-1m`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1ME'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1ME.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-1me`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG2M'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG2M.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-kg-2m`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairElectricDrive'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-electricdrive.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/kreslo-ginekologicheskoe-s-elektroprivodom-kg-ze`
      }
    ])

    return {
      GynecologicalChairsCart,
    }
  }
}
</script>

<style lang="scss" scoped>
.gynecological-chairs {

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
    height: 27%;
  }

  &__cart-img {
    margin-bottom: -10px;
  }
}
</style>