<template>
  <div class="air-sterilizer-notpassable">
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
          <a>{{$t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerNotPassable')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="air-sterilizer-notpassable__inner">
        <LeftLinksMenu />
        <div class="air-sterilizer-notpassable__card">
          <ProductInfoCard
            :image="airSterilizerNotpassableData[0].image"
            :title="airSterilizerNotpassableData[0].title"
            :subtitle="airSterilizerNotpassableData[0].subtitle"
            :productsParams="airSterilizerNotpassableData[0].productsParams"
          />
          <el-table
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.airSterilizerNotPassable.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.airSterilizerNotPassable.table.second')"
              prop="second"
            />
          </el-table>
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
    const tableData = ref([
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData2'),
        second: '400х900х440',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData3'),
        second: '80…200 ',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData4'),
        second: '1...999',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData5'),
        second: '30',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData6'),
        second: '±3',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData7'),
        second: '380',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData8'),
        second: '9',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData9'),
        second: '1005х1540х840',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData10'),
        second: '180',
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData11'),
        second: '8',
      },
    ])
    const airSterilizerNotpassableData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerNotPassable'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.title'),
        image: require('@/assets/toolsAndEquipment/air-sterilizer-not-passable.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData1'),
            data: '320'
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData2'),
            data: '400х900х440'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData3'),
            data: '80…200'
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData4'),
            data: '1...999'
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData5'),
            data: '30'
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData6'),
            data: '±3'
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData7'),
            data: '380'
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData8'),
            data: '9'
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData9'),
            data: '1005х1540х840'
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData10'),
            data: '180'
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerNotPassable.airSterilizerNotPassableData.airSterilizerNotPassableData11'),
            data: '8'
          },
        ]
      }
    ])
    return {
      airSterilizerNotpassableData,
      tableData
    }
  }
}
</script>

<style lang="scss">
.air-sterilizer-notpassable {
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
