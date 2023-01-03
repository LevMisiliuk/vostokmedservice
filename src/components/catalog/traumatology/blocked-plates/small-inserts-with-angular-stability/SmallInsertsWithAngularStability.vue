<template>
  <div class="small-inserts-with-angular-stability">
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
            $t('main.carts.traumatology.links.smallInsertsWithAngularStability')
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="small-inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="small-inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <StraightPlateGrid />

          <StraightPlateSecondGrid />

          <SmallPlateTShapedGrid />

          <ReconstructivePlateGrid />

          <PlateTubularGrid />

          <ShoulderNeckPlateGrid />

          <HookPlateGrid />

          <MedialCondylarPlate />

          <StraightPlateThirdGrid />

          <StraightPlateFourthGrid />

        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import StraightPlateGrid from './grid/StraightPlateGrid.vue'
import StraightPlateSecondGrid from './grid/StraightPlateSecondGrid.vue'
import SmallPlateTShapedGrid from './grid/SmallPlateTShapedGrid.vue'
import ReconstructivePlateGrid from './grid/ReconstructivePlateGrid.vue'
import PlateTubularGrid from './grid/PlateTubularGrid.vue'
import ShoulderNeckPlateGrid from './grid/ShoulderNeckPlateGrid.vue'
import HookPlateGrid from './grid/HookPlateGrid.vue'
import MedialCondylarPlate from './grid/MedialCondylarPlate.vue'
import StraightPlateThirdGrid from './grid/StraightPlateThirdGrid.vue'
import StraightPlateFourthGrid from './grid/StraightPlateFourthGrid.vue'

export default {
  name: 'SmallInsertsWithAngularStability',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.smallInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/small-inserts-with-angular-stability.jpeg')
      }
    ])

    return {
      cardData
    }
  },
  components: { StraightPlateGrid, StraightPlateSecondGrid, SmallPlateTShapedGrid, ReconstructivePlateGrid, PlateTubularGrid, ShoulderNeckPlateGrid, HookPlateGrid, MedialCondylarPlate, StraightPlateThirdGrid, StraightPlateFourthGrid }
}
</script>

<style lang="scss" scoped>
.small-inserts-with-angular-stability {
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
