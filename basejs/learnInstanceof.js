
//instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

//语法
//object instanceof constructor

//参数
//object 要检测的对象.
//constructor 某个构造函数

//描述
//instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

//检测其他类对象转化成string类型或者其本身的原型链上是否存在 String.prototype
var oo = new Object();
var oString = new String("hello world");
var oBool = new Boolean(true);
var oNum = new Number(68);
var oArray = new Array("demo","melon","water");
var oDate = new Date();

function showInitData(){
  console.log("打印默认六个对象类型相关数据");
  console.log("\t打印默认六个对象类型相关数据本身");
    console.log(oo)//{}
    console.log(oBool)//[Boolean: true]
    console.log(oNum)//[Number: 68]
    console.log(oString)//[String: 'hello world']
    console.log(oArray)//[ 'demo', 'melon', 'water' ]
    console.log(oDate)//2017-11-18T14:01:15.443Z
    console.log("\n");

  console.log("\t打印默认六个对象类型相关数据的原型");
    console.log(oo.__proto__)//{}
    console.log(oBool.__proto__)//[Boolean: false]
    console.log(oNum.__proto__)//[Number: 0]
    console.log(oString.__proto__)//[String: '']
    console.log(oArray.__proto__)//[]
    console.log(oDate.__proto__)//Date {}
    console.log("\n");

  console.log("\t打印默认六个对象类型相关数据的构造体");
    console.log(oo.constructor)//[Function: Object]
    console.log(oBool.constructor)//[Function: Boolean]
    console.log(oNum.constructor)//[Function: Number]
    console.log(oString.constructor)//[Function: String]
    console.log(oArray.constructor)//[Function: Array]
    console.log(oDate.constructor)//[Function: Date]    
    console.log("\n");

  console.log("\t打印默认六个对象类型相关数据的原型链上是否存在 Object.prototype------1");
    console.log(oo instanceof Object )//true
    console.log(oBool instanceof Object )//true
    console.log(oNum instanceof Object )//true
    console.log(oString instanceof Object )//true
    console.log(oArray instanceof Object )//true
    console.log(oDate instanceof Object )//true
    console.log("\n");

  console.log("\t打印默认六个对象类型相关数据的原型链上是否存在 String.prototype------2");
    console.log(oo instanceof String )//false
    console.log(oBool instanceof String )//false
    console.log(oNum instanceof String )//false
    console.log(oString instanceof String )//true
    console.log(oArray instanceof String )//false
    console.log(oDate instanceof String )//false
    console.log("\n"); 
    
  console.log("\t打印默认六个对象类型相关数据的原型链上是否存在 Boolean.prototype------3");
    console.log(oo instanceof Boolean )//false
    console.log(oBool instanceof Boolean )//true
    console.log(oNum instanceof Boolean )//false
    console.log(oString instanceof Boolean )//true
    console.log(oArray instanceof Boolean )//false
    console.log(oDate instanceof Boolean )//false
    console.log("\n");
    
  console.log("\t检测其他类对象转化成string类型或者其本身的原型链上是否存在 Number.prototype------4");
    console.log(oo instanceof Number )//false
    console.log(oBool instanceof Number )//false
    console.log(oNum instanceof Number )//false
    console.log(oString instanceof Number )//true
    console.log(oArray instanceof Number )//false
    console.log(oDate instanceof Number )//false
    console.log("\n"); 

  console.log("\t打印默认六个对象类型相关数据的原型链上是否存在 Array.prototype------5");
    console.log(oo instanceof Array )//false
    console.log(oBool instanceof Array )//false
    console.log(oNum instanceof Array )//false
    console.log(oString instanceof Array )//true
    console.log(oArray instanceof Array )//true
    console.log(oDate instanceof Array )//false
    console.log("\n");    

  console.log("\t打印默认六个对象类型相关数据的原型链上是否存在 Date.prototype------6");
    console.log(oo instanceof Date )//false
    console.log(oBool instanceof Date )//false
    console.log(oNum instanceof Date )//false
    console.log(oString instanceof Date )//true
    console.log(oArray instanceof Date )//false
    console.log(oDate instanceof Date )//true
    console.log("\n");
}
showInitData();

