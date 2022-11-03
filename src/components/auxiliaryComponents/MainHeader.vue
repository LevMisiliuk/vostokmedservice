<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <router-link
          :to="`/${$i18n.locale}/`"
        >
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </div>
      <nav class="header__nav">
        <router-link :to="`/${$i18n.locale}`" class="header__nav-link">{{
          $t('header.main')
        }}</router-link>
        <router-link
          :to="`/${$i18n.locale}/catalog`"
          class="header__nav-link"
          >{{ $t('header.catalog') }}</router-link
        >
        <router-link
          :to="`/${$i18n.locale}/education`"
          class="header__nav-link"
          >{{ $t('header.education') }}</router-link
        >
        <router-link
          :to="`/${$i18n.locale}/certificates`"
          class="header__nav-link"
          >{{ $t('header.certificates') }}</router-link
        >
        <router-link
          :to="`/${$i18n.locale}/contacts`"
          class="header__nav-link"
          >{{ $t('header.contacts') }}</router-link
        >
      </nav>
      <LangSelect
        :options="options"
        @select="optionSelect"
        :selected="selected"
      />
    </div>
  </header>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'MainHeader',
  setup() {
    const options = ref([
      { name: 'УКР', value: 'ua', flag: require('@/assets/ua-flag.png') },
      { name: 'ENG', value: 'en', flag: require('@/assets/en-flag.png') },
      { name: 'РУС', value: 'ru', flag: require('@/assets/ru-flag.png') }
    ])
    const selected = ref(
      localStorage.getItem('lang') === 'ua'
        ? options.value[0]
        : localStorage.getItem('lang') === 'en'
        ? options.value[1]
        : localStorage.getItem('lang') === 'ru'
        ? options.value[2]
        : options.value[0]
    )

    function optionSelect(option) {
      selected.value = option
    }

    return {
      options,
      selected,
      optionSelect
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  z-index: 1000;
  margin-bottom: 82px;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav-link {
    display: inline-block;
    vertical-align: top;
    margin: 40px;
    color: $primary-black;
    text-decoration: none;

    transition: color 0.2s linear;

    &:hover {
      color: $primary-blue;
    }
  }
}
</style>