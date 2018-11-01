"use strict"
/**
 * 页面进度提示弹窗
 * @param {Number} type 需要进行提示的信息
 */
function fnWait(type) {
  if (type === undefined) {
    type = 3;
  }
  type = Number(type);
  if (type > 3) {
    type = 3;
  }
  let layerIndex = layui.layer.load(type);
  window.layerIndex = layerIndex;
  return function () {
    layui.layer.close(layerIndex);
  }
}
/**
 * 页面错误弹窗提示
 * @param {String} msg 需要进行提示的信息
 * @param {Number} modalIndex 弹窗的索引值
 * @param {Boolean} isCloseAll 是否关闭所有的弹窗，如果是错误提示弹窗，请传false
 * @param {Number} animType 弹窗动画类型的索引值
 * 0	平滑放大。默认
 * 1	从上掉落
 * 2	从最底部往上滑入
 * 3	从左滑入
 * 4	从左翻滚
 * 5	渐显
 * 6	抖动
 */
function fnAlert(msg, modalIndex, isCloseAll, animType) {
  if (!msg) {
    return;
  }
  let layer = layui.layer;
  if (!modalIndex) {
    modalIndex = 1;
  }
  modalIndex = Number(modalIndex);
  if (!!layer.zIndex) {
    modalIndex += layer.zIndex;
  } else {
    modalIndex += 19091016;
  }
  if (isCloseAll === undefined || isCloseAll === null) {
    isCloseAll = true; //默认关闭所有的弹窗
  }
  if (animType === undefined || !Number(animType) || (Number(animType) && animType > 6)) {
    animType = 0; //默认没有动画
  }
  let layerIndex = 0;
  let res = layer.open({
    id: 'fnAlert',
    type: 1,
    title: '提示',
    anim: animType,
    content: '<div class="text-left p-4">' + msg + '</div>',
    zIndex: modalIndex,
    area: ['360px', ''],
    btn: ['确认'],
    success: function (layero) {
      layerIndex = layer.index;
      this.layerIndex = layerIndex;
      window.layerIndex = layerIndex;
    },
    end: function (layero, index) {
      if (isCloseAll) {
        layer.closeAll();
      }
      return true;
    }
  });

  return res;
}

/**
 * 页面普通msg弹窗提示
 * @param {String} msg 需要进行提示的信息
 * @param {Number} timeEnd 弹窗的自动关闭的时长，以毫秒为单位。
 * @param {Number} modalIndex 弹窗的索引值
 * @param {Number} animType 弹窗动画类型的索引值
 * 0	平滑放大。默认
 * 1	从上掉落
 * 2	从最底部往上滑入
 * 3	从左滑入
 * 4	从左翻滚
 * 5	渐显
 * 6	抖动
 */
function fnTip(msg, timeEnd, modalIndex, animType) {
  if (!msg) {
    return;
  }
  let layer = layui.layer;
  if (!modalIndex) {
    modalIndex = 1;
  }
  modalIndex = Number(modalIndex);
  if (!!layer.zIndex) {
    modalIndex += layer.zIndex;
  } else {
    modalIndex += 19091016;
  }
  let defaultTime = 1000;
  if (!timeEnd) {
    timeEnd = defaultTime;
  } else {
    if (!Number(timeEnd)) {
      timeEnd = defaultTime;
    }
  }
  if (animType === undefined || !Number(animType) || (Number(animType) && animType > 6)) {
    animType = 0; //默认没有动画
  }
  let layerIndex = layer.msg(msg, {
    id: 'fnTip',
    zIndex: modalIndex,
    time: timeEnd,
    anim: animType,
  }, function () {
    return true;
  });
  window.layerIndex = layerIndex;
  return layerIndex;
}

/**
 * 页面提示弹窗，并且弹窗加载之后，有回调事件
 * @param {String} msg 需要进行提示的信息，不可缺省
 * @param {Object} modalObj 存储所有弹窗需要的缺省值对象
 *      @param01 {String} title 模态窗需要绑定的的模态窗标题 ，可缺省、
 *      @param02 {Boolean} needQ 模态窗是否需要取消按钮 ，可缺省
 *      @param03 {Boolean} needB 模态窗是否需要确认按钮 ，可缺省
 *      @param04 {Boolean} showMax 模态窗是否需要最大化最小化按钮 ，可缺省
 *      @param04 {Boolean} showShade 模态窗是否需要遮罩层 ，可缺省
 *      @param05 {Number} modalIndex 模态窗需要绑定的的模态窗索引值 ，可缺省
 *      @param06 {Number} width 模态窗需要绑定的的模态窗宽度值，可缺省
 *      @param07 {Number} height 模态窗需要绑定的的模态窗高度值，可缺省
 *      @param08 {Number} animType 弹窗动画类型的索引值，可缺省
 *                       0	平滑放大。默认
 *                       1	从上掉落
 *                       2	从最底部往上滑入
 *                       3	从左滑入
 *                       4	从左翻滚
 *                       5	渐显
 *                       6	抖动
 *      @param04 {Boolean} drag 模态窗是否需要能够拖拽 ，可缺省
 * @param {Function} showCallback 弹窗加载完成之后需要执行的回调函数，可缺省
 * @param {Function} BCallback 确认按钮需要执行的回调函数，不可缺省
 * @param {Function} cancelCallback 取消按钮需要执行的回调函数，可缺省
 * @param {Function} hideCallback 弹窗关闭之后需要执行的回调函数，可缺省
 * @param {Function} dragCallback 弹窗拖拽之后需要执行的回调函数，可缺省
 * @return {Number} layerIndex 当前弹窗的index值
 */
