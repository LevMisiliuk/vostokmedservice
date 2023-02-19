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
          {{ $t('main.carts.neurosurgery.spinalBeamsLinks.curvedBeam') }}
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
              :label="$t('main.carts.neurosurgery.curvedBeam.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.curvedBeam.table.second')"
              prop="second"
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
  name: 'curvedBeam',
  setup() {
    const tableData = ref([
      {
        first: '30',
        second: '36140-06030',     
      },
      {
        first: '35',
        second: '36140-06035',
      },
      {
        first: '40',
        second: '36140-06040',
      },
      {
        first: '45',
        second: '36140-06045',
      },
      {
        first: '50',
        second: '36140-06050',
      },
      {
        first: '55',
        second: '36140-06055',
      },
      {
        first: '60',
        second: '36140-06060',
      },{
        first: '80',
        second: '36140-06080',
      },
      {
        first: '90',
        second: '36140-06090',
      },
      {
        first: '100',
        second: '36140-06100',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.curvedBeam'),
        subtitle: "",
        image: require('@/assets/neurosurgery/curved-beam.png'),
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