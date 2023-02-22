<template>
  <div class="thigh-pins">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/neurosurgery/`">
          {{ $t('main.carts.neurosurgery.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item
          :to="`/${$i18n.locale}/catalog/neurosurgery/plates-neurosurgical/`"
        >
          {{ $t('main.carts.neurosurgery.links.neurosurgicalPlates') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.trapezoidalPlate') }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="thigh-pins__inner">
        <LeftLinksMenu />
        <div class="thigh-pins__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
            :productsParams="cardData[0].productsParams"
          />
          <el-table
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.table.third')"
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
  name: 'staightGirder',
  setup() {
    const tableData = ref([
      {
        first: '2',
        second: '26mm',
        third: '36000-02602',     
      },
      {
        first: '3',
        second: '34mm',
        third: '36000-03403',     
      },
      {
        first: '4',
        second: '42mm',
        third: '36000-04204',     
      },
      {
        first: '5',
        second: '50mm',
        third: '36000-05005',     
      },
      {
        first: '6',
        second: '58mm',
        third: '36000-05806',     
      },
      {
        first: '7',
        second: '66mm',
        third: '36000-06607',     
      },
      {
        first: '8',
        second: '74mm',
        third: '36000-07408',     
      },
      {
        first: '9',
        second: '82mm',
        third: '36000-08209',     
      },
      {
        first: '10',
        second: '90mm',
        third: '36000-09010',     
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.links.trapezoidalPlate'),
        subtitle: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.subtitle'),
        image: require('@/assets/neurosurgery/trapezoidal-plate.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataLeft1'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataLeft2'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataLeft3'),
            data: i18n.global.t('main.carts.neurosurgery.neurosurgicalPlatesLinks.trapezoidalPlate.dataRight3'),
          },
        ]
      }
    ])
    return {
      cardData,
      tableData
    }
  }
}
</script>

<style lang="scss" scoped>
.thigh-pins {
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