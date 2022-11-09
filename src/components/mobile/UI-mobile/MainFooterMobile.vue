<template>
  <footer class="footer">
      <div class="footer__main">
        <div class="footer__menu">
          <PrimaryLink
            :linkTitle="$t('header.main')"
            :path="`/${$i18n.locale}`"
          />
          <PrimaryLink
            :linkTitle="$t('header.catalog')"
            :path="`/${$i18n.locale}/catalog`"
          />
          <PrimaryLink
            :linkTitle="$t('header.education')"
            :path="`/${$i18n.locale}/education`"
          />
          <PrimaryLink
            :linkTitle="$t('header.certificates')"
            :path="`/${$i18n.locale}/certificates`"
          />
          <PrimaryLink
            :linkTitle="$t('header.contacts')"
            :path="`/${$i18n.locale}/contacts`"
          />
        </div>
        <div class="footer__info">
          <img src="@/assets/logo.png" alt="logo" />
          <div>
            <p class="footer__info-text">{{ $t('footer.text') }}</p>
            <p>2010 - 2022</p>
          </div>
          <img
            class="footer__info-img"
            src="@/assets/comp_logo.png"
            alt="company logo"
          />
        </div>
        <div class="footer__authors">
          <p class="footer__authors-text">{{ $t('footer.author-1') }}</p>
          <p>{{ $t('footer.author-2') }}</p>
        </div>
      </div>
  </footer>
</template>

<script>

export default {
  name: 'MainFooter',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: block;
  box-sizing: border-box;
  background: #fefdfb;
  padding: 40px 0px;
  border-top: 1px solid #c5c5c4;
  height: fit-content;
  width: 100%;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    gap: 20px;
    &-text {
      margin-bottom: 10px;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__authors {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    color: #929393;

    &-text {
      margin-bottom: 10px;
    }
  }

  &__img {
    width: 100%;
  }
}
</style>