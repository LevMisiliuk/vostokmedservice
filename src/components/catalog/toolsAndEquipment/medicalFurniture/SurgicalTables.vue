<template>
  <ToolsAndEquipmentLayuot>
    <div class="surgical-tables__carts">
      <a
        v-for="cart in surgicalTablesCarts"
        :key="cart"
        class="surgical-tables__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="surgical-tables__cart-img"
        />
        <div class="surgical-tables__cart-title">
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

    const surgicalTablesCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.changingTableSPL'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/changing-table-SPL.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stol-pelenalnyi-spl`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.insrumentTableC5'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/instrument-table-C5.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-instrumentalnyi-si-5`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.surgicalTableSH1'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/surgical-table-SH1.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-khirurgicheskii-skh-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.anesthesiologistsTable'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/anesthesiologists-table.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-anesteziologa-sa`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.manipulationTableCM3'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/manipulation-table-CM3.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture/table-surgical/stolik-manipulyatsionnyi-sm-3`
      },
    ])

    return {
      surgicalTablesCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.surgical-tables {

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
    height: 26%;
  }

  &__cart-img {
    margin-bottom: -10px;
  }
}
</style>