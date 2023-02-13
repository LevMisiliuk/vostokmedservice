<template>
  <div class="electric-table-forth">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/operating-tables`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3008s')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="electric-table-forth__inner">
        <LeftLinksMenu />
        <div class="electric-table-forth__card">
          <ProductInfoCard
            :image="operatingTable3008sData[0].image"
            :title="operatingTable3008sData[0].title"
            :subtitle="operatingTable3008sData[0].subtitle"
            :productsParams="operatingTable3008sData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.title2'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.text3')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.text4')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.text5')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.text6')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.text7')
      },
    ])
    const operatingTable3008sData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.operatingTable3008s'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/operating-table-3008s.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.operatingTable3008s.dataRight9'),
          },
        ]
      }
    ])
    return {
      operatingTable3008sData,
      textData
    }
  }
}
</script>

<style lang="scss">
.electric-table-forth {
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
