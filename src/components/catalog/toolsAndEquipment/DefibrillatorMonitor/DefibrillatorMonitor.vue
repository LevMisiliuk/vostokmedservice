<template>
  <div class="defibrillator-monitor">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/medical-furniture`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.cardiology.links.defibrillatorMonitor')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="defibrillator-monitor__inner">
        <LeftLinksMenu />
        <div class="defibrillator-monitor__card">
          <ProductInfoCard
            :image="defibrillatorMonitorData[0].image"
            :title="defibrillatorMonitorData[0].title"
            :subtitle="defibrillatorMonitorData[0].subtitle"
            :productsParams="defibrillatorMonitorData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.title2'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.text3'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.text4'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.text5'),
      }
    ])
    const defibrillatorMonitorData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.defibrillatorMonitor'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/cardiology/defibrillator-monitor.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight10'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft15'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight15'),
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft16'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight16'),
          },
          {
            id: 17,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft17'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight17'),
          },
          {
            id: 18,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft18'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight18'),
          },
          {
            id: 19,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft19'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight19'),
          },
          {
            id: 20,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft20'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight20'),
          },
          {
            id: 21,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft21'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight21'),
          },
          {
            id: 22,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft22'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight22'),
          },
          {
            id: 23,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft23'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight23'),
          },
          {
            id: 24,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft24'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight24'),
          },
          {
            id: 25,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft25'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight25'),
          },
          {
            id: 26,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft26'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight26'),
          },
          {
            id: 27,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft27'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight27'),
          },
          {
            id: 28,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft28'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight28'),
          },
          {
            id: 29,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft29'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight29'),
          },
          {
            id: 30,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft30'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight31'),
          },
          {
            id: 31,
            name: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataLeft31'),
            data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.defibrillatorMonitor.dataRight31'),
          },
        ]
      }
    ])
    return {
      defibrillatorMonitorData,
      textData
    }
  }
}
</script>

<style lang="scss">
.defibrillator-monitor {
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
