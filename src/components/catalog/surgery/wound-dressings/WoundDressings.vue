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
          <a href="#"> Протиспайкові засоби </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Раневі покриття</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/wound-dressings.jpeg"
                  alt="antiadhesions"
                />
                <div>
                  <h4>МЕТУРАКОЛ губка ранозаживляющая</h4>
                  <span
                    ><strong>Модифицированное полиэфирное волокно</strong></span
                  >
                  <ul>
                    <li>• Активно дренує рановий ексудат</li>
                    <li>• Захищає рану від зовнішніх впливів</li>
                    <li>• Створює асептичні умови загоєння</li>
                    <li>
                      • Покращує міцнісні та маніпуляційні властивості
                      пов'язки
                    </li>
                  </ul>
                  <span><strong>Колагенова губка з антисептиком</strong></span>
                  <ul>
                    <li>• Стимулює загоєння</li>
                    <li>• Чинить антимікробну дію</li>
                    <li>
                      • Забезпечує безболісну та атравматичну зміну пов'язки
                    </li>
                  </ul>
                  <span><strong>Показання до застосування: </strong></span>
                  <ul>
                    <li>
                      • Травми шкірних покривів та слизових (порізи, садна,
                      ерозії, тріщини,потертості та ін.)
                    </li>
                    <li>• Опіки та відмороження</li>
                    <li>• Пролежні</li>
                    <li>• Трофічні виразки</li>
                    <li>• Діабетична стопа</li>
                    <li>• Довго не загоюються рани</li>
                    <li>
                      • Закриття шкірних трансплантатів та донорських ділянок
                    </li>
                  </ul>
                  <span
                    ><strong>Результати клінічнихвипробувань: </strong></span
                  >
                  <p>
                    Клінічні випробування у НДІ Швидкої допомоги ім. Н.В.
                    Скліфооовокого (Москва) та Військово-медичної академії ім.
                    СМ. Кірова (Санкт-Петербург), показали високі функціональні
                    та сприятливі якості Біатравма.
                  </p>
                  <span><strong>Переваги: </strong></span>
                  <ul>
                    <li>• Активно адсорбує ранове відокремлюване</li>
                    <li>• Сприяє активному очищенню ран від гною</li>
                    <li>• Стимулює зростання грануляційної тканини.</li>
                    <li>• Прискорює процеси репарації та епітелізації</li>
                    <li>• Зменшує кількість інфекційних ускладнень</li>
                    <li>• Знижує болючі відчуття при зміні пов'язки</li>
                    <li>
                      • З Зручний для застосування у стаціонарі та в побутових
                      умовах
                    </li>
                    <li>
                      • Дозволяє скоротити кількість перев'язок та тривалість
                      лікування
                    </li>
                    <li>• Не має побічної дії</li>
                  </ul>
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
  name: 'WoundDressings'
}
</script>

<style lang="scss" scoped>
.suture-materials {
  &__inner {
    display: flex;
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
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transition: all 0.2s;
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
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
