<template>
  <div class="tool-traumatology">
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
              'main.carts.traumatology.links.toolTraumatological'
            )
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="tool-traumatology__inner">
        <LeftLinksMenu />
        <div class="tool-traumatology__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />
          <h3>{{ $t('main.carts.traumatology.toolTraumatological.drill') }}</h3>
          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
          >
            <el-table-column
              label="L"
              prop="first"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolTraumatological.table.0mm'
                )
              "
              prop="second"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolTraumatological.table.steel'
                )
              "
              prop="third"
            />
          </el-table>
          <br>
          <h3>{{ $t('main.carts.traumatology.toolTraumatological.screwTap') }}</h3>
          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="secondTableData"
          >
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolTraumatological.table.0mm'
                )
              "
              prop="second"
            />
            <el-table-column
              label="L"
              prop="first"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolTraumatological.table.steel'
                )
              "
              prop="third"
            />
          </el-table>
          <br>
          <h3>{{ $t('main.carts.traumatology.toolTraumatological.hexScrewdriver') }}</h3>
          <el-table
            border
            style="width: 100%; margin-bottom: 20px"
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="thirdTableData"
          >
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolTraumatological.table.0mm'
                )
              "
              prop="second"
            />
            <el-table-column
              label="L"
              prop="first"
            />
            <el-table-column
              :label="
                $t(
                  'main.carts.traumatology.toolTraumatological.table.steel'
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
  name: 'ToolTraumatology',
  setup() {
    const tableData = computed(() => [
      {
        first: '110',
        second: '2,5',
        third: '434.110.2.5'
      },
      {
        first: '140',
        second: '3,2',
        third: '434.140.3.2'
      },
      {
        first: '200',
        second: '3,5',
        third: '430.200.3.5'
      },
      {
        first: '170',
        second: '4,5',
        third: '430.170.4.5'
      },
      {
        first: '160',
        second: '5,0',
        third: '430.160.5.0'
      }
    ])
    const secondTableData = computed(() => [
      {
        first: '3,5',
        second: '38	',
        third: '600.00.3.5'
      },
      {
        first: '4,5',
        second: '38',
        third: '600.00.4.5'
      },
      {
        first: '5,0',
        second: '38',
        third: '600.01.5.0'
      },
      {
        first: '6,5',
        second: '38',
        third: '600.02.6.5'
      }
    ])
    const thirdTableData = computed(() => [
      {
        first: '2,5',
        second: '160',
        third: '01.03.2.5'
      },
      {
        first: '3,5',
        second: '160',
        third: '01.03.3.5'
      },
      {
        first: '4,0',
        second: '---',
        third: '01.03.4.5'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.toolTraumatological.title'
        ),
        image: require('@/assets/traumatology/tool-traumatology.jpeg')
      }
    ])
    return {
      cardData,
      tableData,
      secondTableData,
      thirdTableData
    }
  }
}
</script>

<style lang="scss" scoped>
.tool-traumatology {
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
