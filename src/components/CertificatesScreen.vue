<template>
    <div class="certificates">
        <div class="container">
            <MainHeader />
            <div class="certificates__inner">
                <ul class="certificates__links">
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
                <div class="certificates__block">
                    <h2 class="certificates__block-title">
                        {{ $t('main.certificates.block.title') }}
                    </h2>
                    <div class="certificates__imgs">
                        <img src="../assets/certificates/certificate-1.png" alt="">
                        <img src="../assets/certificates/certificate-2.png" alt="">
                        <img src="../assets/certificates/certificate-3.png" alt="">
                        <img src="../assets/certificates/certificate-4.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter.vue'
import PrimaryLink from './PrimaryLink.vue'

export default {
    name: "CertificatesScreen",
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
    .certificates {

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

        &__imgs {
            display: flex;
            flex-wrap: wrap;
            gap: 20px
        }
    }
</style>