var ooo = Object(oo);
var ooString = Object(oString);
var ooBool = Object(oBool);
var ooNum = Object(oNum);
var ooArray = Object(oArray);
var ooDate = Object(oDate);

var soo = String(oo);
var soString = String(oString);
var soBool = String(oBool);
var soNum = String(oNum);
var soArray = String(oArray);
var soDate = String(oDate);

var boo = Boolean(oo);
var boString = Boolean(oString);
var boBool = Boolean(oBool);
var boNum = Boolean(oNum);
var boArray = Boolean(oArray);
var boDate = Boolean(oDate);

var noo = Number(oo);
var noString = Number(oString);
var noBool = Number(oBool);
var noNum = Number(oNum);
var noArray = Number(oArray);
var noDate = Number(oDate);

var aoo = Array(oo);
var aoString = Array(oString);
var aoBool = Array(oBool);
var aoNum = Array(oNum);
var aoArray = Array(oArray);
var aoDate = Array(oDate);

var doo = Date(oo);
var doString = Date(oString);
var doBool = Date(oBool);
var doNum = Date(oNum);
var doArray = Date(oArray);
var doDate = Date(oDate);

function showTranObjectData(){
  console.log("其他类对象转化成Object类型");
  console.log("\t打印其他类对象转化成Object类型");
    console.log(ooo)//{}
    console.log(ooBool)//[Boolean: true]
    console.log(ooNum)//[Number: 68]
    console.log(ooString)//[String: 'hello world']
    console.log(ooArray)//[ 'demo', 'melon', 'water' ]
    console.log(ooDate)//2017-11-18T15:16:03.287Z
    console.log("\n");

  console.log("\t打印其他类对象转化成Object类型的原型");
    console.log(ooo.__proto__)//{}
    console.log(ooBool.__proto__)//[Boolean: false]
    console.log(ooNum.__proto__)//[Number: 0]
    console.log(ooString.__proto__)//[String: '']
    console.log(ooArray.__proto__)//[]
    console.log(ooDate.__proto__)//Date {}
    console.log("\n");

  console.log("\t打印其他类对象转化成Object类型的构造体");
    console.log(ooo.constructor)//[Function: Object]
    console.log(ooBool.constructor)//[Function: Boolean]
    console.log(ooNum.constructor)//[Function: Number]
    console.log(ooString.constructor)//[Function: String]
    console.log(ooArray.constructor)//[Function: Array]
    console.log(ooDate.constructor)//[Function: Date]    
    console.log("\n");

  console.log("\t检测其他类对象转化成Object类型的原型链上是否存在 Object.prototype------1");
    console.log(ooo instanceof Object )//true
    console.log(ooBool instanceof Object )//true
    console.log(ooNum instanceof Object )//true
    console.log(ooString instanceof Object )//true
    console.log(ooArray instanceof Object )//true
    console.log(ooDate instanceof Object )//true
    console.log("\n");

  console.log("\t检测其他类对象转化成Object类型的原型链上是否存在 String.prototype------2");
    console.log(ooo instanceof String )//false
    console.log(ooBool instanceof String )//false
    console.log(ooNum instanceof String )//false
    console.log(ooString instanceof String )//true
    console.log(ooArray instanceof String )//false
    console.log(ooDate instanceof String )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Object类型的原型链上是否存在 Boolean.prototype------3");
    console.log(ooo instanceof Boolean )//false
    console.log(ooBool instanceof Boolean )//true
    console.log(ooNum instanceof Boolean )//false
    console.log(ooString instanceof Boolean )//false
    console.log(ooArray instanceof Boolean )//false
    console.log(ooDate instanceof Boolean )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Object类型的原型链上是否存在 Number.prototype------4");
    console.log(ooo instanceof Number )//false
    console.log(ooBool instanceof Number )//false
    console.log(ooNum instanceof Number )//true
    console.log(ooString instanceof Number )//false
    console.log(ooArray instanceof Number )//false
    console.log(ooDate instanceof Number )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Object类型的原型链上是否存在 Array.prototype------5");
    console.log(ooo instanceof Array )//false
    console.log(ooBool instanceof Array )//false
    console.log(ooNum instanceof Array )//false
    console.log(ooString instanceof Array )//false
    console.log(ooArray instanceof Array )//true
    console.log(ooDate instanceof Array )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Object类型的原型链上是否存在 Date.prototype------6");
    console.log(ooo instanceof Date )//false
    console.log(ooBool instanceof Date )//false
    console.log(ooNum instanceof Date )//false
    console.log(ooString instanceof Date )//false
    console.log(ooArray instanceof Date )//false
    console.log(ooDate instanceof Date )//true
    console.log("\n");
}
//showTranObjectData();
function showTranStringData(){
  console.log("其他类对象转化成string类型");
  console.log("\t打印其他类对象转化成string类型");
    console.log(soo)//[object Object]
    console.log(soBool)//true
    console.log(soNum)//68
    console.log(soString)//hello world
    console.log(soArray)//demo,melon,water
    console.log(soDate)//Sat Nov 18 2017 22:01:15 GMT+0800 (CST)
    console.log("\n");

  console.log("\t打印其他类对象转化成string类型的原型");
    console.log(soo.__proto__)//[String: '']
    console.log(soBool.__proto__)//[String: '']
    console.log(soNum.__proto__)//[String: '']
    console.log(soString.__proto__)//[String: '']
    console.log(soArray.__proto__)//[String: '']
    console.log(soDate.__proto__)//[String: '']
    console.log("\n");

  console.log("\t打印其他类对象转化成Object类型的构造体");
    console.log(soo.constructor)//[Function: String]
    console.log(soBool.constructor)//[Function: String]
    console.log(soNum.constructor)//[Function: String]
    console.log(soString.constructor)//[Function: String]
    console.log(soArray.constructor)//[Function: String]
    console.log(soDate.constructor)//[Function: String]    
    console.log("\n");

  console.log("\t检测其他类对象转化成string类型的原型链上是否存在 Object.prototype------1");
    console.log(soo instanceof Object )//false
    console.log(soBool instanceof Object )//false
    console.log(soNum instanceof Object )//false
    console.log(soString instanceof Object )//false
    console.log(soArray instanceof Object )//false
    console.log(soDate instanceof Object )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成string类型的原型链上是否存在 String.prototype------2");
    console.log(soo instanceof String )//false
    console.log(soBool instanceof String )//false
    console.log(soNum instanceof String )//false
    console.log(soString instanceof String )//false
    console.log(soArray instanceof String )//false
    console.log(soDate instanceof String )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成string类型的原型链上是否存在 Boolean.prototype------3");
    console.log(soo instanceof Boolean )//false
    console.log(soBool instanceof Boolean )//false
    console.log(soNum instanceof Boolean )//false
    console.log(soString instanceof Boolean )//false
    console.log(soArray instanceof Boolean )//false
    console.log(soDate instanceof Boolean )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成string类型的原型链上是否存在 Number.prototype------4");
    console.log(soo instanceof Number )//false
    console.log(soBool instanceof Number )//false
    console.log(soNum instanceof Number )//false
    console.log(soString instanceof Number )//false
    console.log(soArray instanceof Number )//false
    console.log(soDate instanceof Number )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成string类型的原型链上是否存在 Array.prototype------5");
    console.log(soo instanceof Array )//false
    console.log(soBool instanceof Array )//false
    console.log(soNum instanceof Array )//false
    console.log(soString instanceof Array )//false
    console.log(soArray instanceof Array )//false
    console.log(soDate instanceof Array )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成string类型的原型链上是否存在 Date.prototype------6");
    console.log(soo instanceof Date )//false
    console.log(soBool instanceof Date )//false
    console.log(soNum instanceof Date )//false
    console.log(soString instanceof Date )//false
    console.log(soArray instanceof Date )//false
    console.log(soDate instanceof Date )//false
    console.log("\n");
}
//showTranStringData();
function showTranBooleanData(){
  console.log("其他类对象转化成Boolean类型");
  console.log("\t打印其他类对象转化成Boolean类型");
    console.log(boo)//true
    console.log(boBool)//true
    console.log(boNum)//true
    console.log(boString)//true
    console.log(boArray)//true
    console.log(boDate)//true
    console.log("\n");

  console.log("\t打印其他类对象转化成Boolean类型的原型");
    console.log(boo.__proto__)//[Boolean: false]
    console.log(boBool.__proto__)//[Boolean: false]
    console.log(boNum.__proto__)//[Boolean: false]
    console.log(boString.__proto__)//[Boolean: false]
    console.log(boArray.__proto__)//[Boolean: false]
    console.log(boDate.__proto__)//[Boolean: false]
    console.log("\n");

  console.log("\t打印其他类对象转化成Boolean类型的构造体");
    console.log(boo.constructor)//[Function: Boolean]
    console.log(boBool.constructor)//[Function: Boolean]
    console.log(boNum.constructor)//[Function: Boolean]
    console.log(boString.constructor)//[Function: Boolean]
    console.log(boArray.constructor)//[Function: Boolean]
    console.log(boDate.constructor)//[Function: Boolean]
    console.log("\n");

  console.log("\t检测其他类对象转化成Boolean类型的原型链上是否存在 Object.prototype------1");
    console.log(boo instanceof Object )//false
    console.log(boBool instanceof Object )//false
    console.log(boNum instanceof Object )//false
    console.log(boString instanceof Object )//false
    console.log(boArray instanceof Object )//false
    console.log(boDate instanceof Object )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Boolean类型的原型链上是否存在 String.prototype------2");
    console.log(boo instanceof String )//false
    console.log(boBool instanceof String )//false
    console.log(boNum instanceof String )//false
    console.log(boString instanceof String )//false
    console.log(boArray instanceof String )//false
    console.log(boDate instanceof String )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Boolean类型的原型链上是否存在 Boolean.prototype------3");
    console.log(boo instanceof Boolean )//false
    console.log(boBool instanceof Boolean )//false
    console.log(boNum instanceof Boolean )//false
    console.log(boString instanceof Boolean )//false
    console.log(boArray instanceof Boolean )//false
    console.log(boDate instanceof Boolean )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Boolean类型的原型链上是否存在 Number.prototype------4");
    console.log(boo instanceof Number )//false
    console.log(boBool instanceof Number )//false
    console.log(boNum instanceof Number )//false
    console.log(boString instanceof Number )//false
    console.log(boArray instanceof Number )//false
    console.log(boDate instanceof Number )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Boolean类型的原型链上是否存在 Array.prototype------5");
    console.log(boo instanceof Array )//false
    console.log(boBool instanceof Array )//false
    console.log(boNum instanceof Array )//false
    console.log(boString instanceof Array )//false
    console.log(boArray instanceof Array )//false
    console.log(boDate instanceof Array )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Boolean类型的原型链上是否存在 Date.prototype------6");
    console.log(boo instanceof Date )//false
    console.log(boBool instanceof Date )//false
    console.log(boNum instanceof Date )//false
    console.log(boString instanceof Date )//false
    console.log(boArray instanceof Date )//false
    console.log(boDate instanceof Date )//false
    console.log("\n");
}
//showTranBooleanData();

