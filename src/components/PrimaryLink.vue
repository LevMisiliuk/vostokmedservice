<template>
    <a :style="`margin-top: ${linkMargin}px; margin-bottom: ${linkMargin}px`" class="primary-link" :href="path">
        <div v-if="blueCircle" class="blue-circle"></div>
        <div :style="`font-size: ${linkSize}px`" class="primary-link__link">
            {{ linkTitle }}
        </div>
        <img v-if="blueArrow" :class="`primary-link__img_${arrowPosition}`" src="../assets/svg/blue-arrow.svg" alt="blue arrow">
    </a>
</template>

<script>
export default {
    name: "PrimaryLink",
    props: {
        path: {
            type: String,
            default: '#'
        },
        arrowPosition: {
            type: String,
            default: 'right'
        },
        blueCircle: {
            type: Boolean,
            default: false
        },
        linkTitle: {
            type: String,
            default: ''
        },
        blueArrow: {
            type: Boolean,
            default: false
        },
        linkSize: {
            type: Number,
            default: 18
        },
        linkMargin: {
            type: Number,
            default: 10
        }
    },
    setup () {

        return {}
    }
}
</script>

<style lang="scss" scoped>
.primary-link {
    display: flex;
    align-items: center;

    &__link {
        font-size: 18px;
        display: flex;
        align-items: center;
        white-space: nowrap;
        cursor: pointer;
        margin-right: 8px;
    }

    &__img {

        &_top {
            transform: rotate(-90deg);
        }
    }

    &:hover {
        .blue-circle {
            background-color: $primary-blue;
        }
    }
}
</style>