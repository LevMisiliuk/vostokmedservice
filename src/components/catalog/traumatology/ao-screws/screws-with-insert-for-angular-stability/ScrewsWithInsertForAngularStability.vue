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
          Гвинти для пластин з кутовою стабільністю
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

          <CorticalScrew2and7 />

          <CorticalScrew3and5 />

          <CorticalScrew3and5Second />

          <CorticalScrew4and5 />

          <SpongyScrew4and0 />

        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import CorticalScrew2and7 from './grid/CorticalScrew2and7.vue'
import CorticalScrew3and5 from './grid/CorticalScrew3and5.vue'
import CorticalScrew3and5Second from './grid/CorticalScrew3and5Second.vue'
import CorticalScrew4and5 from './grid/CorticalScrew4and5.vue'
import i18n from '@/i18n'

export default {
  name: 'ScrewsWithInsertForAngularStability',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.links.screwsInsertsWithAngularStability'),
        image: require('@/assets/traumatology/screws-for-plates-with-angular-stability.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: { CorticalScrew2and7, CorticalScrew3and5, CorticalScrew3and5Second, CorticalScrew4and5 }
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
