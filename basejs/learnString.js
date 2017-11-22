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

function showInitData(){

	console.log("\n 打印本身内容------------------------------------------------------------------------------------------------------------------------------------------"); 
	console.log(strString);//hello watermelon
	console.log(oString);//[String: 'hello world']
	console.log(tString_1);//hello Template
	//打印出来会保留原格式 比如原有的换行和缩进
	console.log(tString_2);//hello line 1 \n \t hello line 2  
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
}
//showInitData();

function learnStringProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印字符串对象属性"); 
	learnInheritFunProp();
	//learnInheritObjectProp();
	//learnStringCommonProp();
}
learnStringProp();

function learnInheritFunProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印String对象继承funciton的属性");	
		// console.log(oString.arguments);//undefined
		// console.log(oString.arity);//undefined
		// console.log(oString.caller);//undefined
		// console.log(oString.callee);//undefined
		// console.log(oString.displayName);//undefined
		// console.log(oString.length);//11
		// console.log(oString.name);//undefined
		// console.log(oString.prototype);//undefined
		
		// //在浏览器控制台会报错'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
		// //但是在js文件以node的形式运行的时候，可以打印相关结果
		// console.log(String.arguments);//null
		// console.log(String.arity);//undefined
		// console.log(String.caller);//null
		// console.log(String.callee);//undefined
		// console.log(String.displayName);//undefined
		// console.log(String.length);//1
		// console.log(String.name);//String
		// console.log(String.prototype);//[String: '']

		var a = function() {  
			console.log("arguments.callee"); //  arguments.callee 
			
			console.log(arguments.callee);
			//在浏览器控制台 打印效果
			// ƒ () {  
			// 	console.log("arguments.callee"); 
			// 	console.log(arguments.callee);
			// 	console.log("arguments.callee.length"); 
			// 	console.log(arguments.callee.length);   
			// 	}

			//在js文件以node的形式运行  打印效果
			//[Function: a]

			console.log("arguments.callee.length"); //arguments.callee.length
			console.log(arguments.callee.length);   // 0
		}   
		var b = function() {   
			a();   
		}   
		b();  
}

function learnInheritObjectProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印String对象继承object的属性");	
		console.log(oString.__count__);//
		console.log(oString.__noSuchMethod__);//
		console.log(oString.__parent__);//
		console.log(oString.__proto__);//
		console.log(oString.constructor);//

		//报错'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
		console.log(String.__count__);//
		console.log(String.__noSuchMethod__);//
		console.log(String.__parent__);//
		console.log(String.__proto__);//
		console.log(String.constructor);//
}

function learnStringCommonProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印String对象常用的属性");
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
}

function LearnStringTran(){
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
	
}
//LearnStringTran();
	
//learnStringFun();

function learnStringFun(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印字符串对象方法");    
	//learnStringHtmlFun();
	learnStringDisHtmlFun();		
}	

function learnStringHtmlFun(){

	console.log("\n 打印HTML相关方法------------------------------------------------------------------------------------------------------------------------------------------"); 
	learnStringHBig();
	learnStringHSmall();
	learnStringHBlink();
	learnStringHBold();
	learnStringHItalics();
	learnStringHStrike();
	learnStringHFixed();
	learnStringHSub();
	learnStringHSup();
	learnStringHAnchor();
	learnStringHLink();
	learnStringHFontcolor();
	learnStringHFontsize();
}

function learnStringDisHtmlFun(){
	console.log("\n 打印与HTML无关方法------------------------------------------------------------------------------------------------------------------------------------------"); 
	// learnStringBold();
	// learnStringItalics();
	// learnStringStrike();
	// learnStringSub();
	// learnStringSup();
	// learnStringAnchor();
	// learnStringLink();
	// learnStringFontcolor();
	// learnStringFontsize();
}


