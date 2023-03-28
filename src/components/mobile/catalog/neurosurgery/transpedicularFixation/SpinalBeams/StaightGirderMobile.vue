<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="cardData[0].image"
          :title="cardData[0].title"
          :subtitle="cardData[0].subtitle"
          :productsParams="cardData[0].productsParams"
      />
      <el-table
          :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
          :cell-style="{ padding: '0', height: '50px', color: '#1B1C1E' }"
          :data="tableData"
          style="width: 100%; margin-bottom: 10px;"
          :scrollbar-always-on="true"
      >
        <el-table-column
            :label="$t('main.carts.neurosurgery.staightGirder.table.first')"
            prop="first"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.staightGirder.table.second')"
            prop="second"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.staightGirder.table.third')"
            prop="third"
            min-width="140px"
        />
        <el-table-column
            :label="$t('main.carts.neurosurgery.staightGirder.table.fourth')"
            prop="fourth"
            min-width="140px"
        />
      </el-table>
    </div>
  </MobilePageWrapper>
</template>

<script>
import {computed, ref} from 'vue'
import i18n from "@/i18n";

export default {
  setup() {
    const tableData = ref([
      {
        first: '30',
        second: '	36130-06030',
        third: '160 мм',
        fourth: '36130-06160',
      },
      {
        first: '35',
        second: '36130-06035',
        third: '170 мм',
        fourth: '36130-06170',
      },
      {
        first: '40',
        second: '36130-06040',
        third: '200 мм',
        fourth: '36130-06200',
      },
      {
        first: '45',
        second: '36130-06045',
        third: '230 мм',
        fourth: '36130-06230',
      },
      {
        first: '50',
        second: '36130-06050',
        third: '250 мм',
        fourth: '36130-06250',
      },
      {
        first: '55',
        second: '36130-06055',
        third: '260 мм',
        fourth: '36130-06260',
      },
      {
        first: '60',
        second: '36130-06060',
        third: '280 мм',
        fourth: '36130-06280',
      },{
        first: '80',
        second: '	36130-06080',
        third: '300 мм',
        fourth: '36130-06300',
      },
      {
        first: '90',
        second: '36130-06090',
        third: '320 мм',
        fourth: '36130-06320',
      },
      {
        first: '100',
        second: '36130-06100',
        third: '340 мм',
        fourth: '36130-06340',
      },
      {
        first: '120',
        second: '36130-06120',
        third: '400 мм',
        fourth: '36130-06400',
      },
      {
        first: '130',
        second: '36130-06130',
        third: '450 мм',
        fourth: '36130-06450',
      },
      {
        first: '140',
        second: '36130-06140',
        third: '490 мм',
        fourth: '36130-06490',
      },
      {
        first: '150',
        second: '36130-06150',
        third: '',
        fourth: '',
      },
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.spinalBeamsLinks.staightGirder'),
        subtitle: "",
        image: require('@/assets/neurosurgery/staight-girder.png'),
        productsParams: [
        ]
      }
    ])

    return {
      cardData,
      tableData,
    }
  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
}
.mobile__wrapper {
  .card {
    display: flex;
    flex-direction: column;
    min-width: 1vw !important;
    z-index: 0;
    margin: 0px 16px 40px 16px
  }

  .card__product-info-structure {
    display: flex;
    flex-direction: column;
    color: rgb(27, 28, 30);
  }

  .card__product-image {
    max-width: 100% !important;
  }

  .card__product-info {
    padding: 0px;
  }

  .card__product-data {
    text-align: right;
  }
}

</style>
