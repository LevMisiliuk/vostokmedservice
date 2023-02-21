<template>
  <div class="luminaire-one">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/neurosurgery/`"
          >{{$t('main.carts.neurosurgery.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.neurosurgery.links.antiAdhesionGel')}}</a>
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
        title: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.title1'),
        data: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.text1'),
      },
      {
        id: 2,
        title: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.title2'),
        data: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.text3'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.text4'),
      },
      {
        id: 2,
        data: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.text5'),
      },
    ])
    const data = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.links.antiAdhesionGel'),
        subtitle: "",
        image: require('@/assets/neurosurgery/anti-adhesion-gel.png'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.dataLeft1'),
            data: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.dataRight1'),
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.dataLeft2'),
            data: i18n.global.t('main.carts.neurosurgery.antiAdhesionGel.dataRight2'),
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
