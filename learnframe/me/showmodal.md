# 第一部分 默认参数

## 1.1 公共参数

### 1.1.1 flag

| dataType| parameter |
| ------------- |:-------------:|
| string | string |

设置弹出`modal`的主题

| stateName | stateMeaning |
| ------------- |:-------------:|
| success | green modal |
| warning | yellow modal |
| info | blue modal   |
| default | blue modal  |

> 使用案例

```javascript
showmodal({flag:"success"})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.1.2 modalIndex

| dataType| parameter
| ------------- |:-------------:|
| string | string

设置模态窗索引值，默认只使用一次弹窗，模态窗的序号默认为`01`。请注意如果当前页面只调用了一次`showmodal`，在使用的时候，不用写这个参数。但是当前页面是第二次或多次调用的时候，一定要设置正确的`modalIndex`，这样每一级的弹窗才会`正常显示`当级的样式和相关回调事件。

> 使用案例

```javascript
showmodal({modalIndex:"02"})
```

### 1.1.3 hideClick

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false|
| string | static  |

设置点击`modal`遮罩层是否隐藏`modal`，默认为`true`,如果设置为`static`,则点击背景模态窗不会关闭

> 使用案例

```javascript
showmodal({hideClick:"static "})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.1.4 SWidth

| dataType| parameter|
| ------------- |:-------------:|
| int | number  |

强制设置模态窗宽度，`分辨率`在`1024`以上的模态窗默认宽度是`580px`，`分辨率`在`1024`以下的模态窗默认宽度是当前`分辨率`的的`百分之九十五`。

> 使用案例

```javascript

showmodal({content:"请确认相关信息是否都填写完成",SWidth:300})
showmodal({isText:false, src: "XXX.html",SWidth:300})
```

__请注意输入具体像素值，请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.1.5 SMaxWidth

| dataType| parameter|
| ------------- |:-------------:|
| int | number   |

设置模态窗最大宽度。

> 使用案例

```javascript
showmodal({content:"请确认相关信息是否都填写完成", SMaxWidth:300})
showmodal({isText:false, src: "XXX.html", SMaxWidth:300})
```

__请注意输入具体像素值，请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.1.6 isZoom

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false|

设置模态窗是否能够进行全屏显示，默认为false，设置为true之后，模态窗默认可以拖动。

> 使用案例

```javascript
showmodal({isZoom:true})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

## 1.2 modal-header相关参数

### 1.2.1 title

| dataType| parameter|
| ------------- |:-------------:|
| string | string|

设置模态窗标题，默认为`提示标题`

> 使用案例

```javascript
showmodal({title:"提示"})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.2.2 titleCenter

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

设置模态窗标题是否水平居中显示，默认为`false`,即`modal`中`header`的文字是左对齐，反之设置为`true`,即`modal`中`header`的文字是水平居中显示.

> 使用案例

```javascript
showmodal({titleCenter:true})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.2.3 Tclose

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

设置右上角关闭按钮是否显示，默认为`true`，即`modal-header`右上角是有×关闭按钮的，如果设置为`flase`，即`modal-header`右上角是没有有`×`关闭按钮的.

> 使用案例

```javascript
showmodal({Tclose:false})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。请注意如果页面需要多次调用`showmodal`，请不要修改此参数。__

## 1.3 modal-body相关参数

### 1.3.1 isText

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

判断传进来`content`的是否为`Text`,默认为`true`，即默认`modal-body`中显示的是非`iframe`的文本或者标签内容，设置为false中则认为`modal-body`中显示的是`iframe`内容。

> 使用案例

```javascript
showmodal({isText:false, src: "XXX.html"})
```

__请注意如果在`modal-body`中显示相关拼接的文本或者标签（非iframe）内容，在使用`showmodal`的时候，不用写这个参数，但是如果想在`modal-body`中显示`iframe`必须要设置这个参数为`false`,同时一定要设置`src`参数。__

### 1.3.2 content

| dataType| parameter|
| ------------- |:-------------:|
| string | string|

