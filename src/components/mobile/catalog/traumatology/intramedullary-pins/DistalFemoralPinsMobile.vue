<template>
  <MobilePageWrapper>
    <div class="distal-femoral-pins_mobile__card">
      <ProductInfoCardMobile
        :image="cardData[0].image"
        :title="cardData[0].title"
        :subtitle="cardData[0].subtitle"
        :productsParams="cardData[0].productsParams"
      />
    </div>
    <div class="mobile_table-container">
      <el-table
        border
        style="width: 100%"
        :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
        :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
        :data="tableData"
        :span-method="objectSpanMethod"
        :scrollbar-always-on="true"
      >
        <el-table-column label="" prop="first" min-width="140px" />
        <el-table-column
          :label="$t('main.carts.traumatology.distalFemoralPins.table.second')"
          prop="second"
          min-width="140px"
        />
        <el-table-column
          :label="$t('main.carts.traumatology.distalFemoralPins.table.third')"
          prop="third"
          min-width="140px"
        />
        <el-table-column
          :label="$t('main.carts.traumatology.distalFemoralPins.table.fourth')"
          prop="fourth"
          min-width="140px"
        />
        <el-table-column
          :label="$t('main.carts.traumatology.distalFemoralPins.table.fifth')"
          prop="fifth"
          min-width="140px"
        />
      </el-table>
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {
    const tableData = computed(() => [
      {
        first: i18n.global.t(
          'main.carts.traumatology.distalFemoralPins.table.firstData'
        ),
        second: '12',
        third: '14260-12150',
        fourth: '14260-12210',
        fifth: '14260-12250'
      },
      {
        first: '',
        second: '11',
        third: '14260-11150',
        fourth: '14260-11210',
        fifth: '14260-11250'
      },
      {
        first: i18n.global.t(
          'main.carts.traumatology.distalFemoralPins.table.secondData'
        ),
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
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.distalFemoralPins.title'),
        subtitle: i18n.global.t(
          'main.carts.traumatology.distalFemoralPins.subtitle'
        ),
        image: require('@/assets/traumatology/distal-femoral-nail.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t(
              'main.carts.traumatology.distalFemoralPins.lockingScrew'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.distalFemoralPins.lockingScrewData'
            )
          },
          {
            id: 2,
            name: i18n.global.t(
              'main.carts.traumatology.distalFemoralPins.plug'
            ),
            data: ''
          },
          {
            id: 3,
            name: i18n.global.t(
              'main.carts.traumatology.distalFemoralPins.material'
            ),
            data: i18n.global.t(
              'main.carts.traumatology.distalFemoralPins.materialData'
            )
          },
          {
            id: 4,
            name: i18n.global.t(
              'main.carts.traumatology.distalFemoralPins.tool'
            ),
            data: '94260-00000'
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

<style lang="scss">
.distal-femoral-pins_mobile {
  &__card {
    display: flex;
    flex-direction: column;
  }
}
</style>
