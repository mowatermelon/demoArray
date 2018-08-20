/**
 * 默认提供获取测试的方法体字符串
 */
function getDemoScript(){
  let res = `"use strict";

  /**
  * 去掉字符串中的所有空格
  */
  String.prototype.trimAll = function () {
    return this.replace(/\s/g, "");
  }
  
  /**
   * 判断变量是否全部为数值的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function isNum(variable) {
    // 当variable为[]（空数组）、“”（空字符串)和null会在isNaN过程中转换为数字类型的0,
    // 所以也会返回false,从而判断为数字,所以可以将用typeof将以上特殊情况剔除.
    let res = !isNaN(variable) && typeof variable == number;
    return res;
  }
  /**
   * 判断变量是否为数组的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function isArr(variable) {
    return Array.isArray(variable);
  }
  /**
   * 返回规定长度和规定填充数组的方法
   * @param {Number} count  返回数组的长度，必选
   * @param {Any} variable  返回数组需要填充的内容，必选
   */
  function fillArr(count, variable) {
    let res = false;
    if (isArr(count)) {
      res = Array(JSON.parse(count[0])).fill(count[1]);
    } else {
      res = Array(JSON.parse(count)).fill(variable);
    }
    return res;
  }
  /**
   * 数组去重的方法,通过Array.from()和Set对象来执行
   * @param {Array} arr  需要去重的数组值，必选
   */
  function distinctArrFrom(arr) {
    return Array.from(new Set(arr));
  }
  /**
   * 普通数组的进行升序排列,将普通数组转化隐式转化为数组对象，执行sort方法
   * @param {Array} arr  需要进行升序排列的数组值，必选
   */
  function sortArr(arr) {
    return arr.concat().sort(function(a, b){
      return a - b
    })
  }
  /**
   * 数组中的值是否全部满足回调函数的条件
   * @param {Array} arrs  需要进行条件判断的数组值，必选
   * @param {Function} callback  回调函数，必须接受传参，并且有返回值，必选
   *                   回调函数中需要对接收到的数组值进行条件判断，并返回判断结果
   */
  function isEveryArrRight(arrs, callback) {
    return arrs.concat().every(callback(arr))
  }
  /**
   * 数组中是否存在满足回调函数条件的值
   * @param {Array} arrs  需要进行条件判断的数组值，必选
   * @param {Function} callback  回调函数，必须接受传参，并且有返回值，必选
   *                   回调函数中需要对接收到的数组值进行条件判断，并返回判断结果
   */
  function isSomeArrRight(arrs, callback) {
    return arrs.concat().some(callback(arr))
  }
  /**
   * 返回正则测试结果的方法
   * @param {RegExp} reg  用来检测变量的正则，必选
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testReg(reg, variable) {
    let res = false;
    if (reg instanceof Array) {
      res = RegExp(reg[0]).test(reg[1]);
    } else {
      res = reg.test(variable);
    }
    return res;
  }
  /**
   * 判断变量长度是否小于某个长度的方法
   * @param {Any} variable  需要检测的变量值，必选
   * @param {Number} num  用来检测变量的长度值，必选
   */
  function testLowLength(variable, num) {
    if (typeof num !== 'number' || num < 0) {
      num = 0;
    }
    return variable.length < num;
  }
  /**
   * 判断变量长度是否等于某个长度的方法
   * @param {Any} variable  需要检测的变量值，必选
   * @param {Number} num  用来检测变量的长度值，必选
   */
  function testEqualLength(variable, num) {
    if (typeof num !== 'number' || num < 0) {
      num = 0;
    }
    return variable.length === num;
  }
  /**
   * 判断变量长度是否超过某个长度的方法
   * @param {Any} variable  需要检测的变量值，必选
   * @param {Number} num  用来检测变量的长度值，必选
   */
  function testBigLength(variable, num) {
    if (typeof num !== 'number' || num < 0) {
      num = 0;
    }
    return variable.length > num;
  }
  /**
   * 判断是否只为数字的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function onlyNum(variable) {
    let reg = /^[0-9]*$/g;
    return testReg(reg, variable);
  }
  /**
   * 判断是否为整数的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testInt(variable) {
    let reg = /^[-\+]?\d+$/g;
    return testReg(reg, variable);
  }
  /**
   * 判断是否为浮点数的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testFloat(variable) {
    let reg = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/g;
    return testReg(reg, variable);
  }
  /**
   * 判断是否只为字母的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function onlyLetter(variable) {
    let reg = /^[a-zA-Z]*$/g;
    return testReg(reg, variable);
  }
  /**
   * 判断是否只为数字和字母的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function onlyNumLetter(variable) {
    let reg = /^[0-9a-zA-Z]*$/g;
    return testReg(reg, variable);
  }
  /**
   * 判断是否只为数字和字母和英文逗号的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function onlyNumLetterComma(variable) {
    let reg = /^[0-9a-zA-Z,]*$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 校验密码强度
   * 判断是否是大小写字母和数字的组合，且不能使用特殊字符，长度在8-10之间
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testCodeStrength(variable) {
    let reg = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否只为中文
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testOnlyChinese(variable) {
    let reg = /^[\u4e00-\u9fa5]{0,}$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否只为数字、26个英文字母或下划线组成的字符串
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testOnlyNumLetter(variable) {
    let reg = /^\\w+$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合html字符串标签格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testHtml(variable) {
    // let reg = /^<([^>\s]+)[^>]*>(.*?<\/\\1>)?$/g;
    let reg = /<[^>]+>/g;
    return testReg(reg, variable);
  }
  /**
   * 判断是否符合E-Mail 格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testEmail(variable) {
    let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合qq号格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testQQ(variable) {
    let reg = /^[1-9][0-9]{4,9}$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合15位身份证号码格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function test15IDCard(variable) {
    let reg = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合18位身份证号码格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function test18IDCard(variable) {
    let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合yyyy-mm-dd日期格式
   * 已经考虑包含闰年的情况，以及错误日期
   * eg testDate("2017-02-11")//true
   * eg testDate("2017-15-11")//false
   * eg testDate("2018-02-29")//false
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testDate(variable) {
    let reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合yyyy-mm-dd HH:mm:ss日期格式
   * 已经考虑包含闰年的情况，以及错误日期
   * eg testDate("2018-08-14 10:35:26")//true
   * eg testDate("2017-15-11 10:35:26")//false
   * eg testDate("2018-02-29 10:35:26")//false
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testDateTime(variable){
    let reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) (20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合HH:mm:ss日期格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testTime(variable) {
    let reg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合金额格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testMoney(variable) {
    let reg = /^[0-9]+(.[0-9]{2})?$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合手机号格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testPhone(variable) {
    let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])+\d{8}$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合固定电话格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function textLandLinePhone(variable) {
    let reg = /\d{3}-\d{8}|\d{4}-\{7,8}/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合16进制颜色值格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function test16Color(variable) {
    let reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断输入的位数不超过16位的方法
   * @param {Any} variable  需要检测的变量值，必选
   */
  function onlySixteen(variable) {
    return testBigLength(variable, 16);
  }
  
  /**
   * 判断是否符合邮编格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testPost(variable) {
    let reg = /[1-9]\d{5}(?!\d)/g;
    return testReg(reg, variable);
  }
  
  /**
   * 判断是否符合IP地址格式
   * @param {Any} variable  需要检测的变量值，必选
   */
  function testIPAddr(variable) {
    let reg = /^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-5][0-5])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/g;
    return testReg(reg, variable);
  }
  `;
  return res;

}
/**
 * 将包含多个方法体的代码字符串，分割成可以执行的方法体对象
 * @param {String} script 需要进行分割的包含多个方法体的代码字符串
 */
