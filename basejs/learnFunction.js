var a = 4;
var b = 8;
var strString = "hello watermelon";
var oString = new String("hello world");


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
	//learnInheritObjectProp();
	learnFunCommonProp();
}
learnStringProp();

function learnFunPropCallee(){
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

        console.log("arguments.callee.length------a"); //arguments.callee.length
        console.log(arguments.callee.length);   // 0
        console.log(arguments.callee.caller);  //[Function: b]
    }   
    var b = function(n,m) {   
        a();   
        console.log("arguments.callee.length------b"); //arguments.callee.length
        console.log(arguments.callee.length);   // 2
        console.log(arguments.callee.caller);  //[Function: learnFunPropCallee]
        
    }   
    b(); 
}


function learnFunPropCaller() {
    if (learnFunPropCaller.caller == null) {
        console.log("该函数在全局作用域内被调用!");
    } else{
        console.log("调用我的是函数 learnFunPropCaller.caller 是" + learnFunPropCaller.caller);//打印了learnFunCommonProp()的完整内容
        console.log("调用我的是函数 arguments.caller是" + arguments.caller); //  undefined 
        console.log("调用我的是函数 arguments.callee.caller是" + arguments.callee.caller);//打印了learnFunCommonProp()的完整内容
    }
 }

function learnFunPropName(){
    var f = function() {};
    var object = {
      someMethod: function() {}
    };
    
    console.log(f.name); // "f"

    console.log(object.someMethod.name); // "someMethod"

}

function learnFunPropDisplayName(){
    
    function doSomething() {}
    
    console.log(doSomething.displayName); // "undefined"
    
    var popup = function(content,ss) { 
        console.log(content);
     };
    
     //也就是说自己实例化函数之后，再手动给函数加个属性，再打印出来
    popup.displayName = 'Show Popup';
    
    console.log(popup.displayName); // Show Popup

    console.log(doSomething.length); // 0
    
    
    
    var object = {
        // anonymous
        someMethod: function(value) {
          arguments.callee.displayName = 'someMethod (' + value + ')';
        }
      };
      
      console.log(object.someMethod.displayName); // "undefined"
      
      object.someMethod('123')
      console.log(object.someMethod.displayName); // "someMethod (123)"
}

function learnFunPropLength(){
    console.log(Function.length); /* 1 */
    
    console.log((function()        {}).length); /* 0 */
    console.log((function(a)       {}).length); /* 1 */
    console.log((function(a, b)    {}).length); /* 2 etc. */
    
    console.log((function(...args) {}).length); 
    // 0, rest parameter is not counted
    
    
    console.log((function(a, b = 1, c) {}).length);
    // 1, only parameters before the first one with 
    // a default value is counted
    
    console.log((function(a = 1, b, c) {}).length) // 0
    console.log((function(b, a = 1, c) {}).length) // 1
    console.log((function(b, c, a = 1) {}).length) // 2
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



function learnFunCommonProp(){
	console.log("\n ------------------------------------------------------------------------------------------------------------------------------------------打印String对象常用的属性");
    //learnFunPropCallee();
    //learnFunPropName();
    learnFunPropDisplayName();
    learnFunPropLength();
    //learnFunPropCaller();

    console.log(learnFunCommonProp.prototype);//learnFunCommonProp {}
    console.log(learnFunCommonProp.__proto__);//[Function]
    
    // console.log("\n 打印本身constructor属性------------------------------------------------------------------------------------------------------------------------------------------"); 
	// 	console.log(strString.constructor);//[Function: String]
	// 	console.log(oString.constructor);//[Function: String]
	// 	console.log(tString_1.constructor);//[Function: String]
	// 	console.log(tString_2.constructor);//[Function: String]
	// 	console.log(tString_3.constructor);//[Function: String]
	// 	console.log(tString_4.constructor);//[Function: String]

	// console.log("\n 打印本身__proto__属性------------------------------------------------------------------------------------------------------------------------------------------"); 
	// 	console.log(strString.__proto__);//[String: '']
	// 	console.log(oString.__proto__);//[String: '']
	// 	console.log(tString_1.__proto__);//[String: '']
	// 	console.log(tString_2.__proto__);//[String: '']
	// 	console.log(tString_3.__proto__);//[String: '']
	// 	console.log(tString_4.__proto__);//[String: '']

	// console.log("\n 打印本身length属性------------------------------------------------------------------------------------------------------------------------------------------");
	// 	console.log(strString.length);//16 15个字母加一个空格
	// 	console.log(oString.length);//11 10个字母加一个空格
	// 	console.log(tString_1.length);//14 13个字母加一个空格
	// 	console.log(tString_2.length);//41 18个字母加两个数字加四个空格加四个缩进符（一个占四个）加上一个换行符（一个占一个）
	// 	console.log(tString_3.length);//25 15个字母加四个数字加四个空格加一个符号加上一个换行符（一个占一个）
	// 	console.log(tString_4.length);//10 9个汉字加一个符号
}

function learnFunArgument(){
    learnSameArgument();
}

function learnSameArgument(){
    console.log("\t打印如果形参名全部相同的结果");
	var mm = function(c,c,c) {
		console.log("第一个c-----------");
		console.log(c);//6
		console.log("第二个c-----------");
		console.log(c);//6
		console.log("第三个c-----------");
		console.log(c);	//6			
	}
	mm(4,5,6);
}