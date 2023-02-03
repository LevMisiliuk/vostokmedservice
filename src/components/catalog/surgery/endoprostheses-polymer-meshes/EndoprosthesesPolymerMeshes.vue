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
            Ендопротези – сітки полімерні
          </a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="suture-materials__inner">
        <LeftLinksMenu />
        <div class="suture-materials__inner-block">
          <div class="suture-materials__block">
            <h2 class="suture-materials__block-header">Ендопротези – сітки полімерні</h2>
            <div class="suture-materials__cards">
              <a
                v-for="card in endoprosthesesPolymerMeshesCards"
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
  name: 'EndoprosthesesPolymerMeshes',
  setup() {
    const endoprosthesesPolymerMeshesCards = computed(() => [
      {
        title: 'есфіл т',
        img: require('@/assets/surgery/esfilt.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'есфіл л',
        img: require('@/assets/surgery/esfil-l.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'есфіл',
        img: require('@/assets/surgery/esfil.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'флексилен',
        img: require('@/assets/surgery/flexile.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'еслан',
        img: require('@/assets/surgery/eslan.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'фторекс',
        img: require('@/assets/surgery/fluorex-2.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'гінефлекс',
        img: require('@/assets/surgery/gyneflex.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      },
      {
        title: 'уніфлекс',
        img: require('@/assets/surgery/uniflex-2.jpeg'),
        link: `/${i18n.global.locale.value}/404`
      }
    ])

    return {
      endoprosthesesPolymerMeshesCards
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
