<template>
  <div class="blocked-plates">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/`">
          {{ $t('main.carts.traumatology.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">
            {{ $t('main.carts.traumatology.links.tool') }}
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="blocked-plates__inner">
        <LeftLinksMenu />
        <div class="blocked-plates__inner-block">
          <div class="blocked-plates__block">
            <div class="blocked-plates__carts">
              <a
                v-for="cart in traumatologyCarts"
                :key="cart"
                class="blocked-plates__cart"
                :href="cart.link"
              >
                <img :src="cart.img" alt="" class="blocked-plates__cart-img" />
                <div class="blocked-plates__cart-title">
                  {{ cart.title }}
                </div>
              </a>
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
  name: 'TraumatologyTools',
  setup() {
    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.instrumentSetCalfThighRetrogradeThigh'
        ),
        img: require('@/assets/traumatology/instrument-set-calf-thigh-retrograde-thigh.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/tools/instruments-calf-thigh-retrogradet-thigh`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.setOfToolsForSettingTrochanterPinZType'
        ),
        img: require('@/assets/traumatology/set-of-tools-for-setting-trochanter-pin-z-type.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/tools/z-type-trochanteric-stud-tool-kit`
      },
      {
        title: i18n.global.t('main.carts.traumatology.links.humerusInstrument'),
        img: require('@/assets/traumatology/humerus-istrument.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/tools/humerus-tool`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.toolForDtssDcssInsert'
        ),
        img: require('@/assets/traumatology/tool-for-dtss-dcss-insert.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/tools/tool-dtss-dcss-inserts`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.toolTraumatological'
        ),
        img: require('@/assets/traumatology/tool-traumatology.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/tools/tool-traumatology`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.toolTraumatologicalMedimetal'
        ),
        img: require('@/assets/traumatology/tool-traumatological-medimetal.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      }
    ])

    return {
      traumatologyCarts
    }
  }
}
</script>

<style lang="scss" scoped>
.blocked-plates {
  &__inner {
    display: flex;
  }

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    width: 300px;
    max-height: 290px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;

    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;

    &:hover {
      transition: all 0.2s;
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__cart-img {
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }
}
</style>
