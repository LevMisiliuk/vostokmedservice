<template>
  <div class="electric-sterilizers-first">
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
          <a>{{$t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers420')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="electric-sterilizers-first__inner">
        <LeftLinksMenu />
        <div class="electric-sterilizers-first__card">
          <ProductInfoCard
            :image="electricSterilizersFirstData[0].image"
            :title="electricSterilizersFirstData[0].title"
            :subtitle="electricSterilizersFirstData[0].subtitle"
            :productsParams="electricSterilizersFirstData[0].productsParams"
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
    const electricSterilizersFirstData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers420'),
        subtitle: '',
        image: require('@/assets/toolsAndEquipment/electric-sterilizers-420.png'),
        productsParams: [
        ]
      }
    ])
    return {
      electricSterilizersFirstData,
    }
  }
}
</script>

<style lang="scss">
.electric-sterilizers-first {
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
