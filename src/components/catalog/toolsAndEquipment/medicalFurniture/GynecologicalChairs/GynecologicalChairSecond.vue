<template>
  <div class="gynecological-chair-second">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1ME')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="gynecological-chair-second__inner">
        <LeftLinksMenu />
        <div class="gynecological-chair-second__card">
          <ProductInfoCard
            :image="gynecologicalChairKG1MEData[0].image"
            :title="gynecologicalChairKG1MEData[0].title"
            :subtitle="gynecologicalChairKG1MEData[0].subtitle"
            :productsParams="gynecologicalChairKG1MEData[0].productsParams"
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
    const gynecologicalChairKG1MEData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1ME'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1ME.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1ME.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1ME.dataLeft1'),
            data: "0-90",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1ME.dataLeft2'),
            data: "5",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1ME.dataLeft3'),
            data: "200",
          }
        ]
      }
    ])
    return {
      gynecologicalChairKG1MEData,
    }
  }
}
</script>

<style lang="scss">
.gynecological-chair-second {
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
