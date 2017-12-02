var a = 4;
var b = 8;
var strString = "hello watermelon";
var oo = new Object();
var oString = new String("hello world");
var oBool = new Boolean(true);
var oNum = new Number(68);
var oArray = new Array("demo","melon","water");
var oDate = new Date();
var oString_1 = 'A \uD87E\uDC04 Z';
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
learnString();
function learnString(){
	//打印默认相关参数值
	//showInitData();	
	//学习string的属性
	//learnStringProp();
	//学习string的方法
	learnStringFun();	
	//学习和使用模版字面量
	//learnTemplateLiteral();
}

function showInitData(){

	console.log("\n 打印本身内容------------------------------------------------------------------------------------------------------------------------------------------"); 
	console.log(strString);//hello watermelon
	console.log(oString);//[String: 'hello world']
	console.log(oString_1);//A 你 Z   中间不在BMP中的字符，会显示乱码
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
	console.log(oString_1 instanceof(String));//false
	console.log(tString_1 instanceof(String))//false
	console.log(tString_2 instanceof(String))//false
	console.log(tString_3 instanceof(String))//false
	console.log(tString_4 instanceof(String))//false
}

//学习string的属性-----------------------------------------------------------------------------------------------------------------------------------------------------------------------START
function learnStringProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印字符串对象属性"); 
	learnInheritFunProp();
	learnInheritObjectProp();
	learnStringCommonProp();
}

function learnInheritFunProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印String对象继承funciton的属性");	
		console.log(oString.arguments);//undefined
		console.log(oString.arity);//undefined
		console.log(oString.caller);//undefined
		console.log(oString.callee);//undefined
		console.log(oString.displayName);//undefined
		console.log(oString.length);//11
		console.log(oString.name);//undefined
		console.log(oString.prototype);//undefined
		
		//在浏览器控制台会报错'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
		//但是在js文件以node的形式运行的时候，可以打印相关结果
		console.log(String.arguments);//null
		console.log(String.arity);//undefined
		console.log(String.caller);//null
		console.log(String.callee);//undefined
		console.log(String.displayName);//undefined
		console.log(String.length);//1
		console.log(String.name);//String
		console.log(String.prototype);//[String: '']
		learnFunCalleeProp();
  
}

function learnFunCalleeProp(){
	console.log("\t打印arguments.callee的相关用法");
	var a = function() {  
		console.log("arguments.callee-----------a"); //  arguments.callee 
		console.log(arguments);		//{}
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

		console.log("arguments.callee.length-----------a"); //arguments.callee.length
		console.log(arguments.callee.length);   // 0
	}   
	var b = function(c,s,d) {   
		a();//请注意在当前函数体调用的方法名不要和形参的名字一样 要不然会报这个方法没有哦
		console.log("arguments.callee-----------b"); //  arguments.callee 
		console.log(arguments);		//{}
		console.log(arguments.callee);
		//在浏览器控制台 打印效果
		// ƒ () {  
		// 	a();//请注意在当前函数体调用的方法名不要和形参的名字一样 要不然会报这个方法没有哦
		// 	console.log("arguments.callee-----------b"); //  arguments.callee 
		// 	console.log(arguments);		//{}
		// 	console.log(arguments.callee);
	
	
		// 	console.log("arguments.callee.length-----------b"); //arguments.callee.length
		// 	console.log(arguments.callee.length);   // 3		   
		// }   


		//在js文件以node的形式运行  打印效果
		//[Function: b]		
		console.log("arguments.callee.length-----------b"); //arguments.callee.length
		console.log(arguments.callee.length);   // 3		   
	}   
	b(); 

}	

function learnInheritObjectProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印String对象继承object的属性");	
		console.log(oString.__count__);//undefined
		console.log(oString.__noSuchMethod__);//undefined
		console.log(oString.__parent__);//undefined
		console.log(oString.__proto__);//[String: '']
		console.log(oString.constructor);//[Function: String]

		//报错'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
		console.log(String.__count__);//undefined
		console.log(String.__noSuchMethod__);//undefined
		console.log(String.__parent__);//undefined
		console.log(String.__proto__);//[Function]
		console.log(String.constructor);//[Function: Function]
}

function learnStringCommonProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印String对象常用的属性");
	console.log("\n 打印本身constructor属性------------------------------------------------------------------------------------------------------------------------------------------"); 
		console.log(strString.constructor);//[Function: String]
		console.log(oString.constructor);//[Function: String]
		console.log(oString_1.constructor);//[Function: String]
		console.log(tString_1.constructor);//[Function: String]
		console.log(tString_2.constructor);//[Function: String]
		console.log(tString_3.constructor);//[Function: String]
		console.log(tString_4.constructor);//[Function: String]

	console.log("\n 打印本身__proto__属性------------------------------------------------------------------------------------------------------------------------------------------"); 
		console.log(strString.__proto__);//[String: '']
		console.log(oString.__proto__);//[String: '']
		console.log(oString_1.__proto__);//[String: '']
		console.log(tString_1.__proto__);//[String: '']
		console.log(tString_2.__proto__);//[String: '']
		console.log(tString_3.__proto__);//[String: '']
		console.log(tString_4.__proto__);//[String: '']

	console.log("\n 打印本身length属性------------------------------------------------------------------------------------------------------------------------------------------");
		console.log(strString.length);//16 15个字母加一个空格
		console.log(oString.length);//11 10个字母加一个空格
		console.log(oString_1.length);//6 两个字母加两个空格加一个个识别出来的非BMP的字符	（一个占两个）	
		console.log(tString_1.length);//14 13个字母加一个空格
		console.log(tString_2.length);//41 18个字母加两个数字加四个空格加四个缩进符（一个占四个）加上一个换行符（一个占一个）
		console.log(tString_3.length);//25 15个字母加四个数字加四个空格加一个符号加上一个换行符（一个占一个）
		console.log(tString_4.length);//10 9个汉字加一个符号
} 

