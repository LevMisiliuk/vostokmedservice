<template>
  <div class="large-inserts-with-angular-stability">
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
            $t('main.carts.traumatology.links.largeInsertsWithAngularStability')
          }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="large-inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="large-inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <StraightPlateAngleStableWide />

          <StraightPlateAngleStableWideLimitedContact />

          <ReconstructivePlateAngleStable />

          <TShapedPlateAngleStable />

          <SupportPlateTShapedAngleStable />

          <SupportPlateLShapedAngleStable />

          <CalfPlateAngleStable />

        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import StraightPlateAngleStableWide from './grid/StraightPlateAngleStableWide.vue'
import StraightPlateAngleStableWideLimitedContact from './grid/StraightPlateAngleStableWideLimitedContact.vue'
import ReconstructivePlateAngleStable from './grid/ReconstructivePlateAngleStable.vue'
import TShapedPlateAngleStable from './grid/TShapedPlateAngleStable.vue'
import SupportPlateTShapedAngleStable from './grid/SupportPlateTShapedAngleStable.vue'
import SupportPlateLShapedAngleStable from './grid/SupportPlateLShapedAngleStable.vue'
import CalfPlateAngleStable from './grid/CalfPlateAngleStable.vue'

export default {
  name: 'LargeInsertsWithAngularStability',
  setup() {
    const cardData = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.largeInsertsWithAngularStability.title'
        ),
        image: require('@/assets/traumatology/large-inserts-with-angular-stability.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: { StraightPlateAngleStableWide, StraightPlateAngleStableWideLimitedContact, ReconstructivePlateAngleStable, TShapedPlateAngleStable, SupportPlateTShapedAngleStable, SupportPlateLShapedAngleStable, CalfPlateAngleStable }
}
</script>

<style lang="scss" scoped>
.large-inserts-with-angular-stability {
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
