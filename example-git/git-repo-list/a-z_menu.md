# menu

> A Vue.js project

## 用Vue撸一个『A-Z字母滑动检索菜单』

``` bash
# 安装
npm install

# 项目运行
npm run dev

```

最近用vue仿写途牛旅行APP 遇到了这样的城市列表选择页面，花了些时间，用Vue实现了一下并让它体验的接近 安卓/IOS 原生组件


很多地方都会有这样的侧边栏字母列表菜单，可以滑动实现内容列表联动。

比如手机**通讯录**，**城市切换页面**都会用到

## 实现效果

![](https://user-gold-cdn.xitu.io/2018/8/11/16524dc5471a69dd?w=318&h=568&f=gif&s=1587149)

在线体验：[http://hx-dl.top/a-z_menu/#/city](http://hx-dl.top/a-z_menu/#/city)

## 技术点

 - better-scroll 实现城市列表滑动
 - evnetBus总线机制实现兄弟组件通信
 - axios请求城市列表数据
 - stylus实现高效css编写
 - 函数节流减少滑动事件开销
 