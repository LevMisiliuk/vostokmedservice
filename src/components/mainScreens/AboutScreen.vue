<template>
  <div class="about">
    <div class="container">
      <MainHeader />
      <div class="about__inner">
        <ul class="about__links">
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.traumatology')"
              :path="`/${$i18n.locale}/catalog/traumatology`"
            />
          </li>
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.surgery')"
              :path="`/${$i18n.locale}/catalog/surgery`"
            />
          </li>
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.neurosurgery')"
              :path="`/${$i18n.locale}/catalog/neurosurgery`"
            />
          </li>
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.toolsAndEquipment')"
              :path="`/${$i18n.locale}/catalog/tools-and-equipment`"
            />
          </li>
        </ul>
        <div class="about__block">
          <h2 class="about__block-title">
            {{ $t('main.about.title') }}
          </h2>
          <div class="about__text">
            {{ $t('main.about.text') }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
export default {
  name: 'CertificatesScreen',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.about {
  &__inner {
    display: flex;
  }

  &__links {
    display: flex;
    flex-direction: column;

    margin-right: 100px;
  }

  &__link {
    font-weight: 400;
    margin: 20px 0 0 0;
    white-space: nowrap;

    &:first-child {
      margin: 0;
    }
  }

  &__block-title {
    color: $primary-blue;
    margin-bottom: 40px;
  }

  &__block-text {
    font-weight: 400;
  }

  .p1 {
    margin-bottom: 40px;
  }

  .p2 {
    margin-bottom: 60px;
  }

  &__text {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