function showTranNumberData(){
  console.log("其他类对象转化成Number类型");
  console.log("\t打印其他类对象转化成Number类型");
    console.log(noo)//NaN
    console.log(noBool)//1
    console.log(noNum)//68
    console.log(noString)//NaN
    console.log(noArray)//NaN
    console.log(noDate)//1511022672428
    console.log("\n");

  console.log("\t打印其他类对象转化成Number类型的原型");
    console.log(noo.__proto__)//[Number: 0]
    console.log(noBool.__proto__)//[Number: 0]
    console.log(noNum.__proto__)//[Number: 0]
    console.log(noString.__proto__)//[Number: 0]
    console.log(noArray.__proto__)//[Number: 0]
    console.log(noDate.__proto__)//[Number: 0]
    console.log("\n");

  console.log("\t打印其他类对象转化成Number类型的构造体");
    console.log(noo.constructor)//[Function: Number]
    console.log(noBool.constructor)//[Function: Number]
    console.log(noNum.constructor)//[Function: Number]
    console.log(noString.constructor)//[Function: Number]
    console.log(noArray.constructor)//[Function: Number]
    console.log(noDate.constructor)//[Function: Number]
    console.log("\n");

  console.log("\t检测其他类对象转化成Number类型的原型链上是否存在 Object.prototype------1");
    console.log(noo instanceof Object )//false
    console.log(noBool instanceof Object )//false
    console.log(noNum instanceof Object )//false
    console.log(noString instanceof Object )//false
    console.log(noArray instanceof Object )//false
    console.log(noDate instanceof Object )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Number类型的原型链上是否存在 String.prototype------2");
    console.log(noo instanceof String )//false
    console.log(noBool instanceof String )//false
    console.log(noNum instanceof String )//false
    console.log(noString instanceof String )//false
    console.log(noArray instanceof String )//false
    console.log(noDate instanceof String )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Number类型的原型链上是否存在 Boolean.prototype------3");
    console.log(noo instanceof Boolean )//false
    console.log(noBool instanceof Boolean )//false
    console.log(noNum instanceof Boolean )//false
    console.log(noString instanceof Boolean )//false
    console.log(noArray instanceof Boolean )//false
    console.log(noDate instanceof Boolean )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Number类型的原型链上是否存在 Number.prototype------4");
    console.log(noo instanceof Number )//false
    console.log(noBool instanceof Number )//false
    console.log(noNum instanceof Number )//false
    console.log(noString instanceof Number )//false
    console.log(noArray instanceof Number )//false
    console.log(noDate instanceof Number )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Number类型的原型链上是否存在 Array.prototype------5");
    console.log(noo instanceof Array )//false
    console.log(noBool instanceof Array )//false
    console.log(noNum instanceof Array )//false
    console.log(noString instanceof Array )//false
    console.log(noArray instanceof Array )//false
    console.log(noDate instanceof Array )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Number类型的原型链上是否存在 Date.prototype------6");
    console.log(noo instanceof Date )//false
    console.log(noBool instanceof Date )//false
    console.log(noNum instanceof Date )//false
    console.log(noString instanceof Date )//false
    console.log(noArray instanceof Date )//false
    console.log(noDate instanceof Date )//false
    console.log("\n");
}
//showTranNumberData();

