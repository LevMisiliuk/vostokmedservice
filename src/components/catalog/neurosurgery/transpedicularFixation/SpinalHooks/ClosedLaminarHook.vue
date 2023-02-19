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
          :to="`/${$i18n.locale}/catalog/neurosurgery/spinal-hooks/`"
        >
          {{ $t('main.carts.neurosurgery.secondlinks.spinalHooks') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.neurosurgery.spinalHooksLinks.closedLaminarHook') }}
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
              :label="$t('main.carts.neurosurgery.closedLaminarHook.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.neurosurgery.closedLaminarHook.table.second')"
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
  name: 'closedLaminarHook',
  setup() {
    const tableData = ref([
      {
        first: '5X5',
        second: '36193-05005',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalHooksLinks.closedLaminarHook'),
        subtitle: "",
        image: require('@/assets/neurosurgery/closed-laminar-hook.png'),
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