<template>
  <div class="formalin-chamber-big">
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
          <a>{{$t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers320')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="formalin-chamber-big__inner">
        <LeftLinksMenu />
        <div class="formalin-chamber-big__card">
          <ProductInfoCard
            :image="electricSterilizersSecondData[0].image"
            :title="electricSterilizersSecondData[0].title"
            :subtitle="electricSterilizersSecondData[0].subtitle"
            :productsParams="electricSterilizersSecondData[0].productsParams"
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
    const electricSterilizersSecondData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.formalinChambersLinks.formalinChamberBig'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.title'),
        image: require('@/assets/toolsAndEquipment/formalin-chamber-big.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData1'),
            data: '416'
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData2'),
            data: '524'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData3'),
            data: '275'
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData4'),
            data: '5'
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.formalinChamberBig.formalinChamberBigData6'),
          },
        ]
      }
    ])
    return {
      electricSterilizersSecondData,
    }
  }
}
</script>

<style lang="scss">
.formalin-chamber-big {
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
