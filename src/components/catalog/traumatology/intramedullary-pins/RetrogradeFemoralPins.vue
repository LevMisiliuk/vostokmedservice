<template>
  <div class="shoulder-pin">
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
          {{ $t('main.carts.traumatology.links.retrogradeFemoralPins') }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="shoulder-pin__inner">
        <LeftLinksMenu />
        <div class="shoulder-pin__card">
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
            :span-method="objectSpanMethod"
          >
            <el-table-column
              label=""
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.retrogradeFemoralPins.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.retrogradeFemoralPins.table.third')"
              prop="third"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.retrogradeFemoralPins.table.fourth')"
              prop="fourth"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.retrogradeFemoralPins.table.fifth')"
              prop="fifth"
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
  name: 'RetrogradeFemoralPins',
  setup() {
    const tableData = computed(() => [
      {
        first: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.table.firstData'),
        second: '240',
        third: '14270-10240',
        fourth: ' 14270-11260',
        fifth: '14270-12260'
      },
      {
        first: '',
        second: '260',
        third: ' 14270-10260',
        fourth: '14270-11280',
        fifth: '14270-12280'
      },
      {
        first: '',
        second: '280',
        third: '14270-10280',
        fourth: '14270-11300',
        fifth: '14270-12300'
      },
      {
        first: '',
        second: '300',
        third: '14270-10300',
        fourth: '14270-11320',
        fifth: '14270-12320'
      },
      {
        first: '',
        second: '320',
        third: '14270-10320',
        fourth: '14270-11340',
        fifth: '14270-12340'
      },
      {
        first: '',
        second: '340',
        third: '14270-10340',
        fourth: '14270-11360',
        fifth: '14270-12360'
      },
      {
        first: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.table.secondData'),
        second: '360',
        third: '14270-10360',
        fourth: '14270-11380',
        fifth: ''
      },
      {
        first: '',
        second: '380',
        third: '14270-10380',
        fourth: '14270-11400',
        fifth: ''
      },
      {
        first: '',
        second: '400',
        third: '14270-10400',
        fourth: '14270-11420',
        fifth: ''
      },
      {
        first: '',
        second: '420',
        third: '14270-10420',
        fourth: '14270-11440',
        fifth: ''
      },
      {
        first: '',
        second: '440',
        third: '14270-10440',
        fourth: '14270-11380',
        fifth: ''
      },
      {
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: ''
      },
      {
        first: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.table.thirdData'),
        second: '260',
        third: '14271-10260',
        fourth: '14271-11260',
        fifth: '14271-12260'
      },
      {
        first: '',
        second: '280',
        third: '14271-10280',
        fourth: '14271-11280',
        fifth: '14271-12280'
      },
      {
        first: '',
        second: '300',
        third: '14271-10300',
        fourth: '14271-11300',
        fifth: '14271-12300'
      },
      {
        first: '',
        second: '320',
        third: '14271-10320',
        fourth: '14271-11320',
        fifth: '14271-12320'
      },
      {
        first: '',
        second: '340',
        third: '14271-10340',
        fourth: '14271-11340',
        fifth: '14271-12340'
      },
      {
        first: '',
        second: '360',
        third: '14271-10360',
        fourth: '14271-11360',
        fifth: '14271-12360'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.title'),
        subtitle: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.subtitle'),
        image: require('@/assets/traumatology/retrograde-femoral-pins.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.lockingScrew'),
            data: i18n.global.t(
              'main.carts.traumatology.retrogradeFemoralPins.lockingScrewData'
            )
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.plug'),
            data: '--'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.material'),
            data: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.materialData')
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.tool'),
            data: '94270-00000'
          }
        ]
      }
    ])

    function objectSpanMethod({ columnIndex, rowIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 6 === 0) {
          return {
            rowspan: 6,
            colspan: 1,
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          }
        }
      }
    }

    return {
      cardData,
      tableData,
      objectSpanMethod
    }
  }
}
</script>

<style lang="scss" scoped>
.shoulder-pin {
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
