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

          <DynamicalFemoralSystemsComponent />

          <FemoralScrewPlate135 />

          <CondylarScrewPlate95 />

          <FemoralScrewPlate135LimitedContact />

          <CondylarScrewPlate95LimitedContact />

          <FemoralScrewPlateAngleResistance />

          <CondylarScrewPlateAngleResistance />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import DynamicalFemoralSystemsComponent from './grid/DynamicalFemoralSystemsComponent.vue'
import FemoralScrewPlate135 from './grid/FemoralScrewPlate135.vue'
import CondylarScrewPlate95 from './grid/CondylarScrewPlate95.vue'
import FemoralScrewPlate135LimitedContact from './grid/FemoralScrewPlate135LimitedContact.vue'
import CondylarScrewPlate95LimitedContact from './grid/CondylarScrewPlate95LimitedContact.vue'
import FemoralScrewPlateAngleResistance from './grid/FemoralScrewPlateAngleResistance.vue'
import CondylarScrewPlateAngleResistance from './grid/CondylarScrewPlateAngleResistance.vue'

export default {
  name: 'DynamicalFemoralSystems',
  setup() {
    const cardData = computed(() => [
      {
        title: 'Динамічні стегнові та виросткові системи',
        image: require('@/assets/traumatology/dynamical-hip-systems.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: {
    DynamicalFemoralSystemsComponent,
    FemoralScrewPlate135,
    CondylarScrewPlate95,
    FemoralScrewPlate135LimitedContact,
    CondylarScrewPlate95LimitedContact,
    FemoralScrewPlateAngleResistance,
    CondylarScrewPlateAngleResistance
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