function fnAlertShow(msg, modalObj, showCallback, BCallback, cancelCallback, hideCallback, dragCallback) {
  if (!msg) {
    return;
  }
  if (!modalObj) {
    modalObj = {};
  }
  if (!modalObj.title) {
    modalObj.title = '提示信息';
  }
  if (modalObj.needB === undefined) {
    modalObj.needB = true;
  }
  if (modalObj.needQ === undefined) {
    modalObj.needQ = false;
  }
  if (modalObj.showMax === undefined) {
    modalObj.showMax = true;
  }
  if (modalObj.showShade === undefined) {
    modalObj.showShade = true;
  }
  let layer = layui.layer;
  if (!modalObj.modalIndex) {
    modalObj.modalIndex = 1;
  }
  modalObj.modalIndex = Number(modalObj.modalIndex);
  if (!!layer.zIndex) {
    modalObj.modalIndex += layer.zIndex;
  } else {
    modalObj.modalIndex += 19091016;
  }
  if (!modalObj.width) {
    modalObj.width = 360;
  }
  if (!modalObj.height) {
    modalObj.height = '';
  }
  if (!!modalObj.height && modalObj.height > 500) {
    modalObj.height = 500;
  }
  let tempArr = [];
  if (modalObj.needB) {
    tempArr.push('确认');
  }
  if (modalObj.needQ) {
    tempArr.push('取消');
  }
  if (modalObj.animType === undefined || !Number(modalObj.animType) || (Number(modalObj.animType) && modalObj.animType > 6)) {
    modalObj.animType = 0; //默认没有动画
  }
  if (!modalObj.hasOwnProperty('drag')) {
    modalObj.drag = true;
  }
  let layerIndex = 0;
  let dragFun = function (layero) {
    let tempCheck = true;
    if (typeof dragCallback === 'function') {
      let temp = dragCallback();
      if (temp !== undefined) {
        tempCheck = temp;
      }
    }
    return tempCheck;
  }
  layer.open({
    type: 1,
    title: modalObj.title,
    area: [modalObj.width + 'px', modalObj.height + 'px'],
    content: '<div class="layui-form h-100" lay-filter="fnAlertShowFilter">' + msg + '</div>',
    maxHeight: 500,
    anim: modalObj.animType,
    maxmin: modalObj.showMax,
    zIndex: modalObj.modalIndex,
    shade: modalObj.showShade ? [0.3, '#393D49'] : false,
    resize: modalObj.drag,
    success: function (layero, index) {
      layerIndex = layer.index;
      this.layerIndex = layerIndex;
      window.layerIndex = layerIndex;
      if (typeof showCallback === 'function') {
        showCallback(index, layero, function () {
          layer.close(layerIndex);
        });
      }
    },
    btn: tempArr,
    yes: function (index, layero) {
      let _this = this;
      let tempCheck = true;
      if (typeof BCallback === 'function') {
        let temp = BCallback(index, layero, function () {
          layer.close(layerIndex);
        });
        if (temp !== undefined) {
          tempCheck = temp;
        }
      }
      return tempCheck;
    },
    btn2: function (index, layero) {
      if (typeof cancelCallback === 'function') {
        cancelCallback(index, layero, function () {
          layer.close(layerIndex);
        });
      }
    },
    end: function (layero, index) {
      if (typeof hideCallback === 'function') {
        hideCallback(index, layero, function () {
          layer.close(layerIndex);
        });
      }
      try {
        layer.closeAll('tips'); //关闭所有的tips层
      } catch (e) {}
      return true;
    },
    resizing: dragFun,
    full: dragFun,
    min: dragFun,
    restore: dragFun
  });
  let element = layui.element;
  let form = layui.form;
  element.init();
  form.render(null, 'fnAlertShowFilter');
  return layerIndex;
}

/**
 * 页面提示弹窗，并且弹窗关闭之后，有回调事件
 * @param {String} msg 需要进行提示的信息
 * @param {Number} modalIndex 模态窗需要绑定的的模态窗索引值
 * @param {Function} hideCallback 弹窗关闭之后需要执行的回调函数
 * @param {Number} animType 弹窗动画类型的索引值
 * 0	平滑放大。默认
 * 1	从上掉落
 * 2	从最底部往上滑入
 * 3	从左滑入
 * 4	从左翻滚
 * 5	渐显
 * 6	抖动
 * @return {Number} layerIndex 当前弹窗的index值
 */
function fnAlertHide(msg, modalIndex, hideCallback, animType) {
  if (!msg) {
    return;
  }
  let layer = layui.layer;
  if (!modalIndex) {
    modalIndex = 1;
  }
  modalIndex = Number(modalIndex);
  if (!!layer.zIndex) {
    modalIndex += layer.zIndex;
  } else {
    modalIndex += 19091016;
  }
  let layerIndex = 0;
  if (animType === undefined || !Number(animType) || (Number(animType) && animType > 6)) {
    animType = 0; //默认没有动画
  }
  layer.open({
    type: 1,
    id: 'fnAlertHide',
    title: '请确认',
    content: '<div class="layui-form h-100" lay-filter="fnAlertHideFilter">' + msg + '</div>',
    maxHeight: 380,
    maxmin: true,
    anim: animType,
    zIndex: modalIndex,
    success: function () {
      layerIndex = layer.index;
      this.layerIndex = layerIndex;
      window.layerIndex = layerIndex;
    },
    end: function (layero, index) {
      if (typeof hideCallback === 'function') {
        hideCallback(layero, index, function () {
          layer.close(layerIndex);
        });
      }
    },
    btn: ['确认', '取消']
  });
  let element = layui.element;
  let form = layui.form;
  element.init();
  form.render(null, 'fnAlertHideFilter');
  return layerIndex;
}

/**
 * 弹出确认框
 * @param {String} msg 需要进行确认的内容
 * @param {Function} BCallback 确认按钮需要执行的回调函数
 * @param {Number} modalIndex 模态窗需要绑定的的模态窗索引值
 * @return {Number} layerIndex 当前弹窗的index值
 * @param {Function} QCallback 取消按钮需要执行的回调函数
 * @param {Function} hideCallback 弹窗关闭之后需要执行的回调函数，可缺省
 * @param {Number} animType 弹窗动画类型的索引值
 * 0	平滑放大。默认
 * 1	从上掉落
 * 2	从最底部往上滑入
 * 3	从左滑入
 * 4	从左翻滚
 * 5	渐显
 * 6	抖动
 */
