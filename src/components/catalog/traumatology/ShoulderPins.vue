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
          {{ $t('main.carts.traumatology.links.pinsForShoulder') }}
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
          >
            <el-table-column
              label=""
              prop="first"
            >
              <el-table-column
                :label="$t('main.carts.traumatology.shoulderPins.table.first')"
                prop="first"
              />
            </el-table-column>
            <el-table-column
              :label="$t('main.carts.traumatology.shoulderPins.table.second')"
              prop="second"
            >
              <el-table-column
                :label="$t('main.carts.traumatology.shoulderPins.table.eights')"
                prop="second"
              />
            </el-table-column>
            <el-table-column
              :label="$t('main.carts.traumatology.shoulderPins.table.third')"
              prop="third"
            >
              <el-table-column
                prop="second"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column
              :label="$t('main.carts.traumatology.shoulderPins.table.fourth')"
              prop="fourth"
            >
              <el-table-column
                label="Ø 8 мм"
                prop="second"
              />
            </el-table-column>
            <el-table-column
              :label="$t('main.carts.traumatology.shoulderPins.table.fifth')"
              prop="fifth"
            >
              <el-table-column
                prop="second"
              />
            </el-table-column>
            <el-table-column
              :label="$t('main.carts.traumatology.shoulderPins.table.sixth')"
              prop="sixth"
            >
              <el-table-column
                label="Ø 9 мм"
                prop="second"
              />
            </el-table-column>
            <el-table-column
              :label="$t('main.carts.traumatology.shoulderPins.table.seventh')"
              prop="seventh"
            >
              <el-table-column
                prop="second"
              />
            </el-table-column>
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
  name: 'ShoulderPins',
  setup() {
    const tableData = ref([
      {
        first: '180',
        second: '14281-70180',
        third: '14291-70180',
        fourth: '14281-80180',
        fifth: '14291-80180',
        sixth: '14281-90180',
        seventh: '14291-90180'
      },
      {
        first: '205',
        second: '14281-70205',
        third: '14291-70205',
        fourth: '14281-80205',
        fifth: '14291-80205',
        sixth: '14281-90205',
        seventh: '14291-90205'
      },
      {
        first: '220',
        second: '14281-70220',
        third: '14291-70220',
        fourth: '14281-80220',
        fifth: '14291-80220',
        sixth: '14281-90220',
        seventh: '14291-90220'
      },
      {
        first: '230',
        second: '14281-70230',
        third: '14291-70230',
        fourth: '14281-80230',
        fifth: '14291-80230',
        sixth: '14281-90230',
        seventh: '14291-90230'
      },
      {
        first: '240',
        second: '14281-70240',
        third: '14291-70240',
        fourth: '14281-80240',
        fifth: '14291-80240',
        sixth: '14281-90240',
        seventh: '14291-90240'
      },
      {
        first: '250',
        second: '14281-70250',
        third: '14291-70250',
        fourth: '14281-80250',
        fifth: '14291-80250',
        sixth: '14281-90250',
        seventh: '14291-90250'
      },
      {
        first: '260',
        second: '14281-70260',
        third: '14291-70260',
        fourth: '14281-80260',
        fifth: '14291-80260',
        sixth: '14281-90260',
        seventh: '14291-90260'
      },
      {
        first: '270',
        second: '14281-70270',
        third: '14291-70270',
        fourth: '14281-80270',
        fifth: '14291-80270',
        sixth: '14281-90270',
        seventh: '14291-90270'
      },
      {
        first: '280',
        second: '14281-70280',
        third: '14291-70280',
        fourth: '14281-80280',
        fifth: '14291-80280',
        sixth: '14281-90280',
        seventh: '14291-90280'
      },
      {
        first: '295',
        second: '14281-70295',
        third: '14291-70295',
        fourth: '14281-80295',
        fifth: '14291-80295',
        sixth: '14281-90295',
        seventh: '14291-90295'
      },
      {
        first: '310',
        second: '14281-70310',
        third: '14291-70310',
        fourth: '14281-80310',
        fifth: '14291-80310',
        sixth: '14281-90310',
        seventh: '14291-90310'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.shoulderPins.title'),
        subtitle: i18n.global.t('main.carts.traumatology.shoulderPins.subtitle'),
        image: require('@/assets/traumatology/pins-for-shoulder.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.traumatology.shoulderPins.lockingScrew'),
            data: i18n.global.t(
              'main.carts.traumatology.shoulderPins.lockingScrewData'
            )
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.traumatology.shoulderPins.plug'),
            data: '12400-07011'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.traumatology.shoulderPins.material'),
            data: i18n.global.t('main.carts.traumatology.shoulderPins.materialData')
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.shoulderPins.tool'),
            data: '94290-00000'
          }
        ]
      }
    ])
    return {
      cardData,
      tableData,
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