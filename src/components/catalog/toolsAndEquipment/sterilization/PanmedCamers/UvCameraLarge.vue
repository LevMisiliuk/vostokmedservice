<template>
  <div class="uvcamera-large">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/tools-and-equipment/sterilization`"
          >{{$t('main.carts.toolsAndEquipment.title')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraLarge')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="uvcamera-large__inner">
        <LeftLinksMenu />
        <div class="uvcamera-large__card">
          <ProductInfoCard
            :image="UvCameraLargeData[0].image"
            :title="UvCameraLargeData[0].title"
            :subtitle="UvCameraLargeData[0].subtitle"
            :productsParams="UvCameraLargeData[0].productsParams"
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
    const UvCameraLargeData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraLarge'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.panmedCamers.uvCameraLargeData'),
        image: require('@/assets/toolsAndEquipment/uv-camera-large.png'),
        productsParams: [

        ]
      }
    ])
    return {
      UvCameraLargeData,
    }
  }
}
</script>

<style lang="scss" scoped>
.uvcamera-large {
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
