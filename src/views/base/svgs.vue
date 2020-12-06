<template>
    <div class="svgs">
        <el-row>
            <el-button type="primary"  v-for="item in seconds" :key="item" @click="setRoute(item)">{{item}}</el-button>
        </el-row>
        <component :is="comName"/>
        <!-- <Loading width="500" height="300" outsideColor="red" insideColor="blue">
            数据加载中
        </Loading> -->
        <FlyBox>
            <div>
                <p>111</p>
                <p>222</p>
                <p>333</p>
                <p>444</p>
                <p>444</p>
                <p>444</p>
                <p>444</p>
                <p>444</p>
                <p>444</p>
                <p>444</p>
            </div>
        </FlyBox>
    </div>
</template>

<script>



export default {
    components:{
        svge: () => import('./svg/svg.vue'),
        svgAnimation: () => import('./SvgAnimation/SvgAnimation.vue'),
        Loading: () => import('./Loading/Loading.vue'),
        FlyBox: () => import('./FlyBox/FlyBox.vue'),
    },
    data(){
        return{
            seconds:["svge","svgAnimation","Loading","FlyBox"],
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


