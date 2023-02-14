<template>
  <div class="medical-cabine-second">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM2')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="medical-cabine-second__inner">
        <LeftLinksMenu />
        <div class="medical-cabine-second__card">
          <ProductInfoCard
            :image="medicalCabinetSHM2Data[0].image"
            :title="medicalCabinetSHM2Data[0].title"
            :subtitle="medicalCabinetSHM2Data[0].subtitle"
            :productsParams="medicalCabinetSHM2Data[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.medicalCabinetSHM2.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.medicalCabinetSHM2.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.medicalCabinetSHM2.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.medicalCabinetSHM2.title2'),
      }
    ])
    const medicalCabinetSHM2Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.medicalCabinetSHM2'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/medicalFurniture/medical-cabinet-SHM1.png'),
        productsParams: [
        ]
      }
    ])
    return {
      medicalCabinetSHM2Data,
      textData
    }
  }
}
</script>

<style lang="scss">
.medical-cabine-second {
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
