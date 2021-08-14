<template>
    <div class="inputs">
        <y-input v-model="value" value="hello world"></y-input>
        <y-input v-model="value" readonly></y-input>
        <y-input v-model="value" disabled></y-input>
        <y-input v-model="value" value="hello world" error="输入格式不对"></y-input>
        <y-input v-model="value" value="" icon="settings" placeholder="enter something"></y-input>
    </div>
</template>

<script>
import inputs from "@/components/inputs.vue"
export default {
    components: {
       yInput: inputs
    },
    data(){
        return{
            value: ""
        }
    }
}
</script>

<style>

</style>