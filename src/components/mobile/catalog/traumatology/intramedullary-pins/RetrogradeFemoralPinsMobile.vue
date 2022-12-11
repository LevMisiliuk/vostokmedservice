<template>
  <MobilePageWrapper>
    <div class="shoulder-pin_mobile__card">
      <ProductInfoCardMobile
        :image="cardData[0].image"
        :title="cardData[0].title"
        :subtitle="cardData[0].subtitle"
        :productsParams="cardData[0].productsParams"
      />
    </div>
  </MobilePageWrapper>
</template>

<script>
import { computed } from 'vue'
import i18n from '@/i18n'

export default {

  setup() {
    const tableData = computed(() => [
      {
        first: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.table.firstData'),
        second: '240',
        third: '14270-10240',
        fourth: ' 14270-11260',
        fifth: '14270-12260'
      },
      {
        first: '',
        second: '260',
        third: ' 14270-10260',
        fourth: '14270-11280',
        fifth: '14270-12280'
      },
      {
        first: '',
        second: '280',
        third: '14270-10280',
        fourth: '14270-11300',
        fifth: '14270-12300'
      },
      {
        first: '',
        second: '300',
        third: '14270-10300',
        fourth: '14270-11320',
        fifth: '14270-12320'
      },
      {
        first: '',
        second: '320',
        third: '14270-10320',
        fourth: '14270-11340',
        fifth: '14270-12340'
      },
      {
        first: '',
        second: '340',
        third: '14270-10340',
        fourth: '14270-11360',
        fifth: '14270-12360'
      },
      {
        first: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.table.secondData'),
        second: '360',
        third: '14270-10360',
        fourth: '14270-11380',
        fifth: ''
      },
      {
        first: '',
        second: '380',
        third: '14270-10380',
        fourth: '14270-11400',
        fifth: ''
      },
      {
        first: '',
        second: '400',
        third: '14270-10400',
        fourth: '14270-11420',
        fifth: ''
      },
      {
        first: '',
        second: '420',
        third: '14270-10420',
        fourth: '14270-11440',
        fifth: ''
      },
      {
        first: '',
        second: '440',
        third: '14270-10440',
        fourth: '14270-11380',
        fifth: ''
      },
      {
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: ''
      },
      {
        first: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.table.thirdData'),
        second: '260',
        third: '14271-10260',
        fourth: '14271-11260',
        fifth: '14271-12260'
      },
      {
        first: '',
        second: '280',
        third: '14271-10280',
        fourth: '14271-11280',
        fifth: '14271-12280'
      },
      {
        first: '',
        second: '300',
        third: '14271-10300',
        fourth: '14271-11300',
        fifth: '14271-12300'
      },
      {
        first: '',
        second: '320',
        third: '14271-10320',
        fourth: '14271-11320',
        fifth: '14271-12320'
      },
      {
        first: '',
        second: '340',
        third: '14271-10340',
        fourth: '14271-11340',
        fifth: '14271-12340'
      },
      {
        first: '',
        second: '360',
        third: '14271-10360',
        fourth: '14271-11360',
        fifth: '14271-12360'
      }
    ])
    const cardData = computed(() => [
      {
        title: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.title'),
        subtitle: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.subtitle'),
        image: require('@/assets/traumatology/retrograde-femoral-pins.jpeg'),
        productsParams: [
          {
            id: 1,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.lockingScrew'),
            data: i18n.global.t(
              'main.carts.traumatology.retrogradeFemoralPins.lockingScrewData'
            )
          },
          {
            id: 2,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.plug'),
            data: '--'
          },
          {
            id: 3,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.material'),
            data: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.materialData')
          },
          {
            id: 4,
            name: i18n.global.t('main.carts.traumatology.retrogradeFemoralPins.tool'),
            data: '94270-00000'
          }
        ]
      }
    ])

    return {
      cardData,
      tableData,
    }
  },
};
</script>

<style lang="scss" >
.shoulder-pin_mobile {

  &__card {
    display: flex;
    flex-direction: column;
  }
}
</style>
