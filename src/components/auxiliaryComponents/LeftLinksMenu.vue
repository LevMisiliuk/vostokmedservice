<template>
  <div class="links">
    <PrimaryLink
      :path="`/${$i18n.locale}/catalog/traumatology/`"
      :linkTitle="$t('main.certificates.links.traumatology')"
      :blueArrow="true"
      :arrowPosition="typeLink === 'traumatology' ? null : 'top'"
    />
    <ul v-if="typeLink === 'traumatology'">
      <li v-for="item in linksData" :key="item" class="link-list">
        <ul v-if="Array.isArray(item)">
          <li v-for="itemData in item" :key="itemData" class="link-list">
            <PrimaryLink
              :path="itemData.path"
              :linkTitle="itemData.name"
              :blueCircle="true"
              :linkMargin="10"
            />
          </li>
        </ul>
        <PrimaryLink
          v-else
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
      :arrowPosition="typeLink === 'surgery' ? null : 'top'"
    />
    <ul v-if="typeLink === 'surgery'">
      <li v-for="item in linksData" :key="item" class="link-list">
        <ul v-if="Array.isArray(item)">
          <li v-for="itemData in item" :key="itemData" class="link-list">
            <PrimaryLink
              :path="itemData.path"
              :linkTitle="itemData.name"
              :blueCircle="true"
              :linkMargin="10"
            />
          </li>
        </ul>
        <PrimaryLink
          v-else
          :path="item.path"
          :linkTitle="item.name"
          :blueCircle="true"
          :linkMargin="10"
        />
      </li>
    </ul>
    <PrimaryLink
      :linkTitle="$t('main.certificates.links.neurosurgery')"
      :path="`/${$i18n.locale}/catalog/neurosurgery/`"
      :blueArrow="true"
      :arrowPosition="typeLink === 'neurosurgery' ? null : 'top'"
    />
    <ul v-if="typeLink === 'neurosurgery'">
      <li v-for="item in linksData" :key="item" class="link-list">
        <ul v-if="Array.isArray(item)">
          <li v-for="itemData in item" :key="itemData" class="link-list">
            <PrimaryLink
              :path="itemData.path"
              :linkTitle="itemData.name"
              :blueCircle="true"
              :linkMargin="10"
            />
          </li>
        </ul>
        <PrimaryLink
          v-else
          :path="item.path"
          :linkTitle="item.name"
          :blueCircle="true"
          :linkMargin="10"
        />
      </li>
    </ul>
    <PrimaryLink
      :linkTitle="$t('main.certificates.links.toolsAndEquipment')"
      :path="`/${$i18n.locale}/catalog/tools-and-equipment/`"
      :blueArrow="true"
      :arrowPosition="typeLink === 'toolsAndEquipment' ? null : 'top'"
    />
    <ul v-if="typeLink === 'toolsAndEquipment'">
      <li v-for="item in linksData" :key="item" class="link-list">
        <ul v-if="Array.isArray(item)">
          <li v-for="itemData in item" :key="itemData" class="link-list">
            <PrimaryLink
              :path="itemData.path"
              :linkTitle="itemData.name"
              :blueCircle="true"
              :linkMargin="10"
            />
          </li>
        </ul>
        <PrimaryLink
          v-else
          :path="item.path"
          :linkTitle="item.name"
          :blueCircle="true"
          :linkMargin="10"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    linksData: {
      type: Array,
      default: () => []
    },
    typeLink: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
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
