<template>
  <div class="electric-table-third">
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
          <a>{{$t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.tableHydrDriven3008A')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="electric-table-third__inner">
        <LeftLinksMenu />
        <div class="electric-table-third__card">
          <ProductInfoCard
            :image="tableHydrDriven3008AData[0].image"
            :title="tableHydrDriven3008AData[0].title"
            :subtitle="tableHydrDriven3008AData[0].subtitle"
            :productsParams="tableHydrDriven3008AData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.title1'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text2'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.title2'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text3')
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text4')
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text5'),
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.title3'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text6')
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text7')
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text8')
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text9')
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.text10')
      },
    ])
    const tableHydrDriven3008AData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.links.tableHydrDriven3008A'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/equipmentOperatingRooms/table-hydr-driven-3008A.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft1'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft2'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight2'),
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft4'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight4'),
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft6'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight6'),
          },
          {
            id: 7,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft7'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight7'),
          },
          {
            id: 8,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft8'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight8'),
          },
          {
            id: 9,
            name: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataLeft9'),
            data: i18n.global.t('main.carts.toolsAndEquipment.equipmentOperatingRooms.tableHydrDriven3008A.dataRight9'),
          }
        ]
      }
    ])
    return {
      tableHydrDriven3008AData,
      textData
    }
  }
}
</script>

<style lang="scss">
.electric-table-third {
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
