<template>
  <div class="compressorInhaler-dolphin">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/inhalers-nebulizers`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerDolphin')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="compressorInhaler-dolphin__inner">
        <LeftLinksMenu />
        <div class="compressorInhaler-dolphin__card">
          <ProductInfoCard
            :image="compressorInhalerDolphinData[0].image"
            :title="compressorInhalerDolphinData[0].title"
            :subtitle="compressorInhalerDolphinData[0].subtitle"
            :productsParams="compressorInhalerDolphinData[0].productsParams"
          />
          <div class="card">
            <div class="card__product-info">
              <div
                class="card__product-info-inner"
                v-for="item in textData"
                :key="item.id"
              >
                <div v-if="item.id === 1">
                  <div>
                    <div class="card__product-title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
                    <div class="card__product-data">
                      {{ item.data }}
                    </div>
                  </div>
                </div>
                <div v-else-if="item.id === 2">
                  <div>
                    <div class="card__product-title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
                    <div class="card__product-data">
                      {{ item.data }}
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="card__product-data">
                    {{ item.data }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {
    const textData = computed(() => [
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.compressorInhalerDolphin.title2'),
      }
    ])
    const compressorInhalerDolphinData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.compressorInhalerDolphin'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/inhalersNebulizers/compressor-inhaler-dolphin.png'),
        productsParams: [
        ]
      }
    ])
    return {
      compressorInhalerDolphinData,
      textData
    }
  }
}
</script>

<style lang="scss">
.compressorInhaler-dolphin {
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__card {
    display: flex;
    flex-direction: column;
  }

  .card__product-info-inner{
    justify-content: space-between !important;
  }
}

.card {
  margin-bottom: 40px;
  min-width: 970px;
  min-height: 200px;
  border-radius: 16px;
  background-color: #fff;

  &__product-info {
    padding: 40px;
    display: flex;
    flex-direction: column;

    &-inner {
      display: flex;
      gap: 80px;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 40px;
    }
  }

  &__product-data {
    white-space: pre-wrap;
  }

  &__product-title {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
