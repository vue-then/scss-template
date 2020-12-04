<template>
        <div class="recorder-wrapper">
            <div class="phone">
                <div class="phone-body">
                    <div class="phone-head">
                        <span>&lt; 微信(66)</span>
                        <span>哈哈哈</span>
                        <span>···</span>
                    </div>
                    <div class="phone-content">
                        <transition-group
                            tag="ul"
                            class="msg-list"
                            name="fade"
                        >
                            <li class="msg eg" :key="-1">
                                <div class="avatar"></div>
                                <div class="audio">说话</div>
                            </li>

                            <li
                                v-for="(item, index) in radioList"
                                :key="index"
                                class="msg"
                                @click="onPlay(index)"
                                @touchend.prevent="onPlay(index)"
                            >
                                <div class="avatar"></div>
                                <div
                                    v-cloak
                                    class="audio"
                                    :style="{width: 20 * item.duration + 'px'}"
                                    :class="{wink: item.wink}"
                                >
                                    <span>(</span><span>(</span
                                    ><span>(</span>
                                </div>
                                <div class="duration">
                                    {{item.duration}}"
                                </div>
                            </li>
                        </transition-group>
                    </div>
                    <div
                        class="phone-operate"
                        @mousedown="onMousedown"
                        @touchstart.prevent="onMousedown"
                        @mouseup="onMouseup"
                        @touchend.prevent="onMouseup"
                    >
                        {{btnText}}
                    </div>
                </div>
            </div>
            <audio ref="audio"></audio>
            <!-- <div @click="recPlay">播放</div> -->
            <!-- <div @click="recUpload">上传</div> -->
            <!-- 日志输出区域 -->
            <div class="mainBox">
                <div class="reclog"></div>
            </div>
        </div>
</template>
<script>
// 实时录音转码
// https://xiangyuecn.github.io/Recorder/assets/%E5%B7%A5%E5%85%B7-%E4%BB%A3%E7%A0%81%E8%BF%90%E8%A1%8C%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E5%8F%91Runtime.html?jsname=teach.realtime.encode_transfer_mp3

//必须引入的核心，换成require也是一样的。注意：recorder-core会自动往window下挂载名称为Recorder对象，全局可调用window.Recorder，也许可自行调整相关源码清除全局污染
import Recorder from 'recorder-core'

//需要使用到的音频格式编码引擎的js文件统统加载进来
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'

//以上三个也可以合并使用压缩好的recorder.xxx.min.js
//比如 import Recorder from 'recorder-core/recorder.mp3.min' //已包含recorder-core和mp3格式支持

//可选的扩展支持项
// import 'recorder-core/src/extensions/waveview'
//简单控制台直接测试方法：在任意(无CSP限制)页面内加载Recorder，加载成功后再执行一次本代码立即会有效果，import("https://xiangyuecn.github.io/Recorder/recorder.mp3.min.js").then(function(s){console.log("import ok")}).catch(function(e){console.error("import fail",e)})

var rec;
/**调用open打开录音请求好录音权限**/
var recOpen=function(success){//一般在显示出录音按钮或相关的录音界面时进行此方法调用，后面用户点击开始录音时就能畅通无阻了
    rec=Recorder({
        type:"mp3",sampleRate:16000,bitRate:16 //mp3格式，指定采样率hz、比特率kbps，其他参数使用默认配置；注意：是数字的参数必须提供数字，不要用字符串；需要使用的type类型，需提前把格式支持文件加载进来，比如使用wav格式需要提前加载wav.js编码引擎
        ,onProcess:function(buffers,powerLevel,bufferDuration,bufferSampleRate,newBufferIdx,asyncEnd){
            //录音实时回调，大约1秒调用12次本回调
            //可利用extensions/waveview.js扩展实时绘制波形
            //可利用extensions/sonic.js扩展实时变速变调，此扩展计算量巨大，onProcess需要返回true开启异步模式
        }
    });

    //var dialog=createDelayDialog(); 我们可以选择性的弹一个对话框：为了防止移动端浏览器存在第三种情况：用户忽略，并且（或者国产系统UC系）浏览器没有任何回调，此处demo省略了弹窗的代码
    rec.open(function(){//打开麦克风授权获得相关资源
        //dialog&&dialog.Cancel(); 如果开启了弹框，此处需要取消
        //rec.start() 此处可以立即开始录音，但不建议这样编写，因为open是一个延迟漫长的操作，通过两次用户操作来分别调用open和start是推荐的最佳流程
        
        success&&success();
    },function(msg,isUserNotAllow){//用户拒绝未授权或不支持
        //dialog&&dialog.Cancel(); 如果开启了弹框，此处需要取消
        console.log((isUserNotAllow?"UserNotAllow，":"")+"无法录音:"+msg);
    });
};



//我们可以选择性的弹一个对话框：为了防止移动端浏览器存在第三种情况：用户忽略，并且（或者国产系统UC系）浏览器没有任何回调
/*伪代码：
function createDelayDialog(){
    if(Is Mobile){//只针对移动端
        return new Alert Dialog Component
            .Message("录音功能需要麦克风权限，请允许；如果未看到任何请求，请点击忽略~")
            .Button("忽略")
            .OnClick(function(){//明确是用户点击的按钮，此时代表浏览器没有发起任何权限请求
                //此处执行fail逻辑
                console.log("无法录音：权限请求被忽略");
            })
            .OnCancel(NOOP)//自动取消的对话框不需要任何处理
            .Delay(8000); //延迟8秒显示，这么久还没有操作基本可以判定浏览器有毛病
    };
};
*/
// 安装使用 npm install recorder-core
export default {
    data() {
        return {
            btnText: "按住说话",
            radioList: [], // 语音src 根据index赋值
        };
    },
    mounted() {
        this.audio = this.$refs.audio;
    },
    methods: {
        onMousedown() {
            recOpen(()=>{
                console.log("开始录音")
                this.recStart();
            });
            this.btnText = "松开结束";
        },
        onMouseup() {
            this.recStop()
            this.btnText = "按住说话";
        },
        onPlay(index) {
            this.radioList.forEach((item) => {
                this.$set(item, "wink", false);
            });

            this.audio.controls=true;
            this.audio.src= this.radioList[index].src
            this.audio.play();
            this.bindAudioEvent(index);
        },
        bindAudioEvent(index) {
            let item = this.radioList[index];

            this.audio.onplaying = () => {
                this.$set(item, "wink", true);
            };

            this.audio.onended = () => {
                this.$set(item, "wink", false);
            };
        },

        /**开始录音**/
        recStart(){//打开了录音后才能进行start、stop调用
            rec.start();
        },
        /**结束录音**/
        recStop(){
            rec.stop((blob,duration)=>{
                console.log(blob,(window.URL||webkitURL).createObjectURL(blob),"时长:"+duration+"ms");
                rec.close();//释放录音资源，当然可以不释放，后面可以连续调用start；但不释放时系统或浏览器会一直提示在录音，最佳操作是录完就close掉
                rec=null;
                
                //已经拿到blob文件对象想干嘛就干嘛：立即播放、上传
                
                /*** 【立即播放例子】 ***/
                // var audio=document.createElement("audio");
                // audio.controls=true;
                // document.body.appendChild(audio);
                // //简单利用URL生成播放地址，注意不用了时需要revokeObjectURL，否则霸占内存
                // audio.src=(window.URL||webkitURL).createObjectURL(blob);
                // audio.play();

                let src = (window.URL||webkitURL).createObjectURL(blob);
                this.radioList.push({src,duration,wink:false,blob})
                console.log(this.radioList,"radioList")

            },function(msg){
                console.log("录音失败:"+msg);
                rec.close();//可以通过stop方法的第3个参数来自动调用close
                rec=null;
            });
        },
        readyOriginal () {
            /***方式一：将blob文件转成base64纯文本编码，使用普通application/x-www-form-urlencoded表单上传***/
            // var reader=new FileReader();
            // reader.onloadend=function(){
            //     var postData="";
            //     postData+="mime="+encodeURIComponent(blob.type);//告诉后端，这个录音是什么格式的，可能前后端都固定的mp3可以不用写
            //     postData+="&upfile_b64="+encodeURIComponent((/.+;\s*base64\s*,\s*(.+)$/i.exec(reader.result)||[])[1]) //录音文件内容，后端进行base64解码成二进制
            //     //...其他表单参数
                
            //     var xhr=new XMLHttpRequest();
            //     xhr.open("POST", api);
            //     xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            //     xhr.onreadystatechange=onreadystatechange("上传方式一【Base64】");
            //     xhr.send(postData);
            // };
            // reader.readAsDataURL(blob);

            // /***方式二：使用FormData用multipart/form-data表单上传文件***/
            // var form=new FormData();
            // form.append("upfile",blob,"recorder.mp3"); //和普通form表单并无二致，后端接收到upfile参数的文件，文件名为recorder.mp3
            // //...其他表单参数
            
            // var xhr=new XMLHttpRequest();
            // xhr.open("POST", api);
            // xhr.onreadystatechange=onreadystatechange("上传方式二【FormData】");
            // xhr.send(form);
            
                // this.isVoice = false
                // <!-- 结束录音 -->
                // recorder && recorder.stop();
                // setTimeout(()=> {
                //     // <!-- 录音上传 -->
                //     var mp3Blob = recorder.upload();
                //     var fd = new FormData();
                //     fd.append('audio', mp3Blob);
                //     this.$http({
                //         header: ({
                //             'Content-Type': 'application/x-www-form-urlencodeed'
                //         }),
                //         method: 'POST',
                //         url: 'url',
                //         data: fd,
                //         withCredentials: true,
                //     }).then((res) => { 
                //         // 这里做登录拦截
                //         if (res.data.isLogin === false) {
                //             router.replace('/login');
                //         } else {
                //             if (res.data.status === 200) {
                //             console.log('保存成功')
                //             } else {
                //             this.returnmsg = '上传失败'
                //             }
                //         }
                //     })
                // },1000)
            
        },
        
    },
}
</script>
<style>
    .recorder-wrapper {
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #00b894;
    }
    .phone {
        margin: 0 auto;
        padding: 55px 11px 53px;
        width: 221px;
        height: 448px;
        font-size: 12px;
        border-radius: 35px;
        background-image: url("https://xiaotianxia.github.io/blog/vuepress/assets/img/iphone-bg1.bf9c75ef.png");
        box-sizing: border-box;
        user-select: none;
    }
    .phone-body {
        height: 100%;
        background-color: #fff;
    }
    .phone-head {
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-weight: bold;
        background-color: #000;
    }
    .phone-head span {
        display: inline-block;
    }
    .phone-head span:nth-child(2) {
        width: 100px;
        text-align: center;
    }
    .phone-head span:nth-child(3) {
        float: right;
        margin-right: 10px;
    }
    .phone-content {
        height: 282px;
        background-color: #f1eded;
    }
    .phone-operate {
        position: relative;
        line-height: 28px;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    .phone-operate:active {
        background-color: #95a5a6;
    }
    .phone-operate:active:before {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        top: -2px;
        content: "";
        width: 0%;
        height: 2px;
        background-color: #7bed9f;
        animation: loading 1s ease-in-out infinite backwards;
    }
    .msg-list {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .msg-list::-webkit-scrollbar {
        display: none;
    }
    .msg-list .msg {
        list-style: none;
        padding: 0 8px;
        margin: 10px 0;
        overflow: hidden;
        cursor: pointer;
    }
    .msg-list .msg .avatar,
    .msg-list .msg .audio,
    .msg-list .msg .duration {
        float: right;
    }
    .msg-list .msg .avatar {
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        background-color: #000;
        background: url("https://denzel.netlify.com/hero.png") 0 0;
        background-size: 100%;
    }
    .msg-list .msg .audio {
        position: relative;
        margin-right: 6px;
        max-width: 116px;
        min-width: 30px;
        height: 24px;
        line-height: 24px;
        padding: 0 4px 0 10px;
        border-radius: 2px;
        color: #000;
        text-align: right;
        background-color: rgba(107, 197, 107, 0.85);
    }
    .msg-list .msg.eg {
        cursor: default;
    }
    .msg-list .msg.eg .audio {
        text-align: left;
    }
    .msg-list .msg .audio:before {
        position: absolute;
        right: -8px;
        top: 8px;
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4px;
        border-color: transparent transparent transparent
            rgba(107, 197, 107, 0.85);
    }
    .msg-list .msg .audio span {
        color: rgba(255, 255, 255, 0.8);
        display: inline-block;
        transform-origin: center;
    }
    .msg-list .msg .audio span:nth-child(1) {
        font-weight: 400;
    }
    .msg-list .msg .audio span:nth-child(2) {
        transform: scale(0.8);
        font-weight: 500;
    }
    .msg-list .msg .audio span:nth-child(3) {
        transform: scale(0.5);
        font-weight: 700;
    }
    .msg-list .msg .audio.wink span {
        animation: wink 1s ease infinite;
    }
    .msg-list .msg .duration {
        margin: 3px 2px;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    @keyframes wink {
        from {
            color: rgba(255, 255, 255, 0.8);
        }
        to {
            color: rgba(255, 255, 255, 0.1);
        }
    }
    @keyframes loading {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
</style>