<template>
  <div class="bactericida-iIrradiator-1Lamp">
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
          <a>{{$t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator1Lamp')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="bactericida-iIrradiator-1Lamp__inner">
        <LeftLinksMenu />
        <div class="bactericida-iIrradiator-1Lamp__card">
          <ProductInfoCard
            :image="bactericidalIrradiator1LampData[0].image"
            :title="bactericidalIrradiator1LampData[0].title"
            :subtitle="bactericidalIrradiator1LampData[0].subtitle"
            :productsParams="bactericidalIrradiator1LampData[0].productsParams"
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
    const bactericidalIrradiator1LampData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator1Lamp'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-1Lamp.png'),
        productsParams: [
        ]
      }
    ])
    return {
      bactericidalIrradiator1LampData,
    }
  }
}
</script>

<style lang="scss">
.bactericida-iIrradiator-1Lamp {
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
