<template>
  <ToolsAndEquipmentLayuot>
    <div class="operating-tables__carts">
      <a
        v-for="cart in operatingTablesCarts"
        :key="cart"
        class="operating-tables__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="operating-tables__cart-img"
        />
        <div class="operating-tables__cart-title">
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

    const operatingTablesCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electricTableDS1'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-table-DS1.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-1`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electricTableDS3'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-table-DS3.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-elektricheskii-ds-3`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.tableHydrDriven3008A'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/table-hydr-driven-3008A.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-a`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3008s'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/operating-table-3008s.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-3008-s`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3006'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/operating-table-3006.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/operating-tables/stol-operatsionnyi-universalnyi-s-gidravlicheskim-privodom-peredvizhnoi-3006`
      },
    ])

    return {
      operatingTablesCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.operating-tables {

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