function showTranArrayData(){
  console.log("其他类对象转化成Array类型");
  console.log("\t打印其他类对象转化成Array类型");
    console.log(aoo)//[ {} ]
    console.log(aoBool)//[ [Boolean: true] ]
    console.log(aoNum)//[ [Number: 68] ]
    console.log(aoString)//[ [String: 'hello world'] ]
    console.log(aoArray)//[ [ 'demo', 'melon', 'water' ] ]
    console.log(aoDate)//[ 2017-11-18T16:35:16.315Z ]
    console.log("\n");

  console.log("\t打印其他类对象转化成Array类型的原型");
    console.log(aoo.__proto__)//[]
    console.log(aoBool.__proto__)//[]
    console.log(aoNum.__proto__)//[]
    console.log(aoString.__proto__)//[]
    console.log(aoArray.__proto__)//[]
    console.log(aoDate.__proto__)//[]
    console.log("\n");

  console.log("\t打印其他类对象转化成Array类型的构造体");
    console.log(aoo.constructor)//[Function: Array]
    console.log(aoBool.constructor)//[Function: Array]
    console.log(aoNum.constructor)//[Function: Array]
    console.log(aoString.constructor)//[Function: Array]
    console.log(aoArray.constructor)//[Function: Array]
    console.log(aoDate.constructor)//[Function: Array]
    console.log("\n");

  console.log("\t检测其他类对象转化成Array类型的原型链上是否存在 Object.prototype------1");
    console.log(aoo instanceof Object )//true
    console.log(aoBool instanceof Object )//true
    console.log(aoNum instanceof Object )//true
    console.log(aoString instanceof Object )//true
    console.log(aoArray instanceof Object )//true
    console.log(aoDate instanceof Object )//true
    console.log("\n");

  console.log("\t检测其他类对象转化成Array类型的原型链上是否存在 String.prototype------2");
    console.log(aoo instanceof String )//false
    console.log(aoBool instanceof String )//false
    console.log(aoNum instanceof String )//false
    console.log(aoString instanceof String )//false
    console.log(aoArray instanceof String )//false
    console.log(aoDate instanceof String )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Array类型的原型链上是否存在 Boolean.prototype------3");
    console.log(aoo instanceof Boolean )//false
    console.log(aoBool instanceof Boolean )//false
    console.log(aoNum instanceof Boolean )//false
    console.log(aoString instanceof Boolean )//false
    console.log(aoArray instanceof Boolean )//false
    console.log(aoDate instanceof Boolean )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Array类型的原型链上是否存在 Number.prototype------4");
    console.log(aoo instanceof Number )//false
    console.log(aoBool instanceof Number )//false
    console.log(aoNum instanceof Number )//false
    console.log(aoString instanceof Number )//false
    console.log(aoArray instanceof Number )//false
    console.log(aoDate instanceof Number )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Array类型的原型链上是否存在 Array.prototype------5");
    console.log(aoo instanceof Array )//true
    console.log(aoBool instanceof Array )//true
    console.log(aoNum instanceof Array )//true
    console.log(aoString instanceof Array )//true
    console.log(aoArray instanceof Array )//true
    console.log(aoDate instanceof Array )//true
    console.log("\n");

  console.log("\t检测其他类对象转化成Array类型的原型链上是否存在 Date.prototype------6");
    console.log(aoo instanceof Date )//false
    console.log(aoBool instanceof Date )//false
    console.log(aoNum instanceof Date )//false
    console.log(aoString instanceof Date )//false
    console.log(aoArray instanceof Date )//false
    console.log(aoDate instanceof Date )//false
    console.log("\n");
}
//showTranArrayData();

