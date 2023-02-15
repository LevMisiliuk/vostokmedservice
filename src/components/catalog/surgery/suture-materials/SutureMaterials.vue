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
          <a href="#">
            Шовні матеріали
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Шовні матеріали</h2>
            <h4 class="suture-materials__block-subtitle">Нерозсмоктуються</h4>
            <div class="suture-materials__cards">
              <a
                v-for="card in sutureMaterialsCardsFirst"
                :key="card"
                class="suture-materials__card"
                :href="card.link"
              >
                <img :src="card.img" alt="" class="suture-materials__card-img" />
                <div class="suture-materials__card-title">
                  {{ card.title }}
                </div>
              </a>
            </div>
            <h4 class="suture-materials__block-subtitle">Розсмоктуються</h4>
            <div class="suture-materials__cards">
              <a
                v-for="card in sutureMaterialsCardsSecond"
                :key="card"
                class="suture-materials__card"
                :href="card.link"
              >
                <img :src="card.img" alt="" class="suture-materials__card-img" />
                <div class="suture-materials__card-title">
                  {{ card.title }}
                </div>
              </a>
            </div>
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
  name: 'SutureMaterials',
  setup() {
    const sutureMaterialsCardsFirst = computed(() => [
      {
        title: 'уніфлекс',
        img: require('@/assets/surgery/uniflex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/uniflex`
      },
      {
        title: 'моноамід',
        img: require('@/assets/surgery/monoamide.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/monoamid`
      },
      {
        title: 'монофіл',
        img: require('@/assets/surgery/monofil.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/monofil`
      },
      {
        title: 'капрон',
        img: require('@/assets/surgery/capron.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/capron`
      },
      {
        title: 'лавсан',
        img: require('@/assets/surgery/lavsan.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/lavsan`
      },
      {
        title: 'капрогент',
        img: require('@/assets/surgery/caprogent.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/caprogent`
      },
      {
        title: 'фторлін',
        img: require('@/assets/surgery/fluorolin.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/ftorlin`
      },
      {
        title: 'шовк',
        img: require('@/assets/surgery/silk.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/silk`
      },
      {
        title: 'фторекс',
        img: require('@/assets/surgery/fluorex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/ftorex`
      }
    ])

    const sutureMaterialsCardsSecond = computed(() => [
      {
        title: 'ультрасорб',
        img: require('@/assets/surgery/ultrasorb.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/ultrasorb`
      },
      {
        title: 'пга',
        img: require('@/assets/surgery/pga.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/pga`
      },
      {
        title: 'кетгут простий',
        img: require('@/assets/surgery/simple-catgut.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/simple-catgut`
      },
      {
        title: 'пга-рапід',
        img: require('@/assets/surgery/pga-rapid.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/pga-rapid`
      },
      {
        title: 'моносорб',
        img: require('@/assets/surgery/uniflex.jpeg'),
        link: `/${i18n.global.locale.value}/catalog/surger/suture-materials/monosorb`
      }
    ])

    return {
      sutureMaterialsCardsFirst,
      sutureMaterialsCardsSecond
    }
  }
}
</script>

<style lang="scss" scoped>
.suture-materials {
  &__inner {
    display: flex;
  }

  &__cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
