<template>
  <el-button class="choose-lang-button">
    <div class="choose-lang-button__title">{{ language }}</div>
    <img :src="flag" alt="country flag">
  </el-button>
</template>

<script>
export default {
  name: 'ChooseLangButton',
  props: {
    language: {
      type: String,
      default: ''
    },
    flag: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.choose-lang-button {
  width: 88px;
  height: 48px;
  border-radius: 8px;

  &__title {
    margin-right: 8px;
  }
}
</style>