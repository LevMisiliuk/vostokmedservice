<template>
  <div class="card">
    <h3 class="card__header blue-txt">{{ title }}</h3>
    <div class="card__product-info-structure">
       <img class="card__product-image" v-if="image" :src="image" alt="product" />
       <div class="card__product-info">
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
  </div>
</template>
<script>
export default {
  name: 'ProductTableHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    productsParams: {
      type: Array,
      default: () => []
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
  min-width: 970px;
  min-height: 200px;
  border-radius: 16px;
  background-color: #fff;
  padding: 20px;

  &__header {
    margin-bottom: 20px;
  }

  &__product-info-structure {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__product-info {
    display: flex;
    flex-direction: column;
    width: 100%;

    &-inner {
      display: flex;
      gap: 40px;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 20px;
    }
  }

  &__product-name {
    font-size: 16px;
    font-weight: bold;
    width: 200px;
  }

  &__product-data {
    font-size: 16px;
    max-width: 350px;
    white-space: pre-wrap;
  }

  &__product-image {
    max-width: 40%;
  }
}
</style>