<template>
  <el-button class="button-links-mobile" type="primary" :autofocus="currentPagePath === `/${$i18n.locale}/catalog/traumatology`" @click="$router.push(`/${$i18n.locale}/catalog/traumatology`)">
    {{ $t('main.certificates.links.traumatology') }}
  </el-button>
  <el-button class="button-links-mobile" type="primary" :autofocus="currentPagePath === `/${$i18n.locale}/catalog/surgery`" @click="$router.push(`/${$i18n.locale}/catalog/surgery`)">
    {{ $t('main.catalog.links.surgery') }}
  </el-button>
  <el-button class="button-links-mobile" type="primary" :autofocus="currentPagePath === `/${$i18n.locale}/catalog/neurosurgery`" @click="$router.push(`/${$i18n.locale}/catalog/neurosurgery`)">
    {{ $t('main.catalog.links.neurosurgery') }}
  </el-button>
  <el-button class="button-links-mobile" type="primary" :autofocus="currentPagePath === `/${$i18n.locale}/catalog/tools-and-equipment`" @click="$router.push(`/${$i18n.locale}/catalog/tools-and-equipment`)">
    {{ $t('main.catalog.links.toolsAndEquipment') }}
  </el-button>
</template>

<script>
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {

  setup() {
    const route = useRoute();
    const currentPagePath = computed(() => route.path);

    return {
      currentPagePath,
    }
  }
}

</script>

<style lang="scss">

</style>