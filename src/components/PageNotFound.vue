<template>
  <div class="page-not-found">
    <div class="container">
      <MainHeader />
      <div class="page-not-found__inner">
        <h2 class="blue">{{ $t('404.text') }}</h2>
        <router-link :to="`/${$i18n.locale}`">
          <el-button>
            {{ $t('404.button') }}
          </el-button>
        </router-link>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>

export default {
  name: 'PageNotFound',
}
</script>

<style lang="scss" scoped>
.page-not-found {
  &__inner {
    text-align: center;
    height: 300px;

    .blue {
      color: $primary-blue;
    }
  }
}
</style>