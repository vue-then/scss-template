<template>
    <div class="baseon">
        <el-row>
            <el-button type="primary"  v-for="item in seconds" :key="item" @click="setRoute(item)">{{item}}</el-button>
        </el-row>
        <component :is="comName"/>
    </div>
</template>

<script>



export default {
    components:{
        a1: () => import('../base/seconds/a-1.vue'),
        a2: () => import('../base/seconds/a-2.vue'),
        a3: () => import('../base/seconds/a-3.vue'),
        a4: () => import('../base/seconds/a-4.vue'),
        a5: () => import('../base/seconds/a-5.vue'),
        longPress: () => import('../base/seconds/longPress.vue'),
        keyBoard: () => import('../base/seconds/keyBoard'),
    },
    data(){
        return{
            seconds:["a1","a2","a3","a4","a5","longPress","keyBoard"],
            comName: "a1"
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
    .baseon{
        margin: 20px auto;
        .el-row{
            margin: 20px auto;
        }
    }
</style>