如果传进来`content`的为`Text`，通过这个参数修改`modal-body`内容，请注意如果`isText`参数值为`true`，该参数必须要进行修改。

> 使用案例

```javascript
showmodal({content:"请确认相关信息是否都填写完成"})
```

### 1.3.3 contentLeft

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

设置模态窗`modal-body`的`content`是否左对齐显示，默认为`false`，即默认`content`是居中对齐，如果设置为`true`则`content`是左对齐，并且首行缩进两字符。

> 使用案例

```javascript
eg：showmodal({content:"请确认相关信息是否都填写完成",contentLeft:true})
```

__请注意`isText`参数为`true`的时候这个参数才会起作用，必须要和`content`同时设置。请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.3.4 fontSize

| dataType| parameter|
| ------------- |:-------------:|
| int | number   |

设置模态窗`modal-body` 的`content`的字体大小，默认是`24`,即`h3`字体大小。

> 使用案例

```javascript
showmodal({content:"请确认相关信息是否都填写完成",fontSize:13})
```

__请输入具体像素值。请注意`isText`参数为`true`的时候，这个参数才会起作用，必须要和`content`同时设置。请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.3.5 src

| dataType| parameter|
| ------------- |:-------------:|
| string | string|

如果模态窗`modal-body` 的`content`的为`iframe`，修改`iframe`地址。
> 使用案例

```javascript
showmodal({isText:false, src: "XXX.html"})
```

__请注意如果`isText`参数值为`false`，该参数必须要进行修改。__

### 1.3.6 Sheight

| dataType| parameter|
| ------------- |:-------------:|
| int | number  |

强制设置模态窗`modal-body`高度，模态窗默认高度是`auto`，随`modal-body`中的内容自动适应长度。

> 使用案例

```javascript
showmodal({content:"请确认相关信息是否都填写完成",Sheight:100})

showmodal({isText:false, src: "XXX.html",Sheight:100})
```

__请注意输入具体像素值，请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.3.7 SMaxheight

| dataType| parameter|
| ------------- |:-------------:|
| int | number   |

设置模态窗`modal-body`最大高度，模态窗默认高度是`auto`，随`modal-body`中的内容自动适应长度。

> 使用案例

```javascript
showmodal({content:"请确认相关信息是否都填写完成", SMaxheight:100})

showmodal({isText:false, src: "XXX.html",SMaxheight:100})
```

__请注意输入具体像素值，请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

## 1.4 modal-footer相关参数

### 1.4.1 Bclose

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

设置确认按钮是否显示，默认为`true`即默认单行居中显示确定按钮，如果设置为`false`，则不显示确定按钮。

> 使用案例

```javascript
showmodal({Bclose:false})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数，如果需要设置确认按钮有回调函数，请勿修改，该参数值必须为`true`。__

### 1.4.2 Qclose

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

设置取消按钮是否显示，默认为`false`，即默认不显示取消按钮，如果设置为`true`，则显示取消按钮。

> 使用案例

```javascript
showmodal({Qclose: true})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数，如果需要设置取消按钮有回调函数，该参数值必须为`true`。__

### 1.4.3 callbackB

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

判断确认按钮有没有回调函数，默认为`false`，即确认按钮没有回调函数。

> 使用案例

```javascript
showmodal({callbackB:true, callbackBF: function(){ console.log("确认按钮的回调事件");return true;}})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。请注意如果该参数设置为`true`，这个时候参数`Bclose`的值必须为`true`，且必须同时写`callbackBF`方法。__

### 1.4.4 callbackQ

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

判断取消按钮有没有回调函数，默认为`false`，即取消按钮没有回调函数.

> 使用案例

```javascript
showmodal({callbackQ:true, callbackQF: function(){ console.log("取消按钮的回调事件")}})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。请注意如果该参数设置为`true`，这个时候参数`Qclose`的值必须为`true`，且必须同时写`callbackQF`方法。__

### 1.4.5 BcloseText

| dataType| parameter|
| ------------- |:-------------:|
| string | string |

设置确定按钮的文本内容，默认内容为`确定`。

> 使用案例