function fnConfirm(msg, BCallback, modalIndex, QCallback, hideCallback, animType) {
  if (!msg) {
    return;
  }
  let layer = layui.layer;
  let tempId = 'fnConfirm';
  if (!modalIndex) {
    modalIndex = 1;
  }
  modalIndex = Number(modalIndex);
  tempId += modalIndex;
  if (!!layer.zIndex) {
    modalIndex += layer.zIndex;
  } else {
    modalIndex += 19091016;
  }
  if (animType === undefined || !Number(animType) || (Number(animType) && animType > 6)) {
    animType = 0; //默认没有动画
  }
  let layerIndex = 0;
  layer.open({
    type: 1,
    id: tempId,
    title: '提示',
    area: ['360px', ''],
    content: '<div class="text-left p-4">' + msg + '</div>',
    btn: ['确认', '取消'],
    maxHeight: 380,
    // maxmin: true,
    anim: animType,
    zIndex: modalIndex,
    success: function () {
      layerIndex = layer.index;
      this.layerIndex = layerIndex;
      window.layerIndex = layerIndex;
    },
    yes: function (index, layero) {
      let _this = this;
      let tempCheck = true;
      if (typeof BCallback === 'function') {
        let temp = BCallback(index, layero, function () {
          layer.close(layerIndex);
        });
        if (temp !== undefined) {
          tempCheck = temp;
        }
      }
      return tempCheck;
    },
    btn2: function (index, layero) {
      let _this = this;
      let tempCheck = true;
      if (typeof QCallback === 'function') {
        let temp = QCallback(index, layero, function () {
          layer.close(layerIndex);
        });
        if (temp !== undefined) {
          tempCheck = temp;
        }
      }
      return tempCheck;
    },
    end: function (layero, index) {
      if (typeof hideCallback === 'function') {
        hideCallback(index, layero, function () {
          layer.close(layerIndex);
        });
      }
      return true;
    },
  });
  return layerIndex;
}

/**
 * 弹出确认框
 * @param {Array} obj 需要填写内容的input group对象，不可缺省
 * 形如 [
 * {
 *  "id":"txtUserName",
 *  "name":"用户名",
 * "type":"text"
 * },
 * {
 *  "id":"txtUserPassword",
 *  "name":"密码",
 * "type":"password"
 * },
 * {
 *  "id":"txtUserSex",
 *  "name":"性别",
 * "type":"select",
 * "option":["男","女"]
 * },
 * {
 *  "id":"txtUserNote",
 *  "name":"备注",
 * "type":"textarea"
 * }
 * ]
 * @param {Function} showCallback 模态窗加载之后需要执行的回调函数，可缺省
 * @param {Function} BCallback 确认按钮需要执行的回调函数，不可缺省
 * @param {Number} modalIndex 弹窗的索引值，可缺省
 * @param {Object} modalObj 存储所有弹窗需要的缺省值对象
 *      @param01 {Number} width 模态窗需要绑定的的模态窗宽度值，可缺省
 *      @param02 {Number} height 模态窗需要绑定的的模态窗高度值，可缺省
 *      @param03 {Number} animType 弹窗动画类型的索引值，可缺省
 *                       0	平滑放大。默认
 *                       1	从上掉落
 *                       2	从最底部往上滑入
 *                       3	从左滑入
 *                       4	从左翻滚
 *                       5	渐显
 *                       6	抖动
 *      @param04 {Boolean} showMax 模态窗是否需要最大化最小化按钮 ，可缺省
 * @param {Function} cancelCallback 取消按钮需要执行的回调函数，可缺省
 * @param {Function} hideCallback 弹窗关闭之后需要执行的回调函数，可缺省
 * @param {Function} dragCallback 弹窗拖拽之后需要执行的回调函数，可缺省
 * @return {Number} layerIndex 当前弹窗的index值
 */
function fnFormDialog(title, obj, showCallback, BCallback, modalIndex, modalObj, cancelCallback, hideCallback, dragCallback) {
  if (!obj) {
    return;
  }
  if (!title) {
    title = '请确认';
  }
  let layer = layui.layer;
  let element = layui.element;
  let form = layui.form;
  if (!modalIndex) {
    modalIndex = 1;
  }
  modalIndex = Number(modalIndex);
  if (!!layer.zIndex) {
    modalIndex += layer.zIndex;
  } else {
    modalIndex += 19091016;
  }
  if (!modalObj) {
    modalObj = {};
  }
  if (!modalObj.width) {
    modalObj.width = 360;
  }
  if (!!modalObj.width && modalObj.width > 1000) {
    modalObj.width = 600;
  }
  if (!!modalObj.width) {
    modalObj.width += 'px';
  }
  if (!modalObj.height) {
    modalObj.height = '';
  }
  if (!!modalObj.height && modalObj.height > 747) {
    modalObj.height = 747;
  }
  if (!!modalObj.height) {
    modalObj.height += 'px';
  }

  if (modalObj.isClose === undefined) {
    modalObj.isClose = true;
  }
  if (!modalObj.hasOwnProperty("showMax")) {
    modalObj.showMax = true;
  }
  if (modalObj.animType === undefined || !Number(modalObj.animType) || (Number(modalObj.animType) && modalObj.animType > 6)) {
    modalObj.animType = 0; //默认没有动画
  }
  let layerIndex = 0;
  let dragFun = function (layero) {
    if (typeof dragCallback === 'function') {
      dragCallback();
    }
    return true;
  }
  layer.open({
    type: 1,
    id: 'fnFormDialog',
    title: title,
    content: translateObjectToForm(obj),
    btn: ['确认', '取消'],
    zIndex: modalIndex,
    maxmin: modalObj.showMax,
    anim: modalObj.animType,
    area: [modalObj.width, modalObj.height],
    success: function (layero, index) {
      layerIndex = layer.index;
      this.layerIndex = layerIndex;
      window.layerIndex = layerIndex;
      if ($('[lay-filter="dialogForm"] .drpEditable').length > 0) {
        if ($('.drpEditable').editableSelect instanceof Function) {
          $('[lay-filter="dialogForm"] .drpEditable').editableSelect({
            filter: true
          });
        }
      }
      renderSelect2('[lay-filter="dialogForm"]');
      if (typeof showCallback === 'function') {
        showCallback(index, layero, function () {
          layer.close(layerIndex);
        });
      }
    },
    yes: function (index, layero) {
      let _this = this;
      let tempCheck = true;
      if (typeof BCallback === 'function') {
        let tempObj = translateFormToBigObject(index, layero, obj);
        if (checkInputRight(tempObj)) {
          let temp = BCallback(index, layero, function () {
            layer.close(layerIndex);
          });
          if (temp !== undefined) {
            tempCheck = temp;
          }
        } else {
          tempCheck = false;
        }

      }
      return tempCheck;
    },
    btn2: function (index, layero) {
      if (typeof cancelCallback === 'function') {
        cancelCallback(index, layero, function () {
          layer.close(layerIndex);
        });
      }
    },
    end: function (layero, index) {
      if (typeof hideCallback === 'function') {
        hideCallback(index, layero, function () {
          layer.close(layerIndex);
        });
      }
      return true;
    },
    resizing: dragFun,
    full: dragFun,
    min: dragFun,
    restore: dragFun
  });
  element.init();
  form.render(null, 'dialogForm');
  return layerIndex;
}

