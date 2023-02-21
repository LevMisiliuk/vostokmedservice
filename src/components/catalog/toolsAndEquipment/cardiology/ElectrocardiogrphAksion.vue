<template>
  <div class="luminaire-one">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/cardiology`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphAksion')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="luminaire-one__inner">
        <LeftLinksMenu />
        <div class="luminaire-one__card">
          <ProductInfoCard
            :image="data[0].image"
            :title="data[0].title"
            :subtitle="data[0].subtitle"
            :productsParams="data[0].productsParams"
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
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text1'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text2'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text3'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text4'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text5'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text6'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text7'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.text8'),
      },
    ])
    const data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphAksion'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-aksion.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft15'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight15'),
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft16'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight16'),
          },
          {
            id: 17,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft17'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight17'),
          },
          {
            id: 18,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft18'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight18'),
          },
          {
            id: 19,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft19'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight19'),
          },
          {
            id: 20,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft20'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight20'),
          },
          {
            id: 21,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft21'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight21'),
          },
          {
            id: 22,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft22'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight22'),
          },
          {
            id: 23,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataLeft23'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphAksion.dataRight23'),
          },
        ]
      }
    ])
    return {
      data,
      textData
    }
  }
}
</script>

<style lang="scss">
.luminaire-one {
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
