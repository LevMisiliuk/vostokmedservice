<template>
    <div class="catalog">
        <div class="container">
            <MainHeader />
            <el-breadcrumb class="breadcrumb" separator="/">
                <el-breadcrumb-item :to="`/${$i18n.locale}`">Каталог</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a>Травматология</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
import MainHeader from './MainHeader.vue'

export default {
    name: "CatalogScreen",
    components: {
        MainHeader
    },

    setup () {

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .breadcrumb {
        font-weight: 500;
        font-size: 16px;
    }
</style>