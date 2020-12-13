// var vueNotifyUmd = require("./vue-notify.umd")

Vue.use(VuejsDialog.main.default, {
    html: true,
    loader: false,
    okText: 'Proceed--okText',
    cancelText: 'Cancel--CancelTexg',
    animation: 'bounce',
    message: 'Some message'
})
// console.log('Notify: ', Notify)
console.log('Notify: ', notify)
// console.log('Notify: ', window.notify)

// https://github.com/BinarCode/vue-notifyjs
Vue.use(notify.default,{type: 'danger', closeOnClick: false})

const loginView = Vue.extend({
    data() {
        return {
            items: [{
                    name: 'Apple',
                    count: 1
                },
                {
                    name: 'Bananna',
                    count: 2
                },
                {
                    name: 'Cherry',
                    count: 3
                }
            ]
        }
    },
    mixins: [VuejsDialog.mixin.default],
    template: '#dialog-login-template',
    methods: {
        handleSelect() {
            console.log(this.items,'items')
        },
        handleDismiss() {
            this.cancel()
        },
        handleProceed() {
            this.proceed(this.items)
        }
    }
})

Vue.dialog.registerComponent('login-view', loginView)

const CustomView = Vue.extend({
    data() {
        return {
            items: [{
                    name: 'Apple',
                    count: 1
                },
                {
                    name: 'Bananna',
                    count: 2
                },
                {
                    name: 'Cherry',
                    count: 3
                }
            ]
        }
    },
    mixins: [VuejsDialog.mixin.default],
    template: '#custom-view-template',
    methods: {
        handleSelect(index) {
            let newData = this.items[index]
            newData.count = (newData.count + 1)
            this.$set(this.items, index, newData)
        },
        handleDismiss() {
            this.cancel()
        },
        handleProceed() {
            this.proceed(this.items)
        }
    }
})

Vue.dialog.registerComponent('custom-view', CustomView)

const CustomView2 = Vue.extend({
    data() {
        return {
            items: [{
                    name: 'Apple',
                    count: 1
                },
                {
                    name: 'Bananna',
                    count: 2
                },
                {
                    name: 'Cherry',
                    count: 3
                }
            ]
        }
    },
    mixins: [VuejsDialog.mixin.default],
    template: `
         <div class="dg-content">
            <p v-for="item in items" :count="item.count" @click="con(item.name)">{{item.name}}</p>
         </div>
    `,
    methods: {
        handleSelect(index) {
            let newData = this.items[index]
            newData.count = (newData.count + 1)
            this.$set(this.items, index, newData)
        },
        // 取消方法
        handleDismiss() {
            this.cancel()
        },
        // 确认方法
        handleProceed() {
            this.proceed(this.items)
        },
        con(name) {
            console.log(name)
            this.proceed(this.items)
        }
    }
})


var trans = function (str) {
    return str;
}
// <!-- 弹出框的自定义方法2 -->
const DIALOG_TEST_VIEW = 'test'

const exitMessage = `\
<p style="text-align: center; margin: 0;">
    <span class="dg-highlight-1">Thank You!</span>
     <br/><br/>
     I hope you find it useful
</p>`



