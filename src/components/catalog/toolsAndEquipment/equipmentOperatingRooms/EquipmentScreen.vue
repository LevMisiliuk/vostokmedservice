<template>
  <ToolsAndEquipmentLayuot>
    <div class="equipment__carts">
      <a
        v-for="cart in equipmentCarts"
        :key="cart"
        class="equipment__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="equipment__cart-img"
        />
        <div class="equipment__cart-title">
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

    const equipmentCarts = computed(() => [
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
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.coagulator'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/coagulator.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/koagulyatory/coagulator`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL7412II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L7412II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/cvetilnik-l7412-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL200063II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L200063II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-3-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL735II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L735II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireZmdII'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-ZmdII.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-zmd-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL20006II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L20006II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-6-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL20003II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L20003II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l-2000-3-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL20003e'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L20003e.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL739II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L739II.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL735E'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L735E.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL734II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L734II.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireSPR5eEma'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-SPR5eEma.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL751IISingle'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L751IISingle.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorEEma9'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-reflector-EEma9.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorEEma3'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorEEma6'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-reflector-EEma6.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorL35II5'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-reflector-L35II5.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electricTableDS1'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-table-DS1.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.electricTableDS3'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/electric-table-DS3.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.tableHydrDriven3008A'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/table-hydr-driven-3008A.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3008s'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/operating-table-3008s.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3006'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/operating-table-3006.png'),
        link: '/404'
      },
    ])

    return {
      equipmentCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.equipment {

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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 78px;
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