/**
 * 页面错误弹窗提示，并且弹窗关闭之后，有回调事件
 * @param {String} src 需要显示的地址
 * @param {Object} modalObj 存储所有弹窗需要的缺省值对象
 *      @param01 {String} title 模态窗需要绑定的的模态窗标题 ，可缺省、
 *      @param02 {Object} data 模态窗内嵌地址后面是否要传参的参数，可缺省
 *      @param03 {Number} modalIndex 模态窗需要绑定的的模态窗索引值 ，可缺省
 *      @param04 {Number} width 模态窗需要绑定的的模态窗宽度值，可缺省
 *      @param05 {Number} height 模态窗需要绑定的的模态窗高度值，可缺省
 *      @param06 {Number} animType 弹窗动画类型的索引值，可缺省
 *                       0	平滑放大。默认
 *                       1	从上掉落
 *                       2	从最底部往上滑入
 *                       3	从左滑入
 *                       4	从左翻滚
 *                       5	渐显
 *                       6	抖动
 * @param {Function} hideCallback 弹窗关闭之后需要执行的回调函数
 * @return {Number} layerIndex 当前弹窗的index值
 */
function fnIfram(src, modalObj, hideCallback) {
  if (!src) {
    return;
  }
  let layer = layui.layer;
  if (!modalObj) {
    modalObj = {};
  }
  if (!modalObj.title) {
    modalObj.title = '提示信息';
  }
  if (!modalObj.modalIndex) {
    modalObj.modalIndex = 1;
  }
  modalObj.modalIndex = Number(modalObj.modalIndex);
  if (!!layer.zIndex) {
    modalObj.modalIndex += layer.zIndex;
  } else {
    modalObj.modalIndex += 19091016;
  }
  let tempSize = getViewSizeWithoutScrollbar();
  if (!modalObj.width) {
    modalObj.width = tempSize.width - 80;
  }
  if (!!modalObj.width && modalObj.width > 1000) {
    modalObj.width = 1000;
  }
  if (!modalObj.height) {
    modalObj.height = tempSize.height - 60;
  }
  if (!!modalObj.height && modalObj.height > 747) {
    modalObj.height = 747;
  }
  if (!!modalObj.data) {
    src += translateJsonToParams(modalObj.data);
  }
  if (modalObj.animType === undefined || !Number(modalObj.animType) || (Number(modalObj.animType) && modalObj.animType > 6)) {
    modalObj.animType = 0; //默认没有动画
  }
  let layerIndex = 0;
  layer.open({
    type: 2,
    id: 'fnIfram',
    title: modalObj.title,
    area: [modalObj.width + 'px', modalObj.height + 'px'],
    content: [src, 'no'],
    maxmin: true,
    zIndex: modalObj.modalIndex,
    maxHeight: 380,
    anim: modalObj.animType,
    success: function () {
      layerIndex = layer.index;
      this.layerIndex = layerIndex;
      window.layerIndex = layerIndex;
    },
    end: function (layero, index) {
      if (typeof hideCallback === 'function') {
        hideCallback(layero, index);
      }
    }
  });
  return layerIndex;
}

/**
 * 关闭弹窗的方法
 * @param {String} layerType 需要关闭的弹窗类型 非必传
 *    备选值 dialog page iframe loading tips
 */
function layerCloseNow(layerType) {
  if (layerType !== undefined || layerType !== null) {
    layui.layer.closeAll(layerType);
  } else {
    let tempIndex = window.layerIndex;
    if (tempIndex !== undefined || tempIndex !== null) {
      layui.layer.close(tempIndex);
    }
  }
}


/**
 * 将对象转换为表单字符串，进行返回
 * @param {Array} obj 需要进行转换的对象
 *  id {String} 会绑定到input上面的id值，不可缺省
 *  name {String} 会绑定到左侧提示语上面的内容，不可缺省
 *  inputName {String} 会绑定到checkbox，radiobox中所有的input对应的name，可缺省
 *  type {String} input的实际类型，不可缺省
 *                备选值 text，password，select，editableSelect，textarea
 *  data {String} input的实际值，可缺省
 *  disabled {Boolean} 是否为禁用项，可缺省
 *  visible {Boolean} 是否可见，可缺省
 *  required {Boolean} 是否为必填项，可缺省
 *  maxLength {Number} input的最大长度，可缺省
 *  dataType {String} input的需要检查的类型，可缺省
 *                备选值 number ---- 只能为数字
 *                备选值 letter ---- 只能为字母
 *                备选值 phone ---- 需要匹配电话号码格式
 *                备选值 email ---- 需要匹配邮箱格式
 *                备选值 qq ----  需要匹配qq号格式
 * option {Array} 针对于select，checkbox，radiobox的多个值，
 *  对应select的option ['选项1','选项2'] 或者 {'文本1':'值1','文本2':'值2'}
 *  对应checkbox，radiobox的option [{id:'',title:'',value:''}]
 *  search {Boolean} 是否为可搜索项，针对于select控件，可缺省
 *  editable {Boolean} 是否为支持自定义option，针对于select控件，可缺省
 *  multiple {Boolean} 是否为多选下拉框，针对于select控件，可缺省
 * 形如 [
 * {
 *  "id":"txtUserName",
 *  "name":"用户名",
 * "type":"text"
 * },
 * {
 *  "id":"txtUserName",
 *  "name":"用户名",
 * "type":"text",
 * "required":false,
 * "maxLength":10,
 * "dataType":"number"
 * }
 */
