<template>
  <div class="distal-femoral-pins">
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
          {{ $t('main.carts.traumatology.links.distalFemoralPins') }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="distal-femoral-pins__inner">
        <LeftLinksMenu />
        <div class="distal-femoral-pins__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
            :productsParams="cardData[0].productsParams"
          />
          <el-table
            border
            style="width: 100%"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
            :span-method="objectSpanMethod"
          >
            <el-table-column label="" prop="first" />
            <el-table-column
              :label="$t('main.carts.traumatology.distalFemoralPins.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.distalFemoralPins.table.third')"
              prop="third"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.distalFemoralPins.table.fourth')"
              prop="fourth"
            />
            <el-table-column
              :label="$t('main.carts.traumatology.distalFemoralPins.table.fifth')"
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
  name: 'DistalFemoralPins',
  setup() {
    const tableData = computed(() => [
      {
        first: i18n.global.t('main.carts.traumatology.distalFemoralPins.table.firstData'),
        second: '12',
        third: '14260-12150',
        fourth: '14260-12210',
        fifth: '14260-12250',
      },
      {
        first: '',
        second: '11',
        third: '14260-11150',
        fourth: '14260-11210',
        fifth: '14260-11250',
      },
      {
        first: i18n.global.t('main.carts.traumatology.distalFemoralPins.table.secondData'),
        second: '12	 	 	 ',
        third: '14261-12150',
        fourth: '14261-12210',
        fifth: '14261-12250'
      },
      {
        first: '',
        second: '11',
        third: '14261-11150',
        fourth: '14261-11210',
        fifth: '14261-11250'
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.distalFemoralPins.title'),
        subtitle: i18n.global.t('main.carts.traumatology.distalFemoralPins.subtitle'),
        image: require('@/assets/traumatology/distal-femoral-nail.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.traumatology.distalFemoralPins.lockingScrew'),
            data: i18n.global.t(
              'main.carts.traumatology.distalFemoralPins.lockingScrewData'
            )
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.traumatology.distalFemoralPins.plug'),
            data: ''
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.traumatology.distalFemoralPins.material'),
            data: i18n.global.t('main.carts.traumatology.distalFemoralPins.materialData')
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.distalFemoralPins.tool'),
            data: '94260-00000'
          }
        ]
      }
    ])

    function objectSpanMethod({ columnIndex, rowIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
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
      objectSpanMethod,
    }
  }
}
</script>

<style lang="scss" scoped>
.distal-femoral-pins {
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