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
        <el-breadcrumb-item
          :to="`/${$i18n.locale}/catalog/surgery/zm-production`"
        >
          Продукція компанії ЗМ
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">Айобан</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              АЙОБАН Антимікробна плівка, що розрізається
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/ayoban.jpeg" alt="scotchcast-plus" />
                <div>
                  <strong
                    >Основа: поліпропіленова плівка. Адгезив: нешкідливий для шкіри поліакрилат.</strong
                  >
                  <br><br>
                  Антимікробна плівка, що розрізається, з йодофором ЗМ™ Ioban™ 2 поєднує можливість швидкої дезінфекції шкіри з довготривалим захистом рани від шкірних мікроорганізмів. Операційна плівка приклеюється на суху шкіру пацієнта після обробки операційного поля за методикою, прийнятою в клініці, та осушення стерильною серветкою. Антисептик йодофор поступово виділяється з плівки протягом усієї операції та забезпечує придушення мікрофлори поряд з ефектом іммобілізації мікробів липкою плівкою. Знімається перед накладенням шкірних швів.<br><br>
                  <strong>ПЕРЕВАГИ:</strong><br>
                  <ul>
                    <li>
                      • Забезпечується найвищий на сьогоднішній день рівень
                      асептики операційного поля протягом всієї операції в
                      результаті впливу йодофора, що поєднується, і механічної
                      іммобілізації мікробів.
                    </li>
                    <li>
                      • Виключається контакт інструментів, рукавичок та рідин зі
                      шкірними бактеріями та їх попадання в рану.
                    </li>
                    <li>
                      • Пригнічення широкого спектру мікробів, у тому числі S.
                      epidermidis, Staphylococcus aureus, Е. Coli, Pseudomonas
                      aeruginosa.
                    </li>
                    <li>
                      • Шкіра пацієнта "дихає" через плівку, чим забезпечується
                      щільне прилягання плівки під час найтриваліших операцій.
                    </li>
                    <li>
                      • Плівка легко розтягується і "запам'ятовує" форму, що
                      дозволяє щільно та швидко фіксувати її на рельєфних та
                      рухомих ділянках.
                    </li>
                    <li>
                      • Повна прозорість плівки забезпечує гарний огляд області
                      операції.
                    </li>
                    <li>
                      • Полегшується фіксація хірургічних простирадл навколо
                      області розрізу (замість затискачів та липких стрічок).
                    </li>
                    <li>• Має антистатичний ефект.</li>
                    <li>• Гіпоалергенна за рахунок акрилатного адгезиву.</li>
                  </ul><br>
                  <strong>РЕКОМЕНДОВАНІ ОБЛАСТІ ЗАСТОСУВАННЯ:</strong><br>
                  всім видів хірургічних
                  операцій - покриття зони операційного розрізу підвищення рівня
                  асептики.<br><br>
                  <strong>ПРОТИПОКАЗАННЯ:</strong><br> індивідуальна чутливість до
                  йодофора.
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
  name: 'AyobanScreen'
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