function learnStringHBig(){
	console.log("\n 打印big()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
	console.log(strString.big())//<big>hello watermelon</big>
	console.log(oString.big())//<big>hello world</big>
	console.log(tString_1.big())//<big>hello Template</big>
	console.log(tString_2.big())//<big>hello line 1 \n \t hello line 2</big>
	console.log(tString_3.big())//<big>Fifteen is 12 and \n  not 16.</big>
	console.log(tString_4.big())//<big>大吉大利今晚吃西瓜!</big>
}

function learnStringHSmall(){
	console.log("\n 打印small()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
	console.log(strString.small())//<small>hello watermelon</small>
	console.log(oString.small())//<small>hello world</small>
	console.log(tString_1.small())//<small>hello Template</small>
	console.log(tString_2.small())//<small>hello line 1 \n \t hello line 2</small>
	console.log(tString_3.small())//<small>Fifteen is 12 and \n  not 16.</small>
	console.log(tString_4.small())//<small>大吉大利今晚吃西瓜!</small>	
}

function learnStringHBlink(){
	console.log("\n 打印blink()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
	console.log(strString.blink())//<blink>hello watermelon</blink>
	console.log(oString.blink())//<blink>hello world</blink>
	console.log(tString_1.blink())//<blink>hello Template</blink>
	console.log(tString_2.blink())//<blink>hello line 1 \n \t hello line 2</blink>
	console.log(tString_3.blink())//<blink>Fifteen is 12 and \n  not 16.</blink>
	console.log(tString_4.blink())//<blink>大吉大利今晚吃西瓜!</blink>	
}

function learnStringHBold(){
	console.log("\n 打印bold()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
	console.log(strString.bold())//<b>hello watermelon</b>
	console.log(oString.bold())//<b>hello world</b>
	console.log(tString_1.bold())//<b>hello Template</b>
	console.log(tString_2.bold())//<b>hello line 1 \n \t hello line 2</b>
	console.log(tString_3.bold())//<b>Fifteen is 12 and \n  not 16.</b>
	console.log(tString_4.bold())//	<b>大吉大利今晚吃西瓜!</b>
}

function learnStringHItalics(){
	console.log("\n 打印italics()函数的用法---------------------------------------------------------------------------------------------------------------------5"); 
	console.log(strString.italics())//<i>hello watermelon</i>
	console.log(oString.italics())//<i>hello world</i>
	console.log(tString_1.italics())//<i>hello Template</i>
	console.log(tString_2.italics())//<i>hello line 1 \n \t hello line 2</i>
	console.log(tString_3.italics())//<i>Fifteen is 12 and \n  not 16.</i>
	console.log(tString_4.italics())//<i>大吉大利今晚吃西瓜!</i>	
}

function learnStringHStrike(){
	console.log("\n 打印big()函数的用法---------------------------------------------------------------------------------------------------------------------6"); 
	console.log(strString.strike())//<strike>hello watermelon</strike>
	console.log(oString.strike())//<strike>hello world</strike>
	console.log(tString_1.strike())//<strike>hello Template</strike>
	console.log(tString_2.strike())//<strike>hello line 1 \n \t hello line 2</strike>
	console.log(tString_3.strike())//<strike>Fifteen is 12 and \n  not 16.</strike>
	console.log(tString_4.strike())//	<strike>大吉大利今晚吃西瓜!</strike>
}

function learnStringHFixed(){
	console.log("\n 打印big()函数的用法---------------------------------------------------------------------------------------------------------------------7"); 
	console.log(strString.fixed())//<tt>hello watermelon</tt>
	console.log(oString.fixed())//<tt>hello world</tt>
	console.log(tString_1.fixed())//<tt>hello Template</tt>
	console.log(tString_2.fixed())//<tt>hello line 1 \n \t hello line 2</tt>
	console.log(tString_3.fixed())//<tt>Fifteen is 12 and \n  not 16.</tt>
	console.log(tString_4.fixed())//<tt>大吉大利今晚吃西瓜!</tt>
}

function learnStringHSub(){
	console.log("\n 打印sub()函数的用法---------------------------------------------------------------------------------------------------------------------8"); 
	console.log(strString.sub())//<sub>hello watermelon</sub>
	console.log(oString.sub())//<sub>hello world</sub>
	console.log(tString_1.sub())//<sub>hello Template</sub>
	console.log(tString_2.sub())//<sub>hello line 1 \n \t hello line 2</sub>
	console.log(tString_3.sub())//<sub>Fifteen is 12 and \n  not 16.</sub>
	console.log(tString_4.sub())//<sub>大吉大利今晚吃西瓜!</sub>
}

function learnStringHSup(){
	console.log("\n 打印sup()函数的用法---------------------------------------------------------------------------------------------------------------------9"); 
	console.log(strString.sup())//<sup>hello watermelon</sup>
	console.log(oString.sup())//<sup>hello world</sup>
	console.log(tString_1.sup())//<sup>hello Template</sup>
	console.log(tString_2.sup())//<sup>hello line 1 \n \t hello line 2</sup>
	console.log(tString_3.sup())//<sup>Fifteen is 12 and \n  not 16.</sup>
	console.log(tString_4.sup())//<sup>大吉大利今晚吃西瓜!</sup>	
}

function learnStringHAnchor(){
	console.log("\n 打印anchor()函数的用法---------------------------------------------------------------------------------------------------------------------10"); 
	console.log(strString.anchor("watermelon"))//<a name="watermelon">hello watermelon</a>
	console.log(oString.anchor("watermelon"))//<a name="watermelon">hello world</a>
	console.log(tString_1.anchor("watermelon"))//<a name="watermelon">hello Template</a>
	console.log(tString_2.anchor("watermelon"))//<a name="watermelon">hello line 1 \n \t hello line 2</a>
	console.log(tString_3.anchor("watermelon"))//<a name="watermelon">Fifteen is 12 and \n  not 16.</a>
	console.log(tString_4.anchor("watermelon"))//<a name="watermelon">大吉大利今晚吃西瓜!</a>
}

function learnStringHLink(){
	console.log("\n 打印link()函数的用法---------------------------------------------------------------------------------------------------------------------11"); 
	console.log(strString.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello watermelon</a>
	console.log(oString.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello world</a>
	console.log(tString_1.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello Template</a>
	console.log(tString_2.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello line 1 \n \t hello line 2</a>
	console.log(tString_3.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">Fifteen is 12 and \n  not 16.</a>
	console.log(tString_4.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">大吉大利今晚吃西瓜!</a>
}

function learnStringHFontcolor(){
	console.log("\n 打印fontcolor()函数的用法---------------------------------------------------------------------------------------------------------------------12"); 
	console.log(strString.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello watermelon</font>
	console.log(oString.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello world</font>
	console.log(tString_1.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello Template</font>
	console.log(tString_2.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello line 1 \n \t hello line 2</font>
	console.log(tString_3.fontcolor("#e9e9e9"))//<font color="#e9e9e9">Fifteen is 12 and \n  not 16.</font>
	console.log(tString_4.fontcolor("#e9e9e9"))//<font color="#e9e9e9">大吉大利今晚吃西瓜!</font>
}

function learnStringHFontsize(){
	console.log("\n 打印fontsize()函数的用法---------------------------------------------------------------------------------------------------------------------13"); 
	console.log(strString.fontsize(4))//<font size="4">hello watermelon</font>
	console.log(oString.fontsize(4))//<font size="4">hello world</font>
	console.log(tString_1.fontsize(4))//<font size="4">hello Template</font>
	console.log(tString_2.fontsize(4))//<font size="4">hello line 1 \n \t hello line 2</font>
	console.log(tString_3.fontsize(4))//<font size="4">Fifteen is 12 and \n  not 16.</font>
	console.log(tString_4.fontsize(4))//<font size="4">大吉大利今晚吃西瓜!</font>
}   

function testSSH(){

	console.log("测试深度系统的ssh是否正确配置");
}