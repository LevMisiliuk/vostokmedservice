<template>
  <div class="card">
    <div class="card__header">
      <img class="card__header-img" :src="image" alt="product" v-if="image" />
      <div class="card__header-inner">
        <h2 class="blue-txt" v-if="title">{{ title }}</h2>
        <p class="card__header-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div v-if="productsParams.length" class="card__product-info">
      <div
        class="card__product-info-inner"
        v-for="item in productsParams"
        :key="item.id"
      >
        <div class="card__product-name">
          {{ item.name }}
        </div>
        <div class="card__product-data">
          {{ item.data }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ProductInfoCard',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    productsParams: {
      type: Array,
      default: () => []
    },
    table: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const tableData = computed(() => this.table)
    return {
      tableData
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  margin: 80px 16px 40px 16px;
  border-radius: 16px;
  background-color: #fff;
  color: $primary-black;

  &__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;

    &-inner {
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      align-self: center;
    }
    &-img {
      width: 100%;
    }
    &-subtitle {
      white-space: pre-wrap;
    }
  }

  &__product-info {
    padding: 24px 16px;
    display: flex;
    flex-direction: column;

    &-inner {
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 16px;
      margin-bottom: 24px;
    }
  }

  &__product-name {
    font-weight: bold;
    min-width: 200px;
  }

  &__product-data {
    max-width: 350px;
    white-space: pre-wrap;
  }
}
</style>
