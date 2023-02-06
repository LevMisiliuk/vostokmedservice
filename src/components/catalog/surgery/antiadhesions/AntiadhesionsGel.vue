<template>
  <div class="suture-materials">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/surgery/`">
          Хірургія
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#"> Противоспаечные средства </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              Эндопротезы для урогинекологии
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/antiadhesions.jpeg"
                  alt="antiadhesions"
                />
                <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
export default {
  name: 'AntiadhesionsGel'
}
</script>

<style lang="scss" scoped>
.suture-materials {
  &__inner {
    display: flex;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }

  &__text-block {
    display: flex;
    flex-direction: row;
    gap: 40px;

    img {
      height: 100%;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    width: 300px;
    max-height: 290px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
    transition: transform 0.05s linear, -webkit-transform 0.05s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__card-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__card-img {
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }

  &__block-header {
    margin-bottom: 10px;
  }
  &__block-subtitle {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
