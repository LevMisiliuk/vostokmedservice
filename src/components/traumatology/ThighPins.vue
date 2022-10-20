<template>
  <div class="thigh-pins">
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
          {{ $t('main.carts.traumatology.links.thighPins') }}
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
            border
            style="width: 100%"
          >
            <el-table-column
              :label="$t('main.carts.traumatology.thighPins.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.thighPins.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.thighPins.table.third')"
              prop="third"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.thighPins.table.fourth')"
              prop="fourth"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.thighPins.table.fifth')"
              prop="fifth"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.thighPins.table.sixth')"
              prop="sixth"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.thighPins.table.seventh')"
              prop="seventh"
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
import i18n from '../../i18n'

export default {
  name: 'ThighPins',
  setup() {
    const tableData = ref([
      {
        first: '300',
        second: '14210-09300',
        third: '14210-10300',
        fourth: '14210-11300',
        fifth: '14210-12300',
        sixth: '14210-13300',
        seventh: '14210-14300'
      },
      {
        first: '320',
        second: '14210-09320',
        third: '14210-10320',
        fourth: '14210-11320',
        fifth: '14210-12320',
        sixth: '14210-13320',
        seventh: '14210-14320'
      },
      {
        first: '340',
        second: '14210-09340',
        third: '14210-10340',
        fourth: '14210-11340',
        fifth: '14210-12340',
        sixth: '14210-13340',
        seventh: '14210-14340'
      },
      {
        first: '360',
        second: '14210-09360',
        third: '14210-10360',
        fourth: '14210-11360',
        fifth: '14210-12360',
        sixth: '14210-13360	',
        seventh: '14210-14360'
      },
      {
        first: '380',
        second: '14210-09380',
        third: '14210-10380',
        fourth: '14210-11380',
        fifth: '14210-12380',
        sixth: '14210-13380',
        seventh: '14210-14380'
      },
      {
        first: '400',
        second: '14210-09400',
        third: '14210-10400',
        fourth: '14210-11400',
        fifth: '14210-12400',
        sixth: '14210-13400',
        seventh: '14210-14400'
      },
      {
        first: '420',
        second: '14210-09420',
        third: '14210-10420',
        fourth: '14210-11420',
        fifth: '14210-12420',
        sixth: '14210-13420',
        seventh: '14210-14420'
      },
      {
        first: '440',
        second: '14210-09440',
        third: '14210-10440',
        fourth: '14210-11440',
        fifth: '14210-12440',
        sixth: '14210-13440',
        seventh: '14210-14440'
      },
      {
        first: '460',
        second: '14210-09460',
        third: '14210-10460',
        fourth: '14210-11460',
        fifth: '14210-12460',
        sixth: '14210-13460',
        seventh: '14210-14460'
      },
      {
        first: '480',
        second: '14210-09480',
        third: '14210-10480',
        fourth: '14210-11480',
        fifth: '14210-12480	',
        sixth: '14210-13480',
        seventh: '14210-14480'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.thighPins.title'),
        subtitle: i18n.global.t('main.carts.traumatology.calfPin.subtitle'),
        image: require('@/assets/traumatology/thigh-pins.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.traumatology.calfPin.lockingScrew'),
            data: i18n.global.t(
              'main.carts.traumatology.calfPin.lockingScrewData'
            )
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.traumatology.calfPin.plug'),
            data: '12400-08016'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.traumatology.calfPin.material'),
            data: i18n.global.t('main.carts.traumatology.calfPin.materialData')
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.calfPin.tool'),
            data: '94000-00000'
          }
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