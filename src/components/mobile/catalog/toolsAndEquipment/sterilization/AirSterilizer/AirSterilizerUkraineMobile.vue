<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="AirSterilizerUkraineData[0].image"
          :title="AirSterilizerUkraineData[0].title"
          :subtitle="AirSterilizerUkraineData[0].subtitle"
          :productsParams="AirSterilizerUkraineData[0].productsParams"
      />
      <el-table
          :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
          :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
          :data="tableData"
          style="width: 100%; margin-bottom: 10px;"
          :scrollbar-always-on="true"
      >
        <el-table-column
            :label="$t('main.carts.toolsAndEquipment.airSterilizerUkraine.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.toolsAndEquipment.airSterilizerUkraine.table.second')"
            prop="second"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.toolsAndEquipment.airSterilizerUkraine.table.third')"
            prop="third"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.toolsAndEquipment.airSterilizerUkraine.table.fourth')"
            prop="fourth"
            min-width="140px"
        />
      </el-table>
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {

    const tableData = computed(() => [
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData1'),
        second: '220х300х300',
        third: '270х470х300',
        fourth: '320х570х440'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData2'),
        second: '85, 120, 160, 180',
        third: '80...200',
        fourth: '80...200'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData3'),
        second: '30, 45, 150, 60',
        third: '1…999',
        fourth: '1…999'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData4'),
        second: '20',
        third: '25',
        fourth: '30'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData5'),
        second: '±3',
        third: '±3',
        fourth: '±3'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData6'),
        second: '220',
        third: '220',
        fourth: '220'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData7'),
        second: '1,1',
        third: '1,3',
        fourth: '2,1'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData8'),
        second: '520х420х440',
        third: '580х595х416',
        fourth: '620х680х540'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData9'),
        second: '18',
        third: '45',
        fourth: '60'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData10'),
        second: '3',
        third: '4',
        fourth: '4'
      },
      {
        first: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData11'),
        second: 'one-side',
        third: 'one-side',
        fourth: 'one-side'
      },
    ])
    const AirSterilizerUkraineData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerLinks.airSterilizerUkraine'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.title'),
        image: require('@/assets/toolsAndEquipment/air-sterilizer-ukraine.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData01'),
            data: '30'
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData02'),
            data: '45'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData03'),
            data: '150'
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData04'),
            data: '60'
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.airSterilizerUkraine.airSterilizerUkraineData.airSterilizerUkraineData05'),
            data: ''
          },
        ]
      }
    ])
    return {
      AirSterilizerUkraineData,
      tableData
    }
  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
}
.mobile__wrapper {
  .card {
    display: flex;
    flex-direction: column;
    min-width: 1vw !important;
    z-index: 0;
    margin: 0px 16px 40px 16px
  }

  .card__product-info-structure {
    display: flex;
    flex-direction: column;
    color: rgb(27, 28, 30);
  }

  .card__product-image {
    max-width: 100% !important;
  }

  .card__product-info {
    padding: 0px;
  }

  .card__product-data {
    text-align: right;
  }
}

</style>
