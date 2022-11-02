<template>
  <div class="catalog">
    <div class="container">
      <MainHeader />
      <div class="catalog__inner">
        <div class="catalog__links">
          <PrimaryLink
            :linkTitle="$t('main.certificates.links.traumatology')"
            :path="`/${$i18n.locale}/catalog/traumatology`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
          <PrimaryLink
            :linkTitle="$t('main.catalog.links.surgery')"
            :path="`/${$i18n.locale}/catalog/surgery`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
          <PrimaryLink
            :linkTitle="$t('main.catalog.links.neurosurgery')"
            :path="`/${$i18n.locale}/catalog/neurosurgery`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
          <PrimaryLink
            :linkTitle="$t('main.catalog.links.toolsAndEquipment')"
            :path="`/${$i18n.locale}/catalog/tools-and-equipment`"
            :blueArrow="true"
            arrowPosition="bottom"
          />
        </div>
        <div class="catalog__block">
          <h2 class="catalog__block-title">
            {{ $t('main.catalog.block.title') }}
          </h2>
          <div class="catalog__block-btns">
            <el-button class="button-download-pdf">
              {{ $t('main.catalog.block.button-1') }}
            </el-button>
            <el-button class="button-download-pdf">
              {{ $t('main.catalog.block.button-3') }}
            </el-button>
            <el-button class="button-download-pdf">
              {{ $t('main.catalog.block.button-3') }}
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>

export default {
  name: 'CatalogScreen',

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  .button-download-pdf {
    width: 530px;
    height: 48px;
    text-align: center;
    margin: 0;
    border: 2px solid #00aeef;
    border-radius: 16px;
    margin-bottom: 30px;
  }
  &__inner {
    display: flex;
  }

  &__block-title {
    color: $primary-blue;
    margin-bottom: 40px;
  }

  &__links {
    display: flex;
    flex-direction: column;

    margin-right: 100px;
  }

  &__block-btns {
    display: flex;
    flex-direction: column;
  }
}
</style>