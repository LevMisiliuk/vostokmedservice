<template>
  <div class="instrument-set-calf-thigh-retrograde-thigh">
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
          :to="`/${$i18n.locale}/catalog/traumatology/tools/`"
        >
          {{ $t('main.carts.traumatology.links.tool') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{
            $t(
              'main.carts.traumatology.links.instrumentSetCalfThighRetrogradeThigh'
            )
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="instrument-set-calf-thigh-retrograde-thigh__inner">
        <LeftLinksMenu />
        <div class="instrument-set-calf-thigh-retrograde-thigh__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
          >
            <el-table-column
              label="№"
              prop="first"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.table.kit'
                )
              "
              prop="second"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.table.qty'
                )
              "
              prop="third"
            />
          </el-table>

          <img :src="cardData[0].imageAddition" alt="instrument set calf thigh retrograde thigh second kit">
          <br>
          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="secondTableData"
          >
            <el-table-column
              label="№"
              prop="first"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.table.kit'
                )
              "
              prop="second"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.table.qty'
                )
              "
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
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'InstrumentsCalfThighRetrogradetThigh',
  setup() {
    const tableData = computed(() => [
      {
        first: '1',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.first'
        ),
        third: '1',
      },
      {
        first: '2',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.second'
        ),
        third: '1',
      },
      {
        first: '3',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.third'
        ),
        third: '1',
      },
      {
        first: '4',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.fourth'
        ),
        third: '1',
      },
      {
        first: '5',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.fifth'
        ),
        third: '1',
      },
      {
        first: '6',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.sixth'
        ),
        third: '1',
      },
      {
        first: '7',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.seventh'
        ),
        third: '1',
      },
      {
        first: '8',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.eights'
        ),
        third: '1',
      },
      {
        first: '9',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.ninth'
        ),
        third: '1',
      },
      {
        first: '10',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.tenth'
        ),
        third: '1',
      },
      {
        first: '11',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.eleventh'
        ),
        third: '1',
      },
      {
        first: '12',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.twelfth'
        ),
        third: '1',
      },
      {
        first: '13',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.thirteenth'
        ),
        third: '1',
      },
      {
        first: '14',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.fourteenth'
        ),
        third: '1',
      },
      {
        first: '15',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.fifteenth'
        ),
        third: '1',
      },
      {
        first: '-',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.tableData.sixteenth'
        ),
        third: '1',
      },
    ])
    const secondTableData = computed(() => [
      {
        first: '1',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.first'
        ),
        third: '1',
      },
      {
        first: '2',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.second'
        ),
        third: '1',
      },
      {
        first: '3',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.third'
        ),
        third: '1',
      },
      {
        first: '4',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.fourth'
        ),
        third: '1',
      },
      {
        first: '5',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.fifth'
        ),
        third: '1',
      },
      {
        first: '6',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.sixth'
        ),
        third: '1',
      },
      {
        first: '7',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.seventh'
        ),
        third: '1',
      },
      {
        first: '8',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.eights'
        ),
        third: '1',
      },
      {
        first: '9',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.ninth'
        ),
        third: '1',
      },
      {
        first: '10',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.tenth'
        ),
        third: '1',
      },
      {
        first: '11',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.eleventh'
        ),
        third: '1',
      },
      {
        first: '12',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.twelfth'
        ),
        third: '1',
      },
      {
        first: '13',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.thirteenth'
        ),
        third: '1',
      },
      {
        first: '14',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.fourteenth'
        ),
        third: '1',
      },
      {
        first: '15',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.fifteenth'
        ),
        third: '1',
      },
      {
        first: '-',
        second: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.secondTableData.sixteenth'
        ),
        third: '1',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.instrumentSetCalfThighRetrogradeThigh.title'
        ),
        image: require('@/assets/traumatology/instrument-set-calf-thigh-retrograde-thigh.jpeg'),
        imageAddition: require('@/assets/traumatology/instrument-set-calf-thigh-retrograde-thigh-second.jpeg')
      }
    ])
    return {
      cardData,
      tableData,
      secondTableData
    }
  }
}
</script>

<style lang="scss" scoped>
.instrument-set-calf-thigh-retrograde-thigh {
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
