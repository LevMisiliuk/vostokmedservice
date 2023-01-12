<template>
  <div class="humerus-tool">
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
              'main.carts.traumatology.links.toolForDtssDcssInsert'
            )
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="humerus-tool__inner">
        <LeftLinksMenu />
        <div class="humerus-tool__card">
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
                  'main.carts.traumatology.toolForDtssDcssInsert.table.catalogNumber'
                )
              "
              prop="second"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolForDtssDcssInsert.table.name'
                )
              "
              prop="third"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolForDtssDcssInsert.table.qty'
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
  name: 'ToolDtssDcssInsert',
  setup() {
    const tableData = computed(() => [
      {
        first: '1',
        second: '92420-00100',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.first'
        ),
        fourth: '1'
      },
      {
        first: '2',
        second: '92420-00200',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.second'
        ),
        fourth: '1'
      },
      {
        first: '3',
        second: '92420-00300',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.third'
        ),
        fourth: '1'
      },
      {
        first: '4',
        second: '92420-00400',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.fourth'
        ),
        fourth: '1'
      },
      {
        first: '5',
        second: '92420-00500',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.fifth'
        ),
        fourth: '1'
      },
      {
        first: '6',
        second: '92420-01300',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.sixth'
        ),
        fourth: '1'
      },
      {
        first: '7',
        second: '92420-01600',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.seventh'
        ),
        fourth: '1'
      },
      {
        first: '8',
        second: '92420-00600',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.eights'
        ),
        fourth: '1'
      },
      {
        first: '9',
        second: '92420-01000',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.ninth'
        ),
        fourth: '1'
      },
      {
        first: '10',
        second: '92420-01800',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.tenth'
        ),
        fourth: '1'
      },
      {
        first: '11',
        second: '92420-01400',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.eleventh'
        ),
        fourth: '1'
      },
      {
        first: '12',
        second: '92420-01700',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.twelfth'
        ),
        fourth: '1'
      },
      {
        first: '13',
        second: '92420-01900',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.thirteenth'
        ),
        fourth: '1'
      },
      {
        first: '14',
        second: '92420-00800',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.fourteenth'
        ),
        fourth: '1'
      },
      {
        first: '15',
        second: '92420-01100',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.fifteenth'
        ),
        fourth: '1'
      },
      {
        first: '16',
        second: '92420-02000',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.sixteenth'
        ),
        fourth: '1'
      },
      {
        first: '17',
        second: '92420-00700',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.seventeenth'
        ),
        fourth: '1'
      },
      {
        first: '18',
        second: '92420-01500',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.eighteenth'
        ),
        fourth: '1'
      },
      {
        first: '19',
        second: '92420-01200',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.nintheenth'
        ),
        fourth: '1'
      },
      {
        first: '20',
        second: '99160-35250',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.twentieth'
        ),
        fourth: '1'
      },
      {
        first: '21',
        second: '15020-25250',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.twentyFirst'
        ),
        fourth: '1'
      },
      {
        first: '22',
        second: '92420-10000',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.twentySecond'
        ),
        fourth: '1'
      },
      {
        first: '23',
        second: '92420-02100',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.twentyThird'
        ),
        fourth: '1'
      },{
        first: '24',
        second: '99020-32145',
        third: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.tableData.twentyFourth'
        ),
        fourth: '1'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.toolForDtssDcssInsert.title'
        ),
        image: require('@/assets/traumatology/tool-for-dtss-dcss-insert.jpeg')
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
.humerus-tool {
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
