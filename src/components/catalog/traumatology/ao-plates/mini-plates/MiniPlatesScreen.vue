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

        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import MiniPlate4x1 from '../../micro-surgery/grid/MiniPlate4x1.vue'
import MiniPlate5x1 from '../../micro-surgery/grid/MiniPlate5x1.vue'
import MiniPlateFacial from '../../micro-surgery/grid/MiniPlateFacial.vue'
import MiniPlateTShaped from '../../micro-surgery/grid/MiniPlateTShaped.vue'
import MiniPlateCondyle from '../../micro-surgery/grid/MiniPlateCondyle.vue'
import MiniPlateTShapedSecond from '../../micro-surgery/grid/MiniPlateTShapedSecond.vue'
import MiniPlateLShaped from '../../micro-surgery/grid/MiniPlateLShaped.vue'
import MiniPlateLShapedCurved from '../../micro-surgery/grid/MiniPlateLShapedCurved.vue'
import MiniPlateHShaped from '../../micro-surgery/grid/MiniPlateHShaped.vue'
import PlateTShapedThird from '../../micro-surgery/grid/PlateTShapedThird.vue'
import PlateLShaped from '../../micro-surgery/grid/PlateLShaped.vue'
import PlateLShapedSecond from '../../micro-surgery/grid/PlateLShapedSecond.vue'


export default {
  name: 'MiniPlates',
  setup() {
    const cardData = computed(() => [
      {
        title: 'Міні пластини',
        image: require('@/assets/traumatology/mini-plate-t-shaped.jpeg')
      }
    ])

    return {
      cardData
    }
  },
  components: {
    MiniPlate4x1,
    MiniPlate5x1,
    MiniPlateFacial,
    MiniPlateTShaped,
    MiniPlateCondyle,
    MiniPlateTShapedSecond,
    MiniPlateLShaped,
    MiniPlateLShapedCurved,
    MiniPlateHShaped,
    PlateTShapedThird,
    PlateLShaped,
    PlateLShapedSecond,
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
