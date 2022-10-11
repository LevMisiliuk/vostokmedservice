<template>
    <div class="calf-pin">
        <div class="container">
            <MainHeader />
            <el-breadcrumb class="breadcrumb" separator="/">
                <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/`">
                    {{ $t('main.catalog.block.title') }}
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/`">
                    {{ $t('main.carts.traumatology.title') }}
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/intramedullary-pins/`">
                       {{ $t('main.carts.traumatology.links.intramedullaryPins') }}
                </el-breadcrumb-item>
                 <el-breadcrumb-item :to="`/${$i18n.locale}/catalog/traumatology/intramedullary-pins/calf-pin`">
                    {{ $t('main.carts.traumatology.links.calfPins') }}
                </el-breadcrumb-item>
            </el-breadcrumb>

            <div class="calf-pin__inner">
                <div class="calf-pin__links">
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
                            class="calf-pin__link-list"
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
                <div class="calf-pin__card">
                    <ProductInfoCard
                        :image="calfData[0].image"
                        :title="calfData[0].title"
                        :subtitle="calfData[0].subtitle"
                        :productsParams="calfData[0].productsParams"
                    />
                    <el-table
                        :header-cell-style="{ background: '#00AEEF', color: '#FFF' }"
                        :cell-style="{padding: '0', height: '50px', color: '#1B1C1E'}"
                        :data="tableData"
                        border
                        style="width: 100%"
                    >
                        <el-table-column
                            :label="$t('main.carts.traumatology.calfPin.table.first')"
                            prop="first"
                        />
                        <el-table-column
                            :label="$t('main.carts.traumatology.calfPin.table.second')"
                            prop="second"
                        />
                        <el-table-column
                            :label="$t('main.carts.traumatology.calfPin.table.third')"
                            prop="third"
                        />
                        <el-table-column
                            :label="$t('main.carts.traumatology.calfPin.table.fourth')"
                            prop="fourth"
                        />
                        <el-table-column
                            :label="$t('main.carts.traumatology.calfPin.table.fifth')"
                            prop="fifth"
                        />
                        <el-table-column
                            :label="$t('main.carts.traumatology.calfPin.table.sixth')"
                            prop="sixth"
                        />
                        <el-table-column
                            :label="$t('main.carts.traumatology.calfPin.table.seventh')"
                            prop="seventh"
                        />
                    </el-table>
                </div>
            </div>
        </div>
    </div>
    <MainFooter />
</template>

<script>
import { computed, ref } from 'vue'
import PrimaryLink from './PrimaryLink.vue'
import MainFooter from './MainFooter.vue'
import MainHeader from './MainHeader.vue'
import ProductInfoCard from './ProductInfoCard.vue'
import i18n from '../i18n'

export default {
    name: "CalfPin",
    components: {
        PrimaryLink,
        MainFooter,
        MainHeader,
        ProductInfoCard
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
        const tableData = ref([
            {
                first: '270',
                second: '14010-08270',
                third: '14010-09270',
                fourth: '14010-10270',
                fifth: '14020-11270',
                sixth: '14020-12270',
                seventh: ' 14020-13270'
            },
            {
                first: '285',
                second: '14010-08285',
                third: '14010-09285',
                fourth: '14010-10285',
                fifth: '14020-11285',
                sixth: '14020-12285',
                seventh: '14020-13285'
            },
            {
                first: '300',
                second: '14010-08300',
                third: '14010-10300',
                fourth: '14020-11300',
                fifth: '14020-12300',
                sixth: '14020-13300',
                seventh: ' 14020-13270'
            },
            {
                first: '315',
                second: '14010-08315',
                third: '14010-09315',
                fourth: '14010-10315',
                fifth: '14020-11315',
                sixth: '14020-12315',
                seventh: '14020-13315'
            },
            {
                first: '330',
                second: '14010-08330',
                third: '14010-09330',
                fourth: '14010-10330',
                fifth: '14020-11330',
                sixth: '14020-12330',
                seventh: '14020-13330'
            },
            {
                first: '345',
                second: '14010-08345',
                third: '14010-09345',
                fourth: '14010-10345',
                fifth: '14020-11345',
                sixth: '14020-12345',
                seventh: '14020-13345'
            },
            {
                first: '360',
                second: '14010-08360',
                third: '14010-09360',
                fourth: '14010-10360',
                fifth: '14020-11360',
                sixth: '14020-12360',
                seventh: '14020-13360'
            },
            {
                first: '375',
                second: '14010-08375',
                third: '14010-09375',
                fourth: '14010-10375',
                fifth: '14020-11375',
                sixth: '14020-12375',
                seventh: '14020-13375'
            },
            {
                first: '390',
                second: '14010-08390',
                third: '14010-09390',
                fourth: '14010-10390',
                fifth: '14020-11390',
                sixth: '14020-12390',
                seventh: '14020-13390'
            },
            {
                first: '405',
                second: '14010-08405',
                third: '14010-09405',
                fourth: '14010-10405',
                fifth: '14020-11405',
                sixth: '14020-12405',
                seventh: '14020-13405'
            },
            {
                first: '420',
                second: '14010-08420',
                third: '14010-09420',
                fourth: '14010-10420',
                fifth: '14020-11420',
                sixth: '14020-12420',
                seventh: '14020-13420'
            },
        ])
        const calfData = computed(() => [
            {
                title: i18n.global.t('main.carts.traumatology.calfPin.title'),
                subtitle: i18n.global.t('main.carts.traumatology.calfPin.subtitle'),
                image: require('../assets/traumatology/calf-pins.jpeg'),
                productsParams: [
                    {
                        id: 1,
                        name: i18n.global.t('main.carts.traumatology.calfPin.lockingScrew'),
                        data: i18n.global.t('main.carts.traumatology.calfPin.lockingScrewData')
                    },
                    {
                        id: 2,
                        name: i18n.global.t('main.carts.traumatology.calfPin.plug'),
                        data: '12400-08016'
                    },
                    {
                        id: 3,
                        name: i18n.global.t('main.carts.traumatology.calfPin.material'),
                        data: i18n.global.t('main.carts.traumatology.calfPin.materialData')
                    },
                    {
                        id: 4,
                        name: i18n.global.t('main.carts.traumatology.calfPin.tool'),
                        data: '94000-00000'
                    }
                ]
            }
        ])
        return {
            traumatologyLinks,
            calfData,
            tableData
        }
    }
}
</script>

<style lang="scss" scoped>
.calf-pin {

    &__inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
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


    &__card {
        display: flex;
        flex-direction: column;
    }


}
</style>