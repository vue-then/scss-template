<template>
    <div>
        <div class="icon-wrapper" :style="{width: '200px',height: '200px'}">
            <Icon />
            <svg width="50" height="50" style="color: blue">
                <use href="#more"></use>
            </svg>
            <svg width="50" height="50" style="color: red">
                <use href="#filledArrowRight"></use>
            </svg>
            <svg width="50" height="50" style="color: green" class="common-icon">
                <use href="#arrowRight"></use>
            </svg>
            <Icons name="arrowRight" :styles="{width: 50,height: 50}"></Icons>

            <Icons name="shaojiu" class="common-icon"></Icons>
            <Icons prefix="icon" name="boshimao" class="common-icon"></Icons>
            <Icons prefix="icon" name="diqiuyi" class="common-icon"></Icons>
        </div>

    </div>
</template>

<script>
    import Icon from './Icon/index.vue'
    import Icons from './Icon/icon.vue'
    export default {
        components: {
            Icon,
            Icons
        },
        data() {
            return {

            }
        },
        mounted() {
            console.log(233333)
        },
    }
</script>

<style>
    .icon-wrapper {
        color: red;
    }

    .common-icon {
        color: red;
        width: 100px;
        height: 100px;
    }
</style>