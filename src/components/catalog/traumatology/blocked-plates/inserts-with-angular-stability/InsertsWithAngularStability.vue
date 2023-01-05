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
          :to="`/${$i18n.locale}/catalog/traumatology/blocked-plates/`"
        >
          {{ $t('main.carts.traumatology.links.blockedPlates') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.traumatology.links.angularStabilityInserts') }}
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

          <SmallLockingSelfCompressingPlateGrid />

          <SmallLockingLowContactSelfCompressingPlateGrid />

          <LockingSmallTPlateGrid />

          <LockingSmallTPlateObliqueGrid />

          <LockingReconstructionPlateGrid />

          <LockingProximalHumeralPlateGrid />

          <LockingDistalMedialHumerusPlateGrid />

          <LockingDistalTibiaPlate />

          <ThreadStabilizedSmallTPlateGrid />

          <ThreadStabilizedSmallTPlateObliqueGrid />

          <LockingTPlateGrid />

          <LockingTButtressPlate />

          <LockingLButtressPlate />

          <LockingProximalTibiaPlateDefaultGrid />

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
import SmallLockingSelfCompressingPlateGrid from './grid/SmallLockingSelfCompressingPlateGrid.vue'
import SmallLockingLowContactSelfCompressingPlateGrid from './grid/SmallLockingLowContactSelfCompressingPlateGrid.vue'
import LockingSmallTPlateGrid from '../special-inserts-with-angular-stability/grid/LockingSmallTPlateGrid.vue'
import LockingSmallTPlateObliqueGrid from '../special-inserts-with-angular-stability/grid/LockingSmallTPlateObliqueGrid.vue'
import LockingReconstructionPlateGrid from './grid/LockingReconstructionPlateGrid.vue'
import LockingProximalHumeralPlateGrid from './grid/LockingProximalHumeralPlateGrid.vue'
import LockingDistalMedialHumerusPlateGrid from '../special-inserts-with-angular-stability/grid/LockingDistalMedialHumerusPlateGrid.vue'
import LockingDistalTibiaPlate from './grid/LockingDistalTibiaPlate.vue'
import ThreadStabilizedSmallTPlateGrid from '../special-inserts-with-angular-stability/grid/ThreadStabilizedSmallTPlateGrid.vue'
import ThreadStabilizedSmallTPlateObliqueGrid from '../special-inserts-with-angular-stability/grid/ThreadStabilizedSmallTPlateObliqueGrid.vue'
import LockingTPlateGrid from './grid/LockingTPlateGrid.vue'
import LockingTButtressPlate from './grid/LockingTButtressPlate.vue'
import LockingLButtressPlate from './grid/LockingLButtressPlate.vue'
import LockingProximalTibiaPlateDefaultGrid from './grid/LockingProximalTibiaPlateDefaultGrid.vue'
import LockingDistalMedialTibiaPlateGrid from '../special-inserts-with-angular-stability/grid/LockingDistalMedialTibiaPlateGrid.vue'
import LockingProximalTibiaPlateGrid from '../special-inserts-with-angular-stability/grid/LockingProximalTibiaPlateGrid.vue'

export default {
  name: 'InsertsWithAngularStability',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.insertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/angular-stability-inserts.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: { SmallLockingSelfCompressingPlateGrid, SmallLockingLowContactSelfCompressingPlateGrid, LockingSmallTPlateGrid, LockingSmallTPlateObliqueGrid, LockingReconstructionPlateGrid, LockingProximalHumeralPlateGrid, LockingDistalMedialHumerusPlateGrid, LockingDistalTibiaPlate, ThreadStabilizedSmallTPlateGrid, ThreadStabilizedSmallTPlateObliqueGrid, LockingTPlateGrid, LockingTButtressPlate, LockingLButtressPlate, LockingProximalTibiaPlateDefaultGrid, LockingDistalMedialTibiaPlateGrid, LockingProximalTibiaPlateGrid }
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
