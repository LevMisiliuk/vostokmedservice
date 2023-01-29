<template>
  <div class="air-sterilizer-bd">
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

      <div class="air-sterilizer-bd__inner">
        <LeftLinksMenu />
        <div class="air-sterilizer-bd__card">
          <ProductInfoCard
            :image="AirSterilizerBdData[0].image"
            :title="AirSterilizerBdData[0].title"
            :subtitle="AirSterilizerBdData[0].subtitle"
            :productsParams="AirSterilizerBdData[0].productsParams"
          />
          <el-table
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.airSterilizerGP.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.airSterilizerGP.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.airSterilizerGP.table.third')"
              prop="third"
            />
          </el-table>
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
    const tableData = computed(() => [
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData1'),
        second: '460х700х500',
        third: '460х700х500',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData2'),
        second: '80…200',
        third: '80…200',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData3'),
        second: '1...999',
        third: '1...999',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData4'),
        second: '30',
        third: '30',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData5'),
        second: '±3',
        third: '±3',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData6'),
        second: '380',
        third: '380',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData7'),
        second: '6',
        third: '6',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData8'),
        second: '860*1400*650',
        third: '860*1400*650',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData9'),
        second: '100',
        third: '130',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData10'),
        second: '3',
        third: '3',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerGP.airSterilizerGpData11'),
        second: 'one-side',
        third: 'one-side',
      },
    ])
    const AirSterilizerBdData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerGP'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/air-sterilizer-GP.png'),
        productsParams: [
        ]
      }
    ])
    return {
      AirSterilizerBdData,
      tableData
    }
  }
}
</script>

<style lang="scss">
.air-sterilizer-bd {
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
</style>
