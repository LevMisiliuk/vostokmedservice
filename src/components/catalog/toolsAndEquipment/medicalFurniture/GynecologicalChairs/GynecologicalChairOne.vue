<template>
  <div class="gynecological-chair-one">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1M')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="gynecological-chair-one__inner">
        <LeftLinksMenu />
        <div class="gynecological-chair-one__card">
          <ProductInfoCard
            :image="gynecologicalChairKG1MData[0].image"
            :title="gynecologicalChairKG1MData[0].title"
            :subtitle="gynecologicalChairKG1MData[0].subtitle"
            :productsParams="gynecologicalChairKG1MData[0].productsParams"
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
    const gynecologicalChairKG1MData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.gynecologicalChairKG1M'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1M.subtitle'),
        image: require('@/assets/toolsAndEquipment/medicalFurniture/gynecological-chair-KG1M.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1M.dataLeft1'),
            data: "0-90",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1M.dataLeft2'),
            data: "0-25",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.gynecologicalChairKG1M.dataLeft3'),
            data: "200",
          }
        ]
      }
    ])
    return {
      gynecologicalChairKG1MData,
    }
  }
}
</script>

<style lang="scss">
.gynecological-chair-one {
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
