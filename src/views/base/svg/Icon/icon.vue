<template>
    <div class="icon-wrapper" :style="{...styles}">
        <svg class="icon">
            <use :href="iconName"></use>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'Icons',
        props: {
            name: {
                type: String,
            },
            styles: {
                type: Object
            },
            prefix: {
                type: String
            }
        },
        computed: {
            iconName() {
                if (this.prefix) {
                    return `#${this.prefix}${this.name}`
                } else {
                    return `#${this.name}`
                }
            }
        },
        mounted() {
            console.log('iconName: ', this.iconName)
        },
    }
</script>

<style>
    .icon-wrapper{
        display: inline-block;
    }
    .icon {
        width: 100%;
        height: 100%;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>