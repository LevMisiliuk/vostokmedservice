<template>
  <div class="air-sterilizer-spu">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/sterilization`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerGP')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="air-sterilizer-spu__inner">
        <LeftLinksMenu />
        <div class="air-sterilizer-spu__card">
          <ProductInfoCard
            :image="AirSterilizerBdData[0].image"
            :title="AirSterilizerBdData[0].title"
            :subtitle="AirSterilizerBdData[0].subtitle"
            :productsParams="AirSterilizerBdData[0].productsParams"
          />
          <div class="card">
            <div class="card__product-info">
              <div
                class="card__product-info-inner"
                v-for="item in textData"
                :key="item.id"
              >
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
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text7'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text8'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text9'),
      },
      {
        id: 10,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text10'),
      },
      {
        id: 11,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text11'),
      },
      {
        id: 12,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text12'),
      },
      {
        id: 13,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text13'),
      },
      {
        id: 14,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text14'),
      },
      {
        id: 15,
        data: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.text15'),
      },
    ])
    const AirSterilizerBdData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerGP'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/air-sterilizer-spu.png'),
      }
    ])
    return {
      AirSterilizerBdData,
      textData
    }
  }
}
</script>

<style lang="scss">
.air-sterilizer-spu {
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
}
</style>
