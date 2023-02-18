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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB01')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="stretcher-medical-forth__inner">
        <LeftLinksMenu />
        <div class="stretcher-medical-forth__card">
          <ProductInfoCard
            :image="stretcherMedicalB01Data[0].image"
            :title="stretcherMedicalB01Data[0].title"
            :subtitle="stretcherMedicalB01Data[0].subtitle"
            :productsParams="stretcherMedicalB01Data[0].productsParams"
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
    const stretcherMedicalB01Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stretcherMedicalB01'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB01.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/stretcher-medical-B01.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB01.dataLeft1'),
            data: "192х55х42",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB01.dataLeft2'),
            data: "132",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB01.dataLeft3'),
            data: "65",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB01.dataLeft4'),
            data: "25",
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB01.dataLeft5'),
            data: "31	",
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stretcherMedicalB01.dataLeft6'),
            data: "160",
          }
        ]
      }
    ])
    return {
      stretcherMedicalB01Data,
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
