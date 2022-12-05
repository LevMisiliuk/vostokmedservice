<template>
  <el-button class="button-links-mobile" type="primary" @click="$router.push(`/${$i18n.locale}/catalog/traumatology`)">
    {{ $t('main.certificates.links.traumatology') }}
  </el-button>
  <el-button class="button-links-mobile" type="primary" @click="$router.push(`/${$i18n.locale}/catalog/surgery`)">
    {{ $t('main.catalog.links.surgery') }}
  </el-button>
  <el-button class="button-links-mobile" type="primary" @click="$router.push(`/${$i18n.locale}/catalog/neurosurgery`)">
    {{ $t('main.catalog.links.neurosurgery') }}
  </el-button>
  <el-button class="button-links-mobile" type="primary" @click="$router.push(`/${$i18n.locale}/catalog/tools-and-equipment`)">
    {{ $t('main.catalog.links.toolsAndEquipment') }}
  </el-button>
</template>

<script>
</script>

<style lang="scss">
</style>