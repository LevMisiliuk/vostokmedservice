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
          :to="`/${$i18n.locale}/catalog/neurosurgery/spinal-screws/`"
        >
          {{ $t('main.carts.neurosurgery.secondlinks.spinalScrews') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.neurosurgery.spinalScrewsLinks.polyaxialScrew') }}
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
              :label="$t('main.carts.neurosurgery.polyaxialScrew.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.polyaxialScrew.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.polyaxialScrew.table.third')"
              prop="third"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.polyaxialScrew.table.fourth')"
              prop="fourth"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.polyaxialScrew.table.fifth')"
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
import { computed, ref } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'polyaxialScrew',
  setup() {
    const tableData = ref([
      {
        first: '30',
        second: '36110-45030',
        third: '36110-55030',
        fourth: '',
        fifth: '',
      },
      {
        first: '35',
        second: '36110-45035',
        third: '36110-55035',
        fourth: '36110-65035',
        fifth: '',
      },
      {
        first: '40',
        second: '36110-45040',
        third: '36110-55040',
        fourth: '36110-65040',
        fifth: '36110-75040',
      },
      {
        first: '45',
        second: '',
        third: '36110-55045',
        fourth: '36110-65045',
        fifth: '36110-75045',
      },
      {
        first: '50',
        second: '',
        third: '36110-55050',
        fourth: '36110-65050',
        fifth: '',
      },
      {
        first: '55',
        second: '',
        third: '',
        fourth: '36110-65055',
        fifth: '',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalScrewsLinks.polyaxialScrew'),
        subtitle: "",
        image: require('@/assets/neurosurgery/polyaxial-screw.png'),
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