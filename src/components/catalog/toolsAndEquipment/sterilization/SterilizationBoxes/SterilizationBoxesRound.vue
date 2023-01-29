<template>
  <div class="sterilization-boxes-round">
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
          <a>{{$t('main.carts.toolsAndEquipment.sterilizationBoxesLinks.sterilizationBoxesRound')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="sterilization-boxes-round__inner">
        <LeftLinksMenu />
        <div class="sterilization-boxes-round__card">
          <ProductInfoCard
            :image="sterilizationBoxesRoundData[0].image"
            :title="sterilizationBoxesRoundData[0].title"
            :subtitle="sterilizationBoxesRoundData[0].subtitle"
            :productsParams="sterilizationBoxesRoundData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxes.sterilizationBoxesRound.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxes.sterilizationBoxesRound.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxes.sterilizationBoxesRound.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxes.sterilizationBoxesRound.text3'),
      },
    ])
    const sterilizationBoxesRoundData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.sterilizationBoxesLinks.sterilizationBoxesRound'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/sterilization-boxes-round.png'),
        productsParams: [
        ]
      }
    ])
    return {
      sterilizationBoxesRoundData,
      textData
    }
  }
}
</script>

<style lang="scss">
.sterilization-boxes-round {
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
