<template>
  <div class="compressorInhaler-boreal">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/neurosurgery/neurosurgical-tool`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGE1119617017CM')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="compressorInhaler-boreal__inner">
        <LeftLinksMenu />
        <div class="compressorInhaler-boreal__card">
          <ProductInfoCard
            :image="inhaler403AData[0].image"
            :title="inhaler403AData[0].title"
            :subtitle="inhaler403AData[0].subtitle"
            :productsParams="inhaler403AData[0].productsParams"
          />
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
    const inhaler403AData = computed(() => [
      {
        title: i18n.global.t('main.carts.neurosurgery.neurosurgicalInstrument.links.INGE1119617017CM'),
        subtitle: "",
        image: require('@/assets/neurosurgery/INGE-1119617017CM.png'),
        productsParams: [
        ]
      }
    ])
    return {
      inhaler403AData,
    }
  }
}
</script>

<style lang="scss">
.compressorInhaler-boreal {
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
