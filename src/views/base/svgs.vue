<template>
    <div class="svgs">
        <el-row>
            <el-button type="primary"  v-for="item in seconds" :key="item" @click="setRoute(item)">{{item}}</el-button>
        </el-row>
        <component :is="comName"/>
    </div>
</template>

<script>



export default {
    components:{
        svge: () => import('./svg/svg.vue'),
        svgAnimation: () => import('./SvgAnimation/SvgAnimation.vue'),
    },
    data(){
        return{
            seconds:["svge","svgAnimation"],
            comName: "svge"
        }
    },
    methods: {
        setRoute(item){
            console.log(item,'item')
            this.comName = item;
        }
    },
}
</script>
<style lang="scss" scoped>
    .svgs{
        margin: 20px auto;
        .el-row{
            margin: 20px auto;
        }
    }
</style>