```javascript
showmodal({BcloseText:"我同意"})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.4.6 QcloseText

| dataType| parameter|
| ------------- |:-------------:|
| string | string |

设置取消按钮的文本内容，默认内容为`取消`。

> 使用案例

```javascript
showmodal({QcloseText:"我不同意"})
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

### 1.4.7 Justify

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false |

设置底部按钮是否`两端对齐`，主要使用状态在底部有两个按钮，希望一左一右的显示，默认为`false`。

> 使用案例

```javascript
showmodal({Justify:true, Qclose: true })
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。该参数需要在参数`Bclose`和`Qclose`值都为`true`的时候才会起效果__

## 1.5 其他自定义扩展参数

### 1.5.1 resetajust

| dataType| parameter|
| ------------- |:-------------:|
| bool | true or false|

设置是否重新计算`modal`的居中效果，默认为`true`，即在`bootstrap js`计算的基础上再重新计算一次，让模态窗更好的`居中显示`。

> 使用案例

```javascript
showmodal({resetajust:false })
```

__请注意如果不需要修改该参数默认值效果，在使用`showmodal`的时候，不用写这个参数。__

# 第二部分 相关回调方法

## 2.1 ajustdialog

重新调整页面居中状态

## 2.2 moveModal

点击模态窗头部让模态窗可移动

## 2.3 callbackBF

在有确认按钮和确认有回调函数情况下的，绑定模态框点击确认之后的回调事件

## 2.4 callbackQF

在有取消按钮和取消有回调函数情况下的，绑定模态框点击确认之后的回调事件

## 2.5 callbackShown

在模态框完全展示出来调用的回调事件

## 2.6 callbackHide

在模态窗关闭之后调用的回调事件

## 2.7 cancelFlow(event)

| dataType| parameter |
| ------------- |:-------------:|
| event | event |

阻止在调用此方法之前的操作

## 2.8 closeModal

关闭当前所绑定的`modalindex`的模态窗

## 2.9 zoomCallback

触发模态窗放大缩小之后的回调函数

# 第三部分 实例demo

## 3.1 不需要修改默认提示的标题仅做修改提示内容

```javascript
showmodal({content:"请确认相关信息是否都填写完成"});
```

## 3.2 需要修改默认提示的标题并修改提示内容相关样式

```javascript
showmodal({
            title: "警告",
            content: "请确认相关信息是否都填写完成",
            SWidth: 200,
            fontSize: 14
        });
```

## 3.3 模态窗body内容左对齐，标题居中对齐显示

```javascript
showmodal({
            title: "警告",
            content: "请确认相关信息是否都填写完成, 请确认相关信息是否都填写完成, 请确认相关信息是否都填写完成",
            SWidth: 400,
            fontSize: 14,
            titleCenter:true,
            contentLeft:true
        });
```

## 3.4 点击模态窗灰色背景处模态窗不会消失

```javascript
showmodal({content:"请确认相关信息是否都填写完成",hideClick:"static "});
```

## 3.5 modal-body内容为iframe

```javascript
    showmodal({
        isText: false,//该参数一定要设置为false，src相关参数才会起作用
        title: "打开百度",
        src: "http://www.baidu.com?key=demo",//该参数用于绑定iframe的地址，也可通过地址传参
        Bclose: false
    });
```

## 3.6 modal-body内容为iframe，且iframe中使用到input

在父级页面中

```javascript
    showmodal({
        isText: false, //该参数一定要设置为false，src相关参数才会起作用
        title: "打开xxx ",
        src: "xxx.aspx?key=demo ",//该参数用于绑定iframe的地址，也可通过地址传参
        Bclose: false
    });
