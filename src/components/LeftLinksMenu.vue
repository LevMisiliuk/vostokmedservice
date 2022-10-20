<template>
  <div class="links">
    <PrimaryLink
      :path="`/${$i18n.locale}/catalog/traumatology/`"
      :linkTitle="$t('main.certificates.links.traumatology')"
      :blueArrow="true"
      arrowPosition="top"
    />
    <ul>
      <li
        v-for="item in traumatologyLinks"
        :key="item"
        class="link-list"
      >
        <PrimaryLink
          :path="item.path"
          :linkTitle="item.name"
          :blueCircle="true"
          :linkMargin="10"
        />
      </li>
    </ul>
    <PrimaryLink
      :linkTitle="$t('main.certificates.links.surgery')"
      path="#"
      :blueArrow="true"
    />
    <PrimaryLink
      :linkTitle="$t('main.certificates.links.neurosurgery')"
      path="#"
      :blueArrow="true"
    />
    <PrimaryLink
      :linkTitle="$t('main.certificates.links.toolsAndEquipment')"
      path="#"
      :blueArrow="true"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import i18n from '../i18n'

export default {
  setup() {
    const traumatologyLinks = computed(() => [
      {
        name: i18n.global.t('main.carts.traumatology.links.intramedullaryPins'),
        path: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.tool'),
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.screwsAT'),
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
        path: `/404`
      },
      {
        name: i18n.global.t(
          'main.carts.traumatology.links.needlesRodsCerclage'
        ),
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.microsurgery'),
        path: `/404`
      },
      {
        name: i18n.global.t('main.carts.traumatology.links.ilizarovsApparatus'),
        path: `/404`
      }
    ])
    return {
      traumatologyLinks
    }
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;

  margin-right: 60px;
}

.link-list {
  display: flex;
  align-items: center;
  margin-left: 20px;
  white-space: nowrap;
  cursor: pointer;
}
</style>