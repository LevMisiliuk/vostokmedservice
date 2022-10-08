<template>
    <div class="catalog-traumatology">
        <div class="container">
            <MainHeader />
            <el-breadcrumb class="breadcrumb" separator="/">
                <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">Каталог</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a>Травматология</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
            <div class="catalog-traumatology__inner">
                <div class="catalog-traumatology__links">
                    <PrimaryLink
                        path="#"
                        :linkTitle="$t('main.certificates.links.traumatology')"
                        :blueArrow="true"
                        arrowPosition="top"
                    />
                    <ul>
                        <li
                            v-for="item in traumatologyLinks"
                            :key="item"
                            class="catalog-traumatology__link-list"
                        >
                            <PrimaryLink
                                path="#"
                                :linkTitle="item"
                                :blueCircle="true"
                                :linkMargin="10"
                            />
                        </li>
                    </ul>
                    <PrimaryLink
                        :linkTitle="$t('main.certificates.links.surgery')"
                        path="#"
                        :blueArrow="true"
                    />
                    <PrimaryLink
                        :linkTitle="$t('main.certificates.links.neurosurgery')"
                        path="#"
                        :blueArrow="true"
                    />
                    <PrimaryLink
                        :linkTitle="$t('main.certificates.links.toolsAndEquipment')"
                        path="#"
                        :blueArrow="true"
                    />
                </div>
                <div class="catalog-traumatology__block">
                    <div class="catalog-traumatology__carts">
                        <a
                            v-for="cart in traumatologyCarts"
                            :key="cart"
                            class="catalog-traumatology__cart"
                            :href="cart.link"
                        >
                            <img
                                :src="cart.img"
                                alt=""
                                class="catalog-traumatology__cart-img"
                            >
                            <div class="catalog-traumatology__cart-title">
                                {{ cart.title }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import { computed } from 'vue'
import PrimaryLink from './PrimaryLink.vue'
import MainFooter from './MainFooter.vue'
import MainHeader from './MainHeader.vue'
import i18n from '../i18n'

export default {
    name: "CatalogTraumatology",
    components: {
        MainHeader,
        PrimaryLink,
        MainFooter,
    },

    setup () {
        const traumatologyLinks = computed(() => [
            i18n.global.t('main.carts.traumatology.links.intramedullaryPins'),
            i18n.global.t('main.carts.traumatology.links.blockedPlates'),
            i18n.global.t('main.carts.traumatology.links.tool'),
            i18n.global.t('main.carts.traumatology.links.screwsAT'),
            i18n.global.t('main.carts.traumatology.links.JSCPlates'),
            i18n.global.t('main.carts.traumatology.links.needlesRodsCerclage'),
            i18n.global.t('main.carts.traumatology.links.microsurgery'),
            i18n.global.t('main.carts.traumatology.links.ilizarovsApparatus')
        ])

        const traumatologyCarts = computed(() => [
            {
                title: i18n.global.t('main.carts.traumatology.links.intramedullaryPins'),
                img: require('../assets/traumatology/intramedullary-pins.png'),
                link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
                img: require('../assets/traumatology/blocked-plates.png'),
                link: '#'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.tool'),
                img: require('../assets/traumatology/tools.png'),
                link: '#'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.screwsAT'),
                img: require('../assets/traumatology/screews-at.png'),
                link: '#'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
                img: require('../assets/traumatology/plates-at.png'),
                link: '#'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.needlesRodsCerclage'),
                img: require('../assets/traumatology/needles-etc.png'),
                link: '#'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.microsurgery'),
                img: require('../assets/traumatology/microsurgery.png'),
                link: '#'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.ilizarovsApparatus'),
                img: require('../assets/traumatology/ilizarovs-apparatus.png'),
                link: '#'
            },
        ])

        return {
            traumatologyLinks,
            traumatologyCarts
        }
    }
}
</script>

<style lang="scss" scoped>
    .catalog-traumatology {

        &__inner {
            display: flex;
        }

        &__links {
            display: flex;
            flex-direction: column;

            margin-right: 60px;
        }

        &__link-list {
            display: flex;
            align-items: center;
            margin-left: 20px;
            white-space: nowrap;
            cursor: pointer;
        }

        &__carts {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        &__cart {
            width: 300px;
            max-height: 281px;
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 0 40px 5px rgba(221, 221, 221, 1);
            transition: transform .05s linear,-webkit-transform .05s linear;
            cursor: pointer;

            &:hover {
                transform: scale(1.03);
            }
        }

        &__cart-title {
            color: $primary-white;
            background-color: $primary-blue;
            text-align: center;
            padding: 10px 0;
        }

        &__cart-img {
            margin-bottom: -10px;
        }

    }
</style>