function showTranDateData(){
  console.log("其他类对象转化成Date类型");
  console.log("\t打印其他类对象转化成Date类型");
    console.log(doo)//Sun Nov 19 2017 01:39:06 GMT+0800 (CST)
    console.log(doBool)//Sun Nov 19 2017 01:39:06 GMT+0800 (CST)
    console.log(doNum)//Sun Nov 19 2017 01:39:06 GMT+0800 (CST)
    console.log(doString)//Sun Nov 19 2017 01:39:06 GMT+0800 (CST)
    console.log(doArray)//Sun Nov 19 2017 01:39:06 GMT+0800 (CST)
    console.log(doDate)//Sun Nov 19 2017 01:39:06 GMT+0800 (CST)
    console.log("\n");

  console.log("\t打印其他类对象转化成Date类型的原型");
    console.log(doo.__proto__)//[String: '']
    console.log(doBool.__proto__)//[String: '']
    console.log(doNum.__proto__)//[String: '']
    console.log(doString.__proto__)//[String: '']
    console.log(doArray.__proto__)//[String: '']
    console.log(doDate.__proto__)//[String: '']
    console.log("\n");

  console.log("\t打印其他类对象转化成Date类型的构造体");
    console.log(doo.constructor)//[Function: String]
    console.log(doBool.constructor)//[Function: String]
    console.log(doNum.constructor)//[Function: String]
    console.log(doString.constructor)//[Function: String]
    console.log(doArray.constructor)//[Function: String]
    console.log(doDate.constructor)//[Function: String]
    console.log("\n");

  console.log("\t检测其他类对象转化成Date类型的原型链上是否存在 Object.prototype------1");
    console.log(doo instanceof Object )//false
    console.log(doBool instanceof Object )//false
    console.log(doNum instanceof Object )//false
    console.log(doString instanceof Object )//false
    console.log(doArray instanceof Object )//false
    console.log(doDate instanceof Object )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Date类型的原型链上是否存在 String.prototype------2");
    console.log(doo instanceof String )//false
    console.log(doBool instanceof String )//false
    console.log(doNum instanceof String )//false
    console.log(doString instanceof String )//false
    console.log(doArray instanceof String )//false
    console.log(doDate instanceof String )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Date类型的原型链上是否存在 Boolean.prototype------3");
    console.log(doo instanceof Boolean )//false
    console.log(doBool instanceof Boolean )//false
    console.log(doNum instanceof Boolean )//false
    console.log(doString instanceof Boolean )//false
    console.log(doArray instanceof Boolean )//false
    console.log(doDate instanceof Boolean )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Date类型的原型链上是否存在 Number.prototype------4");
    console.log(doo instanceof Number )//false
    console.log(doBool instanceof Number )//false
    console.log(doNum instanceof Number )//false
    console.log(doString instanceof Number )//false
    console.log(doArray instanceof Number )//false
    console.log(doDate instanceof Number )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Date类型的原型链上是否存在 Array.prototype------5");
    console.log(doo instanceof Array )//false
    console.log(doBool instanceof Array )//false
    console.log(doNum instanceof Array )//false
    console.log(doString instanceof Array )//false
    console.log(doArray instanceof Array )//false
    console.log(doDate instanceof Array )//false
    console.log("\n");

  console.log("\t检测其他类对象转化成Date类型的原型链上是否存在 Date.prototype------6");
    console.log(doo instanceof Date )//false
    console.log(doBool instanceof Date )//false
    console.log(doNum instanceof Date )//false
    console.log(doString instanceof Date )//false
    console.log(doArray instanceof Date )//false
    console.log(doDate instanceof Date )//false
    console.log("\n");
}
//showTranDateData();

