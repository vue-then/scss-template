<template>
    <div>
        1234567654
    </div>
</template>

<script>
// import a1 from '../base/seconds/a-1.vue'

export default {
    data(){
        return{
            seconds:["a1"],
            comName: "a1"
        }
    },
    methods: {
        setRoute(item){
            this.comName = item;
        }
    },
}
</script>


