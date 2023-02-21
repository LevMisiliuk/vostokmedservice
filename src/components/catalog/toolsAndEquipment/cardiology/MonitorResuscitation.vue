<template>
  <div class="thigh-pins">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/cardiology/`">
          {{ $t('main.carts.toolsAndEquipment.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('main.carts.toolsAndEquipment.cardiology.links.monitorResuscitation') }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="thigh-pins__inner">
        <LeftLinksMenu />
        <div class="thigh-pins__card">
          <ProductInfoCard
            :image="cardData[0].image"
            :title="cardData[0].title"
            :subtitle="cardData[0].subtitle"
            :productsParams="cardData[0].productsParams"
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
          <el-table
            :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
            :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.table.first')"
              prop="first"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.table.second')"
              prop="second"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.table.third')"
              prop="third"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.table.fourth')"
              prop="fourth"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.table.fifth')"
              prop="fifth"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.table.sixth')"
              prop="sixth"
            />
            <el-table-column
              :label="$t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.table.seventh')"
              prop="seventh"
            />
          </el-table>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed, ref } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'monitorResuscitation',
  setup() {
    const textData = computed(() => [
      {
        id: 2,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text1'),
      },
      {
        id: 3,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text2'),
      },
      {
        id: 4,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text3'),
      },
      {
        id: 5,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text4'),
      },
      {
        id: 6,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text5'),
      },
      {
        id: 7,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text6'),
      },
      {
        id: 8,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text7'),
      },
      {
        id: 9,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text8'),
      },
      {
        id: 10,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text9'),
      },
      {
        id: 11,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text10'),
      },
      {
        id: 12,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text11'),
      },
      {
        id: 13,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text12'),
      },
      {
        id: 14,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text13'),
      },
      {
        id: 15,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text14'),
      },
      {
        id: 16,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text15'),
      },
      {
        id: 17,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text16'),
      },
      {
        id: 18,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text17'),
      },
      {
        id: 19,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text18'),
      },
      {
        id: 20,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text19'),
      },
      {
        id: 21,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text20'),
      },
      {
        id: 22,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text21'),
      },
      {
        id: 23,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text22'),
      },
      {
        id: 24,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text23'),
      },
      {
        id: 25,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text24'),
      },
      {
        id: 26,
        data: i18n.global.t('main.carts.toolsAndEquipment.cardiology.monitorResuscitation.text25'),
      },
    ]);
    const tableData = ref([
      {
        first: '1',
        second: '+',
        third: '',
        fourth: '',
        fifth: '',
        sixth: '',
        seventh: '+'    
      },
      {
        first: '2',
        second: '+',
        third: '+',
        fourth: '',
        fifth: '',
        sixth: '',
        seventh: '+'    
      },
      {
        first: '3',
        second: '+',
        third: '+',
        fourth: '',
        fifth: '+',
        sixth: '',
        seventh: '+'    
      },
      {
        first: '4',
        second: '+',
        third: '',
        fourth: '+',
        fifth: '',
        sixth: '',
        seventh: '+'    
      },
      {
        first: '5',
        second: '+',
        third: '+',
        fourth: '+',
        fifth: '',
        sixth: '',
        seventh: '+'    
      },
      {
        first: '6',
        second: '+',
        third: '+',
        fourth: '+',
        fifth: '+',
        sixth: '',
        seventh: '+'    
      },
      {
        first: '15',
        second: '+',
        third: '+',
        fourth: '+',
        fifth: '',
        sixth: '+',
        seventh: '+'    
      },
      {
        first: '16',
        second: '+',
        third: '+',
        fourth: '+',
        fifth: '+',
        sixth: '+',
        seventh: '+'    
      },
    ]);
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.cardiology.links.monitorResuscitation'),
        subtitle: "",
        image: require('@/assets/toolsAndEquipment/cardiology/monitor-resuscitation.png'),
        productsParams: [
        ]
      }
    ]);
    return {
      cardData,
      textData,
      tableData
    }
  }
}
</script>

<style lang="scss" scoped>
.thigh-pins {
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__card {
    display: flex;
    flex-direction: column;
  }
}
</style>