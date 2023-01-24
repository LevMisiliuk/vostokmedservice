<template>
  <div class="electric-sterilizers-second">
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
          <a>{{$t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers320')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="electric-sterilizers-second__inner">
        <LeftLinksMenu />
        <div class="electric-sterilizers-second__card">
          <ProductInfoCard
            :image="electricSterilizersSecondData[0].image"
            :title="electricSterilizersSecondData[0].title"
            :subtitle="electricSterilizersSecondData[0].subtitle"
            :productsParams="electricSterilizersSecondData[0].productsParams"
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
import { computed, ref } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {
    const textData = ref([
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizers.electricSterilizers320.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizers.electricSterilizers320.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizers.electricSterilizers320.text3'),
      },
    ])
    const electricSterilizersSecondData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.electricSterilizersLinks.electricSterilizers320'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/electric-sterilizers-320.png'),
        productsParams: [
        ]
      }
    ])
    return {
      electricSterilizersSecondData,
      textData
    }
  }
}
</script>

<style lang="scss">
.electric-sterilizers-second {
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
