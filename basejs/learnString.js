var a = 4;
var b = 8;
var strString = "hello watermelon";
var oString = new String("hello world");
var tString_1 =`hello Template`;
var tString_2 =`hello line 1
                hello line 2`;
//`string text ${expression} string text`  在模版字符串中使用表达式
var tString_3 =`Fifteen is ${a + b} and\nnot ${2 * a + b}.`;

//tag `string text ${expression} string text`  在模版字符串中使用tag方法
var tString_4 = tag`Hello ${ a + b } world ${ a * b}hahaha ${ a / b}`;
function tag(strings, ...values) {
    //String存储的是非expression的字符串
    //values存储的是expression计算之后的值
  console.log(strings[0]); // "Hello "  在第一个expression前的值
  console.log(strings[1]); // " world " 在第二个expression前的值
  console.log(strings[2]); // "hahaha"  在第三个expression前的值
  console.log(strings[3]); // "" 在第三个expression后的值
  console.log(values[0]);  // 12  第一个expression的值
  console.log(values[1]);  // 32  第二个expression的值
  console.log(values[2]); // 0.5  第三个expression的值

  return "大吉大利今晚吃西瓜!";
}



console.log("\n 打印本身内容------------------------------------------------------------------------------------------------------------------------------------------"); 
	console.log(strString);//hello watermelon
	console.log(oString);//[String: 'hello world']
	console.log(tString_1);//hello Template
	//打印出来会保留原格式 比如原有的换行和缩进
	console.log(tString_2);//hello Template line 1 \n \t hello Template line 2  
	// tag(tString_1);//h e l l undefined undefined undefined
	// tag(tString_2);//h e l l undefined undefined undefined
	// tag(tString_3);//F i f t undefined undefined undefined
	console.log(tString_3);//Fifteen is 12 and \n  not 16.  

	//在没有调用console之前，不会打印 大吉大利今晚吃西瓜!  
	//tString_4的值其实就是tag函数的返回值   大吉大利今晚吃西瓜!  
	console.log(tString_4);//大吉大利今晚吃西瓜!

	console.log(strString instanceof(String))//false
	console.log(oString instanceof(String))//true
	console.log(tString_1 instanceof(String))//false
	console.log(tString_2 instanceof(String))//false
	console.log(tString_3 instanceof(String))//false
	console.log(tString_4 instanceof(String))//false

console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印字符串对象属性"); 
	console.log("\n 打印本身constructor属性------------------------------------------------------------------------------------------------------------------------------------------"); 
		console.log(strString.constructor);//[Function: String]
		console.log(oString.constructor);//[Function: String]
		console.log(tString_1.constructor);//[Function: String]
		console.log(tString_2.constructor);//[Function: String]
		console.log(tString_3.constructor);//[Function: String]
		console.log(tString_4.constructor);//[Function: String]


	console.log("\n 打印本身__proto__属性------------------------------------------------------------------------------------------------------------------------------------------"); 
		console.log(strString.__proto__);//[String: '']
		console.log(oString.__proto__);//[String: '']
		console.log(tString_1.__proto__);//[String: '']
		console.log(tString_2.__proto__);//[String: '']
		console.log(tString_3.__proto__);//[String: '']
		console.log(tString_4.__proto__);//[String: '']

	console.log("\n 打印本身length属性------------------------------------------------------------------------------------------------------------------------------------------");
		console.log(strString.length);//16 15个字母加一个空格
		console.log(oString.length);//11 10个字母加一个空格
		console.log(tString_1.length);//14 13个字母加一个空格
		console.log(tString_2.length);//41 18个字母加两个数字加四个空格加四个缩进符（一个占四个）加上一个换行符（一个占一个）
		console.log(tString_3.length);//25 15个字母加四个数字加四个空格加一个符号加上一个换行符（一个占一个）
		console.log(tString_4.length);//10 9个汉字加一个符号



console.log("\n强制类型转化，将其他类型的变量转化成String类型------------------------------------------------------------------------------------------------------------------------------------------String()");
	//强制类型转化，将其他类型的变量转化成String类型
	//对 null 和 undefined 值强制类型转换可以生成字符串而不引发错误
	// 但是 null 和 undefined 值强制使用toString()，会引发错误
	console.log(String(-0))//0
	console.log(String(-1))//-1
	console.log(String(null))//null
	console.log(String(undefined))//undefined
	console.log(String(NaN))//NaN

	console.log(String(-0) instanceof(String))//false
	console.log(String(-1) instanceof(String))//false
	console.log(String(null) instanceof(String))//false
	console.log(String(undefined) instanceof(String))//false
	console.log(String(NaN) instanceof(String))//false
	console.log(String('NaN') instanceof(String))//false

	console.log("将其他类对象转化成string类型的时候，其实传入String的值是每个对象原始的默认值")

	console.log(String(new Object()))//[object Object]
	console.log(String(new Boolean()))//false
	console.log(String(new Number()))//0
	console.log(String(new String()))//""  返回值为空
	console.log(String(new Array()))//""	返回值为空
	console.log(String(new Date()))//Sat Nov 18 2017 15:45:07 GMT+0800 (CST)

	console.log(new Object().prototype)//undefined
	console.log(new Boolean().prototype)//undefined
	console.log(new Number().prototype)//undefined
	console.log(new String().prototype)//undefined
	console.log(new Array().prototype)//undefined
	console.log(new Date().prototype)//undefined

	console.log(new Object().__proto__)//{}
	console.log(new Boolean().__proto__)//[Boolean: false]
	console.log(new Number().__proto__)//[Number: 0]
	console.log(new String().__proto__)//[String: '']
	console.log(new Array().__proto__)//[]
	console.log(new Date().__proto__)//Date {}

	console.log("检测其他类对象转化成string类型或者其本身的原型链上是否存在 String.prototype");
	console.log(String(new Object()) instanceof(String))//false
	console.log(String(new Object()) instanceof(Object))//false
	console.log(new Object() instanceof(Object))//true
	console.log(new Object() instanceof(String))//false

	console.log(String(new Boolean()) instanceof(String))//false
	console.log(String(new Boolean()) instanceof(Boolean))//false
	console.log(new Boolean() instanceof(Boolean))//true
	console.log(new Boolean() instanceof(String))//false
	

	console.log(String(new Number()) instanceof(String))//false	
	console.log(String(new Number()) instanceof(Number))//false
	console.log(new Number() instanceof(Number))//true
	console.log(new Number() instanceof(String))//false
	

	console.log(String(new String()) instanceof(String))//false
	console.log(new String() instanceof(String))//true
	
	console.log(String(new Array()) instanceof(String))//false
	console.log(String(new Array()) instanceof(Array))//false
	console.log(new Array() instanceof(Array))//true
	console.log(new Array() instanceof(String))//false
	
	
	console.log(String(new Date()) instanceof(String))//false
	console.log(String(new Date()) instanceof(Date))//false
	console.log(new Date() instanceof(Date))//true
	console.log(new Date() instanceof(String))//false
	
	
	
console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印字符串对象方法");    


console.log("\n 打印HTML相关方法------------------------------------------------------------------------------------------------------------------------------------------"); 
    // console.log(strString.constructor);//[Function: String]
    // console.log(oString.constructor);//[Function: String]
    // console.log(tString_1.constructor);//[Function: String]
    // console.log(tString_2.constructor);//[Function: String]
    // console.log(tString_3.constructor);//[Function: String]
    // console.log(tString_4.constructor);//[Function: String]

    