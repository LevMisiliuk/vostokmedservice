<template>
    <div class="education">
        <div class="container">
            <MainHeader />
            <div class="education__inner">
                <div class="education__links">
                    <PrimaryLink
                        :linkTitle="$t('main.certificates.links.traumatology')"
                        :path="`/${$i18n.locale}/catalog/traumatology`"
                    />
                    <PrimaryLink
                        :linkTitle="$t('main.certificates.links.surgery')"
                        :path="`/${$i18n.locale}/catalog/surgery`"
                    />
                    <PrimaryLink
                        :linkTitle="$t('main.certificates.links.neurosurgery')"
                        :path="`/${$i18n.locale}/catalog/neurosurgery`"
                    />
                    <PrimaryLink
                        :linkTitle="$t('main.certificates.links.toolsAndEquipment')"
                        :path="`/${$i18n.locale}/catalog/tools-and-equipment`"
                    />
                </div>
                <div class="education__block">
                    <h2 class="education__block-title">
                        {{ $t('main.education.block.title') }}
                    </h2>
                    <p class="education__block-text p1">
                        {{ $t('main.education.block.text-p1') }}
                    </p>
                    <p class="education__block-text p2">
                        {{ $t('main.education.block.text-p2') }}
                    </p>
                    <div class="education__imgs">
                        <img src="../assets/education-1.png" alt="">
                        <img src="../assets/education-2.png" alt="">
                        <img src="../assets/education-3.png" alt="">
                        <img src="../assets/education-4.png" alt="">
                        <img src="../assets/education-5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
import PrimaryLink from './PrimaryLink.vue'

export default {
    name: "EducationScreen",
    components: {
        MainHeader,
        PrimaryLink,
        MainFooter
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .education {

        &__inner {
            display: flex;
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
            margin-bottom: 20px;
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

        &__imgs {
            display: flex;
            flex-wrap: wrap;
            gap: 20px
        }
    }
</style>