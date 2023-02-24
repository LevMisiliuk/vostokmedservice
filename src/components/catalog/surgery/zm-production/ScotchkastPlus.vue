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
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/surgery/zm-production`">
          Продукція компанії ЗМ
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">Cкотчкаст плюс</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Cкотчкаст плюс</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img
                  src="@/assets/surgery/scotchcast-plus.jpeg"
                  alt="scotchcast-plus"
                />
                <div>
                  <h4>
                    Жорсткий полімерний іммобілізуючий бинт («штучний гіпс»)
                  </h4>
                  Полімерний бінт, що іммобілізує - штучний гіпс Скотчкаст Плюс
                  Scotchcast Plus може повністю замінити гіпсову пов'язку при
                  лікуванні переломів. Поєднання надзвичайної міцності Скотчкаст
                  Плюс і легкості матеріалу (у 4-5 разів легше за гіпс) робить
                  його використання значно комфортнішим. Матеріал нетоксичний і
                  не викликає алергічних реакцій. Пропускає випари з боку шкіри
                  та кисень із зовнішнього боку ("дихає"), що перешкоджає
                  виникненню сверблячки та мацерації. Пов'язка із матеріалу
                  штучний гіпс Scotchcast Plus не боїться вологи, тому пацієнт
                  може приймати душ.<br><br>
                  <span><strong>Штучний гіпс – рекомендуемі області застосування:</strong></span><br>Циркулярні пов'язки, що іммобілізують. Лонгети.
                  Комбіновані пов'язки (лонгето-циркулярні). у поєднанні з
                  напівжорстким іммобілізуючим бинтом ЗМ™ Softcast™ - метод
                  функціональної іммобілізації в лікуванні переломів та синдрому
                  діабетичної стопи. Корсети.
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
  name: 'ScotchkastPlus'
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
