# demoArray

这里主要集中了我平时一些小想法的单页面集合

# 目录

## 一 learnBaseCss

> 1 [learnPosition](https://mowatermelon.github.io/demoArray/basecss/learnPosition.html)

枚举`css`中`position`的使用情况，更好的理解`position`

> 2 [marginHack](https://mowatermelon.github.io/demoArray/basecss/marginHack.html)

absolute的破坏性太大，有些情况可以使用margin代码会更简洁，主要是margin负值的妙用

> 3 [beauty-inputfile](https://mowatermelon.github.io/demoArray/basecss/beauty-inputfile-demo.html)

网页中需要用到上传按钮对文件进行上传，但是默认的样式有点丑，我这边重写了一个，然后限制的是只能上传jpg,jpeg,pdf,png格式，如果格式正确，文件名会自动显示在a标签中。处理了多个板块附件分别上传处理，并且判断当前浏览器状态，加载对应的modaljs效果，在移动端和pc端看的错误弹窗提示有一定不同。

## 二 learnBasejs

> 1 [A4demo](https://mowatermelon.github.io/demoArray/basejs/a4Demo.html)

仿造A4的动态页面效果，默认是有两页，在两页中textarea填写超过内容之后，页面会自动新增页，并将超出页面内容的文本复制到新页的textarea中

> 2 [learnObject](https://mowatermelon.github.io/demoArray/basejs/learnObject.js)

学习和使用js中对象的属性和方法，使用方法`clone`到本地，如果你想学习某个类直接把这个类前面的注释放开，然后在命令行中输入`node learnObject.js`就可以看到相关对象属性和对象的使用结果。

```javascript
//learnObject();
//learnBoolean();
//learnNumber();
//learnString();
//learnArray();
//learnDate();

//举个栗子 你想看String的属性和方法就把learnString();前面的注释去掉就好。去掉之后的结果应该是
//learnObject();
//learnBoolean();
//learnNumber();
learnString();
//learnArray();
//learnDate();
```

> 3 [learnPromt](https://mowatermelon.github.io/demoArray/basejs/learnPromt.html)

学习和使用js中Promt的使用

## 三 learnframe

### 1 frameByMe

> 1.1 [PC版showmodal](https://mowatermelon.github.io/demoArray/learnframe/me/pcShowModal.html)

基于jquery和bootstrapjs的一个模态窗插件，支持多种参数设置，实战案例

> 1.2 [PC版showmodal使用手册](https://mowatermelon.github.io/demoArray/learnframe/me/showmodal.md)

基于jquery和bootstrapjs的一个模态窗插件，支持多种参数设置，使用手册

> 1.3 [animatePanel](https://mowatermelon.github.io/demoArray/learnframe/me/animatePanel.html)

做的一个折叠面板动画，样式主要是仿造bootstrap写的样式

### 2 frameByother

> 1.1 [learnIviewer](https://mowatermelon.github.io/demoArray/learnframe/other/learnIviewer.html)

学习Iviewer的使用