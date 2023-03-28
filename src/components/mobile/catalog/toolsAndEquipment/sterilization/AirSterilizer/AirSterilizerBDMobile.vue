<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="AirSterilizerBdData[0].image"
          :title="AirSterilizerBdData[0].title"
          :subtitle="AirSterilizerBdData[0].subtitle"
          :productsParams="AirSterilizerBdData[0].productsParams"
      />
      <el-table
          :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
          :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
          :data="tableData"
          style="width: 100%; margin-bottom: 10px;"
          :scrollbar-always-on="true"
      >
        <el-table-column
            :label="$t('main.carts.toolsAndEquipment.airSterilizerGP.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.toolsAndEquipment.airSterilizerGP.table.second')"
            prop="second"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.toolsAndEquipment.airSterilizerGP.table.third')"
            prop="third"
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
