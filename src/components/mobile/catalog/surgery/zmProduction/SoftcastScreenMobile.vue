<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <ProductInfoCardMobile
          :image="cardData[0].image"
          :title="cardData[0].title"
          :subtitle="cardData[0].subtitle"
          :productsParams="cardData[0].productsParams"
      />
    </div>
    <div class="card">
      <div
          class="default_mobile__card-inner"
      >
        <div style="color: #000;">
          <h4>
            Напівжорсткий полімерний бинт, що іммобілізує
          </h4><br>
          Напівжорсткий полімерний бинт, що іммобілізує Напівжорсткий
          полімерний бинт, що іммобілізує Софткаст Softcast дозволяє
          формувати пов'язки різної жорсткості. Після затвердіння
          матеріал залишається напівжорстким і легко розрізається
          ножицями. Матеріал еластичний, але при цьому нерозтяжний і
          завжди набуває своєї первісної форми, завдяки чому сформована
          пов'язка може використовуватися багаторазово. Напівжорсткий
          полімерний бинт Софткаст Softcast має такі властивості, як
          пористість, повітропроникність та водостійкість. Пов'язка із
          комбінації матеріалів Scotchcast Plus та Softcast™ дозволяє
          зберегти м'язовий тонус, знизити ризик розвитку набряків,
          кісткової та м'язової атрофії, внаслідок чого значно
          скорочується термін реабілітації.<br><br>
          <span><strong>Рекомендовані області застосування:</strong></span><br>
          Комбіновані пов'язки (лонгето-циркулярні) у
          поєднанні з жорстким полімерним іммобілізуючим бинтом
          Scothcast - метод функціональної іммобілізації в лікуванні
          переломів та синдрому діабетичної стопи. Пошкодження
          зв'язкового апарату кінцівок. Зовнішня іммобілізація після
          занурювального остеосинтезу (за наявності показань).
        </div>
      </div>>
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'

export default {
  setup() {

    const cardData = computed(() => [
      {
        title: 'Софткаст',
        image: require('@/assets/surgery/softcast.jpeg'),
      }
    ])

    return {
      cardData,
    }
  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    &-inner {
      padding: 10px;
    }
  }
}
.mobile__wrapper {
  .card {
    display: flex;
    flex-direction: column;
    min-width: 1vw !important;
    z-index: 0;
    margin: 0px 16px 40px 16px
  }

  .card__product-info-structure {
    display: flex;
    flex-direction: column;
    color: rgb(27, 28, 30);
  }

  .card__product-image {
    max-width: 100% !important;
  }

  .card__product-info {
    padding: 0px;
  }

  .card__product-data {
    text-align: right;
  }
}

</style>
