<template>
  <div class="uvcamera-small">
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
          <a>{{$t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraSmall')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="uvcamera-small__inner">
        <LeftLinksMenu />
        <div class="uvcamera-small__card">
          <ProductInfoCard
            :image="UvCameraSmallData[0].image"
            :title="UvCameraSmallData[0].title"
            :subtitle="UvCameraSmallData[0].subtitle"
            :productsParams="UvCameraSmallData[0].productsParams"
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
    const UvCameraSmallData = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraSmall'),
        subtitle: i18n.global.t('main.carts.toolsAndEquipment.panmedCamers.uvCameraSmallData'),
        image: require('@/assets/toolsAndEquipment/uv-camera-small.png'),
        productsParams: [

        ]
      }
    ])
    return {
      UvCameraSmallData,
    }
  }
}
</script>

<style lang="scss" scoped>
.uvcamera-small {
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
