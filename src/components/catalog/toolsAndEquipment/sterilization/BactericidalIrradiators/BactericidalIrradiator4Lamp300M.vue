<template>
  <div class="bactericidal-irradiator-4Lamp300M">
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
          <a>{{$t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator4Lamp300M')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="bactericidal-irradiator-4Lamp300M__inner">
        <LeftLinksMenu />
        <div class="bactericidal-irradiator-4Lamp300M__card">
          <ProductInfoCard
            :image="bactericidalIrradiator4Lamp300MData[0].image"
            :title="bactericidalIrradiator4Lamp300MData[0].title"
            :subtitle="bactericidalIrradiator4Lamp300MData[0].subtitle"
            :productsParams="bactericidalIrradiator4Lamp300MData[0].productsParams"
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
    const bactericidalIrradiator4Lamp300MData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator4Lamp300M'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-4Lamp300M.png'),
        productsParams: [
        ]
      }
    ])
    return {
      bactericidalIrradiator4Lamp300MData,
    }
  }
}
</script>

<style lang="scss">
.bactericidal-irradiator-4Lamp300M {
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
