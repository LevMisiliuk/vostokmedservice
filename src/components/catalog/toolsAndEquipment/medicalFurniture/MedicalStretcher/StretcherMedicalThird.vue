<template>
  <div class="stretcher-medical-third">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA01')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="stretcher-medical-third__inner">
        <LeftLinksMenu />
        <div class="stretcher-medical-third__card">
          <ProductInfoCard
            :image="stretcherMedicalA01Data[0].image"
            :title="stretcherMedicalA01Data[0].title"
            :subtitle="stretcherMedicalA01Data[0].subtitle"
            :productsParams="stretcherMedicalA01Data[0].productsParams"
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
    const stretcherMedicalA01Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalA01'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA01.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-A01.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA01.dataLeft1'),
            data: "185х52х23",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA01.dataLeft2'),
            data: "93х52х10",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA01.dataLeft3'),
            data: "5",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalA01.dataLeft4'),
            data: "160",
          }
        ]
      }
    ])
    return {
      stretcherMedicalA01Data,
    }
  }
}
</script>

<style lang="scss">
.stretcher-medical-third {
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
