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
            МЕЗОГЕЛЬ Гель протиспайковий стерильний, що розсмоктується.
          </h4>
          <span><strong>Призначення:</strong></span
          ><br>для профілактики спайкоутворення після операцій на
          органах та тканинах, що мають серозне покриття (черевна
          порожнина, сухожильні піхви, суглоби, плевральна порожнина,
          порожнина перикарда, оболонки спинного та головного мозку,
          порожнина середнього вуха). Гель діє як штучний тимчасовий
          "бар'єр" між пошкодженими серозними поверхнями, забезпечуючи
          їх ефективний поділ на час загоєння, а потім розсмоктується.
          Зменшення злипання поверхонь органів та тканин сприяє
          збереженню їх рухливості та перешкоджає утворенню спайок.
          Після закінчення дії гель повністю виводиться із організму.
          При нанесенні на здорові ділянки тканин гель сприяє зменшенню
          їх висушування за рахунок утворення захисного шару
          гідрофільного (наприклад, при евентрації кишечника).
          Протиспайковий гель не чинить загальнотоксичної, алергійної та
          місцевоподразнюючої дії. Гель ефективний у присутності крові,
          ексудату, не є живильним середовищем для мікроорганізмів, не
          інкапсулюється. <br><strong>Показання:</strong
        ><br>Оперативні втручання органах, мають серозне покриття.
          Мезогель може використовуватися при відкритих, так і при
          ендоскопічних втручаннях (лапароскопія, торакоскопія,
          артроскопія). Стерилізація Автоклавування <br><strong
        >Асортимент</strong
        ><br>Полімерні контейнери або стерильні шприци, об'ємом від
          5 до 500 мл.
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
        title: 'Эндопротезы для урогинекологии',
        image: require('@/assets/surgery/antiadhesions.jpeg'),
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