new Vue({
    el: "#app",
    data: {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
            topCenter: false
        },
        exitMessage,
        forms: {
            demo1: {
                name: null
            }
        }
    },
    mounted() {

        // TestView 为一个vue组件对象
        var TestView = {
            template: exitMessage
        }

        // 注册对应的组件，可以写对应的vue组件
        // 弹出框的自定义方法2
        this.$dialog.registerComponent(DIALOG_TEST_VIEW, CustomView2)
        // 弹出框的自定义方法1


    },
    methods: {
        // notify use
        addNotification (verticalAlign = 'top', horizontalAlign = 'right') {
            const color = Math.floor(Math.random() * 4 + 1);
            this.$notify({
                message: 'Sample message',
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: this.type[color],
                closeOnClick: true
            });
        },
        addNotificationNoTimeout (verticalAlign = 'top', horizontalAlign = 'right') {
            const color = Math.floor(Math.random() * 4 + 1);
            this.$notify({
                message: 'No timeout',
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: this.type[color],
                timeout: 0
            });
        },
        addNotificationNoCloseOnClick (verticalAlign = 'top', horizontalAlign = 'right') {
            const color = Math.floor(Math.random() * 4 + 1);
            this.$notify({
                message: 'No close on click',
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: this.type[color],
                closeOnClick: false
            });
        },
        addNotificationNoCloseIcon (verticalAlign = 'top', horizontalAlign = 'right') {
            const color = Math.floor(Math.random() * 4 + 1);
            this.$notify({
                message: 'No close icon',
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: this.type[color],
                showClose: false
            });
        },
        addNotificationWithClickHandler (verticalAlign = 'top', horizontalAlign = 'right') {
            const color = Math.floor(Math.random() * 4 + 1);
            this.$notify({
                message: 'With click handler',
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: this.type[color],
                timeout: 0,
                showClose: false,
                closeOnClick: true,
                onClick: (event) => {
                    alert('You clicked a notification');
                }
            });
        },
        removeNotifications() {
            this.$notifications.clear();
        },
        // notify use
        trans,
        submitDemo1Form() {
            let msg = trans('你的名字') + ': '
            msg += this.forms.demo1.name || trans('名称字段为空')
            console.log(this,'this')
            this.$notify(msg)
            // notify.Notification.store.notify(msg)
            // console.log(notify.Notification.store.notify)
            // notify.Notification(msg)
        },
        showAlertDialog() {
            console.log(this.$notifications,'notifications')
            this.$dialog.alert(trans('这是一个警报对话框。 点击下面的按钮关闭。'))
        },
        showPromptDialog() {
            this.$dialog.prompt({
                    title: 'Let\'s hear from you',
                    body: trans('生命中最重要的是什么？'),
                    loader: true
                })
                .then((dialog) => {
                    this.$dialog.alert(dialog.data || '[empty]')
                })
        },
        showBasicDialog() {
            this.$dialog.confirm(trans('这是一个基本的确认对话框。 点击任一按钮立即关闭对话框'))
                .then(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('你点击继续')
                    })
                })
                .catch(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('关闭，因为已被点击')
                    })
                })
        },
        showBasicDialogCloseClickOutside() {
            this.$dialog.confirm(trans('这是一个基本的确认对话框。 点击任一按钮立即关闭对话框'), {
                    backdropClose: true
                }).then(() => {
                    this.$notify({
                        type: 'success',
                        message: "你点击继续"
                    })
                })
                .catch(() => {
                    this.$notify({
                        type: 'success',
                        message: this.trans('关闭，因为已被点击')
                    })
                })
        },

        showSoftConfirmDialog() {
            this.$dialog.confirm(trans('messages.soft'), {
                    type: 'soft'
                })
                .then(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('你点击继续')
                    })
                })
                .catch(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('关闭，因为已被点击')
                    })
                })
        },
        showHardConfirmDialog() {
            this.$dialog.confirm(trans('这是一个难以确认的对话框。用户的输入必须匹配 <span class="dg-highlight-1">验证</span> <span class="dg-highlight-1">文本</span>为了继续。'), {
                    type: 'hard',
                    html: true,
                    verification: 'let me go hahahha'
                })
                .then(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('你点击继续')
                    })
                })
                .catch(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('关闭，因为已被点击')
                    })
                })
        },
        showHtmlDialog() {
            this.$dialog.alert(trans('此对话框启用了<b class="dg-highlight-1">超文本标记语言</b>。 点击下面的按钮关闭。'), {
                html: true,
                okText: trans('dismiss')
            })
        },
        showAnimationBounceDialog() {
            this.$dialog.alert(trans('此对话框启用了<b class="dg-highlight-1">超文本标记语言</b>。 点击下面的按钮关闭。'), {
                html: true,
                animation: 'bounce'
            })
        },
        showAnimationFadeDialog() {
            this.$dialog.alert(trans('此对话框启用了<b class="dg-highlight-1">超文本标记语言</b>。 点击下面的按钮关闭。'), {
                html: true,
                animation: 'fade'
            })
        },
        // <!-- 弹出框的自定义方法2 -->
        showDialogWithCustomView() {
            this.$dialog.confirm({
                    title: 'Show some love!',
                    body: 'Kindly share the plugin if you consider it useful'
                }, {
                    view: DIALOG_TEST_VIEW, //注意常量的统一，指定一个弹出框
                    html: true,
                    animation: 'fade',
                    backdropClose: true
                })
                .then(dialog => {
                    // 点击确认方法后
                    // 直接调用返回的数据
                    console.log(dialog.data)

                    const ENCODED_TITLE = encodeURIComponent('A dialog plugin for VueJs')
                    const ENCODED_URL = encodeURIComponent('https://github.com/godofbrowser/vuejs-dialog')

                    let links = {
                        facebook: `https://www.facebook.com/sharer/sharer.php?u=${ENCODED_URL}&t=${ENCODED_TITLE}`,
                        twitter: `https://twitter.com/share?url=${ENCODED_URL}&text=${ENCODED_TITLE}`,
                        googleplus: `https://plus.google.com/share?url=${ENCODED_URL}`,
                        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${ENCODED_URL}&title=${ENCODED_TITLE}`
                    }

                    const network = dialog.data

                    if (links[network]) {
                        popupWindow(links[network], network)
                    }
                })
        },

        showLoadingDialog() {
            this.$dialog.confirm(trans('这是一个加载对话框。 点击继续按钮后，加载程序将启动'), {
                html: true,
                okText: trans('继续'),
                loader: true
            }).then((dialog) => {
                setTimeout(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('如果你看到我，那么装载机已经完成了')
                    })
                    dialog.close()
                }, 2500)

            }).catch(() => {
                this.$notify({
                    message: trans('你点击取消，所以没有加载')
                })
            })
        },

        showReversedDialog() {
            this.$dialog.confirm(trans('左侧按钮是此对话框中的“继续”按钮。 点击以获得反向按钮的感觉'), {
                html: true,
                okText: trans('继续'),
                loader: true,
                reverse: true
            }).then((dialog) => {
                setTimeout(() => {
                    this.$notify({
                        type: 'success',
                        message: trans('如果你看到我，那么装载机已经完成了')
                    })
                    dialog.close()
                }, 2500)

            }).catch(() => {
                this.$notify({
                    message: trans('你点击取消，所以没有加载')
                })
            })
        },
        clickOkHandler(dialog) {
            console.log('Dialog: ', dialog)
            dialog.loading && dialog.close()
            this.$notify({
                type: 'success',
                message: trans('你点击继续')
            })
        },
        clickCancelHandler() {
            this.$notify({
                type: 'error',
                message: trans('关闭，因为已被点击')
            })
        },
        showDialog() {
            this.$dialog.confirm('Choose multiple items', {
                    view: 'custom-view',
                    customClass: 'has--list-items'
                })
                .then((dialog) => {
                    console.log('Dialog ok: ', dialog)

                    // dialog.close && dialog.close()

                    let text = dialog.data.map(item => {
                        return item.count ? item.count + '-' + item.name : null
                    }).filter(i => !!i).join(', ')

                    let msg = `You selected ${text || 'none'}`

                    this.$dialog.alert(msg, {
                        animation: 'zoom'
                    })
                })
        },
        showDialogLogin() {
            this.$dialog.confirm('登录', {
                    view: 'login-view',
                    customClass: 'login-view'
                })
                .then((dialog) => {
                    console.log('Dialog ok: ', dialog)

                    dialog.close && dialog.close()

                    let text = dialog.data.map(item => {
                        return item.count ? item.count + '-' + item.name : null
                    }).filter(i => !!i).join(', ')

                    let msg = `You selected ${text || 'none'}`

                    this.$dialog.alert(msg, {
                        animation: 'zoom'
                    })
                })
        },
    }
})