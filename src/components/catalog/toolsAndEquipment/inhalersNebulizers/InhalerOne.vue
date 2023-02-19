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
          <a>{{$t('main.carts.toolsAndEquipment.inhalersNebulizers.links.inhaler403A')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="compressorInhaler-boreal__inner">
        <LeftLinksMenu />
        <div class="compressorInhaler-boreal__card">
          <ProductInfoCard
            :image="inhaler403AData[0].image"
            :title="inhaler403AData[0].title"
            :subtitle="inhaler403AData[0].subtitle"
            :productsParams="inhaler403AData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.title2'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text3'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text4'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.text5'),
      },
    ])
    const inhaler403AData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.links.inhaler403A'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/inhalersNebulizers/inhaler-403A.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.inhalersNebulizers.inhaler403A.dataRight7'),
          },
        ]
      }
    ])
    return {
      inhaler403AData,
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
