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
        <el-breadcrumb-item> Серкляж </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="inserts-with-angular-stability__inner">
        <LeftLinksMenu />
        <div class="inserts-with-angular-stability__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
          />

          <CerclageWireWithHead />

          <CerclageWire />

          <CerclageBracket />
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import CerclageWireWithHead from './grid/CerclageWireWithHead.vue'
import CerclageWire from './grid/CerclageWire.vue'
import CerclageBracket from './grid/CerclageBracket.vue'

export default {
  name: 'CerclageScreen',
  setup() {
    const cardData = computed(() => [
      {
        title: 'Серкляж',
        image: require('@/assets/traumatology/cerclage.jpeg')
      }
    ])
    return {
      cardData
    }
  },
  components: { CerclageWireWithHead, CerclageWire, CerclageBracket }
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