// 定义构造函数
function C(){} 
function D(){} 

var o = new C();

function showConsDemo1(){
console.log("\t打印函数之间原型链的判断");
  console.log(o instanceof C); // true，因为 Object.getPrototypeOf(o) === C.prototype
  console.log(o instanceof D); // false，因为 D.prototype不在o的原型链上  
  console.log(o instanceof Object); // true,因为Object.prototype.isPrototypeOf(o)返回true
  console.log(C.prototype instanceof Object) // true,同上
}


C.prototype = {};
var o2 = new C();
function showConsDemo2(){
  console.log("\t在清除构造体函数的原型链之后，打印函数之间原型链的判断");
  console.log(o2 instanceof C); // true
  console.log(o instanceof C); // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.  
}

D.prototype = new C(); // 继承
var o3 = new D();
function showConsDemo3(){
  console.log("\t打印父子函数之间原型链的判断");  
  console.log(o3 instanceof D); // true
  console.log(o3 instanceof C); // true
}


//需要注意的是，如果表达式 obj instanceof Foo 返回true。
//则并不意味着该表达式会永远返回true，因为Foo.prototype属性的值有可能会改变，
//改变之后的值很有可能不存在于obj的原型链上，这时原表达式的值就会成为false。
//另外一种情况下，原表达式的值也会改变，就是改变对象obj的原型链的情况，
//虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的__proto__魔法属性，是可以实现的。
//比如执行obj.__proto__ = {}之后，obj instanceof Foo就会返回false了。

