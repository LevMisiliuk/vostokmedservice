<template>
  <div class="catalog_mobile">
    <div class="catalog_mobile__block">
      <MainBurgerMenu />
      <div class="catalog_mobile__block__logo">
        <router-link :to="`/${$i18n.locale}/`">
          <img src="@/assets/logo-mobile.png" alt="logo" />
        </router-link>
      </div>
      <div class="catalog_mobile__inner">
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
      </div>
    </div>
    <MainFooterMobile />
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
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
  .bm-burger-bars {
    background-color: #000;
  }

  &__block {
    display: flex;
    flex-direction: column;
    color: $primary-white;
    width: 100vw;
    height: 70vh;
  
    &-menu {
      position: absolute;
      right: 0px;
    }

    &__logo {
      display: flex;
      position: fixed;
      align-items: center;
      margin: 16px;
      img {
        width: 152px;
      }
    }
  }

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