function translateObjectToForm(obj) {
  if (!obj || obj.length <= 0) {
    return '对象传递错误';
  }
  let res = '<div class="layui-form layui-form-pane" lay-filter="dialogForm">';
  obj.forEach(function (item, index) {
    switch (item.type) {
      case 'text':
        {
          res += getTextInput(item);
          break;
        }
      case 'password':
        {
          res += getPasswordInput(item);
          break;
        }
      case 'normalSelect':
        {
          res += getSelectInput(item, 0);
          break;
        }
      case 'select':
        {
          res += getSelectInput(item, 1);
          break;
        }
      case 'editableSelect':
        {
          res += getSelectInput(item, 2);
          break;
        }
      case 'layuiSelect':
        {
          res += getSelectInput(item, 3);
          break;
        }
      case 'textarea':
        {
          res += getTextareaInput(item);
          break;
        }
      case 'radiobox':
        {
          res += getRadioboxInput(item);
          break;
        }
      case 'checkbox':
        {
          res += getCheckboxInput(item);
          break;
        }
      case 'custom':
        {
          res += getCustomInput(item);
          break;
        }
    }

  })
  res += '</div>';
  return res;
}

/**
 * 根据对象将数据转译成text input group组
 * @param {Object} item  text input对象的值
 */
function getTextInput(item) {
  let id = item.id;
  let name = item.name;
  let data = item.data;
  let disabled = item.disabled;
  let visible = item.visible;
  let required = item.required;
  let pfor = item.pfor;
  let maxLength = item.maxLength;
  let dataType = item.dataType;
  let inputType = dataType === 'number' ? dataType : 'text';

  if (!id || !name) {
    return '';
  }
  let _name = name;
  let _filter = !!pfor ? pfor : id;
  let res = '<div class="layui-form-item border-0';
  if (!!pfor) {
    res += ' mb-0';
  } else {
    res += ' mt-1 mx-3';
  }
  if (visible !== undefined && !visible) {
    res += ' layui-hide';
  }
  res += '" aria-label="iText" pane>';
  res += '    <label class="layui-form-label';
  if (required !== undefined && required) {
    res += ' required';
    _name = '必填项';
  }
  if (name.length > 4) {
    res += ' pl-1 pr-0 ';
  }
  res += '">';
  res += name + '</label>';
  res += '  <div class="layui-input-block">';
  res += '  <input type="' + inputType + '" id="' + id + '" lay-filter="' + _filter + '"   name="' + id + '" class="layui-input form-control" placeholder="' + _name + '"';
  if (!!pfor) {
    res += ' pfor="' + pfor + '"';
  }
  if (!!maxLength) {
    res += ' maxLength="' + maxLength + '"';
  }
  if (!!data) {
    res += ' value="' + data + '"';
  }
  if (!!disabled && disabled === true) {
    res += ' disabled = "true"';
  }
  res += ' />';
  res += '  </div>';
  res += '</div>';
  return res;
}

/**
 * 根据对象将数据转译成password input group组
 * @param {Object} item  text input对象的值
 */
function getPasswordInput(item) {
  let id = item.id;
  let name = item.name;
  let data = item.data;
  let disabled = item.disabled;
  let visible = item.visible;
  let required = item.required;
  let pfor = item.pfor;
  let maxLength = item.maxLength;
  if (!id || !name) {
    return '';
  }
  let _name = name;
  let _filter = !!pfor ? pfor : id;
  let res = '<div class="layui-form-item border-0';
  if (!!pfor) {
    res += ' mb-0';
  } else {
    res += ' mt-1 mx-3';
  }
  if (visible !== undefined && !visible) {
    res += ' layui-hide';
  }
  res += '" aria-label="iPassword" pane>';
  res += '    <label class="layui-form-label';
  if (required !== undefined && required) {
    res += ' required';
    _name = '必填项';
  }
  if (name.length > 4) {
    res += ' pl-1 pr-0 ';
  }
  res += '">';
  res += name + '</label>';
  res += '  <div class="layui-input-block">';
  res += '  <input type="password" autocomplete="new-password" id="' + id + '" lay-filter="' + _filter + '"   name="' + id + '" class="layui-input form-control" placeholder="' + _name + '"';
  if (!!pfor) {
    res += ' pfor="' + pfor + '"';
  }
  if (!!maxLength) {
    res += ' maxLength="' + maxLength + '"';
  }
  if (!!data) {
    res += ' value="' + data + '"';
  }
  if (!!disabled && disabled === true) {
    res += ' disabled = "true"';
  }
  res += ' />';
  res += '</div>';
  res += '</div>';
  return res;
}


/**
 * 根据对象将数据转译成select input group组
 * @param {Object} item  text input对象的值
 * @param {Number} type 下拉框类型，0对应默认的，1对应layui的下拉框，2对应可编辑的下拉框
 */
function getSelectInput(item, type) {
  let id = item.id;
  let name = item.name;
  let data = item.data;
  let disabled = item.disabled;
  let visible = item.visible;
  let required = item.required;
  let option = item.option;
  let pfor = item.pfor;
  let selectEditable = item.editable;
  let selectMultiple = item.multiple;
  let selectSearch = item.search;

  if (!id || !name) {
    return '';
  }
  let _name = name;
  let _filter = !!pfor ? pfor : id;
  let res = '<div class="layui-form-item border-0';
  if (!!pfor) {
    res += ' mb-0';
  } else {
    res += ' mt-1 mx-3';
  }
  if (visible !== undefined && !visible) {
    res += ' layui-hide';
  }
  res += '" aria-label="iSelect" pane>';
  res += '    <label class="layui-form-label';
  if (required !== undefined && required) {
    res += ' required';
    _name = '必填项';
  }
  if (name.length > 4) {
    res += ' pl-1 pr-0 ';
  }
  res += '">';
  res += name + '</label>';
  res += '  <div class="layui-input-block ';
  if (type === 0) {
    res += ' custom-select';
  }
  res += '  ">';

  res += '  <select lay-filter="' + _filter + '"   name="' + id + '" id="' + id + '"';
  if (!!pfor) {
    res += ' pfor="' + pfor + '"';
  }
  if (type === 0) {
    res += ' lay-ignore class="form-control"';
  }
  if (type === 1) {
    res += ' lay-ignore class="form-control select2 w-100"';
  }
  if (type === 2) {
    res += ' lay-ignore class="form-control drpEditable"';
  }
  if (type === 3) {
    res += ' lay-search class="form-control"';
  }
  if (!!disabled && disabled === true) {
    res += ' disabled = "true" ';
  }
  if (!!selectEditable && selectEditable === true) {
    res += ' editable';
  }
  if (!!selectMultiple && selectMultiple === true) {
    res += ' multiple ';
  }
  if (!!selectSearch && selectSearch === true) {
    res += ' search ';
  }
  res += '>';
  option.forEach(function (val, index) {
    let tempText = '';
    let tempValue = '';

    if (typeof val === 'string') {
      tempText = val;
      tempValue = val;
    } else {
      tempText = Object.getOwnPropertyNames(val)[0];
      tempValue = val[tempText];
    }
    res += '  <option index="' + index + '" value="' + tempValue + '"';
    if (data !== undefined && data !== null && tempText === data) {
      res += ' selected="true" ';
    }
    res += '>' + tempText + '</option>';
  })
  res += '  </select>';
  res += '</div>';
  res += '</div>';
  return res;
}

