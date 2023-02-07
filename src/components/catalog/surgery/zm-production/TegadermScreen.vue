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
          <a href="#">Тегадерм</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">
              Тегадерм<br />Напівпроникна поліуретанова плівка Адгезив
            </h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/tegaderm.jpeg" alt="tegaderm" />
                <div>
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
  name: 'TegadermScreen'
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
