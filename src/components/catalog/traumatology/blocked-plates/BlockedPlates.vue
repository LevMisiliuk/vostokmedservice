<template>
  <div class="blocked-plates">
    <div class="container">
      <MainHeader />
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          {{ $t('main.catalog.block.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/`">
          {{ $t('main.carts.traumatology.title') }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
          <a href="#">
            {{ $t('main.carts.traumatology.links.blockedPlates') }}
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="blocked-plates__inner">
        <LeftLinksMenu />
        <div class="blocked-plates__inner-block">
          <div class="blocked-plates__block">
            <div class="blocked-plates__carts">
              <a
                v-for="cart in traumatologyCarts"
                :key="cart"
                class="blocked-plates__cart"
                :href="cart.link"
              >
                <img :src="cart.img" alt="" class="blocked-plates__cart-img" />
                <div class="blocked-plates__cart-title">
                  {{ cart.title }}
                </div>
              </a>
            </div>
          </div>
          <br>
          <div class="blocked-plates__block">
            Новым шагом в оперативном лечении переломов стала разработка
            Международной ассоциацией остеосинтеза (AO/ASIF) системы блокируемых
            компрессирующих пластин с угловой стабильностью LCP (Locking
            Compression Plate - блокирующаяся компрессирующая пластина) для
            различных анатомических локализаций. Отверстие LCP пластины состоит
            из двух частей. Одна часть имеет резьбу, позволяющую фиксировать
            головку блокируемого винта, а другая часть соответствует по форме
            отверстию динамической компрессирующей пластины с ограниченным
            контактом (LC-DCP), через которое путем эксцентричного введения
            стандартных кортикальных или спонгиозных винтов может достигаться
            динамическая компрессия. Так как отверстия пластины LCP
            асимметричны, то динамическую компрессию можно производить только в
            одном направлении, в связи с чем необходимо обращать внимание на
            сопоставление центра пластины с линией перелома. Блокируемые в
            пластине винты могут быть самосверлящие (предназначены для
            монокортикального введения в диафиз, при этом можно не измерять
            длину винта) и самонарезающие (используются моно и бикортикально в
            тех зонах, где требуется точное измерение длины винта, например,
            метафиз). Блокируемые винты необходимо проводить через резьбовую
            часть отверстия строго по ее центру и перпендикулярно к поверхности
            кости, так как в противном случае винт может не получить необходимой
            фиксации в пластине. При затягивании эксцентрично введенного винта в
            овальном отверстии , его головка соскальзывает по наклонной стенке,
            заставляя пластину смещаться вдоль своей оси, что можно использовать
            для уменьшения щели перелома или создания компрессии между отломками
            костей. Стандартная динамическая компрессирующая пластина (DCP или
            LC-DCP) выполняет свою функцию, только если ее нижняя поверхность
            плотно прижата к кости. Это создает трение между металлоконструкцией
            и костью, позволяя механическим силам передаваться с одного
            фрагмента кости на другой. При этом кость должна быть достаточно
            плотной. Если имеется остеопороз кости (особенно в области
            метафиза), то после операции может наблюдаться расшатывание винта и
            утрата стабильности фиксации.
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {
  name: 'IntramedullaryPins',
  setup() {
    const traumatologyCarts = computed(() => [
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.smallInsertsWithAngularStability'
        ),
        img: require('@/assets/traumatology/small-inserts-with-angular-stability.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blockedPlates/small-inserts-with-angular-stability`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.specialInsertsWithAngularStability'
        ),
        img: require('@/assets/traumatology/special-inserts-with-angular-stability.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blockedPlates/special-inserts-with-angular-stability`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.angularStabilityInserts'
        ),
        img: require('@/assets/traumatology/angular-stability-inserts.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blockedPlates/inserts-with-angular-stability`
      },
      {
        title: i18n.global.t(
          'main.carts.traumatology.links.largeInsertsWithAngularStability'
        ),
        img: require('@/assets/traumatology/large-inserts-with-angular-stability.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/traumatology/blockedPlates/large-inserts-with-angular-stability`
      }
    ])

    return {
      traumatologyCarts
    }
  }
}
</script>

<style lang="scss" scoped>
.blocked-plates {
  &__inner {
    display: flex;
  }

  &__carts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    width: 300px;
    max-height: 290px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;

    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;

    &:hover {
      transition: all 0.2s;
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }

  &__cart-title {
    color: $primary-white;
    background-color: $primary-blue;
    text-align: center;
    padding: 10px 0;
  }

  &__cart-img {
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }
}
</style>
