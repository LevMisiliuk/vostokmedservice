<template>
  <div class="stretcher-medical-forth">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB03')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="stretcher-medical-forth__inner">
        <LeftLinksMenu />
        <div class="stretcher-medical-forth__card">
          <ProductInfoCard
            :image="stretcherMedicalB03Data[0].image"
            :title="stretcherMedicalB03Data[0].title"
            :subtitle="stretcherMedicalB03Data[0].subtitle"
            :productsParams="stretcherMedicalB03Data[0].productsParams"
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
    const stretcherMedicalB03Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB03'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB03.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B03.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB03.dataLeft1'),
            data: "196Х56Х865",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB03.dataLeft2'),
            data: "196Х56Х28",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB03.dataLeft3'),
            data: "65",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB03.dataLeft4'),
            data: "38",
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB03.dataLeft5'),
            data: "44	",
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB03.dataLeft6'),
            data: "160",
          }
        ]
      }
    ])
    return {
      stretcherMedicalB03Data,
    }
  }
}
</script>

<style lang="scss">
.stretcher-medical-forth {
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