//学习string的属性-----------------------------------------------------------------------------------------------------------------------------------------------------------------------END


//学习string的方法-----------------------------------------------------------------------------------------------------------------------------------------------------------------------START

function learnStringFun(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印字符串对象方法");    
	learnStringSoftFun();
	//learnStringToughFun();
}	


function learnStringSoftFun(){
	console.log("\n 不会改变字符串原始值的柔和方法------------------------------------------------------------------------------------------------------------------------------------------"); 
	//learnStringHtmlFun();
	LearnStringSTranCoding();
	// LearnStringSRetrieval();
	// LearnStringSCompare();
	// LearnStringSSplicing();
	// LearnStringSToggleCase();
}


function learnStringToughFun(){
	console.log("\n 会改变字符串原始值的强硬方法------------------------------------------------------------------------------------------------------------------------------------------"); 
	LearnStringTTranInstanceof();
	LearnStringTReplacement();
	LearnStringTDivision();
	LearnStringTFormat();
	LearnStringTReplacement();
	LearnStringTObjectGeneral();
}

//学习string的方法-----------------------------------------------------------------------------------------------------------------------------------------------------------------------START
//学习string-不会改变字符串原始值的柔和方法--------------------------------------------------------------------------------------------------START

	//Soft-打印HTML相关方法-----------------------------------------------------START
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
			
		function learnStringHBig(){
			console.log("\n 打印big()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.big())//<big>hello watermelon</big>
			console.log(oString.big())//<big>hello world</big>
			console.log(oString_1.big())//<big>A 你 Z</big>
			console.log(tString_1.big())//<big>hello Template</big>
			console.log(tString_2.big())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.big())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.big())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringHSmall(){
			console.log("\n 打印small()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.small())//<small>hello watermelon</small>
			console.log(oString.small())//<small>hello world</small>
			console.log(oString_1.small())//<small>A 你 Z</small>			
			console.log(tString_1.small())//<small>hello Template</small>
			console.log(tString_2.small())//<small>hello line 1 \n \t hello line 2</small>
			console.log(tString_3.small())//<small>Fifteen is 12 and \n  not 16.</small>
			console.log(tString_4.small())//<small>大吉大利今晚吃西瓜!</small>	
		}

		function learnStringHBlink(){
			console.log("\n 打印blink()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.blink())//<blink>hello watermelon</blink>
			console.log(oString.blink())//<blink>hello world</blink>
			console.log(oString_1.blink())//<blink>A 你 Z</blink>			
			console.log(tString_1.blink())//<blink>hello Template</blink>
			console.log(tString_2.blink())//<blink>hello line 1 \n \t hello line 2</blink>
			console.log(tString_3.blink())//<blink>Fifteen is 12 and \n  not 16.</blink>
			console.log(tString_4.blink())//<blink>大吉大利今晚吃西瓜!</blink>	
		}

		function learnStringHBold(){
			console.log("\n 打印bold()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
			console.log(strString.bold())//<b>hello watermelon</b>
			console.log(oString.bold())//<b>hello world</b>
			console.log(oString_1.bold())//<b>A 你 Z</b>
			console.log(tString_1.bold())//<b>hello Template</b>
			console.log(tString_2.bold())//<b>hello line 1 \n \t hello line 2</b>
			console.log(tString_3.bold())//<b>Fifteen is 12 and \n  not 16.</b>
			console.log(tString_4.bold())//	<b>大吉大利今晚吃西瓜!</b>
		}

		function learnStringHItalics(){
			console.log("\n 打印italics()函数的用法---------------------------------------------------------------------------------------------------------------------5"); 
			console.log(strString.italics())//<i>hello watermelon</i>
			console.log(oString.italics())//<i>hello world</i>
			console.log(oString_1.italics())//<i>A 你 Z</i>
			console.log(tString_1.italics())//<i>hello Template</i>
			console.log(tString_2.italics())//<i>hello line 1 \n \t hello line 2</i>
			console.log(tString_3.italics())//<i>Fifteen is 12 and \n  not 16.</i>
			console.log(tString_4.italics())//<i>大吉大利今晚吃西瓜!</i>	
		}

		function learnStringHStrike(){
			console.log("\n 打印strike()函数的用法---------------------------------------------------------------------------------------------------------------------6"); 
			console.log(strString.strike())//<strike>hello watermelon</strike>
			console.log(oString.strike())//<strike>hello world</strike>
			console.log(oString_1.strike())//<i>A 你 Z</i>
			console.log(tString_1.strike())//<strike>hello Template</strike>
			console.log(tString_2.strike())//<strike>hello line 1 \n \t hello line 2</strike>
			console.log(tString_3.strike())//<strike>Fifteen is 12 and \n  not 16.</strike>
			console.log(tString_4.strike())//	<strike>大吉大利今晚吃西瓜!</strike>
		}

		function learnStringHFixed(){
			console.log("\n 打印fixed()函数的用法---------------------------------------------------------------------------------------------------------------------7"); 
			console.log(strString.fixed())//<tt>hello watermelon</tt>
			console.log(oString.fixed())//<tt>hello world</tt>
			console.log(oString_1.fixed())//<i>A 你 Z</i>
			console.log(tString_1.fixed())//<tt>hello Template</tt>
			console.log(tString_2.fixed())//<tt>hello line 1 \n \t hello line 2</tt>
			console.log(tString_3.fixed())//<tt>Fifteen is 12 and \n  not 16.</tt>
			console.log(tString_4.fixed())//<tt>大吉大利今晚吃西瓜!</tt>
		}

		function learnStringHSub(){
			console.log("\n 打印sub()函数的用法---------------------------------------------------------------------------------------------------------------------8"); 
			console.log(strString.sub())//<sub>hello watermelon</sub>
			console.log(oString.sub())//<sub>hello world</sub>
			console.log(oString_1.sub())//<i>A 你 Z</i>
			console.log(tString_1.sub())//<sub>hello Template</sub>
			console.log(tString_2.sub())//<sub>hello line 1 \n \t hello line 2</sub>
			console.log(tString_3.sub())//<sub>Fifteen is 12 and \n  not 16.</sub>
			console.log(tString_4.sub())//<sub>大吉大利今晚吃西瓜!</sub>
		}

		function learnStringHSup(){
			console.log("\n 打印sup()函数的用法---------------------------------------------------------------------------------------------------------------------9"); 
			console.log(strString.sup())//<sup>hello watermelon</sup>
			console.log(oString.sup())//<sup>hello world</sup>
			console.log(oString_1.sup())//<sup>A 你 Z</sup>
			console.log(tString_1.sup())//<sup>hello Template</sup>
			console.log(tString_2.sup())//<sup>hello line 1 \n \t hello line 2</sup>
			console.log(tString_3.sup())//<sup>Fifteen is 12 and \n  not 16.</sup>
			console.log(tString_4.sup())//<sup>大吉大利今晚吃西瓜!</sup>	
		}

		function learnStringHAnchor(){
			console.log("\n 打印anchor()函数的用法---------------------------------------------------------------------------------------------------------------------10"); 
			console.log(strString.anchor("watermelon"))//<a name="watermelon">hello watermelon</a>
			console.log(oString.anchor("watermelon"))//<a name="watermelon">hello world</a>
			console.log(oString_1.anchor("watermelon"))//<a name="watermelon">A 你 Z</a>
			console.log(tString_1.anchor("watermelon"))//<a name="watermelon">hello Template</a>
			console.log(tString_2.anchor("watermelon"))//<a name="watermelon">hello line 1 \n \t hello line 2</a>
			console.log(tString_3.anchor("watermelon"))//<a name="watermelon">Fifteen is 12 and \n  not 16.</a>
			console.log(tString_4.anchor("watermelon"))//<a name="watermelon">大吉大利今晚吃西瓜!</a>
		}

		function learnStringHLink(){
			console.log("\n 打印link()函数的用法---------------------------------------------------------------------------------------------------------------------11"); 
			console.log(strString.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello watermelon</a>
			console.log(oString.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello world</a>
			console.log(oString_1.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">A 你 Z</a>
			console.log(tString_1.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello Template</a>
			console.log(tString_2.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">hello line 1 \n \t hello line 2</a>
			console.log(tString_3.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">Fifteen is 12 and \n  not 16.</a>
			console.log(tString_4.link("https://mowatermelon.github.io/"))//<a href="https://mowatermelon.github.io/">大吉大利今晚吃西瓜!</a>
		}

		function learnStringHFontcolor(){
			console.log("\n 打印fontcolor()函数的用法---------------------------------------------------------------------------------------------------------------------12"); 
			console.log(strString.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello watermelon</font>
			console.log(oString.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello world</font>
			console.log(oString_1.fontcolor("#e9e9e9"))//<font color="#e9e9e9">A 你 Z</font>
			console.log(tString_1.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello Template</font>
			console.log(tString_2.fontcolor("#e9e9e9"))//<font color="#e9e9e9">hello line 1 \n \t hello line 2</font>
			console.log(tString_3.fontcolor("#e9e9e9"))//<font color="#e9e9e9">Fifteen is 12 and \n  not 16.</font>
			console.log(tString_4.fontcolor("#e9e9e9"))//<font color="#e9e9e9">大吉大利今晚吃西瓜!</font>
		}

		function learnStringHFontsize(){
			console.log("\n 打印fontsize()函数的用法---------------------------------------------------------------------------------------------------------------------13"); 
			console.log(strString.fontsize(4))//<font size="4">hello watermelon</font>
			console.log(oString.fontsize(4))//<font size="4">hello world</font>
			console.log(oString_1.fontsize(4))//<font size="4">A 你 Z</font>
			console.log(tString_1.fontsize(4))//<font size="4">hello Template</font>
			console.log(tString_2.fontsize(4))//<font size="4">hello line 1 \n \t hello line 2</font>
			console.log(tString_3.fontsize(4))//<font size="4">Fifteen is 12 and \n  not 16.</font>
			console.log(tString_4.fontsize(4))//<font size="4">大吉大利今晚吃西瓜!</font>
		}   

	//Soft-打印HTML相关方法-----------------------------------------------------END

	//Soft-打印编码方法-----------------------------------------------------START
		function LearnStringSTranCoding(){
			learnStringSCharAt();
			// learnStringSCharCodeAt();
			// learnStringSCodePointAt();
			// learnStringSNormalize();
			// learnStringSFromCharCode();
			// learnStringSFromCodePoint();
			//learnBMPChar();
		}

		function learnStringSCharAt(){
			console.log("\n 打印charAt()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			//返回在指定位置的字符
			//不提供参数就返回第一个字符的字符
			//提供游标值，就返回指定游标的字符    			
			console.log(strString.charAt())//h
			console.log(strString.charAt(3))//l	
			console.log(strString.charAt(1,2))//e	
			console.log(strString.charAt(1,2,3))//e	
			console.log(strString.charAt(1.2,3))//e				
			console.log(strString.charAt(1.6,3))//e
			console.log(strString.charAt(1.9,3))//e						
			console.log(strString.charAt(strString.length-1))//n

			console.log(strString.charAt(-2))//''  因为不接受负值，所以返回值为空							
			console.log(strString.charAt(oString))//h	
			console.log(strString.charAt(true))//e	
			console.log(strString.charAt(false))//h	
			console.log(strString.charAt(null))//h	
			console.log(strString.charAt(undefined))//h	
			console.log(strString.charAt(oArray))//h	
			console.log(strString.charAt(oo))//h
			console.log(strString.charAt(oNum))//''  因为超过字符串长度，所以返回值为空
			console.log(strString.charAt(oDate))//''  因为超过字符串长度，所以返回值为空			
			console.log(strString.charAt(strString.length))//''  因为超过字符串长度，所以返回值为空
			
			console.log(oString.charAt())//h
			console.log(oString.charAt(5))//''  因为对应位置的字符是空格，所以返回值为空			
			console.log(oString.charAt(oString.length-1))//d
			console.log(oString.charAt(oString.length))//''  因为超过字符串长度，所以返回值为空

			console.log(oString_1.charAt())//A
			console.log(oString_1.charAt(3))//�			
			console.log(oString_1.charAt(oString_1.length-1))//Z			
			console.log(oString_1.charAt(oString_1.length))//''  因为超过字符串长度，所以返回值为空

			console.log(tString_1.charAt())//h
			console.log(tString_1.charAt(5))//''  因为对应位置的字符是空格，所以返回值为空					
			console.log(tString_1.charAt(tString_1.length-1))//e
			console.log(tString_1.charAt(tString_1.length))//''  因为超过字符串长度，所以返回值为空

			console.log(tString_2.charAt())//<big>hello line 1 \n \t hello line 2</big> h
			console.log(tString_2.charAt(12))//''  因为对应位置的字符是换行符，所以返回值为空	
			console.log(tString_2.charAt(13))//''  因为对应位置的字符是缩进符第一个位置，所以返回值为空			
			console.log(tString_2.charAt(14))//''  因为对应位置的字符是缩进符第二个位置，所以返回值为空			
			console.log(tString_2.charAt(15))//''  因为对应位置的字符是缩进符第三个位置，所以返回值为空			
			console.log(tString_2.charAt(16))//''  因为对应位置的字符是缩进符第四个位置，所以返回值为空
			console.log(tString_2.charAt(17))//h  			
			console.log(tString_2.charAt(tString_2.length-1))//2
			console.log(tString_2.charAt(tString_2.length))//''  因为超过字符串长度，所以返回值为空

			console.log(tString_3.charAt())//F
			console.log(tString_3.charAt(17))//n			
			console.log(tString_3.charAt(tString_3.length-1))//.
			console.log(tString_3.charAt(tString_3.length))//''  因为超过字符串长度，所以返回值为空

			console.log(tString_4.charAt())//大
			console.log(tString_4.charAt(3))//利			
			console.log(tString_4.charAt(tString_4.length-1))//!
			console.log(tString_4.charAt(tString_4.length))//''  因为超过字符串长度，所以返回值为空	
		}

		function learnStringSCharCodeAt(){
			console.log("\n 打印charCodeAt()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.charCodeAt())//<big>hello watermelon</big>
			console.log(oString.charCodeAt())//<big>hello world</big>
			console.log(tString_1.charCodeAt())//<big>hello Template</big>
			console.log(tString_2.charCodeAt())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.charCodeAt())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.charCodeAt())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSCodePointAt(){
			console.log("\n 打印codePointAt()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.codePointAt());//<big>hello watermelon</big>
			console.log(oString.codePointAt());//<big>hello world</big>
			console.log(tString_1.codePointAt());//<big>hello Template</big>
			console.log(tString_2.codePointAt());//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.codePointAt());//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.codePointAt());//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringSNormalize(){
			console.log("\n 打印normalize()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
			console.log(strString.normalize())//<big>hello watermelon</big>
			console.log(oString.normalize())//<big>hello world</big>
			console.log(tString_1.normalize())//<big>hello Template</big>
			console.log(tString_2.normalize())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.normalize())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.normalize())//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringSFromCharCode(){
			console.log("\n 打印fromCharCode()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 			
			console.log(String.fromCharCode(65,66,67));

		}


		function learnStringSFromCodePoint(){
			console.log("\n 打印fromCodePoint()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 			
			console.log(String.fromCodePoint(42));        // "*"
			console.log(String.fromCodePoint(65, 90));      // "AZ"
			console.log(String.fromCodePoint(0x404));       // "\u0404"
			console.log(String.fromCodePoint(0x2F804));     // "\uD87E\uDC04"
			console.log(String.fromCodePoint(194564));      // "\uD87E\uDC04"
			console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307));          // "\uD834\uDF06a\uD834\uDF07"
			
			console.log(String.fromCodePoint('_'));      // RangeError
			console.log(String.fromCodePoint(Infinity));    // RangeError
			console.log(String.fromCodePoint(-1));          // RangeError
			console.log(String.fromCodePoint(3.14));        // RangeError
			console.log(String.fromCodePoint(3e-2));        // RangeError
			console.log(String.fromCodePoint(NaN));         // RangeError
			// String.fromCharCode() 方法不能单独获取在高代码点位上的字符
			// 另一方面，下列的示例中，可以返回 4 字节，也可以返回 2 字节的字符
			// (即，它可以返回单独的字符，使用长度 2 代替 1!） 
			console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal			
		}

		function learnBMPChar(){
			for (var i=0, chr; i < oString_1.length; i++) {
				if ((chr = getWholeChar(oString_1, i)) === false) {
					continue;
				} // Adapt this line at the top of each loop, passing in the whole string and
					// the current iteration and returning a variable to represent the 
					// individual character
			
				console.log(chr);
				//会执行5次
				//第一次   A
				//第二次   空字符串
				//第三次   你 在浏览器中显示为  你
				//第四次   空字符串
				//第五次   Z
				
			}
			var str = 'A\uD87E\uDC04Z';
			for (var i=0, chr; i < str.length; i++) {
				[chr, i] = getWholeCharAndI(str, i);
				// Adapt this line at the top of each loop, passing in the whole string and
				// the current iteration and returning an array with the individual character
				// and 'i' value (only changed if a surrogate pair)
			
				console.log(chr);
				//会执行3次
				//第一次   A
				//第三次   你 在谷歌中显示为  你
				//第五次   Z
			}
			for (var i=0, chr; i < oString_1.length; i++) {
				if ((chr = fixedCharAt(oString_1, i)) === false) {
					continue;
				} // Adapt this line at the top of each loop, passing in the whole string and
					// the current iteration and returning a variable to represent the 
					// individual character
			
				console.log(chr);
				//会执行5次
				//第一次   A
				//第二次   空字符串
				//第三次   你 在谷歌中显示为  你
				//第四次   空字符串
				//第五次   Z
				
			}
		}

		function getWholeChar (str, i) {
			var code = str.charCodeAt(i);     
		 
			if (isNaN(code)) {
				return ''; // Position not found
			}
			if (code < 0xD800 || code > 0xDFFF) {
				return str.charAt(i);
			}
		
			// High surrogate (could change last hex to 0xDB7F to treat high private
			// surrogates as single characters)
			if (0xD800 <= code && code <= 0xDBFF) { 
				if (str.length <= (i+1))  {
					throw 'High surrogate without following low surrogate';
				}
				var next = str.charCodeAt(i+1);
					if (0xDC00 > next || next > 0xDFFF) {
						throw 'High surrogate without following low surrogate';
					}
					return str.charAt(i)+str.charAt(i+1);
			}
			// Low surrogate (0xDC00 <= code && code <= 0xDFFF)
			if (i === 0) {
				throw 'Low surrogate without preceding high surrogate';
			}
			var prev = str.charCodeAt(i-1);
			
			// (could change last hex to 0xDB7F to treat high private
			// surrogates as single characters)
			if (0xD800 > prev || prev > 0xDBFF) { 
				throw 'Low surrogate without preceding high surrogate';
			}
			// We can pass over low surrogates now as the second component
			// in a pair which we have already processed
			return false; 
		}

		function getWholeCharAndI (str, i) {
			var code = str.charCodeAt(i);
		
			if (isNaN(code)) {
				return ''; // Position not found
			}
			if (code < 0xD800 || code > 0xDFFF) {
				return [str.charAt(i), i]; // Normal character, keeping 'i' the same
			}
		
			// High surrogate (could change last hex to 0xDB7F to treat high private
			// surrogates as single characters)
			if (0xD800 <= code && code <= 0xDBFF) { 
				if (str.length <= (i+1))  {
					throw 'High surrogate without following low surrogate';
				}
				var next = str.charCodeAt(i+1);
					if (0xDC00 > next || next > 0xDFFF) {
						throw 'High surrogate without following low surrogate';
					}
					return [str.charAt(i)+str.charAt(i+1), i+1];
			}
			// Low surrogate (0xDC00 <= code && code <= 0xDFFF)
			if (i === 0) {
				throw 'Low surrogate without preceding high surrogate';
			}
			var prev = str.charCodeAt(i-1);
		
			// (could change last hex to 0xDB7F to treat high private surrogates
			// as single characters)
			if (0xD800 > prev || prev > 0xDBFF) { 
				throw 'Low surrogate without preceding high surrogate';
			}
			// Return the next character instead (and increment)
			return [str.charAt(i+1), i+1]; 
		}

		function fixedCharAt (str, idx) {
			var ret = '';
			str += '';
			var end = str.length;
		
			var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
			while ((surrogatePairs.exec(str)) != null) {
				var li = surrogatePairs.lastIndex;
				if (li - 2 < idx) {
					idx++;
				} else {
					break;
				}
			}
		
			if (idx >= end || idx < 0) {
				return '';
			}
		
			ret += str.charAt(idx);
		
			if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx+1))) {
				// Go one further, since one of the "characters" is part of a surrogate pair
				ret += str.charAt(idx+1); 
			}
			return ret;
		}		
	//Soft-打印编码方法-----------------------------------------------------END

	//Soft-打印检索方法-----------------------------------------------------START
		function LearnStringSRetrieval(){
			learnStringSIncludes();
			learnStringSEndsWith();
			learnStringSIndexOf();
			learnStringSLastIndexOf();
			learnStringSStartsWith();
		}
		function learnStringSIncludes(){
			console.log("\n 打印includes()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.includes())//<big>hello watermelon</big>
			console.log(oString.includes())//<big>hello world</big>
			console.log(tString_1.includes())//<big>hello Template</big>
			console.log(tString_2.includes())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.includes())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.includes())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSEndsWith(){
			console.log("\n 打印endsWith()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.endsWith())//<big>hello watermelon</big>
			console.log(oString.endsWith())//<big>hello world</big>
			console.log(tString_1.endsWith())//<big>hello Template</big>
			console.log(tString_2.endsWith())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.endsWith())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.endsWith())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSIndexOf(){
			console.log("\n 打印indexOf()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.indexOf())//<big>hello watermelon</big>
			console.log(oString.indexOf())//<big>hello world</big>
			console.log(tString_1.indexOf())//<big>hello Template</big>
			console.log(tString_2.indexOf())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.indexOf())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.indexOf())//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringSLastIndexOf(){
			console.log("\n 打印lastIndexOf()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
			console.log(strString.lastIndexOf())//<big>hello watermelon</big>
			console.log(oString.lastIndexOf())//<big>hello world</big>
			console.log(tString_1.lastIndexOf())//<big>hello Template</big>
			console.log(tString_2.lastIndexOf())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.lastIndexOf())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.lastIndexOf())//<big>大吉大利今晚吃西瓜!</big>
		}	
		
		function learnStringSStartsWith(){
			console.log("\n 打印startsWith()函数的用法---------------------------------------------------------------------------------------------------------------------5"); 
			console.log(strString.startsWith())//<big>hello watermelon</big>
			console.log(oString.startsWith())//<big>hello world</big>
			console.log(tString_1.startsWith())//<big>hello Template</big>
			console.log(tString_2.startsWith())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.startsWith())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.startsWith())//<big>大吉大利今晚吃西瓜!</big>
		}			
	//Soft-打印检索方法-----------------------------------------------------END

	//Soft-打印比较方法-----------------------------------------------------START
		function LearnStringSCompare(){
			learnStringSLocaleCompare();
			learnStringSMatch();
		}

		function learnStringSLocaleCompare(){
			console.log("\n 打印localeCompare()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.localeCompare())//<big>hello watermelon</big>
			console.log(oString.localeCompare())//<big>hello world</big>
			console.log(tString_1.localeCompare())//<big>hello Template</big>
			console.log(tString_2.localeCompare())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.localeCompare())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.localeCompare())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSMatch(){
			console.log("\n 打印match()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.match())//<big>hello watermelon</big>
			console.log(oString.match())//<big>hello world</big>
			console.log(tString_1.match())//<big>hello Template</big>
			console.log(tString_2.match())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.match())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.match())//<big>大吉大利今晚吃西瓜!</big>
		}

	//Soft-打印比较方法-----------------------------------------------------END

	//Soft-打印拼接方法-----------------------------------------------------START
		function LearnStringSSplicing(){
			learnStringSConcat();
			learnStringSPadEnd();
			learnStringSpadStart();
			learnStringSRepeat();
			learnStringSQuote();
		}

		function learnStringSConcat(){
			console.log("\n 打印concat()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.concat())//<big>hello watermelon</big>
			console.log(oString.concat())//<big>hello world</big>
			console.log(tString_1.concat())//<big>hello Template</big>
			console.log(tString_2.concat())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.concat())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.concat())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSPadEnd(){
			console.log("\n 打印padEnd()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.padEnd())//<big>hello watermelon</big>
			console.log(oString.padEnd())//<big>hello world</big>
			console.log(tString_1.padEnd())//<big>hello Template</big>
			console.log(tString_2.padEnd())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.padEnd())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.padEnd())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSpadStart(){
			console.log("\n 打印padStart()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.padStart())//<big>hello watermelon</big>
			console.log(oString.padStart())//<big>hello world</big>
			console.log(tString_1.padStart())//<big>hello Template</big>
			console.log(tString_2.padStart())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.padStart())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.padStart())//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringSRepeat(){
			console.log("\n 打印repeat()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
			console.log(strString.repeat())//<big>hello watermelon</big>
			console.log(oString.repeat())//<big>hello world</big>
			console.log(tString_1.repeat())//<big>hello Template</big>
			console.log(tString_2.repeat())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.repeat())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.repeat())//<big>大吉大利今晚吃西瓜!</big>
		}	

		function learnStringSQuote(){
			console.log("\n 打印quote()函数的用法---------------------------------------------------------------------------------------------------------------------5"); 
			console.log(strString.quote())//<big>hello watermelon</big>
			console.log(oString.quote())//<big>hello world</big>
			console.log(tString_1.quote())//<big>hello Template</big>
			console.log(tString_2.quote())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.quote())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.quote())//<big>大吉大利今晚吃西瓜!</big>
		}	


	//Soft-打印拼接方法-----------------------------------------------------END

	//Soft-打印大小写转换方法-----------------------------------------------------START
		function LearnStringSToggleCase(){
			learnStringSToLowerCase();
			learnStringSToLocaleLowerCase();
			learnStringSToUpperCase();
			learnStringStoLocaleUpperCase();
		}

		function learnStringSToLowerCase(){
			console.log("\n 打印toLowerCase()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.toLowerCase())//<big>hello watermelon</big>
			console.log(oString.toLowerCase())//<big>hello world</big>
			console.log(tString_1.toLowerCase())//<big>hello Template</big>
			console.log(tString_2.toLowerCase())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.toLowerCase())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.toLowerCase())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSToLocaleLowerCase(){
			console.log("\n 打印toLocaleLowerCase()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.toLocaleLowerCase())//<big>hello watermelon</big>
			console.log(oString.toLocaleLowerCase())//<big>hello world</big>
			console.log(tString_1.toLocaleLowerCase())//<big>hello Template</big>
			console.log(tString_2.toLocaleLowerCase())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.toLocaleLowerCase())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.toLocaleLowerCase())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringSToUpperCase(){
			console.log("\n 打印toUpperCase()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.toUpperCase())//<big>hello watermelon</big>
			console.log(oString.toUpperCase())//<big>hello world</big>
			console.log(tString_1.toUpperCase())//<big>hello Template</big>
			console.log(tString_2.toUpperCase())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.toUpperCase())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.toUpperCase())//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringStoLocaleUpperCase(){
			console.log("\n 打印toLocaleUpperCase()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
			console.log(strString.toLocaleUpperCase())//<big>hello watermelon</big>
			console.log(oString.toLocaleUpperCase())//<big>hello world</big>
			console.log(tString_1.toLocaleUpperCase())//<big>hello Template</big>
			console.log(tString_2.toLocaleUpperCase())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.toLocaleUpperCase())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.toLocaleUpperCase())//<big>大吉大利今晚吃西瓜!</big>
		}		
	//Soft-打印大小写转换方法-----------------------------------------------------END

