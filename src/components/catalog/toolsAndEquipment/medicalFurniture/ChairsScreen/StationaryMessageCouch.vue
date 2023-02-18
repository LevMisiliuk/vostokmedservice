<template>
  <div class="stationary-message-couch">
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
          <a>{{$t('main.carts.toolsAndEquipment.medicalFurniture.links.stationaryMessageCouch')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="stationary-message-couch__inner">
        <LeftLinksMenu />
        <div class="stationary-message-couch__card">
          <ProductInfoCard
            :image="stationaryMessageCouchData[0].image"
            :title="stationaryMessageCouchData[0].title"
            :subtitle="stationaryMessageCouchData[0].subtitle"
            :productsParams="stationaryMessageCouchData[0].productsParams"
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
        data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.text1'),
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.title1'),
      },
    ])
    const stationaryMessageCouchData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.links.stationaryMessageCouch'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/medicalFurniture/stationary-message-couch.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataLeft1'),
            data: "120",
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataLeft2'),
            data: "800",
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataLeft3'),
            data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataRight3'),
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataLeft4'),
            data: "1960 х 610 х 45",
          },
          {
            id: 5,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataLeft5'),
            data: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataRight5'),
          },
          {
            id: 6,
            name: i18n.global.t('main.carts.toolsAndEquipment.medicalFurniture.stationaryMessageCouch.dataLeft6'),
            data: "45",
          }
        ]
      }
    ])
    return {
      stationaryMessageCouchData,
      textData
    }
  }
}
</script>

<style lang="scss">
.stationary-message-couch {
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