/**
 * 根据对象将数据转译成textarea input group组
 * @param {Object} item  text input对象的值
 */
function getTextareaInput(item) {
  let id = item.id;
  let name = item.name;
  let data = item.data;
  let disabled = item.disabled;
  let visible = item.visible;
  let required = item.required;
  let pfor = item.pfor;
  let maxLength = item.maxLength;
  if (!id || !name) {
    return '';
  }
  let _name = name;
  let _filter = !!pfor ? pfor : id;
  let res = '<div class="layui-form-item border-0';
  if (!!pfor) {
    res += ' mb-0';
  } else {
    res += ' mt-1 mx-3';
  }
  if (visible !== undefined && !visible) {
    res += ' layui-hide';
  }
  res += '" aria-label="iTextarea" pane>';
  res += '    <label class="layui-form-label';
  if (required !== undefined && required) {
    res += ' required';
    _name = '必填项';
  }
  if (name.length > 4) {
    res += ' pl-1 pr-0 ';
  }
  res += '">';
  res += name + '</label>';
  res += '  <div class="layui-input-block">';
  res += '  <textarea id="' + id + '" lay-filter="' + id + '"   name="' + id + '"  class="no-resize layui-textarea form-control" aria-label="文本域" placeholder="' + _name + '"';
  if (!!pfor) {
    res += ' pfor="' + pfor + '"';
  }
  if (!!maxLength) {
    res += ' maxLength="' + maxLength + '"';
  }
  if (!!disabled && disabled === true) {
    res += ' disabled = "true"';
  }
  res += ' >';
  if (!!data) {
    res += data;
  }
  res += '</textarea>';
  res += '</div>';
  res += '</div>';
  return res;
}


/**
 * 根据对象将数据转译成复选框 input group组
 * @param {Object} item  text input对象的值
 */
function getCheckboxInput(item) {
  let id = item.id;
  let title = item.title;
  let items = item.option;
  let pfor = item.pfor;
  let name = item.name;
  let required = item.required;
  let inputName = item.inputName;
  let visible = item.visible;
  let data = item.data;
  if (!items || items.length === 0) {
    return '';
  }
  let res = '<div class="layui-form-item border-0';
  if (!!pfor) {
    res += ' mb-0';
  } else {
    res += ' mt-1 mx-3';
  }
  if (visible !== undefined && !visible) {
    res += ' layui-hide';
  }
  res += '" ';
  if (!!pfor) {
    res += ' pfor="' + pfor + '"';
  }
  if (!!id) {
    res += ' id="' + id + '" ';
  }
  if (!!title) {
    res += ' title="' + title + '"';
  }
  res += '" aria-label="iCheckbox" pane>';
  if (!!name) {
    res += '    <label class="layui-form-label';
    if (required !== undefined && required) {
      res += ' required';
    }
    if (name.length > 4) {
      res += ' pl-1 pr-0 ';
    }
    res += '">';
    res += name + '</label>';
  }
  res += '  <div class="layui-input-block ';
  if (!!name) {
    res += ' border';
  } else {
    res += ' ml-0';
  }
  res += '  ">';

  items.forEach(function (option, index) {
    let tempPfor = option.pfor;
    let tempVisible = option.visible;
    let tempValue = option.value || option.title;
    res += '  <input type="checkbox" index="' + index + '" id="' + option.id + '" lay-filter="' + option.id + '" name="' + inputName + '" value="' + tempValue + '"';
    if (!!option.title) {
      res += ' title="' + option.title + '"';
    }
    if (!!tempPfor) {
      res += ' pfor="' + tempPfor + '"';
    }

    if (tempVisible !== undefined && !tempVisible) {
      res += ' class="layui-hide"';
    }
    if (data) {
      if (typeof (data) === 'string' && data === tempValue) {
        res += ' checked';
      } else if (data.length && data.length > 0) {
        for (let i in data) {
          if (data[i] === tempValue) {
            res += ' checked';
            break;
          }
        }
      }
    }
    res += ' lay-skin="primary">';
  })

  res += '  </div>';
  res += '  </div>';

  return res;
}

/**
 * 根据对象将数据转译成复选框 input group组
 * @param {Object} item  text input对象的值
 */
function getRadioboxInput(item) {
  let id = item.id;
  let title = item.title;
  let items = item.option;
  let pfor = item.pfor;
  let name = item.name;
  let required = item.required;
  let inputName = item.inputName;
  let visible = item.visible;
  let data = item.data;
  if (!items || items.length === 0) {
    return '';
  }
  let res = '<div class="layui-form-item border-0';
  if (!!pfor) {
    res += ' mb-0';
  } else {
    res += ' mt-1 mx-3';
  }
  if (visible !== undefined && !visible) {
    res += ' layui-hide';
  }
  res += '" ';
  if (!!pfor) {
    res += ' pfor="' + pfor + '"';
  }
  if (!!id) {
    res += ' id="' + id + '" ';
  }
  if (!!title) {
    res += ' title="' + title + '"';
  }
  res += '" aria-label="iRadiobox" pane>';
  if (!!name) {
    res += '    <label class="layui-form-label';
    if (required !== undefined && required) {
      res += ' required';
    }
    if (name.length > 4) {
      res += ' pl-1 pr-0 ';
    }
    res += '">';
    res += name + '</label>';
  }
  res += '  <div class="layui-input-block ';
  if (!!name) {
    res += ' border';
  } else {
    res += ' ml-0';
  }
  res += '  ">';
  items.forEach(function (option, index) {
    let tempPfor = option.pfor;
    let tempVisible = option.visible;
    let tempValue = option.value || option.title;
    res += '  <input type="radio" index="' + index + '" id="' + option.id + '" lay-filter="' + option.id + '" name="' + inputName + '" title="' + option.title + '" value="' + tempValue + '"';
    if (!!tempPfor) {
      res += ' pfor="' + tempPfor + '"';
    }
    if (tempVisible !== undefined && !tempVisible) {
      res += ' class="layui-hide"';
    }
    if (data && data === tempValue) {
      res += ' checked';
    }
    res += ' lay-skin="primary">';
  })

  res += '  </div>';
  res += '  </div>';

  return res;
}

