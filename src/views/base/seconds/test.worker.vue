<template>
    <div class="test-worker">

    </div>
</template>

<script>
    import Worker from "@/components/worker/test.worker"; //这个路径根据自己真实情况配置

    export default {
        created() {
            // 1, 处理都是同步
            // 参数1是页面路径，参数2是配置参数  
            let worker = new Worker();
            worker.postMessage('setIt')
            // onmessage接收消息 
            // worker.onmessage = function (res) {
            //     console.log('接收到消息:', res.data);
            // }
            // web.worker.js    
            // self表示的是子线程自身，也就是当前worker的全局对象    
            // 所以可以把self替换成this,或者直接onmessage,不需要xxx.onmessage    
            // onmessage = function (e) {
            //     postMessage('worker发送消息啦~')
            // }
            worker.postMessage('getIt')
            // onmessage接收消息 
            worker.onmessage = function (res) {
                let {data} = res;
                if(data.title==='setIt'){
                    console.log('接收到消息_setIt:', res.data);
                }else if(data.title==='getIt'){
                    console.log('接收到消息_getIt:', res.data);
                }
            }
            // 2，处理都是异步
            let worker2 = new Worker();
            worker2.postMessage('setIt')
            worker2.onmessage = (res) => {
                console.log('worker2',res.data);
            }
            
            let worker3 = new Worker();
            worker3.postMessage('getIt')
            worker3.onmessage = (res) => {
                console.log('worker3',res.data);
            }
            


        }
    }
</script>

<style>

</style>