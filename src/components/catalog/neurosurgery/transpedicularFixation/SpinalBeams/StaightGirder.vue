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
          :to="`/${$i18n.locale}/catalog/neurosurgery/spinal-beam/`"
        >
          {{ $t('main.carts.neurosurgery.secondlinks.spinalBeams') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.neurosurgery.spinalBeamsLinks.staightGirder') }}
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
              :label="$t('main.carts.neurosurgery.staightGirder.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.staightGirder.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.staightGirder.table.third')"
              prop="third"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.staightGirder.table.fourth')"
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
import { computed, ref } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'staightGirder',
  setup() {
    const tableData = ref([
      {
        first: '30',
        second: '	36130-06030',
        third: '160 мм',
        fourth: '36130-06160',      
      },
      {
        first: '35',
        second: '36130-06035',
        third: '170 мм',
        fourth: '36130-06170',
      },
      {
        first: '40',
        second: '36130-06040',
        third: '200 мм',
        fourth: '36130-06200',
      },
      {
        first: '45',
        second: '36130-06045',
        third: '230 мм',
        fourth: '36130-06230',
      },
      {
        first: '50',
        second: '36130-06050',
        third: '250 мм',
        fourth: '36130-06250',
      },
      {
        first: '55',
        second: '36130-06055',
        third: '260 мм',
        fourth: '36130-06260',
      },
      {
        first: '60',
        second: '36130-06060',
        third: '280 мм',
        fourth: '36130-06280',
      },{
        first: '80',
        second: '	36130-06080',
        third: '300 мм',
        fourth: '36130-06300',
      },
      {
        first: '90',
        second: '36130-06090',
        third: '320 мм',
        fourth: '36130-06320',
      },
      {
        first: '100',
        second: '36130-06100',
        third: '340 мм',
        fourth: '36130-06340',
      },
      {
        first: '120',
        second: '36130-06120',
        third: '400 мм',
        fourth: '36130-06400',
      },
      {
        first: '130',
        second: '36130-06130',
        third: '450 мм',
        fourth: '36130-06450',
      },
      {
        first: '140',
        second: '36130-06140',
        third: '490 мм',
        fourth: '36130-06490',
      },
      {
        first: '150',
        second: '36130-06150',
        third: '',
        fourth: '',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.staightGirder'),
        subtitle: "",
        image: require('@/assets/neurosurgery/staight-girder.png'),
        productsParams: [
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