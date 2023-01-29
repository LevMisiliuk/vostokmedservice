<template>
  <div class="bactericidal-irradiator-3Lamp225M">
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
          <a>{{$t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator3Lamp225M')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="bactericidal-irradiator-3Lamp225M__inner">
        <LeftLinksMenu />
        <div class="bactericidal-irradiator-3Lamp225M__card">
          <ProductInfoCard
            :image="bactericidalIrradiator3Lamp225MData[0].image"
            :title="bactericidalIrradiator3Lamp225MData[0].title"
            :subtitle="bactericidalIrradiator3Lamp225MData[0].subtitle"
            :productsParams="bactericidalIrradiator3Lamp225MData[0].productsParams"
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
    const bactericidalIrradiator3Lamp225MData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator3Lamp225M'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-3Lamp225M.png'),
        productsParams: [
        ]
      }
    ])
    return {
      bactericidalIrradiator3Lamp225MData,
    }
  }
}
</script>

<style lang="scss">
.bactericidal-irradiator-3Lamp225M {
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
