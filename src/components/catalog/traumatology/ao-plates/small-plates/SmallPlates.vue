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
          Пластини АО
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

          <SmallPlate8x2 />

          <SmallPlateWithLimitedContact8x2 />

          <ReconstructivePlate8x2and7 />

          <DirectPlate10x3 />

          <DirectPlateLimitedContact />

          <SmallSelfCompresivePlate />

          <SelfCompresivePlateLimitedContact />

          <PipePlate />

          <PipePlateForced />

          <ReconstructivePlate10x3 />

          <PelvisReconstructivePlate />

          <PlateYShaped />

          <ScatterBonePlate />

          <TShapedSmallPlate />

          <SmallTShapedCurvedPlate />

          <SelfCompresiveNarrowPlate />

          <SmallSelfCompresivePlateWithLimitedContact />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import SmallPlate8x2 from './grid/SmallPlate8x2.vue'
import SmallPlateWithLimitedContact8x2 from './grid/SmallPlateWithLimitedContact8x2.vue'
import ReconstructivePlate8x2and7 from './grid/ReconstructivePlate8x2and7.vue'
import DirectPlate10x3 from './grid/DirectPlate10x3.vue'
import DirectPlateLimitedContact from './grid/DirectPlateLimitedContact.vue'
import SmallSelfCompresivePlate from './grid/SmallSelfCompresivePlate.vue'
import SelfCompresivePlateLimitedContact from './grid/SelfCompresivePlateLimitedContact.vue'
import PipePlate from './grid/PipePlate.vue'
import PipePlateForced from './grid/PipePlateForced.vue'
import ReconstructivePlate10x3 from './grid/ReconstructivePlate10x3.vue'
import PelvisReconstructivePlate from './grid/PelvisReconstructivePlate.vue'
import PlateYShaped from './grid/PlateYShaped.vue'
import ScatterBonePlate from './grid/ScatterBonePlate.vue'
import TShapedSmallPlate from './grid/TShapedSmallPlate.vue'
import SmallTShapedCurvedPlate from './grid/SmallTShapedCurvedPlate.vue'
import SelfCompresiveNarrowPlate from './grid/SelfCompresiveNarrowPlate.vue'
import SmallSelfCompresivePlateWithLimitedContact from './grid/SmallSelfCompresivePlateWithLimitedContact.vue'

export default {
  name: 'SmallPlates',
  setup() {
    const cardData = computed(() => [
      {
        title: 'Невеликі пластини',
        image: require('@/assets/traumatology/small-plates.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: {
    SmallPlate8x2,
    SmallPlateWithLimitedContact8x2,
    ReconstructivePlate8x2and7,
    DirectPlate10x3,
    DirectPlateLimitedContact,
    SmallSelfCompresivePlate,
    SelfCompresivePlateLimitedContact,
    PipePlate,
    PipePlateForced,
    ReconstructivePlate10x3,
    PelvisReconstructivePlate,
    PlateYShaped,
    ScatterBonePlate,
    TShapedSmallPlate,
    SmallTShapedCurvedPlate,
    SelfCompresiveNarrowPlate,
    SmallSelfCompresivePlateWithLimitedContact
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
