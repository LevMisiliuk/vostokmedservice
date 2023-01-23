<template>
  <div class="sterilization-cabinet">
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
          <a>{{$t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerGP')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="sterilization-cabinet__inner">
        <LeftLinksMenu />
        <div class="sterilization-cabinet__card">
          <ProductInfoCard
            :image="sterilizationCabinetData[0].image"
            :title="sterilizationCabinetData[0].title"
            :subtitle="sterilizationCabinetData[0].subtitle"
            :productsParams="sterilizationCabinetData[0].productsParams"
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
    const sterilizationCabinetData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.sterilizationCabinet'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.sterilizationCabinet.title'),
        image: require('@/assets/toolsAndEquipment/sterilization-cabinet.png'),
        productsParams: [
        ]
      }
    ])
    return {
      sterilizationCabinetData,
    }
  }
}
</script>

<style lang="scss">
.sterilization-cabinet {
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
