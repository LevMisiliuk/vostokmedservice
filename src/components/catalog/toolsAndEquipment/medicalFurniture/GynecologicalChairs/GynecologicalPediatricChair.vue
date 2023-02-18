<template>
  <div class="gynecological-pediatric-chair">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalPediatricChairElectricDrive')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="gynecological-pediatric-chair__inner">
        <LeftLinksMenu />
        <div class="gynecological-pediatric-chair__card">
          <ProductInfoCard
            :image="gynecologicalPediatricChairElectricDriveData[0].image"
            :title="gynecologicalPediatricChairElectricDriveData[0].title"
            :subtitle="gynecologicalPediatricChairElectricDriveData[0].subtitle"
            :productsParams="gynecologicalPediatricChairElectricDriveData[0].productsParams"
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
    const gynecologicalPediatricChairElectricDriveData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalPediatricChairElectricDrive'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalPediatricChairElectricDrive.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-pediatricchair-electricdrive.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalPediatricChairElectricDrive.dataLeft1'),
            data: "550–1300",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalPediatricChairElectricDrive.dataLeft2'),
            data: "500",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalPediatricChairElectricDrive.dataLeft3'),
            data: "0-90",
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalPediatricChairElectricDrive.dataLeft4'),
            data: "600",
          }
        ]
      }
    ])
    return {
      gynecologicalPediatricChairElectricDriveData,
    }
  }
}
</script>

<style lang="scss">
.gynecological-pediatric-chair {
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
