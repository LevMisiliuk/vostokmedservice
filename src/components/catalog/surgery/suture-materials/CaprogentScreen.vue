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
          :to="`/${$i18n.locale}/catalog/surgery/suture-materials`"
        >
          Шовні матеріали
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="#">Капрогент</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Капрогент<br>нитка капронова антимікробна</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/caprogent.jpeg" alt="caprogent" />
                <div>
                  <strong>Склад:</strong> капрон з антибактеріальним компонентом (гентаміцин)<br />
                  <strong>Колір:</strong> білий, синій<br />
                  <strong>Реакція тканин:</strong> мінімальна<br /><br />
                  <strong>ПЕРЕВАГИ</strong><br />
                  Є оригінальним видом хірургічних ниток, які не мають вітчизняних та зарубіжних аналогів за тривалістю та ефективності антимікробної дії. Антимікробна активність широкого спектра обумовлена пролонгованим виділенням гентаміцину, що входить до складу нитки. Тривалість антимікробної дії нитки Капрогенту не менше 15 діб, початкова зона пригнічення мікрофлори - 25-40 мм (зростає зі збільшенням товщини нитки). Нитки міцні та еластичні. Результати застосування антимікробних ниток у хірургічній практиці показали, що кількість постопераційних гнійних ускладнень знижується у 3-5 разів у порівнянні із звичайними шовними матеріалами.<br><br>
                  <strong>ПОКАЗАННЯ</strong><br />
                  Капрогент рекомендується при хірургічних втручаннях на органах та тканинах з підвищеною мікробною обсімененістю або у разі небезпеки вторинного інфікування швів.
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
  name: 'CaprogentScreen'
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
