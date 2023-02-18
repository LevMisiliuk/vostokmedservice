<template>
  <div class="stretcher-medical-second">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA16')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="stretcher-medical-second__inner">
        <LeftLinksMenu />
        <div class="stretcher-medical-second__card">
          <ProductInfoCard
            :image="stretcherMedicalA16Data[0].image"
            :title="stretcherMedicalA16Data[0].title"
            :subtitle="stretcherMedicalA16Data[0].subtitle"
            :productsParams="stretcherMedicalA16Data[0].productsParams"
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
    const stretcherMedicalA16Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA16'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA16.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A16.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA16.dataLeft1'),
            data: "212x75x7",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA16.dataLeft2'),
            data: "70х60х37",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA16.dataLeft3'),
            data: "160",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA16.dataLeft4'),
            data: "5",
          }
        ]
      }
    ])
    return {
      stretcherMedicalA16Data,
    }
  }
}
</script>

<style lang="scss">
.stretcher-medical-second {
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
