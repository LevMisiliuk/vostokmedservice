<template>
  <div class="compressorInhaler-boreal">
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
          <a>{{$t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC28')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="compressorInhaler-boreal__inner">
        <LeftLinksMenu />
        <div class="compressorInhaler-boreal__card">
          <ProductInfoCard
            :image="omronNeC28Data[0].image"
            :title="omronNeC28Data[0].title"
            :subtitle="omronNeC28Data[0].subtitle"
            :productsParams="omronNeC28Data[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.title1'),
      },
    ])
    const omronNeC28Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.omronNeC28'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/inhalersNebulizers/omron-ne-C28.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.omronNeC28.dataRight9'),
          }
        ]
      }
    ])
    return {
      omronNeC28Data,
      textData
    }
  }
}
</script>

<style lang="scss">
.compressorInhaler-boreal {
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
