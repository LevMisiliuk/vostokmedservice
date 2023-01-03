<template>
  <div class="tools-equipment">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >Каталог</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>Инструмент и оборудование</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="tools-equipment__inner">
        <LeftLinksMenu :typeLink="'toolsAndEquipment'" :linksData="toolsAndEquipmentLinks" />
        <div class="tools-equipment__block">
          <div class="tools-equipment__carts">
            <a
              v-for="cart in traumatologyCarts"
              :key="cart"
              class="tools-equipment__cart"
              :href="cart.link"
            >
              <img
                :src="cart.img"
                alt=""
                class="tools-equipment__cart-img"
              />
              <div class="tools-equipment__cart-title">
                {{ cart.title }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {
    const toolsAndEquipmentLinks = computed(() => [
      {
        name: i18n.global.t('main.carts.toolsAndEquipment.links.sterilization'),
        path: `/404`
      },
      [
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.panmedCamers'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.repairSterilizer'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.electricSterilizers'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.sterilizationBoxes'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.formalinChambers'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.bactericidalIrradiators'),
          path: `/404`
        },
      ],
      {
        name: i18n.global.t('main.carts.toolsAndEquipment.links.inhalersNebulizers'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/blocked-plates`
      },
      {
        name: i18n.global.t('main.carts.toolsAndEquipment.links.equipmentForOperatingRooms'),
        path: `/404`
      },
      [
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.suctionUnits'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.coagulators'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.lights'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.operatingTables'),
          path: `/404`
        },
      ],
      {
        name: i18n.global.t('main.carts.toolsAndEquipment.links.medicalFurniture'),
        path: `/404`
      },
      [
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.medicalCabinets'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.surgicalTables'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.chairs'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.medicalStretcher'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.gynecologicalChairs'),
          path: `/404`
        },
      ],
      {
        name: i18n.global.t('main.carts.toolsAndEquipment.links.cardiology'),
        path: `/404`
      },
      [
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.defibrillatorMonitor'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.electrocardiographs'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.careMonitor'),
          path: `/404`
        },
      ],
      {
        name: i18n.global.t(
          'main.carts.toolsAndEquipment.links.medicalInstrument'
        ),
        path: `/404`
      },
    ])

    
    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.intramedullaryPins'
        ),
        img: require('@/assets/traumatology/intramedullary-pins.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
        img: require('@/assets/traumatology/blocked-plates.png'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blocked-plates`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.tool'),
        img: require('@/assets/traumatology/tools.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.screwsAT'),
        img: require('@/assets/traumatology/screews-at.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        img: require('@/assets/traumatology/plates-at.png'),
        link: '/404'
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        img: require('@/assets/traumatology/needles-etc.png'),
        link: '/404'
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        img: require('@/assets/traumatology/microsurgery.png'),
        link: '/404'
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.ilizarovsApparatus'
        ),
        img: require('@/assets/traumatology/ilizarovs-apparatus.png'),
        link: '/404'
      }
    ])

    return {
      traumatologyCarts,
      toolsAndEquipmentLinks
    }
  }
}
</script>

<style lang="scss" scoped>
.tools-equipment {
  &__inner {
    display: flex;
  }

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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