```

在子级页面中添加以下语句

```javascript
$(function () {
  $(document).off('focusin.bs.modal');//避免bootstrap 的input内部聚焦错乱，导致iframe中的input不能正常聚焦，这句话在子页面一定要写。
  $("#txtXXX").focus();
})
```

## 3.7 确认按钮有回调事件（非异步）

```javascript
showmodal({
    title: "警告",
    content: "请确认相关信息是否都填写完成",
    callbackB: true,
    callbackBF:function(){
    //dosomething
    console.log("确认按钮的非异步回调事件");
     return true;
     /*
     请注意一定要写返回值，
     不需要阻断模态窗关闭事件，则直接返回true
     需要阻断模态窗关闭事件，则直接返回false
     */
  }
});
```

## 3.8 确认按钮有回调事件（异步）

```javascript
showmodal({
    title: "警告",
    content: "请确认相关信息是否都填写完成",
    callbackB: true,
    callbackBF:function(){
    var _this=this; // 请注意一定要先在ajax外部指明需要需要使用到的this，这个this即showmodal，这样在ajax内部才能调用到showmodal默认的相关方法
        $.ajax({
            type: "POST",
            url: "RemoteHandle/XXXX.ashx? &T=" + Math.random(),
            dataType: 'text',
            async: false,
            success: function (t) {
                var data = window.eval('(' + t + ')');
                if (data.length > 0) {
          console.log("确认按钮的异步回调事件完成");
          _this.closeModal();
          //请注意在异步事件状态为完成的时候再调用关闭模态窗事件

                }
            }
        });

         return false;// 请注意异步执行的回调方法一定要返回false
  }
});
```

## 3.9 取消按钮有回调事件（非异步）不需要两个按钮两端对齐

```javascript
showmodal({
    title: "警告",
    content: "请确认相关信息是否都填写完成",
  Qclose: true,
    callbackQ: true,
    callbackQF:function(){
    //dosomething
    console.log("取消按钮的非异步回调事件");
     return true;
     /*
     请注意一定要写返回值，
     不需要阻断模态窗关闭事件，则直接返回true
     需要阻断模态窗关闭事件，则直接返回false
     */
  }
});
```

## 3.10  取消按钮有回调事件（非异步）需要两个按钮两端对齐

```javascript
showmodal({
    title: "警告",
    content: "请确认相关信息是否都填写完成",
  Qclose: true,
  Justify:true,
    callbackQ: true,
    callbackQF:function(){
    //dosomething
    console.log("取消按钮的非异步回调事件");
     return true;
  }
});
```

## 3.11  取消按钮有回调事件（异步）

```javascript
showmodal({
    title: "警告",
    content: "请确认相关信息是否都填写完成",
  Qclose: true,
    callbackQ: true,
    callbackQF:function(){
    var _this=this;// 请注意一定要先在ajax外部指明需要需要使用到的this，这个this即showmodal，这样在ajax内部才能调用到showmodal默认的相关方法
        $.ajax({
            type: "POST",
            url: "RemoteHandle/XXXX.ashx? &T=" + Math.random(),
            dataType: 'text',
            async: false,
            success: function (t) {
                var data = window.eval('(' + t + ')');
                if (data.length > 0) {
          console.log("确认按钮的异步回调事件完成");
          _this.closeModal();
          //请注意在异步事件状态为完成的时候再调用关闭模态窗事件

                }
            }
        });

    return false;// 请注意异步执行的回调方法一定要返回false
  }
});
```

## 3.12  需要多次嵌套调用模态窗

```javascript
showmodal({
    title: "提示信息",
    content: "确定吗1",
    modalIndex: "01",
    Qclose: true,
    callbackB: true,
    callbackBF: function() {
      showmodal({
        title: "提示信息",
        modalIndex: "02",
        content: "确定吗2",
        Qclose: true,
        SWidth: "300",
        hideClick: "static",
        fontSize: "18",
        callbackB: true,
        callbackBF: function() {
          showmodal({
            title: "提示信息",
            modalIndex: "03",
            content: "确定吗3",
            Qclose: true,
            SWidth: "200",
            hideClick: "static",
            fontSize: "18"
          });
          return false;
        }
      });
      return false;
    }
});
```

## 3.13  需要使用全屏显示按钮

```javascript
showmodal({
  title: "警告",
  content: "请确认相关信息是否都填写完成, 请确认相关信息是否都填写完成, 请确认相关信息是否都填写完成",
  isZoom: true,
  zoomCallback: function (){
      console.log(this.Sheight,this.SWidth);
  }
});
```