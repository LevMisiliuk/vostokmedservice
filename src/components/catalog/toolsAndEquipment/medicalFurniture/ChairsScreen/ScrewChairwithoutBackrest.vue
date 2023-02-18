<template>
  <div class="Screw-chairwithout-backrest">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithoutBackrest')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="Screw-chairwithout-backrest__inner">
        <LeftLinksMenu />
        <div class="Screw-chairwithout-backrest__card">
          <ProductInfoCard
            :image="screwChairWithoutBackrestData[0].image"
            :title="screwChairWithoutBackrestData[0].title"
            :subtitle="screwChairWithoutBackrestData[0].subtitle"
            :productsParams="screwChairWithoutBackrestData[0].productsParams"
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
    const screwChairWithoutBackrestData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.screwChairWithoutBackrest'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.screwChairWithoutBackrest.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/screw-chair-without-backrest.png'),
        productsParams: [
        ]
      }
    ])
    return {
      screwChairWithoutBackrestData,
    }
  }
}
</script>

<style lang="scss">
.Screw-chairwithout-backrest {
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
