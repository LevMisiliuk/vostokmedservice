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
        <el-breadcrumb-item> Гвинти спеціальні </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <BlockedScrew3and9 />

          <BlockedScrew4and9 />

          <BlockedScrew6and5 />

          <AntirotationScrew6and5 />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import BlockedScrew3and9 from './grid/BlockedScrew3and9.vue'
import BlockedScrew4and9 from './grid/BlockedScrew4and9.vue'
import BlockedScrew6and5 from './grid/BlockedScrew6and5.vue'
import AntirotationScrew6and5 from './grid/AntirotationScrew6and5.vue'

export default {
  name: 'SpongeScrews',
  components: { BlockedScrew3and9, BlockedScrew4and9, BlockedScrew6and5, AntirotationScrew6and5 },
  setup() {
    const cardData = computed(() => [
      {
        title: 'Гвинти спеціальні',
        image: require('@/assets/traumatology/special-screws.jpeg')
      }
    ])
    return {
      cardData
    }
  }
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
