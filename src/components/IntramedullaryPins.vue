<template>
    <div class="intramedullary-pins">
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
                       {{ $t('main.carts.traumatology.links.intramedullaryPins') }}
                    </a>
                </el-breadcrumb-item>

            </el-breadcrumb>
            <div class="intramedullary-pins__inner">
                <div class="intramedullary-pins__links">
                    <PrimaryLink
                        :path='`/${$i18n.locale}/catalog/traumatology/`'
                        :linkTitle="$t('main.certificates.links.traumatology')"
                        :blueArrow="true"
                        arrowPosition="top"
                    />
                    <ul>
                        <li
                            v-for="item in traumatologyLinks"
                            :key="item"
                            class="intramedullary-pins__link-list"
                        >
                            <PrimaryLink
                                :path="item.path"
                                :linkTitle="item.name"
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
                <div class="intramedullary-pins__block">
                    <div class="intramedullary-pins__carts">
                        <a
                            v-for="cart in traumatologyCarts"
                            :key="cart"
                            class="intramedullary-pins__cart"
                            :href="cart.link"
                        >
                            <img
                                :src="cart.img"
                                alt=""
                                class="intramedullary-pins__cart-img"
                            >
                            <div class="intramedullary-pins__cart-title">
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
    name: "IntramedullaryPins",
    components: {
        PrimaryLink,
        MainFooter,
        MainHeader
    },
    setup () {
        const traumatologyLinks = computed(() => [
            {
                name: i18n.global.t('main.carts.traumatology.links.intramedullaryPins'),
                path: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins`
            },
            {
                name: i18n.global.t('main.carts.traumatology.links.blockedPlates'),
                path: `/404`
            },
            {
                name: i18n.global.t('main.carts.traumatology.links.tool'),
                path: `/404`
            },
            {
                name: i18n.global.t('main.carts.traumatology.links.screwsAT'),
                path: `/404`
            },
            {
                name: i18n.global.t('main.carts.traumatology.links.JSCPlates'),
                path: `/404`
            },
            {
                name: i18n.global.t('main.carts.traumatology.links.needlesRodsCerclage'),
                path: `/404`
            },
            {
                name: i18n.global.t('main.carts.traumatology.links.microsurgery'),
                path: `/404`
            },
            {
                name: i18n.global.t('main.carts.traumatology.links.ilizarovsApparatus'),
                path: `/404`
            }
        ])

        const traumatologyCarts = computed(() => [
            {
                title: i18n.global.t('main.carts.traumatology.links.calfPins'),
                img: require('../assets/traumatology/calf-pins.jpeg'),
                link: `/${i18n.global.locale.value}/catalog/traumatology/intramedullary-pins/calf-pin`
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.pinsVerticalZType'),
                img: require('../assets/traumatology/pins-vertical-z-type.jpeg'),
                link: '/404'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.thighPins'),
                img: require('../assets/traumatology/thigh-pins.jpeg'),
                link: '/404'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.pinsForShoulder'),
                img: require('../assets/traumatology/pins-for-shoulder.jpeg'),
                link: '/404'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.retrogradeFemoralPins'),
                img: require('../assets/traumatology/retrograde-femoral-pins.jpeg'),
                link: '/404'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.distalFemoralNail'),
                img: require('../assets/traumatology/distal-femoral-nail.jpeg'),
                link: '/404'
            },
            {
                title: i18n.global.t('main.carts.traumatology.links.hipProximalPins'),
                img: require('../assets/traumatology/hip-proximal-pins.jpeg'),
                link: '/404'
            }
        ])

        return {
            traumatologyLinks,
            traumatologyCarts
        }
    }
}
</script>

<style lang="scss" scoped>
.intramedullary-pins {

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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0;
        width: 300px;
        max-height: 290px;
        border-radius: 16px;
        overflow: hidden;
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
        width: 100%;
        height: 100%;
        margin-bottom: -10px;
    }

}
</style>