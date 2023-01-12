<template>
  <div class="inserts-with-angular-stability">
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
          :to="`/${$i18n.locale}/catalog/traumatology/ao-screws/`"
        >
          {{ $t('main.carts.traumatology.links.aoScrews') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.traumatology.links.microscrews') }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <CorticalScrewGrid />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import CorticalScrewGrid from './grid/CorticalScrewGrid.vue'

export default {
  name: 'MicroScrew',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.microScrews.title'),
        image: require('@/assets/traumatology/microscrews.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: { CorticalScrewGrid }
}
</script>

<style lang="scss" scoped>
.inserts-with-angular-stability {
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
