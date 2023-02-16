<template>
  <div class="surgical-table-sh">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.surgicalTableSH1')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="surgical-table-sh__inner">
        <LeftLinksMenu />
        <div class="surgical-table-sh__card">
          <ProductInfoCard
            :image="surgicalTableSH1Data[0].image"
            :title="surgicalTableSH1Data[0].title"
            :subtitle="surgicalTableSH1Data[0].subtitle"
            :productsParams="surgicalTableSH1Data[0].productsParams"
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
    const textData = computed(() => [
    ])
    const surgicalTableSH1Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.surgicalTableSH1'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/medicalFurniture/surgical-table-SH1.png'),
        productsParams: [
        ]
      }
    ])
    return {
      surgicalTableSH1Data,
      textData
    }
  }
}
</script>

<style lang="scss">
.surgical-table-sh {
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
