<template>
  <div class="insrument-table-c">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.insrumentTableC5')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="insrument-table-c__inner">
        <LeftLinksMenu />
        <div class="insrument-table-c__card">
          <ProductInfoCard
            :image="insrumentTableC5Data[0].image"
            :title="insrumentTableC5Data[0].title"
            :subtitle="insrumentTableC5Data[0].subtitle"
            :productsParams="insrumentTableC5Data[0].productsParams"
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
    const insrumentTableC5Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.insrumentTableC5'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/medicalFurniture/instrument-table-C5.png'),
        productsParams: [
        ]
      }
    ])
    return {
      insrumentTableC5Data,
      textData
    }
  }
}
</script>

<style lang="scss">
.insrument-table-c {
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
