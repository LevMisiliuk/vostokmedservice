<template>
  <MobilePageWrapper>
    <div class="pins-vertical-z-type_mobile__card">
      <ProductInfoCardMobile
        :image="cardData[0].image"
        :title="cardData[0].title"
        :subtitle="cardData[0].subtitle"
        :productsParams="cardData[0].productsParams"
      />
    </div>
    <div class="mobile_table-container">
      <ProductInfoCardMobile
        class="mobile_table-info"
        :title="$t('main.carts.traumatology.pinsVerticalZType.short')"
        :productsParams="cardData[0].productsParams"
      />
      <!-- First -->
      <el-table
        :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
        :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
        :data="tableData"
        style="width: 100%; margin-bottom: 40px"
        :scrollbar-always-on="true"
      >
        <el-table-column
          :label="$t('main.carts.traumatology.pinsVerticalZType.table.first')"
          prop="first"
          min-width="140px"
        />
        <el-table-column
          :label="$t('main.carts.traumatology.pinsVerticalZType.table.second')"
          prop="second"
          min-width="140px"
        />
        <el-table-column
          :label="$t('main.carts.traumatology.pinsVerticalZType.table.third')"
          prop="third"
          min-width="140px"
        />
        <el-table-column
          :label="$t('main.carts.traumatology.pinsVerticalZType.table.fourth')"
          prop="fourth"
          min-width="140px"
        />
        <el-table-column
          :label="$t('main.carts.traumatology.pinsVerticalZType.table.fifth')"
          prop="fifth"
          min-width="140px"
        />
      </el-table>
      <!-- Second -->
      <el-table
        :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
        :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
        :data="secondTableData"
        style="width: 100%; margin-bottom: 40px"
        :scrollbar-always-on="true"
      >
        <el-table-column
          :label="
            $t('main.carts.traumatology.pinsVerticalZType.secondTable.first')
          "
          prop="first"
          min-width="140px"
        />
        <el-table-column
          :label="
            $t('main.carts.traumatology.pinsVerticalZType.secondTable.second')
          "
          prop="second"
          min-width="140px"
        />
        <el-table-column
          :label="
            $t('main.carts.traumatology.pinsVerticalZType.secondTable.third')
          "
          prop="third"
          min-width="140px"
        />
      </el-table>
      <ProductInfoCardMobile
        class="mobile_table-info"
        :title="$t('main.carts.traumatology.pinsVerticalZType.long')"
        :productsParams="cardData[0].productsParams"
      />
      <!-- Third -->
      <el-table
        :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
        :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
        :data="thirdTable"
        style="width: 100%; margin-bottom: 40px"
        :scrollbar-always-on="true"
      >
        <el-table-column
          :label="$t('main.carts.traumatology.pinsVerticalZType.right')"
          min-width="140px"
        >
          <el-table-column
            :label="$t('main.carts.traumatology.pinsVerticalZType.table.first')"
            prop="first"
            min-width="140px"
          />
          <el-table-column
            :label="
              $t('main.carts.traumatology.pinsVerticalZType.table.second')
            "
            prop="second"
            min-width="140px"
          />
          <el-table-column
            :label="$t('main.carts.traumatology.pinsVerticalZType.table.third')"
            prop="third"
            min-width="140px"
          />
          <el-table-column
            :label="
              $t('main.carts.traumatology.pinsVerticalZType.table.fourth')
            "
            prop="fourth"
            min-width="140px"
          />
          <el-table-column
            :label="$t('main.carts.traumatology.pinsVerticalZType.table.fifth')"
            prop="fifth"
            min-width="140px"
          />
        </el-table-column>
      </el-table>
      <!-- Fourth -->
      <el-table
        :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
        :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
        :data="fourthTable"
        style="width: 100%; margin-bottom: 40px"
        :scrollbar-always-on="true"
      >
        <el-table-column
          :label="$t('main.carts.traumatology.pinsVerticalZType.left')"
          min-width="140px"
        >
          <el-table-column
            :label="$t('main.carts.traumatology.pinsVerticalZType.table.first')"
            prop="first"
            min-width="140px"
          />
          <el-table-column
            :label="
              $t('main.carts.traumatology.pinsVerticalZType.table.second')
            "
            prop="second"
            min-width="140px"
          />
          <el-table-column
            :label="$t('main.carts.traumatology.pinsVerticalZType.table.third')"
            prop="third"
            min-width="140px"
          />
          <el-table-column
            :label="
              $t('main.carts.traumatology.pinsVerticalZType.table.fourth')
            "
            prop="fourth"
            min-width="140px"
          />
          <el-table-column
            :label="$t('main.carts.traumatology.pinsVerticalZType.table.fifth')"
            prop="fifth"
            min-width="140px"
          />
        </el-table-column>
      </el-table>
      <!-- Fifth -->
      <el-table
        :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
        :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
        :data="fifthTable"
        style="width: 100%; margin-bottom: 40px"
        :scrollbar-always-on="true"
      >
        <el-table-column
          :label="
            $t('main.carts.traumatology.pinsVerticalZType.secondTable.first')
          "
          prop="first"
          min-width="140px"
        />
        <el-table-column
          :label="
            $t('main.carts.traumatology.pinsVerticalZType.secondTable.second')
          "
          prop="second"
          min-width="140px"
        />
        <el-table-column
          :label="
            $t('main.carts.traumatology.pinsVerticalZType.secondTable.third')
          "
          prop="third"
          min-width="140px"
        />
      </el-table>
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed, ref } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {
    const tableData = ref([
      {
        first: '11',
        second: '180',
        third: '130',
        fourth: '14510-11180',
        fifth: '14500-11180'
      },
      {
        first: '11',
        second: '200',
        third: '130',
        fourth: '14510-11200',
        fifth: '14500-11200'
      },
      {
        first: '11',
        second: '220',
        third: '130',
        fourth: '14510-11220',
        fifth: '14500-11220'
      },
      {
        first: '11',
        second: '240',
        third: '130',
        fourth: '14510-11240',
        fifth: '14500-11240'
      },
      {
        first: '11',
        second: '180',
        third: '135',
        fourth: '14530-11180',
        fifth: '14520-11180'
      },
      {
        first: '11',
        second: '200',
        third: '135',
        fourth: '14530-11200',
        fifth: '14520-11200'
      },
      {
        first: '11',
        second: '220',
        third: '135',
        fourth: '14530-11220',
        fifth: '14520-11220'
      },
      {
        first: '11',
        second: '240',
        third: '135',
        fourth: '14530-11240',
        fifth: '14520-11240'
      },
      {
        first: '12',
        second: '180',
        third: '130',
        fourth: '14510-12180',
        fifth: '14500-12180'
      },
      {
        first: '12',
        second: '200',
        third: '130',
        fourth: '14510-12200',
        fifth: '14500-12200'
      },
      {
        first: '12',
        second: '220',
        third: '130',
        fourth: '14510-12220',
        fifth: '14500-12220'
      },
      ////
      {
        first: '12',
        second: '240',
        third: '130',
        fourth: '14510-12240',
        fifth: '14500-12240'
      },
      {
        first: '12',
        second: '180',
        third: '135',
        fourth: '14530-12180',
        fifth: '14520-12180'
      },
      {
        first: '12',
        second: '200',
        third: '135',
        fourth: '14530-12200',
        fifth: '14520-12200'
      },
      {
        first: '12',
        second: '220',
        third: '135',
        fourth: '14530-12220',
        fifth: '14520-12220'
      },
      {
        first: '12',
        second: '240',
        third: '135',
        fourth: '14530-12240',
        fifth: '14520-12240'
      }
    ])
    const secondTableData = computed(() => [
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.firstData'
        ),
        second: '12700-12075 – 12700-12145',
        third: ' 32700-12075 – 12700-12145'
      },
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.secondData'
        ),
        second: ' 12401-09020',
        third: '32401-09020'
      },
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.thirdData'
        ),
        second: '12400-14016',
        third: '32400-14016'
      },
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.fourthData'
        ),
        second: '12200-49020 – 12200-49100',
        third: '32200-49020 – 32200-49100'
      }
    ])
    const thirdTable = ref([
      {
        first: '10',
        second: '340',
        third: '130',
        fourth: ' 14610-34130',
        fifth: '14630-34130'
      },
      {
        first: '10',
        second: '360',
        third: '130',
        fourth: '14610-34135',
        fifth: '14630-34135'
      },
      {
        first: '10',
        second: '380',
        third: '130',
        fourth: '14610-36130',
        fifth: '14630-36130'
      },
      {
        first: '10',
        second: '400',
        third: '130',
        fourth: '14610-36135',
        fifth: '14630-36135'
      },
      {
        first: '10',
        second: '420',
        third: '130',
        fourth: '14610-38130',
        fifth: '14630-38130'
      },
      {
        first: '10',
        second: '340',
        third: '135',
        fourth: '14610-38135',
        fifth: '14630-38135'
      },
      {
        first: '10',
        second: '360',
        third: '135',
        fourth: '14610-40130',
        fifth: '14630-40130'
      },
      {
        first: '10',
        second: '380',
        third: '135',
        fourth: '14610-40135',
        fifth: '14630-40135'
      },
      {
        first: '10',
        second: '400',
        third: '135',
        fourth: '14610-42130',
        fifth: '14630-42130'
      },
      {
        first: '10',
        second: '420',
        third: '135',
        fourth: '14610-42135',
        fifth: '14630-42135'
      }
    ])
    const fourthTable = ref([
      {
        first: ' 10',
        second: '340',
        third: '130',
        fourth: '14600-34130',
        fifth: '14620-34130'
      },
      {
        first: ' 10',
        second: '360',
        third: '130',
        fourth: '14600-34135',
        fifth: '14620-34135'
      },
      {
        first: ' 10',
        second: '380',
        third: '130',
        fourth: '14600-36130',
        fifth: '14620-36130'
      },
      {
        first: '10',
        second: '400',
        third: '130',
        fourth: '14600-36135',
        fifth: '14620-36135'
      },
      {
        first: ' 10',
        second: '420',
        third: '130',
        fourth: '14600-38130',
        fifth: '14620-38130'
      },
      {
        first: '10',
        second: '340',
        third: '135',
        fourth: '14600-38135',
        fifth: '14620-38135'
      },
      {
        first: '10',
        second: '360',
        third: '135',
        fourth: '14600-40130',
        fifth: '14620-40130'
      },
      {
        first: '10',
        second: '380',
        third: '135',
        fourth: '14600-40135',
        fifth: '14620-40135'
      },
      {
        first: '10',
        second: '400',
        third: '135',
        fourth: '14600-42130',
        fifth: '14620-42130'
      },
      {
        first: '10',
        second: '420',
        third: '135',
        fourth: '14600-42135',
        fifth: '14620-42135'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.pinsVerticalZType.title'),
        image: require('@/assets/traumatology/pins-vertical-z-type.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.pinsVerticalZType.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.pinsVerticalZType.materialData'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.pinsVerticalZType.tool'
            ),
            data: '94500-00000'
          }
        ]
      }
    ])
    const fifthTable = computed(() => [
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.firstData'
        ),
        second: '12700-00075 – 12700-00145',
        third: '32700-00075 – 12700-00145'
      },
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.secondData'
        ),
        second: ' 12401-09020',
        third: '32401-09020'
      },
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.thirdData'
        ),
        second: '12400-14016',
        third: '32400-14016'
      },
      {
        first: i18n.global.t(
          'main.carts.traumatology.pinsVerticalZType.secondTable.fourthData'
        ),
        second: '12200-49020 – 12200-49100',
        third: '32200-49020 – 32200-49100'
      }
    ])

    return {
      cardData,
      tableData,
      secondTableData,
      thirdTable,
      fourthTable,
      fifthTable
    }
  }
}
</script>

<style lang="scss">
.pins-vertical-z-type_mobile {
  &__card {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
}
</style>
