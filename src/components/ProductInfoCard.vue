<template>
  <div class="card">
    <div class="card__header">
      <img class="card__header-img" :src="image" alt="product" />
      <div class="card__header-inner">
        <h2 class="blue-txt">{{ title }}</h2>
        <p class="card__header-subtitle">{{ subtitle }}</p>
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
  margin-bottom: 40px;
  min-width: 970px;
  min-height: 200px;
  border-radius: 16px;
  background-color: #fff;

  &__header {
    width: 100%;
    display: flex;
    padding: 10px;

    &-inner {
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      align-self: center;
    }
    &-img {
      width: 420px;
      height: 291px;
    }
    &-subtitle {
      max-width: 400px;
      white-space: pre-wrap;
    }
  }

  &__product-info {
    padding: 40px;
    display: flex;
    flex-direction: column;

    &-inner {
      display: flex;
      gap: 80px;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 40px;
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