//学习string-不会改变字符串原始值的柔和方法--------------------------------------------------------------------------------------------------END


//学习string-会改变字符串原始值的强硬方法--------------------------------------------------------------------------------------------------START
	//Tough-打印强制类型转化方法-----------------------------------------------------START
		function LearnStringTTranInstanceof(){
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
	//Tough-打印强制类型转化方法-----------------------------------------------------END

	//Tough-打印替换方法-----------------------------------------------------START
		function LearnStringTReplacement(){
			learnStringTReplace();
			learnStringTSearch();
		}

		function learnStringTReplace(){
			console.log("\n 打印replace()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.replace())//<big>hello watermelon</big>
			console.log(oString.replace())//<big>hello world</big>
			console.log(tString_1.replace())//<big>hello Template</big>
			console.log(tString_2.replaceg())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.replace())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.replace())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTSearch(){
			console.log("\n 打印search()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.search())//<big>hello watermelon</big>
			console.log(oString.search())//<big>hello world</big>
			console.log(tString_1.search())//<big>hello Template</big>
			console.log(tString_2.search())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.search())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.search())//<big>大吉大利今晚吃西瓜!</big>
		}
	
	//Tough-打印替换方法-----------------------------------------------------END

	//Tough-打印分割方法-----------------------------------------------------START
		function LearnStringTDivision(){
			learnStringTSlice();
			learnStringTSplit();
			learnStringTSubstr();
			learnStringTSubstring();
		}

		function learnStringTSlice(){
			console.log("\n 打印slice()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.slice())//<big>hello watermelon</big>
			console.log(oString.slice())//<big>hello world</big>
			console.log(tString_1.slice())//<big>hello Template</big>
			console.log(tString_2.slice())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.slice())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.slice())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTSplit(){
			console.log("\n 打印split()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.split())//<big>hello watermelon</big>
			console.log(oString.split())//<big>hello world</big>
			console.log(tString_1.split())//<big>hello Template</big>
			console.log(tString_2.split())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.split())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.split())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTSubstr(){
			console.log("\n 打印substrt()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.substr())//<big>hello watermelon</big>
			console.log(oString.substr())//<big>hello world</big>
			console.log(tString_1.substr())//<big>hello Template</big>
			console.log(tString_2.substr())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.substr())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.substr())//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringTSubstring(){
			console.log("\n 打印substring()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
			console.log(strString.substring())//<big>hello watermelon</big>
			console.log(oString.substring())//<big>hello world</big>
			console.log(tString_1.substring())//<big>hello Template</big>
			console.log(tString_2.substring())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.substring())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.substring())//<big>大吉大利今晚吃西瓜!</big>
		}		
	//Tough-打印分割方法-----------------------------------------------------END

	//Tough-打印格式转化方法-----------------------------------------------------START
		function LearnStringTFormat(){
			learnStringTTrim();
			learnStringTTrimLeft();
			learnStringTTrimRight();
		}

		function learnStringTTrim(){
			console.log("\n 打印trim()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.trim())//<big>hello watermelon</big>
			console.log(oString.trim())//<big>hello world</big>
			console.log(tString_1.trim())//<big>hello Template</big>
			console.log(tString_2.trim())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.trim())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.trim())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTTrimLeft(){
			console.log("\n 打印trimLeft()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.trimLeft())//<big>hello watermelon</big>
			console.log(oString.trimLeft())//<big>hello world</big>
			console.log(tString_1.trimLeft())//<big>hello Template</big>
			console.log(tString_2.trimLeft())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.trimLeft())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.trimLeft())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTTrimRight(){
			console.log("\n 打印trimRight()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.trimRight())//<big>hello watermelon</big>
			console.log(oString.trimRight())//<big>hello world</big>
			console.log(tString_1.trimRight())//<big>hello Template</big>
			console.log(tString_2.trimRight())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.trimRight())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.trimRight())//<big>大吉大利今晚吃西瓜!</big>
		}

	//Tough-打印格式转化方法-----------------------------------------------------END

	//Tough-打印对象通用方法方法-----------------------------------------------------START
		function LearnStringTObjectGeneral(){
			learnStringTToString();
			learnStringTToLocaleString();			
			learnStringTValueOf();
			learnStringTBracket();
			learnStringTToSource();
			learnStringTHasOwnProperty();
			learnStringTIsPrototypeOf();
			learnStringTSetPrototypeOf();
			learnStringTUnwatch();
			learnStringTWatch();
			learnStringTPropertyIsEnumerable();
		}

		function learnStringTToString(){
			console.log("\n 打印toString()函数的用法---------------------------------------------------------------------------------------------------------------------1"); 
			console.log(strString.toString())//<big>hello watermelon</big>
			console.log(oString.toString())//<big>hello world</big>
			console.log(tString_1.toString())//<big>hello Template</big>
			console.log(tString_2.toString())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.toString())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.toString())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTToLocaleString(){
			console.log("\n 打印toLocaleString()函数的用法---------------------------------------------------------------------------------------------------------------------2"); 
			console.log(strString.toLocaleString())//<big>hello watermelon</big>
			console.log(oString.toLocaleString())//<big>hello world</big>
			console.log(tString_1.toLocaleString())//<big>hello Template</big>
			console.log(tString_2.toLocaleString())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.toLocaleString())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.toLocaleString())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTValueOf(){
			console.log("\n 打印valueOf()函数的用法---------------------------------------------------------------------------------------------------------------------3"); 
			console.log(strString.valueOf())//<big>hello watermelon</big>
			console.log(oString.valueOf())//<big>hello world</big>
			console.log(tString_1.valueOf())//<big>hello Template</big>
			console.log(tString_2.valueOf())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.valueOf())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.valueOf())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTBracket(){
			console.log("\n 打印bracket()函数的用法---------------------------------------------------------------------------------------------------------------------4"); 
			console.log(strString[0])//<big>hello watermelon</big>
			console.log(oString[0])//<big>hello world</big>
			console.log(tString_1[0])//<big>hello Template</big>
			console.log(tString_2[0])//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3[0])//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4[0])//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringTToSource(){
			console.log("\n 打印toSource()函数的用法---------------------------------------------------------------------------------------------------------------------5"); 
			console.log(strString.toSource())//<big>hello watermelon</big>
			console.log(oString.toSource())//<big>hello world</big>
			console.log(tString_1.toSource())//<big>hello Template</big>
			console.log(tString_2.toSource())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.toSource())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.toSource())//<big>大吉大利今晚吃西瓜!</big>
		}		

		function learnStringTHasOwnProperty(){
			console.log("\n 打印hasOwnProperty()函数的用法---------------------------------------------------------------------------------------------------------------------6"); 
			console.log(strString.hasOwnProperty())//<big>hello watermelon</big>
			console.log(oString.hasOwnProperty())//<big>hello world</big>
			console.log(tString_1.hasOwnProperty())//<big>hello Template</big>
			console.log(tString_2.hasOwnProperty())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.hasOwnProperty())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.hasOwnProperty())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTIsPrototypeOf(){
			console.log("\n 打印isPrototypeOf()函数的用法---------------------------------------------------------------------------------------------------------------------7"); 
			console.log(strString.isPrototypeOf())//<big>hello watermelon</big>
			console.log(oString.isPrototypeOf())//<big>hello world</big>
			console.log(tString_1.isPrototypeOf())//<big>hello Template</big>
			console.log(tString_2.isPrototypeOf())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.isPrototypeOf())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.isPrototypeOf())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTSetPrototypeOf(){
			console.log("\n 打印setPrototypeOf()函数的用法---------------------------------------------------------------------------------------------------------------------8"); 
			console.log(strString.setPrototypeOf())//<big>hello watermelon</big>
			console.log(oString.setPrototypeOf())//<big>hello world</big>
			console.log(tString_1.setPrototypeOf())//<big>hello Template</big>
			console.log(tString_2.setPrototypeOf())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.setPrototypeOf())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.setPrototypeOf())//<big>大吉大利今晚吃西瓜!</big>
		}

		function learnStringTUnwatch(){
			console.log("\n 打印unwatch()函数的用法---------------------------------------------------------------------------------------------------------------------9"); 
			console.log(strString.unwatch());//<big>hello watermelon</big>
			console.log(oString.unwatch());//<big>hello world</big>
			console.log(tString_1.unwatch());//<big>hello Template</big>
			console.log(tString_2.unwatch());//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.unwatch());//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.unwatch());//<big>大吉大利今晚吃西瓜!</big>
		}
		
		function learnStringTWatch(){
			console.log("\n 打印watch()函数的用法---------------------------------------------------------------------------------------------------------------------10"); 
			console.log(strString.watch())//<big>hello watermelon</big>
			console.log(oString.watch())//<big>hello world</big>
			console.log(tString_1.watch())//<big>hello Template</big>
			console.log(tString_2.watch())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.watch())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.watch())//<big>大吉大利今晚吃西瓜!</big>
		}	

		function learnStringTPropertyIsEnumerable(){
			console.log("\n 打印propertyIsEnumerable()函数的用法---------------------------------------------------------------------------------------------------------------------11"); 
			console.log(strString.propertyIsEnumerable())//<big>hello watermelon</big>
			console.log(oString.propertyIsEnumerable())//<big>hello world</big>
			console.log(tString_1.propertyIsEnumerable())//<big>hello Template</big>
			console.log(tString_2.propertyIsEnumerable())//<big>hello line 1 \n \t hello line 2</big>
			console.log(tString_3.propertyIsEnumerable())//<big>Fifteen is 12 and \n  not 16.</big>
			console.log(tString_4.propertyIsEnumerable())//<big>大吉大利今晚吃西瓜!</big>
		}			

	//Tough-打印对象通用方法方法-----------------------------------------------------END

//学习string-会改变字符串原始值的强硬方法--------------------------------------------------------------------------------------------------END

//学习string-模版字符量--------------------------------------------------------------------------------------------------START

function learnTemplateLiteral(){
	console.log("\n 打印模版字面量的使用---------------------------------------------------------------------------------------------------------------------4"); 
	learnTemplateLiteralProp();	
	learnTemplateLiteralFun();
	
}	

function learnTemplateLiteralProp(){

}	

function learnTemplateLiteralFun(){
	
}

//学习string-模版字符量--------------------------------------------------------------------------------------------------END


//学习string的方法-----------------------------------------------------------------------------------------------------------------------------------------------------------------------END


