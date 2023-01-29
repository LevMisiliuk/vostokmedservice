<template>
  <ToolsAndEquipmentLayuot>
    <div class="suction-units__carts">
      <a
        v-for="cart in SuctionUnitsCarts"
        :key="cart"
        class="suction-units__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="suction-units__cart-img"
        />
        <div class="suction-units__cart-title">
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

    const SuctionUnitsCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7a23v'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7a23v.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7a-23v`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7a23d'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7a23d.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/otsasyvatel-meditsinskii-elektricheskii-model-7a-23d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electric7s'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-7s.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/elektricheskii-model-7s-dlya-iskusstvennogo-aborta`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.children7eb'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/children-7eb.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/detskii-model-7e-b`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.universal7ed'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/universal-7ed.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/universalnyi-model-7e-d`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.pedal7c'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/pedal-7c.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/pedalnyi-model-7v`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.surgicalElema'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/surgical-elema.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/suction/khirurgicheskii-elema-n-am1m`
      },
    ])

    return {
      SuctionUnitsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.suction-units {

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