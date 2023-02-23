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
          Спеціальні пластини
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

          <TShapedPlateThreadResistance />

          <TShapedPlateCurvedThreadResistance />

          <TShapedPlateEyeletThreadResistant />

          <TShapedPlateEyeletThreadResistantSecond />

          <ShoulderPlateThreadResistant />

          <UlnaPlateThreadResistant />

          <RadiusPlateThreadResistant />

          <DancePlate />

          <ToothedPlate />

          <ThoothedPlateSecond />

          <ThoothedPlateThird />

          <CondylarSupportPlate />

          <ShoulderPlate />

          <AcetabularPlate />

          <ShinPlate />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import TShapedPlateThreadResistance from './grid/TShapedPlateThreadResistance.vue'
import TShapedPlateCurvedThreadResistance from './grid/TShapedPlateCurvedThreadResistance.vue'
import TShapedPlateEyeletThreadResistant from './grid/TShapedPlateEyeletThreadResistant.vue'
import TShapedPlateEyeletThreadResistantSecond from './grid/TShapedPlateEyeletThreadResistantSecond.vue'
import ShoulderPlateThreadResistant from './grid/ShoulderPlateThreadResistant.vue'
import UlnaPlateThreadResistant from './grid/UlnaPlateThreadResistant.vue'
import RadiusPlateThreadResistant from './grid/RadiusPlateThreadResistant.vue'
import DancePlate from './grid/DancePlate.vue'
import ToothedPlate from './grid/ToothedPlate.vue'
import ThoothedPlateSecond from './grid/ThoothedPlateSecond.vue'
import ThoothedPlateThird from './grid/ThoothedPlateThird.vue'
import CondylarSupportPlate from './grid/CondylarSupportPlate.vue'
import ShoulderPlate from './grid/ShoulderPlate.vue'
import AcetabularPlate from './grid/AcetabularPlate.vue'
import ShinPlate from './grid/ShinPlate.vue'

export default {
  name: 'SmallPlates',
  setup() {
    const cardData = computed(() => [
      {
        title: 'Спеціальні пластини',
        image: require('@/assets/traumatology/special-plates.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: {
    TShapedPlateThreadResistance,
    TShapedPlateCurvedThreadResistance,
    TShapedPlateEyeletThreadResistant,
    TShapedPlateEyeletThreadResistantSecond,
    ShoulderPlateThreadResistant,
    UlnaPlateThreadResistant,
    RadiusPlateThreadResistant,
    DancePlate,
    ToothedPlate,
    ThoothedPlateSecond,
    ThoothedPlateThird,
    CondylarSupportPlate,
    ShoulderPlate,
    AcetabularPlate,
    ShinPlate
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