function analysisFuncStr(script) {
  let currFunctionObj = {};
  let oldScript = script;
  //第一步，删除多余的注释代码
  let clearCommentReg = /(\/\/.*$)|(\/\*(.|\s)*?\*\/)|\"use strict\"\;/g;
  oldScript = oldScript.replace(clearCommentReg, '');

  //第二步，分割方法名和方法体
  let tempScriptArrs = [];
  oldScript.replace(/(?:function\s).*?\(([^)]*)\)/g, function (full, key, value) {
    if(!!full){
      let tempObj = {
        name: full,
        param: key,
        fIndex: value
      };
      console.log(full, key, value);
      tempScriptArrs.push(tempObj);
    }
    return full;
  });

  //第三步，拼接方法对象
  tempScriptArrs.forEach(function (fun, index, arr) {
    let funBeginIndex = fun.name.length + fun.fIndex + 2;
    let checkIndex = index !== arr.length - 1 ? arr[index + 1].fIndex : oldScript.length;
    let funEndIndex = oldScript.substring(0, checkIndex).lastIndexOf('}');
    let tempScript = oldScript.substring(funBeginIndex, funEndIndex).replace('\n\t\s', '');
    let arguArrs = fun.param.split(',');
    let rightName = fun.name.replace(/(function\s)|(?:\().*\w{0,}(?:\)).*/g, '');
    if (!!tempScript) {
      currFunctionObj[rightName] = window.eval('(function (' + [].slice.call(arguArrs) + ') { ' + tempScript + '})');
    }
  })
  return currFunctionObj;
}

console.log(analysisFuncStr(getDemoScript()))
