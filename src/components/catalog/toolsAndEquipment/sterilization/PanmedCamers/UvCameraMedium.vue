<template>
  <div class="uvcamera-medium">
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
          <a>{{$t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraMedium')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="uvcamera-medium__inner">
        <LeftLinksMenu />
        <div class="uvcamera-medium__card">
          <ProductInfoCard
            :image="uvCameraMediumData[0].image"
            :title="uvCameraMediumData[0].title"
            :subtitle="uvCameraMediumData[0].subtitle"
            :productsParams="uvCameraMediumData[0].productsParams"
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
    const uvCameraMediumData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraMedium'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.panmedCamers.uvCameraMediumData'),
        image: require('@/assets/toolsAndEquipment/uv-camera-medium.png'),
        productsParams: [

        ]
      }
    ])
    return {
      uvCameraMediumData,
    }
  }
}
</script>

<style lang="scss" scoped>
.uvcamera-medium {
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
