<template>
  <div class="manipulation-table-cm">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.manipulationTableCM3')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="manipulation-table-cm__inner">
        <LeftLinksMenu />
        <div class="manipulation-table-cm__card">
          <ProductInfoCard
            :image="manipulationTableCM3Data[0].image"
            :title="manipulationTableCM3Data[0].title"
            :subtitle="manipulationTableCM3Data[0].subtitle"
            :productsParams="manipulationTableCM3Data[0].productsParams"
          />
          <div class="card">
            <div class="card__product-info">
              <div
                class="card__product-info-inner"
                v-for="item in textData"
                :key="item.id"
              >
                <div v-if="item.id === 1">
                  <div>
                    <div class="card__product-title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
                    <div class="card__product-data">
                      {{ item.data }}
                    </div>
                  </div>
                </div>
                <div v-else-if="item.id === 2">
                  <div>
                    <div class="card__product-title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
                    <div class="card__product-data">
                      {{ item.data }}
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="card__product-data">
                    {{ item.data }}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.manipulationTableCM3.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.manipulationTableCM3.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.manipulationTableCM3.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.manipulationTableCM3.title2'),
      }
    ])
    const manipulationTableCM3Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.manipulationTableCM3'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/medicalFurniture/manipulation-table-CM3.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.manipulationTableCM3.dataLeft1'),
            data: "630*530*900",
          }
        ]
      }
    ])
    return {
      manipulationTableCM3Data,
      textData
    }
  }
}
</script>

<style lang="scss">
.manipulation-table-cm {
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
