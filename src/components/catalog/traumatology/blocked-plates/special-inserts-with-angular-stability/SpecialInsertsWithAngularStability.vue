<template>
  <div class="special-inserts-with-angular-stability">
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
          :to="`/${$i18n.locale}/catalog/traumatology/blocked-plates/`"
        >
          {{ $t('main.carts.traumatology.links.blockedPlates') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{
            $t('main.carts.traumatology.links.specialInsertsWithAngularStability')
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="special-inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="special-inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <LockingSmallTPlateGrid />

          <LockingSmallTPlateObliqueGrid />

          <LockingDistalMedialHumerusPlateGrid />

          <ThreadStabilizedSmallTPlateGrid />

          <ThreadStabilizedSmallTPlateObliqueGrid />

          <LockingDistalFemurPlateGrid />

          <LockingProximalTibiaPlateGrid />

          <LockingDistalMedialTibiaPlateGrid />

        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import LockingSmallTPlateGrid from './grid/LockingSmallTPlateGrid.vue'
import LockingSmallTPlateObliqueGrid from './grid/LockingSmallTPlateObliqueGrid.vue'
import LockingDistalMedialHumerusPlateGrid from './grid/LockingDistalMedialHumerusPlateGrid.vue'
import ThreadStabilizedSmallTPlateGrid from './grid/ThreadStabilizedSmallTPlateGrid.vue'
import ThreadStabilizedSmallTPlateObliqueGrid from './grid/ThreadStabilizedSmallTPlateObliqueGrid.vue'
import LockingDistalFemurPlateGrid from './grid/LockingDistalFemurPlateGrid.vue'
import LockingProximalTibiaPlateGrid from './grid/LockingProximalTibiaPlateGrid.vue'
import LockingDistalMedialTibiaPlateGrid from './grid/LockingDistalMedialTibiaPlateGrid.vue'

export default {
  name: 'SpecialInsertsWithAngularStability',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.specialInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/special-inserts-with-angular-stability.jpeg'),
      }
    ])
    return {
      cardData
    }
  },
  components: {
    LockingSmallTPlateGrid,
    LockingSmallTPlateObliqueGrid,
    LockingDistalMedialHumerusPlateGrid,
    ThreadStabilizedSmallTPlateGrid,
    ThreadStabilizedSmallTPlateObliqueGrid,
    LockingDistalFemurPlateGrid,
    LockingProximalTibiaPlateGrid,
    LockingDistalMedialTibiaPlateGrid
}
}
</script>

<style lang="scss" scoped>
.special-inserts-with-angular-stability {
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
