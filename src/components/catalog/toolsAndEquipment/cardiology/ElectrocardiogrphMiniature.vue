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
          <a>{{$t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphMiniature')}}</a>
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
        id: 1,
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.title1'),
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text4'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text7'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text8'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text9'),
      },
      {
        id: 10,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text10'),
      },
      {
        id: 11,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.text11'),
      },
    ])
    const data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.electrocardiogrphMiniature'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/cardiology/electrocardiogrph-miniature.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft15'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight15'),
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft16'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight16'),
          },
          {
            id: 17,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft17'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight17'),
          },
          {
            id: 18,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft18'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight18'),
          },
          {
            id: 19,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft19'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight19'),
          },
          {
            id: 20,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft20'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight20'),
          },
          {
            id: 21,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft21'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight21'),
          },
          {
            id: 22,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft22'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight22'),
          },
          {
            id: 23,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft23'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight23'),
          },
          {
            id: 24,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft24'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight24'),
          },
          {
            id: 25,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft25'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight25'),
          },
          {
            id: 26,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft26'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight26'),
          },
          {
            id: 27,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft27'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight27'),
          },
          {
            id: 28,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft28'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight28'),
          },
          {
            id: 29,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft29'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight29'),
          },
          {
            id: 30,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft30'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight30'),
          },
          {
            id: 31,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft31'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight31'),
          },
          {
            id: 32,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft32'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight32'),
          },
          {
            id: 33,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft33'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight33'),
          },
          {
            id: 34,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft34'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight34'),
          },
          {
            id: 35,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataLeft35'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.electrocardiogrphMiniature.dataRight35'),
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
