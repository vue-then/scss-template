###### menu

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
 
> -----------------------------------------------------------------------------
###### 字母导航demo，一般用在联系人列表页面，根据右侧的字母可以快速定位到该字母的联系人列表。

该demo分为vue和react两个版本。

查看效果图：

![1.gif](https://github.com/keenjaan/alphabetical-index-navigation/blob/master/shot/1.gif)

**本项目的webpack配置不是实际项目中的配置，只是方便查看效果而建的简单的项目**

~~~
git clone https://github.com/keenjaan/alphabetical-index-navigation.git

npm i

// 查看vue版本
npm run vue

// 查看react版本
npm run react
~~~

关于代码解析请移步[博客](http://www.jianshu.com/p/fa173a1cd47b)


> -----------------------------------------------------------------------------
###### better-keyboard
A js keyboard component for mobile.

![better-keyboard preview](./demo.gif)  

## 立即使用

```HTML
<body>
  <script type="text/javascript" src="jkeyboard.js"></script>
  <script type="text/javascript">
    var keyboard = new JKeyboard({
      onInput: function (key, rs) {
          // do something
      },
      onClose: function () {
         // do something
      },
      onShow: function () {
         // do something 
      },
      onDelete: function (rs) {
         // do something
      }
    });                             
  </script>
</body>
```  

## 通过npm引入

安装better-keyboard

```shell
npm install better-keyboard --save-dev
```
引入better-keyboard

```javascript
import JKeyboard from 'better-keyboard'
````

测试demo页

```shell
npm run dev
```

打开浏览器访问如下地址, 查看效果

> localhost:9090  

## Options 参数  

-  defaultResult: `[]` 默认值
-  containEl:  `body` 父级容器
-  closeTitle: `完成` 关闭按钮文本
-  max:  `6` 最大长度

## Events 事件

-  onInput  点击数字按钮
-  onClose  键盘关闭
-  onClosed 关闭动画结束后 
-  onShow  键盘打开
-  onDelete 点击删除按钮  

## 实例方法

-  show  打开键盘
-  close  关闭键盘
-  empty 清空输入值
-  setResult  设置输入值
-  getResult 获取当前输入值
-  closeAndClear 关闭并清空已输入的值


> -----------------------------------------------------------------------------
###### Element

> -----------------------------------------------------------------------------
###### exercise-demo
# 小练习

## [原生 JavaScript 实现扫雷游戏](https://github.com/caijinyc/game-mineSweepinng)
[预览地址](https://caijin.tech/demo/mineSweeping/index.html)

刚学 JS 的时候用 JS 简单实现的一个小游戏。

## [简单实现的轮播图](https://github.com/caijinyc/ex-demo/tree/master/slider)
[预览地址](https://caijin.tech/exercise-demo/slider/)

简单实现的一个轮播图，后期准备使用 vue 进行封装完善。

## [移动端字母索引导航](https://github.com/caijinyc/ex-demo/tree/master/list-view)
[预览地址](https://caijin.tech/demo/list-view/index.html#/)

vue + better-scroll 实现移动端歌手列表字母索引导航，务必使用调试模式下的手机模式查看，切换后请刷新页面。

> -----------------------------------------------------------------------------
######  Table of Contents
- [Quickstart](#quickstart)
- [Documentation](#documentation)
- [Supported Browsers](#supported-browsers)
- [Changelog](#changelog)
- [Testing](#testing)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

> -----------------------------------------------------------------------------
###### Element

> -----------------------------------------------------------------------------
###### Element


> -----------------------------------------------------------------------------
###### Element

> -----------------------------------------------------------------------------
###### Element