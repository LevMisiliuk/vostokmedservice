<template>
  <div class="coagulator">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/operational-equipment`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.coagulator')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="coagulator__inner">
        <LeftLinksMenu />
        <div class="coagulator__card">
          <ProductInfoCard
            :image="coagulatorData[0].image"
            :title="coagulatorData[0].title"
            :subtitle="coagulatorData[0].subtitle"
            :productsParams="coagulatorData[0].productsParams"
          />
          <div class="card">
            <div class="card__product-info">
              <div
                class="card__product-info-inner"
                v-for="item in textData"
                :key="item.id"
              >
                <div v-if="(item.id === 1 || item.id === 2 || item.id === 3)">
                  <div>
                    <div class="card__product-title" v-if="item.title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
                    <div class="card__product-data">
                      {{ item.data }}
                    </div>
                  </div>
                </div>
                <div v-else-if="item.id === 4">
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text2'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text3'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text4'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.title2'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text5'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text6'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text7'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text8'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text9'),
      },
      {
        id: 10,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text10'),
      },
      {
        id: 11,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text11'),
      },
      {
        id: 12,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text12'),
      },
      {
        id: 13,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text13'),
      },
      {
        id: 14,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.text14'),
      },
    ])
    const coagulatorData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.coagulator'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/coagulator.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight12'),
          },
          {
            id: 13,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft13'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight13'),
          },
          {
            id: 14,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft14'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight14'),
          },
          {
            id: 15,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft15'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight15'),
          },
          {
            id: 16,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataLeft16'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.coagulator.coagulatorDataRight16'),
          },
        ]
      }
    ])
    return {
      coagulatorData,
      textData
    }
  }
}
</script>

<style lang="scss">
.coagulator {
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
      margin-bottom: 10px;
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