/**
 * 表单元素自定义
 * @param item
 * @returns {string}
 */
function getCustomInput(item) {
  let res = '';
  res += item.content;
  return res;
}

/**
 * 将表单中的数据转换成简单json输出
 * @param {String} modalIndex 当前弹窗的索引值
 * @param {Object} currentModal 当前弹窗的对象
 * @param {Number} type 获取类型
 * @param {String} selector 获取范围选择器
 * @returns {Object} res 已经拼接好的json数据
 */
function translateFormToObject(modalIndex, currentModal, type, selector) {
  let res = {};
  if (!modalIndex) {
    modalIndex = 1;
  }
  let currentObj = $(currentModal).length > 0 ? $(currentModal) : $("#layui-layer" + modalIndex);
  let allInput = {};
  if (type === undefined) {
    type = 0;
  }
  switch (type) {
    case 0:
      {
        allInput = currentObj.find(".layui-layer-content>.layui-form-pane").children('.layui-form-item');
        break;
      }
    case 1:
      {
        allInput = currentObj.find(".layui-layer-content>.layui-form>.layui-form-pane").find('.layui-form-item');
        break;
      }
    case 2:
      {
        allInput = $(selector).find('.layui-form-item');
        break;
      }
  }

  if (allInput.length > 0) {
    for (let i = 0; i < allInput.length; i++) {
      let _name = '';
      let _value = '';
      let nowItem = $(allInput[i]).find('.form-control');
      if (nowItem.length === 0) {
        // 对radiobox的判断和取值
        var obj = $(allInput[i]).find('.layui-form-radioed');
        if (obj.length > 0) {
          _name = obj.prev().attr('id');
          _value = obj.prev().val();
          res[_name] = _value;
        }
        continue;
      }
      _name = nowItem.attr('id');
      _value = '';
      if (nowItem[0].nodeName !== 'SELECT') {
        _value = nowItem.val();
      } else {
        if (nowItem.hasClass('drpEditable')) {
          _value = nowItem.siblings('.es-list').find('.es-visible.selected').text();
          _value = _value.trimAll();
        } else if (nowItem.siblings('.layui-form-select').length > 0) {
          _value = nowItem.siblings('.layui-form-select').find('.layui-this').text();
          _value = _value.trimAll();
        } else {
          if (nowItem.select2("data").length === 1) {
            _value = nowItem.select2("data")[0].text;
          } else if (nowItem.select2("data").length > 1) {
            _value = [];
            nowItem.select2("data").forEach(function (item) {
              _value.push(item.text);
            })
          }
        }
      }
      res[_name] = _value;
    }
  }
  return res;
}

/**
 * 将表单中的数据转换成复杂的json输出
 * @param {String} modalIndex 当前弹窗的索引值
 * @param {Object} currentModal 当前弹窗的对象
 * @param {Object} obj 之前用于拼接页面input group的对象值
 * @returns {Object} res 已经拼接好的json数据
 */
function translateFormToBigObject(modalIndex, currentModal, obj) {
  let res = [];
  if (!modalIndex) {
    modalIndex = 1;
  }
  let currentObj = $(currentModal).length > 0 ? $(currentModal) : $("#layui-layer" + modalIndex);
  let allInput = currentObj.find(".layui-layer-content>.layui-form-pane").children('.layui-form-item');
  if (allInput.length > 0) {
    for (let i = 0; i < allInput.length; i++) {
      let nowItem = $(allInput[i]).find('.form-control');
      if (obj[i].type !== 'select') {
        // 对radiobox的判断和取值
        if (obj[i].type === 'radiobox') {
          obj[i].data = $(allInput[i]).find('.layui-form-radioed').prev().val();
        } else {
          obj[i].data = nowItem.val().trimAll();
        }
      } else {
        if (nowItem.hasClass('drpEditable')) {
          nowItem = nowItem.siblings('.es-list').find('.es-visible.selected').text();
          obj[i].data = nowItem.trimAll();
        } else {
          let checkDom = $('select[lay-filter="' + obj[i].id + '"]').siblings('.layui-form-select');
          if (checkDom.length > 0) {
            nowItem = checkDom.find('.layui-this').text();
            obj[i].data = nowItem.trimAll();
          } else {
            let checkCurrData = nowItem.select2("data");
            if (checkCurrData.length === 0) {
              obj[i].data = '';
            } else if (checkCurrData.length === 1) {
              obj[i].data = nowItem.select2("data")[0].text;
            } else if (nowItem.select2("data").length > 1) {
              obj[i].data = [];
              nowItem.select2("data").forEach(function (item) {
                obj[i].data.push(item.text);
              })
            }

          }
        }
      }
      res.push(obj[i]);
    }
  }
  return res;
}

/**
 * 对inputgroup中的值，按照预设进行数据检验
 * @param {Array} obj 需要进行检查的对象
 *  id {String} 会绑定到input上面的id值，不可缺省
 *  name {String} 会绑定到左侧提示语上面的内容，不可缺省
 *  data {String} input的实际值，不可缺省
 *  disabled {Boolean} 是否为禁用项，可缺省
 *  required {Boolean} 是否为必填项，可缺省
 *  maxLength {Number} input的最大长度，可缺省
 *  dataType {String} input的需要检查的类型，可缺省
 *                备选值 number ---- 只能为数字
 *                备选值 letter ---- 只能为字母
 *                备选值 phone ---- 需要匹配电话号码格式
 *                备选值 email ---- 需要匹配邮箱格式
 *                备选值 qq ----  需要匹配qq号格式
 *                备选值 chinese ----  需要匹配中文格式
 *                备选值 html ----  需要匹配html标签格式
 *                备选值 int ----  需要匹配正整数
 * 形如 [
 * {
 *  "id":"txtUserName",
 *  "name":"用户名",
 * "data":"123123123"
 * },
 * {
 *  "id":"txtUserName",
 *  "name":"用户名",
 * "data":"123测试3123",
 * "required":false,
 * "maxLength":10,
 * "dataType":"number"
 * }
 * @param {boolean} bShowRow 提示信息是否显示行信息
 * @param {string} errMsgPrefix 错误信息前缀
 */
