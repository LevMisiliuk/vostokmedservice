<template>
  <div class="about">
    <div class="container">
      <MainHeader />
      <div class="about__inner">
        <ul class="about__links">
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.traumatology')"
              :path="`/${$i18n.locale}/catalog/traumatology`"
            />
          </li>
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.surgery')"
              :path="`/${$i18n.locale}/catalog/surgery`"
            />
          </li>
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.neurosurgery')"
              :path="`/${$i18n.locale}/catalog/neurosurgery`"
            />
          </li>
          <li>
            <PrimaryLink
              :linkTitle="$t('main.certificates.links.toolsAndEquipment')"
              :path="`/${$i18n.locale}/catalog/tools-and-equipment`"
            />
          </li>
        </ul>
        <div class="about__block">
          <h2 class="about__block-title">Рух - основа життя</h2>
          <div class="about__text">
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
            <ul>
              <li class="about__list-item">
                <div class="blue-circle"></div>
                Штифти інтрамедулярні канюльовані для гомілки, стегна, плеча,
                Гамма-стрижень, штифт вертальний тип Z, штифт ретроградний
                стегновий.
              </li><br />
              <li class="about__list-item">
                <div class="blue-circle"></div>
                Блоковані кутостабільні пластини – малі пластини,
                реконструктивні блоковані пластини, пластини для дистального
                виростка стегна, пластина для дистального виростка гомілки,
                пластина кутостабільна для шийки плеча, пластини
                різьбостабільні.
              </li><br />
              <li class="about__list-item">
                <div class="blue-circle"></div>
                Набори інструменту для встановлення інтрамедулярних стрижнів,
                набори інструменту для встановлення кутових стабільних пластин,
                що блокуються.
              </li><br />
              <li class="about__list-item">
                <div class="blue-circle"></div>
                Гвинти кортикальні, малеолярні, спонгіозні, канюльовані
                кортикальні, канюльовані спонгіозні, гвинти кортикальні
                кутостабільні, гвинти спонгіозні кутостабільні, гвинти
                кортикальні різьбостабільні, гвинти спонгіозні різьбостабільні,
                блокуючі гвинти для гвинти.
              </li><br />
              <li class="about__list-item">
                <div class="blue-circle"></div>
                Пластини АТ – реконструктивні, пластини малі, пластини прямі
                вузькі, пластини прямі широкі, пластини 1/3 трубчасті, пластини
                1/2 трубчасті, пластина «лист конюшини», пластини Г-подібні,
                Т-подібні пластини.
              </li><br />
              <li class="about__list-item">
                <div class="blue-circle"></div>Апарат Ілізарова.
              </li><br />
              <li class="about__list-item">
                <div class="blue-circle"></div>
                Спиці Кіршнера, спиці з упором, дріт серкляжний, стрижні
                Штеймана, стрижні Шанца, стрижні конічні.
              </li><br />
              <li class="about__list-item">
                <div class="blue-circle"></div>Пластини мікрохірургічні, гвинти для мікрохірургії.</li><br />
            </ul>
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
  </div>
  <MainFooter />
</template>

<script>
export default {
  name: 'CertificatesScreen',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.about {
  &__inner {
    display: flex;
  }

  &__list-item {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__links {
    display: flex;
    flex-direction: column;

    margin-right: 100px;
  }

  &__link {
    font-weight: 400;
    margin: 20px 0 0 0;
    white-space: nowrap;

    &:first-child {
      margin: 0;
    }
  }

  &__block-title {
    color: $primary-blue;
    margin-bottom: 40px;
  }

  &__block-text {
    font-weight: 400;
  }

  .p1 {
    margin-bottom: 40px;
  }

  .p2 {
    margin-bottom: 60px;
  }

  &__text {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
