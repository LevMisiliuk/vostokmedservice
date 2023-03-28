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
          <h2 class="suture-materials__block-header">
            Тегадерм<br />Напівпроникна поліуретанова плівка Адгезив
          </h2>
          <strong>Основа:</strong> напівпроникна поліуретанова
          плівка.<br />
          <strong>Адгезив:</strong> нешкідливий для шкіри
          поліакрилат.<br />
          Прозора плівкова пов'язка Тегадерм (Tegaderm) забезпечує
          швидку та легку фіксацію при лікуванні ран та встановлення
          катетерів. Прозора плівка дозволяє спостерігати за станом
          місця вкола, не знімаючи пов'язку та забезпечує захист від
          вологи та забруднень. Спеціально розроблене клейове покриття
          забезпечує надійну фіксацію та виключає відлипання країв.
          Унікальна система накладання за допомогою рамки забезпечує
          точне розміщення пов'язки та простоту накладання. Смужки
          гіпоалергенного пластиру ЗМ Micropore™ (крім моделі 1622W), що
          входять в комплект, дають можливість записувати дату і час
          заміни пов'язки та встановлення канюлі.<br /><br />
          <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br />
          <ul>
            <li>
              • Фіксація периферичних внутрішньовенних катетерів та
              закриття "чистих ран".
            </li>
            <li>
              • Прозора плівкова пов'язка з скріпками, що зміцнюють з
              матеріалу МесНроге™.
            </li>
            <li>
              • Інноваційне поєднання плівки Тедас1егт™ та пластиру
              МесІроге™ забезпечує більш надійну фіксацію
              внутрішньовенних катетерів-метеликів та катетерів з
              портом.
            </li>
            <li>
              • Додаткові смужки пластиру ЗМ™ МесНроге™ дозволяють надійно
              фіксувати катетер, а повітропроникна плівка захищає місце
              вкола.
            </li>
            <li>
              • 1-подібний виріз покращує фіксацію пов'язки навколо
              катетера і запобігає утворенню повітряного міхура.
            </li>
          </ul>
          <br />
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
        title: 'Тегадерм',
        image: require('@/assets/surgery/tegaderm.jpeg'),
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