function checkInputRight(obj, bShowRow, errMsgPrefix) {
  if (!obj || obj.length <= 0) { //如果传递过来的值为空，直接返回false
    return false;
  }
  let res = true;
  let emptyMsg = '';
  let overLengthMsg = '';
  let invalidMsg = '';
  for (let index = 0; index < obj.length; index++) {
    let sRowInfo = '';
    if (bShowRow) {
      sRowInfo = '第' + (index + 1) + '行';
    }
    let item = obj[index];
    if (!!item.required && item.required === true) {
      if (!item.data) {
        res = false;
        // fnAlert(sRowInfo + item.name + '为不能为空，请注意', 2, false);
        emptyMsg += item.name + '、';
        continue;
      }
    }
    if (item.maxLength !== undefined && item.maxLength > 0) {
      res = testLowLength(item.data, item.maxLength);
      if (!res) {
        res = testEqualLength(item.data, item.maxLength);
      }
      if (!res) {
        // fnAlert(sRowInfo + item.name + '超过了限定' + item.maxLength + '长度，请注意', 2, false);
        overLengthMsg += item.name + '不能超过' + item.maxLength + '位，';
        continue;
      }
    }
    // if (res) {
    if (!!item && !!item.dataType) {
      let tempCheckDataType = false;
      if (!!item.required && item.required === true) {
        tempCheckDataType = true;
      } else {
        if (!!item.data) {
          tempCheckDataType = true;
        }
      }
      if (tempCheckDataType) {
        res = checkInputCheckType(item.data, item.dataType);
        if (!res) {
          // fnAlert(sRowInfo + item.name + '不符合' + translateErrTypeToString(item.dataType) + '规范，请注意', 2, false);
          invalidMsg += item.name + '必须为' + translateErrTypeToString(item.dataType) + '，';
          continue;
        }
      }

    }
    // }
  }

  let msg = '';
  if (!!emptyMsg) {
    emptyMsg = emptyMsg.substr(0, emptyMsg.length - 1);
    msg += emptyMsg + '不能为空，';
  }
  if (!!overLengthMsg) {
    msg += overLengthMsg;
  }
  if (!!invalidMsg) {
    msg += invalidMsg;
  }
  if (!!msg) {
    if (!!errMsgPrefix) {
      msg = errMsgPrefix + msg;
    }
    msg += '请重新填写！';
    fnTip(msg, 2000);
    return false;
  } else {
    return true;
  }
  // return res;
}

/**
 * 对inputgroup中的值，按照预设进行数据检验
 * @param {Object} obj 需要检查的对象
 */
function checkInputCheckType(data, dataType) {
  if (!data || data.length <= 0) { //如果传递过来的值为空，直接返回false
    return false;
  }
  let res = true; //默认是通过验证

  switch (dataType) {
    case 'number':
      {
        if (typeof testInt !== undefined) {
          res = testInt(data);
        }
        break;
      }
    case 'letter':
      {
        if (typeof onlyLetter !== undefined) {
          res = onlyLetter(data);
        }
        break;
      }
    case 'phone':
      {
        if (typeof testPhone !== undefined) {
          res = testPhone(data);
        }
        break;
      }
    case 'landLinePhone':
      {
        if (typeof textLandLinePhone !== undefined) {
          res = textLandLinePhone(data);
        }
        break;
      }
    case 'email':
      {
        if (typeof testEmail !== undefined) {
          res = testEmail(data);
        }
        break;
      }
    case 'qq':
      {
        if (typeof testQQ !== undefined) {
          res = testQQ(data);
        }
        break;
      }
    case 'chinese':
      {
        if (typeof testOnlyChinese !== undefined) {
          res = testOnlyChinese(data);
        }
        break;
      }
    case 'html':
      {
        if (typeof testHtml !== undefined) {
          res = testHtml(data);
        }
        break;
      }
    case 'ip':
      {
        if (typeof testIPAddr !== undefined) {
          res = testIPAddr(data);
        }
        break;
      }
    case 'port':
      {
        if (typeof testPort !== undefined) {
          res = testPort(data);
        }
        break;
      }
    case 'url':
      {
        if (typeof testURL !== undefined) {
          res = testURL(data);
        }
        break;
      }
    case 'int':
      {
        if (typeof testURL !== undefined) {
          res = testPositiveInt(data);
        }
        break;
      }
    case 'idCard':
      {
        if (typeof test15IDCard !== undefined || typeof test18IDCard !== undefined) {
          res = test15IDCard(data) || test18IDCard(data);
        }
        break;
      }

  }
  return res;
}

/**
 * 将检验错误类型英文类型转换成对应的中文
 * @param {String} dataType 需要进行检测的英文类型
 */
function translateErrTypeToString(dataType) {
  let res = '默认';
  if (!dataType || dataType.length <= 0) { //如果传递过来的值为空，直接返回false
    return res;
  }

  switch (dataType) {
    case 'number':
      {
        res = '数字';
        break;
      }
    case 'int':
      {
        res = '正整数';
        break;
      }
    case 'letter':
      {
        res = '字母';
        break;
      }
    case 'phone':
      {
        res = '正确的手机号格式';
        break;
      }
    case 'landLinePhone':
      {
        res = '正确的固话格式';
        break;
      }
    case 'email':
      {
        res = '正确的邮箱格式';
        break;
      }
    case 'qq':
      {
        res = '正确的qq号格式';
        break;
      }
    case 'chinese':
      {
        res = '中文';
        break;
      }
    case 'html':
      {
        res = '网页代码';
        break;
      }
    case 'ip':
      {
        res = '有效的IP地址';
        break;
      }
    case 'port':
      {
        res = '正确的端口号';
        break;
      }
    case 'url':
      {
        res = '有效的网址';
        break;
      }
    case 'idCard':
      {
        res = '正确的身份证号格式';
        break;
      }
  }
  return res;
}