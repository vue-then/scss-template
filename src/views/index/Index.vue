<template>
    <div>
        <h1>scss-template</h1>
        <p>{{imgUrl}}</p>
    </div>
</template>

<script>
    import {
        getImgUrl
    } from "@/services/index.js";
import { constants } from 'fs';
    export default {
    
        data() {
            return {
                imgUrl: ""
            }
        },
        mounted() {
            this.getImgUrlFunc();
        },
        methods: {
            getImgUrlFunc() {
                console.log(11)
                getImgUrl().then(res => {
                    this.imgUrl = res.data;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./index.scss";
</style>


