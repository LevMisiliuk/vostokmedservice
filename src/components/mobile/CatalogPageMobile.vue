<template>
  <MobilePageWrapper>
    <div class="catalog_mobile__links">
      <ButtonLinks />
    </div>
    <div class="catalog_mobile__inner-links">
      <h2>{{ $t('main.catalog.block.title') }}</h2>
      <el-button class="button-download-pdf-mobile">
        {{ $t('main.catalog.block.button-1') }}
      </el-button>
      <el-button class="button-download-pdf-mobile">
        {{ $t('main.catalog.block.button-3') }}
      </el-button>
      <el-button class="button-download-pdf-mobile">
        {{ $t('main.catalog.block.button-3') }}
      </el-button>
    </div>
  </MobilePageWrapper>
</template>

<script>

export default {
  setup() {


    return {

    };
  },
};
</script>

<style lang="scss" >

.button-download-pdf-mobile {
    width: 80vw !important;
    height: 48px !important;
    text-align: center !important;
    margin: 0 !important;
    border: 2px solid #00aeef !important;
    border-radius: 16px !important;
    margin-bottom: 30px !important;
  }
.button-links-mobile {
    width: 45vw !important;
    height: 48px !important;
    text-align: center !important;
    margin-left: 10px !important;
    border-radius: 16px !important;
    margin-bottom: 30px !important;
}
.catalog_mobile {

  &__links {
    margin-top: 80px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    h2 {
      color:$primary-blue;
      margin-bottom: 14px;
    }

    &-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
