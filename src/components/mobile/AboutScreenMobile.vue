<template>
  <MobilePageWrapper>
    <div class="default_mobile__card">
      <div class="about__inner">
        <div class="about__block">
          <h2 class="about__block-title">Рух - основа життя</h2>
          <div class="about__text" style="color: #000; padding: 10px">
            «Восток-Медсервис» є спеціалізованою компанією в галузі
            травматології, ортопедії та нейрохірургії, а також ексклюзивним
            представником угорського заводу-виробника Medimetal Kft в Україні,
            який виготовляє тисячі найменувань імплантів із високоякісної
            нержавіючої сталі та титану. Наша компанія пропонує широкий спектр
            медичного обладнання та хірургічного інструменту. Основними
            перевагами продукції, яку пропонує компанія «Восток-Медсервис», є
            співвідношення високої якості, доступної ціни, а також зручний,
            інтуїтивно зрозумілий для лікаря інструмент. <br /><br />
            «Восток-Медсервис» є спеціалізованою компанією в галузі
            травматології, ортопедії та нейрохірургії. Ми пропонуємо широкий
            асортимент продукції: <br />
            <br />
            <hr>
                Штифти інтрамедулярні канюльовані для гомілки, стегна, плеча,
                Гамма-стрижень, штифт вертальний тип Z, штифт ретроградний
                стегновий.
              <br />
            <hr>
                Блоковані кутостабільні пластини – малі пластини,
                реконструктивні блоковані пластини, пластини для дистального
                виростка стегна, пластина для дистального виростка гомілки,
                пластина кутостабільна для шийки плеча, пластини
                різьбостабільні.
              <br />
            <hr>
                Набори інструменту для встановлення інтрамедулярних стрижнів,
                набори інструменту для встановлення кутових стабільних пластин,
                що блокуються.
              <br />
            <hr>
                Гвинти кортикальні, малеолярні, спонгіозні, канюльовані
                кортикальні, канюльовані спонгіозні, гвинти кортикальні
                кутостабільні, гвинти спонгіозні кутостабільні, гвинти
                кортикальні різьбостабільні, гвинти спонгіозні різьбостабільні,
                блокуючі гвинти для гвинти.
              <br />
            <hr>
                Пластини АТ – реконструктивні, пластини малі, пластини прямі
                вузькі, пластини прямі широкі, пластини 1/3 трубчасті, пластини
                1/2 трубчасті, пластина «лист конюшини», пластини Г-подібні,
                Т-подібні пластини.
              <br />
            <hr>
            Апарат Ілізарова.
              <br />
            <hr>
                Спиці Кіршнера, спиці з упором, дріт серкляжний, стрижні
                Штеймана, стрижні Шанца, стрижні конічні.
              <br />
            <hr>
            Пластини мікрохірургічні, гвинти для мікрохірургії.<br />
            «Восток-Медсервис» є ексклюзивним представником угорського
            заводу-виробника Medimetal Kft в Україні, що працює у сфері
            травматології, ортопедії та хірургії хребта, постачаючи тисячі
            найменувань імплантів із високоякісної нержавіючої сталі та титану.
            Продукція компанії Medimetal не просто відіграє важливу роль у
            процесі лікування переломів, вона заслужила на довіру як продукцію
            виключно високої якості (ISO 9001:2000, ISO 13485:2003, Європейський
            знак відповідності стандартам якості та безпеки – CE mark).<br /><br /> В
            Україні продукція Medimetal зареєстрована та має всі необхідні
            сертифікати та посвідчення. Основними перевагами продукції, яку
            пропонує компанія «Восток-Медсервис», є співвідношення високої
            якості, доступної ціни, а також зручний, інтуїтивно зрозумілий для
            лікаря інструмент. Ми постійно проводимо навчання лікарів в Україні
            та за кордоном – в Угорщині (на базі клінік у м. Будапешт та місті
            Егер).<br /><br />
            <div class="blue-txt">
              Запрошуємо до співпраці всіх лікарів. Наші фахівці нададуть Вам професійну консультацію і дадуть відповіді на всі питання, що Вас цікавлять.
            </div>
          </div>
        </div>
      </div>
    </div>
  </MobilePageWrapper>
</template>

<script>

export default {
  setup() {

  }
}
</script>

<style lang="scss">
.default_mobile {
  &__card {
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    &-inner {
      padding: 10px;
    }
  }
}
.mobile__wrapper {
  .card {
    display: flex;
    flex-direction: column;
    min-width: 1vw !important;
    z-index: 0;
    margin: 0px 16px 40px 16px
  }

  .card__product-info-structure {
    display: flex;
    flex-direction: column;
    color: rgb(27, 28, 30);
  }

  .card__product-image {
    max-width: 100% !important;
  }

  .card__product-info {
    padding: 0px;
  }

  .card__product-data {
    text-align: right;
  }
}

</style>
