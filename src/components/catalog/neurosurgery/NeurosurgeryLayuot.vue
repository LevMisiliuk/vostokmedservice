<template>
  <div class="neurosurgery-layuot">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`"
          >{{$t('header.catalog')}}</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <a>{{$t('main.carts.toolsAndEquipment.title')}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="neurosurgery-layuot__inner">
        <LeftLinksMenu :typeLink="'neurosurgery'" :linksData="neurosurgeryLinks" />
        <div class="neurosurgery-layuot__block">
          <slot></slot>
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
    const neurosurgeryLinks = computed(() => [
      {
        name: i18n.global.t('main.carts.neurosurgery.links.transpedicularFixationOfTheSpine'),
        path: `/${i18n.global.locale.value}/catalog/neurosurgery/transpedikulyarnaya-fiksatsiya-pozvonochnika`
      },
      [
        {
          name: i18n.global.t('main.carts.neurosurgery.secondlinks.spinalScrews'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.neurosurgery.secondlinks.spinalBeams'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.neurosurgery.secondlinks.spinalHooks'),
          path: `/404`
        },
        {
          name: i18n.global.t('main.carts.neurosurgery.secondlinks.spinalSystems'),
          path: `/404`
        },
      ],
      {
        name: i18n.global.t('main.carts.neurosurgery.links.neurosurgicalPlates'),
        path: `/${i18n.global.locale.value}/catalog/neurosurgery/plates-neurosurgical`
      },
      {
        name: i18n.global.t('main.carts.neurosurgery.links.vertebralEndoprostheses'),
        path: `/${i18n.global.locale.value}/catalog/neurosurgery/vertebrae-implants`
      },
      {
        name: i18n.global.t('main.carts.neurosurgery.links.neurosurgicalInstrument'),
        path: `/${i18n.global.locale.value}/catalog/neurosurgery/neurosurgical-tool`
      },
      {
        name: i18n.global.t('main.carts.neurosurgery.links.antiAdhesionGel'),
        path: `/404`
      },
    ]);

    return {
      neurosurgeryLinks,
    }
  }
}
</script>

<style lang="scss" scoped>
.neurosurgery-layuot {
  .links {
    margin-right: 30px;
  }

  &__inner {
    display: flex;
  }
}
</style>