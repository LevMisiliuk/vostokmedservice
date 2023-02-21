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
        <el-breadcrumb-item> Мікрохірургія </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <h2>Інструменти та обладнання для мікрохірургії</h2>
          <br />

          <MiniPlate4x1 />

          <MiniPlate5x1 />

          <MiniPlateFacial />

          <MiniPlateTShaped />

          <MiniPlateCondyle />

          <MiniPlateTShapedSecond />

          <MiniPlateLShaped />

          <MiniPlateLShapedCurved />

          <MiniPlateHShaped />

          <PlateTShapedThird />

          <PlateLShaped />

          <PlateLShapedSecond />

          <MiniPlates />

          <SelfTappingScrew />

          <ApparatusForTreatment />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'
import MiniPlate4x1 from './grid/MiniPlate4x1.vue'
import MiniPlate5x1 from './grid/MiniPlate5x1.vue'
import MiniPlateFacial from './grid/MiniPlateFacial.vue'
import MiniPlateTShaped from './grid/MiniPlateTShaped.vue'
import MiniPlateCondyle from './grid/MiniPlateCondyle.vue'
import MiniPlateTShapedSecond from './grid/MiniPlateTShapedSecond.vue'
import MiniPlateLShaped from './grid/MiniPlateLShaped.vue'
import MiniPlateLShapedCurved from './grid/MiniPlateLShapedCurved.vue'
import MiniPlateHShaped from './grid/MiniPlateHShaped.vue'
import PlateTShapedThird from './grid/PlateTShapedThird.vue'
import PlateLShaped from './grid/PlateLShaped.vue'
import PlateLShapedSecond from './grid/PlateLShapedSecond.vue'
import MiniPlates from './grid/MiniPlates.vue'
import SelfTappingScrew from './grid/SelfTappingScrew.vue'
import ApparatusForTreatment from './grid/ApparatusForTreatment.vue'

export default {
  name: 'MicroSurgery',
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
  components: { MiniPlate4x1, MiniPlate5x1, MiniPlateFacial, MiniPlateTShaped, MiniPlateCondyle, MiniPlateTShapedSecond, MiniPlateLShaped, MiniPlateLShapedCurved, MiniPlateHShaped, PlateTShapedThird, PlateLShaped, PlateLShapedSecond, MiniPlates, SelfTappingScrew, ApparatusForTreatment }
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
