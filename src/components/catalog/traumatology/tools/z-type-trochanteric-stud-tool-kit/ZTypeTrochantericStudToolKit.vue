<template>
  <div class="z-type-trochanteric-stud-tool-kit">
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
              'main.carts.traumatology.links.setOfToolsForSettingTrochanterPinZType'
            )
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="z-type-trochanteric-stud-tool-kit__inner">
        <LeftLinksMenu />
        <div class="z-type-trochanteric-stud-tool-kit__card">
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
                  'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.table.catalogNumber'
                )
              "
              prop="second"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.table.name'
                )
              "
              prop="third"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.table.qty'
                )
              "
              prop="fourth"
            />
          </el-table>
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
                  'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.table.catalogNumber'
                )
              "
              prop="second"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.table.name'
                )
              "
              prop="third"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.table.qty'
                )
              "
              prop="fourth"
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
  name: 'ZTypeTrochantericStudToolKit',
  setup() {
    const tableData = computed(() => [
      {
        first: '1',
        second: '94500 00301',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.first'
        ),
        fourth: '1'
      },
      {
        first: '2',
        second: '94500 00201',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.second'
        ),
        fourth: '1'
      },
      {
        first: '3',
        second: '94500 10102',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.third'
        ),
        fourth: '1'
      },
      {
        first: '4',
        second: '94500 00800',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.fourth'
        ),
        fourth: '1'
      },
      {
        first: '5',
        second: '94500 00500',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.fifth'
        ),
        fourth: '1'
      },
      {
        first: '6',
        second: '94500 00900',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.sixth'
        ),
        fourth: '1'
      },
      {
        first: '7',
        second: '94500 00600',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.seventh'
        ),
        fourth: '1'
      },
      {
        first: '8',
        second: '94500 00700',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.eights'
        ),
        fourth: '1'
      },
      {
        first: '9',
        second: '94500 00400',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.ninth'
        ),
        fourth: '1'
      },
      {
        first: '10',
        second: '94500 00203',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.tenth'
        ),
        fourth: '1'
      },
      {
        first: '11',
        second: '94500 01100',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.eleventh'
        ),
        fourth: '1'
      },
      {
        first: '12',
        second: '94500 01000',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.twelfth'
        ),
        fourth: '1'
      },
      {
        first: '13',
        second: '94500 02501',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.thirteenth'
        ),
        fourth: '1'
      },
      {
        first: '14',
        second: '15000 35400',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.fourteenth'
        ),
        fourth: '1'
      },
      {
        first: '15',
        second: '94500 10000',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.tableData.fifteenth'
        ),
        fourth: '1'
      },
    ])
    const secondTableData = computed(() => [
    {
        first: '1',
        second: '94500 01500',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.first'
        ),
        fourth: '1'
      },
      {
        first: '2',
        second: '15020 30400',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.second'
        ),
        fourth: '4'
      },
      {
        first: '3',
        second: '94500 02000',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.third'
        ),
        fourth: '1'
      },
      {
        first: '4',
        second: '94500 01800',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.fourth'
        ),
        fourth: '1'
      },
      {
        first: '5',
        second: '94500 01900',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.fifth'
        ),
        fourth: '1'
      },
      {
        first: '6',
        second: '94500 01200',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.sixth'
        ),
        fourth: '1'
      },
      {
        first: '7',
        second: '99000-00006',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.seventh'
        ),
        fourth: '1'
      },
      {
        first: '8',
        second: '94500 02100',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.eights'
        ),
        fourth: '1'
      },
      {
        first: '9',
        second: '94500 02200',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.ninth'
        ),
        fourth: '1'
      },
      {
        first: '10',
        second: '94500 02300',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.tenth'
        ),
        fourth: '1'
      },
      {
        first: '11',
        second: '94500 01200',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.eleventh'
        ),
        fourth: '1'
      },
      {
        first: '12',
        second: '94500 01600',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.twelfth'
        ),
        fourth: '1'
      },
      {
        first: '13',
        second: '94500 01700',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.thirteenth'
        ),
        fourth: '1'
      },
      {
        first: '14',
        second: '99010 32350',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.fourteenth'
        ),
        fourth: '1'
      },
      {
        first: '15',
        second: '99010 40240',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.fifteenth'
        ),
        fourth: '1'
      },
      {
        first: '16',
        second: '99000-00004',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.sixteenth'
        ),
        fourth: '1'
      },
      {
        first: '17',
        second: '94500 01400',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.seventeenth'
        ),
        fourth: '1'
      },
      {
        first: '18',
        second: '94500 02400',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.eighteenth'
        ),
        fourth: '1'
      },
      {
        first: '19',
        second: '94500 01004',
        third: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.secondTableData.nintheenth'
        ),
        fourth: '1'
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.setOfToolsForSettingTrochanterPinZType.title'
        ),
        image: require('@/assets/traumatology/z-type-trochanteric-stud-tool-kit.jpeg')
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
.z-type-trochanteric-stud-tool-kit {
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
