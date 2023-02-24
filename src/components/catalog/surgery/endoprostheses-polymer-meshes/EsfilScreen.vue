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
          :to="`/${$i18n.locale}/catalog/surgery/endoprostheses-polymer-meshes`"
        >
          Ендопротези – сітки полімерні
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="#">Есфіл</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Есфіл</h2>
            <div class="suture-materials__text">
              <div class="suture-materials__text-block">
                <img src="@/assets/surgery/esfil.jpeg" alt="esfil" />
                <div>
                  <strong>Склад:</strong> поліпропіленові мононитки діаметром 0,12 мм.<br />
                  <strong>Колір:</strong> білий або біло-синій<br />
                  <strong>Товщина:</strong> 0,50 мм<br />
                  <strong>Об'ємна пористість:</strong> 85%<br />
                  <strong>Поверхнева густина:</strong> 62 г/м2<br /><br>
                  Есфіл - "класичний" сітчастий ендопротез з монофіламентного поліпропілену для пластики м'яких тканин. Ендопротез поєднує у собі високі показники біологічної інертності, стійкості до інфекції та механічної міцності. Клінічний досвід застосування сітчастого ендопротезу Есфіл у хірургічному лікуванні гриж різних локалізацій становить понад 50 тис. операцій.<br><br>
                  <div>
                    <img src="@/assets/surgery/esfil-micro.jpeg" alt="esfil micro" />
                  </div>
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
  name: 'EsfilScreen'
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
