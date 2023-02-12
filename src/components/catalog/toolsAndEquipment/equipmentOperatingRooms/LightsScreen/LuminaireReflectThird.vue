<template>
  <div class="luminaire-reflect-third">
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
          <a>{{$t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorL35II5')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="luminaire-reflect-third__inner">
        <LeftLinksMenu />
        <div class="luminaire-reflect-third__card">
          <ProductInfoCard
            :image="luminaireReflectorL35II5Data[0].image"
            :title="luminaireReflectorL35II5Data[0].title"
            :subtitle="luminaireReflectorL35II5Data[0].subtitle"
            :productsParams="luminaireReflectorL35II5Data[0].productsParams"
          />
          <div class="card">
            <div class="card__product-info">
              <div
                class="card__product-info-inner"
                v-for="item in textData"
                :key="item"
              >
                <div v-if="item.id === 1">
                  <div>
                    <div class="card__product-title" v-if="item.title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
                    <div class="card__product-data">
                      {{ item.data }}
                    </div>
                  </div>
                </div>
                <div v-else-if="item.id === 2">
                  <div>
                    <div class="card__product-title" v-if="item.title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
                    <div class="card__product-data">
                      {{ item.data }}
                    </div>
                  </div>
                </div>
                <div v-else-if="item.id === 3">
                  <div>
                    <div class="card__product-title" v-if="item.title">
                      <h3 class="blue-txt">{{ item.title }}</h3>
                    </div>
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.title1'),
      },
      {
        id: 1,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.text2')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.text3'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.title2'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.text4')
      },
    ])
    const luminaireReflectorL35II5Data = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.luminaireReflectorL35II5'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.subtitle'),
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/luminaire-SPR5eEma.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight9'),
          },
          {
            id: 10,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft10'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight10'),
          },
          {
            id: 11,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft11'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight11'),
          },
          {
            id: 12,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataLeft12'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.luminaireReflectorL35II5.dataRight12'),
          }
        ]
      }
    ])
    return {
      luminaireReflectorL35II5Data,
      textData
    }
  }
}
</script>

<style lang="scss">
.luminaire-reflect-third {
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
