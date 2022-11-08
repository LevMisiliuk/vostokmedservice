<template>
  <div class="hip-proximal-pins">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/`">
          {{ $t('main.carts.traumatology.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item
          :to="`/${$i18n.locale}/catalog/traumatology/intramedullary-pins/`"
        >
          {{ $t('main.carts.traumatology.links.intramedullaryPins') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.traumatology.links.hipProximalPins') }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="hip-proximal-pins__inner">
        <LeftLinksMenu />
        <div class="hip-proximal-pins__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />
          <ProductTableHeader
            :title="$t('main.carts.traumatology.hipProximalPins.short')"
            :productsParams="cardData[0].productsParams"
          />
          <!-- First table -->
          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
          >
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.table.third')"
              prop="third"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.table.fourth')"
              prop="fourth"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.table.fifth')"
              prop="fifth"
            />
          </el-table>
          <!-- Second table -->
          <el-table
            border
            style="width: 100%; margin-bottom: 40px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="secondTableData"
          >
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.secondTable.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.secondTable.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.secondTable.third')"
              prop="third"
            />
          </el-table>
          <ProductTableHeader
            :title="$t('main.carts.traumatology.hipProximalPins.long')"
            :productsParams="cardData[0].productsParams"
          />
          <!-- Third table -->
          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="thirdTableData"
          >
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.right')"
              prop="first"
            >
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.first')"
                prop="first"
              />
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.second')"
                prop="second"
              />
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.third')"
                prop="third"
              />
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.fourth')"
                prop="fourth"
              />
            </el-table-column>
          </el-table>
          <!-- Fourth table -->
          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="fourthTableData"
          >
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.left')"
              prop="first"
            >
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.first')"
                prop="first"
              />
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.second')"
                prop="second"
              />
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.third')"
                prop="third"
              />
              <el-table-column
                :label="$t('main.carts.traumatology.hipProximalPins.thirdTable.fourth')"
                prop="fourth"
              />
            </el-table-column>
          </el-table>
          <!-- Fifth table the same as second so we use the same keys for objects -->
          <el-table
            border
            style="width: 100%; margin-bottom: 40px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="secondTableData"
          >
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.secondTable.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.secondTable.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.hipProximalPins.secondTable.third')"
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
import { computed, ref } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'HipProximalPins',
  setup() {
    const tableData = ref([
      {
        first: '11',
        second: '180',
        third: '130',
        fourth: '14651-18130',
        fifth: '14650-18130',
      },
      {
        first: '11',
        second: '200',
        third: '130',
        fourth: '14651-18135',
        fifth: '14650-18135 ',
      },
      {
        first: '11',
        second: '220',
        third: '130',
        fourth: '14651-20130',
        fifth: '14650-20130'
      },
      {
        first: '11',
        second: '240',
        third: '130',
        fourth: '14651-20135',
        fifth: '14650-20135'
      },
      {
        first: '11',
        second: '180',
        third: '135',
        fourth: '14651-22130',
        fifth: '14650-22130'
      },
      {
        first: '11',
        second: '200',
        third: '135',
        fourth: '14651-22135',
        fifth: '14650-22135'
      },
      {
        first: '11',
        second: '220',
        third: '135',
        fourth: '14651-24130',
        fifth: '14650-24130'
      },
      {
        first: '11',
        second: '240',
        third: '135',
        fourth: '14651-24135',
        fifth: '14650-24135'
      },
    ])
    const secondTableData = computed(() => [
      {
        first: i18n.global.t('main.carts.traumatology.hipProximalPins.secondTable.firstData'),
        second: '12710-95075 – 12710-95145',
        third: '32710-95075 – 12710-95145'
      },
      {
        first: i18n.global.t('main.carts.traumatology.hipProximalPins.secondTable.secondData'),
        second: '12001-65055 – 12001-65130',
        third: '32001-65055 – 12001-65130'
      },
      {
        first: i18n.global.t('main.carts.traumatology.hipProximalPins.secondTable.thirdData'),
        second: '12400-14016',
        third: '32400-14016'
      },
      {
        first: i18n.global.t('main.carts.traumatology.hipProximalPins.secondTable.fourthData'),
        second: '12200-49020 – 12200-49100',
        third: '32200-49020 – 32200-49100'
      },
    ])
    const thirdTableData = computed(() => [
      {
        first: '10',
        second: '340',
        third: '130',
        fourth: '14670-34130'
      },
      {
        first: '10',
        second: '360',
        third: '130',
        fourth: '14670-36130'
      },
      {
        first: '10',
        second: '380',
        third: '130',
        fourth: '14670-38130'
      },
      {
        first: '10',
        second: '400',
        third: '130',
        fourth: '14670-40130'
      },
      {
        first: '10',
        second: '420',
        third: '130',
        fourth: '14670-42130'
      },
      {
        first: '10',
        second: '340',
        third: '135',
        fourth: '14670-34135'
      },
      {
        first: '10',
        second: '360',
        third: '135',
        fourth: '14670-36135'
      },
      {
        first: '10',
        second: '380',
        third: '135',
        fourth: '14670-38135'
      },
      {
        first: '10',
        second: '400',
        third: '135',
        fourth: '14670-40135'
      },
      {
        first: '10',
        second: '420',
        third: '135',
        fourth: '14670-42135'
      },
    ])
    const fourthTableData = computed(() => [
      {
        first: '10',
        second: '340',
        third: '130',
        fourth: '14660-34130'
      },
      {
        first: '10',
        second: '360',
        third: '130',
        fourth: '14660-36130'
      },
      {
        first: '10',
        second: '380',
        third: '130',
        fourth: '14660-38130'
      },
      {
        first: '10',
        second: '400',
        third: '130',
        fourth: '14660-40130'
      },
      {
        first: '10',
        second: '420',
        third: '130',
        fourth: '14660-42130'
      },
      {
        first: '10',
        second: '340',
        third: '135',
        fourth: '14660-34135'
      },
      {
        first: ' 10',
        second: '360',
        third: '135',
        fourth: '14660-36135'
      },
      {
        first: '10',
        second: '380',
        third: '135',
        fourth: '14660-38135'
      },
      {
        first: '10',
        second: '400',
        third: '135',
        fourth: '14660-40135'
      },
      {
        first: '10',
        second: '420',
        third: '135',
        fourth: '14660-42135'
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.hipProximalPins.title'),
        subtitle: i18n.global.t('main.carts.traumatology.hipProximalPins.subtitle'),
        image: require('@/assets/traumatology/hip-proximal-pins.jpeg'),
        productsParams: [
          {
            id: 3,
            name: i18n.global.t('main.carts.traumatology.hipProximalPins.material'),
            data: i18n.global.t('main.carts.traumatology.hipProximalPins.materialData')
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.hipProximalPins.tool'),
            data: '94660-00000'
          }
        ]
      }
    ])

    return {
      cardData,
      tableData,
      secondTableData,
      thirdTableData,
      fourthTableData
    }
  }
}
</script>

<style lang="scss" scoped>
.hip-proximal-pins {
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__card {
    display: flex;
    flex-direction: column;
  }
}
</style>