//instanceof和多全局对象(多个frame或多个window之间的交互)

// 在浏览器中，我们的脚本可能需要在多个窗口之间进行交互。
//多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。
//这可能会引发一些问题。比如，表达式 [] instanceof window.frames[0].Array 会返回false，
//因为 Array.prototype !== window.frames[0].Array.prototype，
//因此你必须使用 Array.isArray(myObj) 
//或者 Object.prototype.toString.call(myObj) === "[object Array]"来判断myObj是否是数组。

// Mozilla开发者注意:
// 在代码中使用 XPCOM instanceof 有特殊影响: 
//obj instanceof xpcomInterface (e.g. Components.interfaces.nsIFile) calls obj.QueryInterface(xpcomInterface)
// and returns true if QueryInterface succeeded. 
//A side effect of such call is that you can use xpcomInterface's properties on obj 
//after a successful instanceof test. 
//Unlike standard JavaScript globals, 
//the test obj instanceof xpcomInterface works as expected even if obj is from a different scope.

//例子

//1-----------例子: 表明String对象和Date对象都属于Object类型

//下面的代码使用了instanceof来证明：String和Date对象同时也属于Object类型。

var simpleStr = "This is a simple string"; 
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};

function showSDObject(){
console.log("\t打印String对象和Date对象都属于Object类型的判断");
  console.log(simpleStr instanceof String); // returns false, 检查原型链会找到 undefined
  console.log(myString  instanceof String); // returns true
  console.log(newStr    instanceof String); // returns true
  console.log(myString  instanceof Object); // returns true
  
  console.log(myObj instanceof Object);    // returns true, despite an undefined prototype
  console.log(({})  instanceof Object);    // returns true, 同上
  
  console.log(myString instanceof Date);   // returns false
  
  console.log(myDate instanceof Date);     // returns true
  console.log(myDate instanceof Object);   // returns true
  console.log(myDate instanceof String);   // returns false
}



//2-----------演示mycar属于Car类型的同时又属于Object类型

// 下面的代码创建了一个类型Car，以及该类型的对象实例mycar. instanceof运算符表明了这个mycar对象既属于Car类型，又属于Object类型。

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);

function showGen(){
  console.log("\t打印函数体构造体和实例化对象之间的判断");
  console.log(mycar instanceof Car);    // 返回 true
  console.log(mycar instanceof Object); // 返回 true
}

