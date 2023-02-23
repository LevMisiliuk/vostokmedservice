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
        <el-breadcrumb-item> Стержні </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <ChancetanScrew />

          <TscScreen />

          <StaimansRobs />

          <StaimansRobsWithNotch />

          <ShancRobs />

          <ShancRobsSecond />

          <ShancRobsThird />

          <ScrewRoster />

          <ConicalScrew />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import ChancetanScrew from './grid/ChancetanScrew.vue'
import TscScreen from './grid/TscScreen.vue'
import StaimansRobs from './grid/StaimansRobs.vue'
import StaimansRobsWithNotch from './grid/StaimansRobsWithNotch.vue'
import ShancRobs from './grid/ShancRobs.vue'
import ShancRobsSecond from './grid/ShancRobsSecond.vue'
import ShancRobsThird from './grid/ShancRobsThird.vue'
import ScrewRoster from './grid/ScrewRoster.vue'
import ConicalScrew from './grid/ConicalScrew.vue'

export default {
  name: 'RobsScreen',
  setup() {
    const cardData = computed(() => [
      {
        title: 'Стержні',
        image: require('@/assets/traumatology/robs.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: {
    ChancetanScrew,
    TscScreen,
    StaimansRobs,
    StaimansRobsWithNotch,
    ShancRobs,
    ShancRobsSecond,
    ShancRobsThird,
    ScrewRoster,
    ConicalScrew
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
