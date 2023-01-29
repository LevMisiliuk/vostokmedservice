<template>
  <div class="bactericidal-irradiator-2Lamp150M">
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
          <a>{{$t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator2Lamp150M')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="bactericidal-irradiator-2Lamp150M__inner">
        <LeftLinksMenu />
        <div class="bactericidal-irradiator-2Lamp150M__card">
          <ProductInfoCard
            :image="bactericidalIrradiator2Lamp150MData[0].image"
            :title="bactericidalIrradiator2Lamp150MData[0].title"
            :subtitle="bactericidalIrradiator2Lamp150MData[0].subtitle"
            :productsParams="bactericidalIrradiator2Lamp150MData[0].productsParams"
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
    const bactericidalIrradiator2Lamp150MData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.bactericidalIrradiatorsLinks.bactericidalIrradiator2Lamp150M'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/bactericida-iIrradiator-2Lamp150M.png'),
        productsParams: [
        ]
      }
    ])
    return {
      bactericidalIrradiator2Lamp150MData,
    }
  }
}
</script>

<style lang="scss">
.bactericidal-irradiator-2Lamp150M {
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
