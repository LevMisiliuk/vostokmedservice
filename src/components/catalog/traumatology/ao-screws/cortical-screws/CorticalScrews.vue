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
          {{ $t('main.carts.traumatology.links.corticalScrews') }}
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

          <CorticalScrew3and5 />

          <CorticalScrew4and5 />

          <MalleolarScrew />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import CorticalScrew3and5 from './grid/CorticalScrew3and5.vue'
import MalleolarScrew from './grid/MalleolarScrew.vue'

export default {
  name: 'CorticalScrews',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.corticalScrews.title'),
        image: require('@/assets/traumatology/cortical-screws.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: { CorticalScrew3and5, MalleolarScrew }
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
