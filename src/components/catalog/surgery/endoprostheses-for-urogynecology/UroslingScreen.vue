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
          :to="`/${$i18n.locale}/catalog/surgery/endoprostheses-for-urogynecology`"
        >
          Ендопротези для урогінекології
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">Урослінг</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Урослінг</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/urosling.jpeg" alt="urosling" />
                <div>
                  <strong>Склад:</strong> поліпропіленові та
                  полівініліденфторидні мононитки діаметром 0,10 мм.<br />
                  <strong>Колір:</strong> білий або біло-синій<br />
                  <strong>Товщина:</strong> 0,5 мм<br />
                  <strong>Об'ємна пористість:</strong> 72%<br />
                  <strong>Поверхнева густина:</strong> 60 г/м2<br />

                  УроСлінг - ендопротез-стрічка для хірургічного лікування
                  нетримання сечі - унікальним чином поєднує в собі високу
                  біологічну інертність, стійкість до інфекції, стабільність
                  структури, м'якість та атравматичність. Важливою особливістю
                  УроСлінга є його універсальність: він може застосовуватися як
                  позадилонної, так і в трансобтураторній модифікації слінгових
                  операцій, причому без використання при установці спеціальних
                  захисних чохлів. Ендопротез швидко проростає сполучною
                  тканиною і надійно фіксується до навколишніх структур.<br /><br />

                  <strong>ПОКАЗАННЯ</strong><br />
                  Хірургічне лікування нетримання сечі (установка синтетичного
                  субуретрального слінгу в позадилонному та трансобтураторному
                  положенні).<br><br>

                  <strong>ПРОТИПОКАЗАННЯ</strong><br />
                  Не рекомендується застосування синтетичних ендопротезів за
                  умов інфекційного процесу у тканинах. Стерилізація Окис
                  етилену (ЕО).<br><br>

                  <strong>АСОРТИМЕНТ</strong><br />
                  Сітчастий стерильний ендопротез в індивідуальній упаковці
                  розміром 1,1 т 1,3 х 50 см.
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
  name: 'UroslingScreen'
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
