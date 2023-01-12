<template>
  <div class="neurosurgery-layuot">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.title')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="neurosurgery-layuot__inner">
        <LeftLinksMenu :typeLink="'neurosurgery'" :linksData="neurosurgeryLinks" />
        <div class="neurosurgery-layuot__block">
          <slot></slot>
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
    const neurosurgeryLinks = computed(() => [
      {
        name: i18n.global.t('main.carts.toolsAndEquipment.links.sterilization'),
        path: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization`
      },
      [
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.panmedCamers'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.toolsAndEquipment.secondlinks.airSterilizer'),
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
        path: `/${i18n.global.locale.value}/catalog/tools-and-equipment/inhalers-nebulizers`
      },
      {
        name: i18n.global.t('main.carts.toolsAndEquipment.links.equipmentForOperatingRooms'),
        path: `/${i18n.global.locale.value}/catalog/tools-and-equipment/operational-equipment`
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
        path: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-furniture`
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
        path: `/${i18n.global.locale.value}/catalog/tools-and-equipment/cardiology`
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
        name: i18n.global.t('main.carts.toolsAndEquipment.links.medicalInstrument'),
        path: `/${i18n.global.locale.value}/catalog/tools-and-equipment/medical-instruments`
      },
    ]);

    return {
      neurosurgeryLinks,
    }
  }
}
</script>

<style lang="scss" scoped>
.neurosurgery {
  .links {
    margin-right: 30px;
  }

  &__inner {
    display: flex;
  }
}
</style>