<template>
  <ToolsAndEquipmentLayuot>
    <div class="lights__carts">
      <a
        v-for="cart in lightsCarts"
        :key="cart"
        class="lights__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="lights__cart-img"
        />
        <div class="lights__cart-title">
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

    const lightsCarts = computed(() => [
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
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l2000-3e`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL739II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L739II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l739-ii`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL735E'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L735E.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l735e`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireL734II'),
        img: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-L734II.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment/fixtures/svetilnik-l734-ii`
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
    ])

    return {
      lightsCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.lights {

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