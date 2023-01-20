<template>
  <ToolsAndEquipmentLayuot>
    <div class="panmed-camers__carts">
      <a
        v-for="cart in panmedCamersCarts"
        :key="cart"
        class="panmed-camers__cart"
        :href="cart.link"
      >
        <img
          :src="cart.img"
          alt=""
          class="panmed-camers__cart-img"
        />
        <div class="panmed-camers__cart-title">
          {{ cart.title }}
        </div>
      </a>
    </div>
  </ToolsAndEquipmentLayuot>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  setup() {

    const panmedCamersCarts = computed(() => [
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraMedium'),
        img: require('@/assets/toolsAndEquipment/uv-camera-medium.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-medium`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraLarge'),
        img: require('@/assets/toolsAndEquipment/uv-camera-large.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-large`
      },
      {
        title: i18n.global.t('main.carts.toolsAndEquipment.panmedCamersLinks.uvCameraSmall'),
        img: require('@/assets/toolsAndEquipment/uv-camera-small.png'),
        link: `/${i18n.global.locale.value}/catalog/tools-and-equipment/sterilization/camera-panmed/uf-kamera-dlya-khraneniya-sterilnogo-small`
      }
    ])

    return {
      panmedCamersCarts,
    }
  }
}
</script>

<style lang="scss" scoped>
.panmed-camers {

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    img {
      width: 100%;
    }
  }

  &__cart {
    width: 300px;
    max-height: 281px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
    transition: transform 0.05s linear, -webkit-transform 0.05s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__cart-img {
    margin-bottom: -10px;
  }
}
</style>