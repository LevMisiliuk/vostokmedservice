<template>
  <div class="screw-chair-backrest">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/medical-furniture`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithBackrestSVS')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="screw-chair-backrest__inner">
        <LeftLinksMenu />
        <div class="screw-chair-backrest__card">
          <ProductInfoCard
            :image="screwChairWithBackrestSVSData[0].image"
            :title="screwChairWithBackrestSVSData[0].title"
            :subtitle="screwChairWithBackrestSVSData[0].subtitle"
            :productsParams="screwChairWithBackrestSVSData[0].productsParams"
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
    const screwChairWithBackrestSVSData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithBackrestSVS'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.screwChairWithBackrestSVS.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chairwith-backrest-SVS.png'),
        productsParams: [
        ]
      }
    ])
    return {
      screwChairWithBackrestSVSData,
    }
  }
}
</script>

<style lang="scss">
.screw-chair-backrest {
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

.card {
  margin-bottom: 40px;
  min-width: 970px;
  min-height: 200px;
  border-radius: 16px;
  background-color: #fff;

  &__product-info {
    padding: 40px;
    display: flex;
    flex-direction: column;

    &-inner {
      display: flex;
      gap: 80px;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 40px;
    }
  }

  &__product-data {
    white-space: pre-wrap;
  }

  &__product-title {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
