<template>
    <div>
        <div class="aes">aes加密</div>
    </div>
</template>
<script>
import AES from "../../utils/aes";

export default {
    mounted(){
        var keys = AES.generatekey(16);
        //如果是对象/数组的话，需要先JSON.stringify转换成字符串
        // var cars = {
        //     aa: "bb"
        // }
        // var encrypts = AES.encrypt(JSON.stringify(cars),keys);
        // var dess = JSON.parse(AES.decrypt(encrypts,keys));

        var encrypts = AES.encrypt('okokokokk',keys);
        var dess =  AES.decrypt(encrypts,keys);

        console.log(encrypts)
        console.log(encrypts.length)
        console.log(dess)
    }
}
</script>