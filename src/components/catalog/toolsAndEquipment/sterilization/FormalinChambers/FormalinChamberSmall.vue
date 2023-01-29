<template>
  <div class="formalin-chamber-small">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/sterilization`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberSmall')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="formalin-chamber-small__inner">
        <LeftLinksMenu />
        <div class="formalin-chamber-small__card">
          <ProductInfoCard
            :image="formalinChamberSmallData[0].image"
            :title="formalinChamberSmallData[0].title"
            :subtitle="formalinChamberSmallData[0].subtitle"
            :productsParams="formalinChamberSmallData[0].productsParams"
          />
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
    const formalinChamberSmallData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberSmall'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.title'),
        image: require('@/assets/toolsAndEquipment/formalin-chamber-small.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData1'),
            data: '286'
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData2'),
            data: '193'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData3'),
            data: '191'
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData4'),
            data: '1,75'
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberSmall.formalinChamberSmallData6'),
          },
        ]
      }
    ])
    return {
      formalinChamberSmallData,
    }
  }
}
</script>

<style lang="scss">
.formalin-chamber-small {
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__card {
    display: flex;
    flex-direction: column;
  }

  .card__product-info-inner{
    justify-content: space-between !important;
  }
}
</style>
