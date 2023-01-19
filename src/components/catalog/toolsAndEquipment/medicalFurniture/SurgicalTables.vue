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
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.insrumentTableC5'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/instrument-table-C5.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.surgicalTableSH1'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/surgical-table-SH1.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.anesthesiologistsTable'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/anesthesiologists-table.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.manipulationTableCM3'),
        img: require('@/assets/toolsAndEquipment/medicalFurniture/manipulation-table-CM3.png'),
        link: '/404'
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