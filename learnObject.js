//学习引用类型
// 引用类型通常叫做类（class），也就是说，遇到引用值，所处理的就是对象。
// 注意：从传统意义上来说，ECMAScript 并不真正具有类。事实上，除了说明不存在类，在 ECMA-262 中根本没有出现“类”这个词。ECMAScript 定义了“对象定义”，逻辑上等价于其他程序设计语言中的类。
// 提示：本教程将使用术语“对象”。
// 对象是由 new 运算符加上要实例化的对象的名字创建的。
// 这种语法与 Java 语言的相似，不过当有不止一个参数时，ECMAScript 要求使用括号。
// 如果没有参数，括号可以省略
// 注意：尽管括号不是必需的，但是为了避免混乱，最好使用括号。

//-------------------------------------------------------------------------------------------共有属性 __proto__ &&  constructor
//在JavaScript中，每个具有原型的对象都会自动获得constructor属性。
//除了arguments、Enumerator、Error、Global、Math、RegExp、Regular Expression等一些特殊对象之外，
//其他所有的JavaScript内置对象都具备constructor属性。
//例如：Array、Boolean、Date、Function、Number、Object、String等。所有主流浏览器均支持该属性。


//学习Object对象
function learnObject(){
    //Object 对象自身用处不大，不过在了解其他类之前，还是应该了解它。
    //因为 ECMAScript 中的 Object 对象与 Java 中的 java.lang.Object 相似
    //ECMAScript 中的所有对象都由这个对象继承而来，
    //Object 对象中的所有属性和方法都会出现在其他对象中，
    //所以理解了 Object 对象，就可以更好地理解其他对象。    
    var oo = new Object();
    oo.name = "Wu Eva";
    console.log("\n 首先打印本身内容---------------------------------------------------------------------"); 
    //首先打印本身内容
    console.log(oo);//{ name: 'Wu Eva' } 
    console.log(typeof(oo));//object
    console.log(oo instanceof(Object));//true
    
    //----------------------------------------------------属性
    console.log("\n 1.1 对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数。---------------------------------------------------------------------constructor"); 
    //对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数。
    console.log(oo.constructor);   //[Function: Object]

    console.log("\n 1.2 对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型。---------------------------------------------------------------------__proto__");     
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oo.__proto__); // {}  
    
    //----------------------------------------------------方法
    console.log("\n 2.1 判断对象是否有某个特定的属性。必须用字符串指定该属性。 ---------------------------------------------------------------------hasOwnProperty()");     
    //判断对象是否有某个特定的属性。必须用字符串指定该属性。
    console.log(oo.hasOwnProperty("name"));//true
    console.log(oo.hasOwnProperty("age"));//false

    console.log("\n 2.2 判断该对象是否为另一个对象的原型。 ---------------------------------------------------------------------isPrototypeOf()");     
    //判断该对象是否为另一个对象的原型。
    console.log(oo.isPrototypeOf(Object));//false
    console.log(oo.isPrototypeOf(String));//false

    console.log("\n 2.3 判断给定的属性是否可以用 for...in 语句进行枚举。 ---------------------------------------------------------------------propertyIsEnumerable()");      
    //判断给定的属性是否可以用 for...in 语句进行枚举。
    console.log(oo.propertyIsEnumerable());//false

    console.log("\n2.4 返回对象的原始字符串表示 ---------------------------------------------------------------------toString()");      
    //返回对象的原始字符串表示。
    //无论它是伪对象，还是真对象都有 toString() 方法
    //对于 Object 对象，这个方法就比较多余，所以ECMA-262 没有定义这个值。
    console.log(oo.toString());//[object Object]    

    console.log("\n 2.5 返回最适合该对象的原始值。对于 Object 对象，会将object内容以键值对的形式返回。 ---------------------------------------------------------------------valueOf()");      
    //返回最适合该对象的原始值。对于 Object 对象，会将object内容以键值对的形式返回。
    console.log(oo.valueOf()); //{ name: 'Wu Eva' }
    
}

//学习Boolean对象
function learnBoolean(){
    //Boolean 对象是 Boolean 原始类型的引用类型。
    //要创建 Boolean 对象，只需要传递 Boolean 值作为参数
    //遗憾的是，在 ECMAScript 中很少使用 Boolean 对象，即使使用，也不易理解。
    var oBool = new Boolean(true); //构造函数
    console.log("\n 首先打印本身内容---------------------------------------------------------------------"); 
    //首先打印本身内容
    console.log(oBool);//[Boolean: true]
    console.log(typeof(oBool));//object 无论引用的是什么类型的对象，它都返回 "object"
    console.log(oBool instanceof(Boolean));//true
    console.log(oBool instanceof(Object));//true
    console.log(oBool instanceof(String));//false
    
    console.log("\n 1.1 强制类型转化，将其他类型的变量转化成布尔值类型---------------------------------------------------------------------Boolean()");     
    //强制类型转化，将其他类型的变量转化成布尔值类型
    //如果省略 value 参数，或者设置为 0、-0、null、""、false、undefined 或 NaN，则该对象设置为 false。
    //否则设置为 true，即使 value 参数是字符串 "false"。    
    console.log(Boolean("false"))	//true
    console.log(Boolean(0))	//false
    console.log(Boolean(-0))	//false    
    console.log(Boolean(null))	//false
    console.log(Boolean(new Object()))	//true
    console.log(Boolean(""))	//false
    console.log(Boolean(undefined))	//false
    console.log(Boolean(NaN))	//false 

    //----------------------------------------------------属性
    console.log("\n 2.1 对创建对象的函数的引用（指针）。对于 Boolean 对象，该指针指向原始的 Boolean() 函数。---------------------------------------------------------------------constructor");     
    //对创建对象的函数的引用（指针）。对于 Boolean 对象，该指针指向原始的 Boolean() 函数。
    console.log(oBool.constructor);   //[Function: Boolean]

    console.log("\n 2.2 对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型---------------------------------------------------------------------__proto__");
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oBool.__proto__); //[Boolean: false]
    
    //----------------------------------------------------方法
    console.log("\n 3.1 返回对象的原始字符串表示，对于 Boolean 对象，返回字符串 'true' 或 'false'。---------------------------------------------------------------------toString()");    
    //返回对象的原始字符串表示，对于 Boolean 对象，返回字符串 "true" 或 "false"。
    console.log(oBool.toString()); //  true
    console.log(typeof oBool.toString()); //  string

    console.log("\n 3.2 返回最适合该对象的原始值，对于 Boolean 对象，返回原始值，即 true 和 false。---------------------------------------------------------------------valueOf()");        
    //返回最适合该对象的原始值，对于 Boolean 对象，返回原始值，即 true 和 false。
    console.log(oBool.valueOf()); // true   
    console.log(typeof oBool.valueOf()); // boolean   
    
    console.log("\n 3.3 判断该对象是否为另一个对象的原型。---------------------------------------------------------------------isPrototypeOf()");  
    //判断该对象是否为另一个对象的原型。
    console.log(oBool.isPrototypeOf(Object));//false

    console.log("\n 3.4 判断给定的属性是否可以用 for...in 语句进行枚举。---------------------------------------------------------------------propertyIsEnumerable()"); 
    //判断给定的属性是否可以用 for...in 语句进行枚举。
    console.log(oBool.propertyIsEnumerable());//false  

    //返回该对象的源代码
    //可能有兼容问题，在chrome 61.0.3163.100（正式版本）（32 位）中，打印控制台报错说 oBool.toSource is not a function
    //但是在firefox 56.0（32 位）中 打印出结果(new Boolean(true))
    //console.log(oBool.toSource()); 

    console.log("\n 4.1 但是注意，在 Boolean 表达式中，所有对象都会被自动转换为 true，所以 oFalseObject 的值是 true---------------------------------------------------------------------"); 
    //但是注意，在 Boolean 表达式中，所有对象都会被自动转换为 true，所以 oFalseObject 的值是 true
    var oFalse = new Boolean(false);
    console.log(oFalse);// [Boolean: false]  
    console.log(oFalse && true);// true  
    console.log(oFalse && false);// false  
    
}

//学习Number对象
function learnNumber(){
    //Number 对象是 Number 原始类型的引用类型
    //要创建 Number 对象，只需要传递 数值作为参数
    //不过应该少用这种对象，以避免潜在的问题。只要可能，都使用数字的原始表示法
    var oNum = new Number(68); //构造函数
    console.log("\n 首先打印本身内容---------------------------------------------------------------------"); 
    //首先打印本身内容
    console.log(oNum);//[Number: 68]
    console.log(typeof(oNum));//object 无论引用的是什么类型的对象，它都返回 "object"
    console.log(oNum instanceof(Number));//true
    console.log(oNum instanceof(Object));//true
    console.log(oNum instanceof(String));//false

    //强制类型转化，将其他类型的变量转化成Number类型
    //字符串值和object对象不能转换成数字
    //但是true和false有对应的数值转义，分别为1和0
    //null值有对应的数值，但是undefined没有对应的数值
    console.log(Number(false))	//0
    console.log(Number(true))	//1
    console.log(Number(undefined))	//NaN
    console.log(Number(null))	//0
    console.log(Number("1.2.3"))	//NaN
    console.log(Number(new Object()))	//NaN

    //----------------------------------------------------属性
    //对创建对象的函数的引用（指针）。对于 Number 对象，该指针指向原始的 Number() 函数。
    console.log(oNum.constructor);   //[Function: Number]
    
    //对该对象的对象原型的引用。这里对于 oNum，因为没有写原型链，所以返回未定义，不确定这个认知是否正确。
    //console.log(oNum.Prototype);   //undefined
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oNum.__proto__); //[Number: 0]
    
    //这些值是构造函数 Number() 自身的属性，而不是单独的某个 Number 对象的属性
    //可表示的最大的数。
    console.log(oNum.MAX_VALUE);//undefined
    console.log(Number.MAX_VALUE);// 1.7976931348623157e+308
    
    //可表示的最大的数。
    console.log(oNum.MIN_VALUE);//undefined
    console.log(Number.MIN_VALUE);// 5e-324
    
    //非数字值。
    console.log(oNum.NaN);//undefined
    console.log(Number.NaN);//NaN
    
    //负无穷大，溢出时返回该值。
    console.log(oNum.NEGATIVE_INFINITY);//undefined
    console.log(Number.NEGATIVE_INFINITY);//-Infinity
    
    //正无穷大，溢出时返回该值。
    console.log(oNum.POSITIVE_INFINITY);//undefined
    console.log(Number.POSITIVE_INFINITY);//Infinity
    

    //----------------------------------------------------方法
    //返回对象的原始字符串表示
    //对于 Number 对象 toString() 方法比较特殊
    //它有两种模式，即默认模式和基模式
    //采用默认模式，toString() 方法只是用相应的字符串输出数字值（无论是整数、浮点数还是科学计数法）
    //在默认模式中，不管是初始值是以二进制，八进制，十进制或十六进制字面量形式声明的数字输出的都是十进制形式的
    console.log(oNum.toString()); //  68
    console.log(typeof oNum.toString()); //  string
    //采用基模式，toString() 方法只是要转换成的基数的另一种加法而已
    //在基模式中，不管是初始值是以二进制，八进制，十进制或十六进制字面量形式声明的数字输出的都是对应的规定进制形式的
    console.log(oNum.toString(2)); //  1000100
    console.log(oNum.toString(8)); //  104
    console.log(oNum.toString(16)); // 44 
    
    //返回最适合该对象的原始值，对于 Number 对象，返回原始值，原始数值。
    console.log(oNum.valueOf()); // 68   
    console.log(typeof oNum.valueOf()); // number   

    //-----------------toFixed()、toExponential() 和 toPrecision() 方法都会进行四舍五入操作，以便用正确的小数位数正确地表示一个数

    //返回的是具有指定位数小数的数字的字符串表示
    //指定要输出的小数的位数    
    //空的字符串位由 0 来补充
    //能表示具有 0 到 20 位小数的数字，超过这个范围的值会引发错误。
    console.log(oNum.toFixed(2)); // 68.00

    //返回的是用指数计数法表示的数字的字符串形式
    //指定要输出的小数的位数
    //如果指定的位数多于需要的位数，空的字符串位由 0 来补充 
    //能表示具有 0 到 20 位小数的数字，超过这个范围的值会引发错误。
    console.log(oNum.toExponential(0)); //7e+1     
    console.log(oNum.toExponential(1)); //6.8e+1  
    console.log(oNum.toExponential(2)); //6.80e+1 

    //数字格式化为指定的长度。
    //根据最有意义的形式来返回数字的预定形式或指数形式。它有一个参数，即用于表示数的数字总数（不包括指数）
    //如果指定的位数多于需要的位数，空的字符串位由 0 来补充 
    //能表示具有 1 到 21 位小数的数字，超过这个范围的值会引发错误。
    console.log(oNum.toPrecision(1)); // 7e+1
    console.log(oNum.toPrecision(2)); // 68

    //把数字转换为字符串，使用本地数字格式顺序。
    console.log(oNum.toLocaleString()); 

    //判断该对象是否为另一个对象的原型。
    console.log(oNum.isPrototypeOf(String));//false
    
    //判断给定的属性是否可以用 for...in 语句进行枚举。
    console.log(oNum.propertyIsEnumerable());//false    
}

function learnString(){
    //String 原始类型的对象表示法
    var oString = new String("hello world");
    console.log("\n 首先打印本身内容---------------------------------------------------------------------"); 
    //首先打印本身内容
    console.log(oString);//[String: 'hello world']
    console.log(typeof(oString));//object 无论引用的是什么类型的对象，它都返回 "object"
    console.log(oString instanceof(String));//true
    console.log(oString instanceof(Object));//true
    console.log(oString instanceof(Number));//false

    console.log("\n强制类型转化，将其他类型的变量转化成String类型---------------------------------------------------------------------String()");
    //强制类型转化，将其他类型的变量转化成String类型
    //对 null 和 undefined 值强制类型转换可以生成字符串而不引发错误
    // 但是 null 和 undefined 值强制使用toString()，会引发错误
    console.log(String(-0))	//0    
    console.log(String(null))	//null
    console.log(String(new Object()))	//[object Object]
    console.log(String(undefined))	//undefined
    console.log(String(NaN))	//NaN 

    //----------------------------------------------------属性
    console.log("\n对创建对象的函数的引用（指针）。对于 String 对象，该指针指向原始的 String() 函数。---------------------------------------------------------------------constructor");    
    //对创建对象的函数的引用（指针）。对于 String 对象，该指针指向原始的 String() 函数。
    console.log(oString.constructor);   //[Function: String]
  
    console.log("\n对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型---------------------------------------------------------------------__proto__");       
    //对该对象的对象原型的引用。对于 oString 对象，因为没有写原型链，所以返回未定义，不确定这个认知是否正确。
    //console.log(oString.Prototype);   //undefined
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oString.__proto__); // [String: '']  
    console.log("\n返回字符串的长度---------------------------------------------------------------------length");           
    //返回字符串的长度
    console.log(oString.length); // 11

    //----------------------------------------------------方法

    console.log("\n创建 HTML 锚。将字符串输出为有唯一标识的纯粹HTML---------------------------------------------------------------------anchor()");       
    //创建 HTML 锚。将字符串输出为有唯一标识的纯粹HTML
    //@para anchorname 必需。为锚定义名称。
    console.log(oString.anchor("anchorDemo"));//<a name="anchorDemo">hello world</a>
    console.log("\n把字符串显示为链接。只在页面中才会有效果。---------------------------------------------------------------------link()");               
    //把字符串显示为链接。只在页面中才会有效果。
    //@para url	必需。规定要链接的 URL。
    console.log(oString.link());//<a href="undefined">hello world</a> 
    console.log(oString.link("https://mowatermelon.github.io/"));//<a href="https://mowatermelon.github.io/">hello world</a> 

    console.log("\n把字符串显示为大号字体。只在页面中才会有大两个字体号效果。---------------------------------------------------------------------big()");    
    //把字符串显示为大号字体。只在页面中才会有大两个字体号效果。
    console.log(oString.big());//<big>hello world</big>
    console.log("\n把字符串显示为小号字体。只在页面中才会有小两个字体号效果---------------------------------------------------------------------small()");                
    //把字符串显示为小号字体。只在页面中才会有小两个字体号效果。
    console.log(oString.small());//<small>hello world</small>   
    console.log("\n把字符串显示闪动的字符串，目前没有看到有浏览器支持---------------------------------------------------------------------blink()");        
    //把字符串显示闪动的字符串，目前没有看到有浏览器支持
    console.log(oString.blink());//<blink>hello world</blink>
    console.log("\n把字符串显示粗体的字符串，只在页面中才会有粗体效果，IE不兼容---------------------------------------------------------------------bold()");            
    //把字符串显示粗体的字符串，只在页面中才会有粗体效果，IE不兼容
    console.log(oString.bold());//<b>hello world</b>
    console.log("\n以打字机文本显示字符串。只在页面中才会有效果。---------------------------------------------------------------------fixed()");                 
    //以打字机文本显示字符串。只在页面中才会有效果。
    console.log(oString.fixed());//<tt>hello world</tt>
    console.log("\n返回指定的颜色的字符串。只在页面中才会有效果。---------------------------------------------------------------------fontcolor()");                 
    //返回指定的颜色的字符串。只在页面中才会有效果。
    //color	必需。为字符串规定 font-color。
    //该值必须是颜色名(red)、RGB 值(rgb(255,0,0))或者十六进制数(#FF0000)。
    console.log(oString.fontcolor("Red"));//<font color="Red">hello world</font>
    console.log("\nsize 参数必须是从 1 至 7 的数字，数字越大字体越大。只在页面中才会有效果。---------------------------------------------------------------------fontsize()");                     
    //size 参数必须是从 1 至 7 的数字，数字越大字体越大。
    console.log(oString.fontsize(6));//<font size="6">hello world</font>
    console.log("\n把字符串显示为斜体。只在页面中才会有效果。---------------------------------------------------------------------italics()");                         
    //把字符串显示为斜体。只在页面中才会有效果。
    console.log(oString.italics());//<i>hello world</i>    
    console.log("\n把字符串显示为加了删除线的字符串。只在页面中才会有效果。---------------------------------------------------------------------strike()");                             
    //把字符串显示为加了删除线的字符串。只在页面中才会有效果。
    console.log(oString.strike());//<strike>hello world</strike> 
    console.log("\n把字符串显示为下标。只在页面中才会有效果。---------------------------------------------------------------------sub()");                             
    //把字符串显示为下标。只在页面中才会有效果。
    console.log(oString.sub());//<sub>hello world</sub> 
    console.log("\n把字符串显示为上标。只在页面中才会有效果。---------------------------------------------------------------------sup()");           
    //把字符串显示为上标。只在页面中才会有效果。
    console.log(oString.sup());//<sup>hello world</sup> 

    console.log("\n用于把字符串转换为小写。---------------------------------------------------------------------toLocaleLowerCase()");               
    //用于把字符串转换为小写。
    //返回值 一个新的字符串，在其中 stringObject 的所有大写字符全部被转换为了小写字符。
    //与 toLowerCase() 不同的是，toLocaleLowerCase() 方法按照本地方式把字符串转换为小写。
    //---------------只有几种语言（如土耳其语）具有地方特有的大小写映射，所有该方法的返回值通常与 toLowerCase() 一样。
    var sss ="HELLO WORLD";
    console.log(sss.toLocaleLowerCase());//hello world
    console.log("\n用于把字符串转换为小写。---------------------------------------------------------------------toLowerCase()");                   
    //用于把字符串转换为小写。
    //返回值 一个新的字符串，在其中 stringObject 的所有大写字符全部被转换为了小写字符。
    console.log(sss.toLowerCase());//hello world
    console.log("\n用于把字符串转换为大写。---------------------------------------------------------------------toLocaleUpperCase()");                   
    //用于把字符串转换为大写。
    //返回值 一个新的字符串，在其中 stringObject 的所有大写字符全部被转换为了大写字符。
    //与 toUpperCase() 不同的是，toLocaleUpperCase() 方法按照本地方式把字符串转换为大写。
    //---------------只有几种语言（如土耳其语）具有地方特有的大小写映射，所有该方法的返回值通常与 toLowerCase() 一样。
    console.log(oString.toLocaleUpperCase());//HELLO WORLD
    console.log("\n用于把字符串转换为大写。---------------------------------------------------------------------toUpperCase()");                       
    //用于把字符串转换为大写。
    //返回值 一个新的字符串，在其中 stringObject 的所有大写字符全部被转换为了大写字符。
    console.log(oString.toUpperCase());//HELLO WORLD

    console.log("\n返回在指定位置的字符---------------------------------------------------------------------charAt()");     
    //返回在指定位置的字符
    //不提供参数就返回第一个字符的字符
    //提供游标值，就返回指定游标的字符    
    console.log(oString.charAt());//h
    console.log(oString.charAt(1));//e
    console.log(oString.charAt(2));//l

    console.log("\n返回在指定的位置的字符的 Unicode 编码---------------------------------------------------------------------charCodeAt()");         
    //返回在指定的位置的字符的 Unicode 编码
    //不提供参数就返回第一个字符的编码值
    //提供游标值，就返回指定游标的编码值
    console.log(oString.charCodeAt());//104   （h对应的编码）
    console.log(oString.charCodeAt(1));//101   （e对应的编码）
    console.log(oString.charCodeAt(2));//108   （l对应的编码）
    console.log("\n可接受一个指定的 Unicode 值，然后返回一个字符串。---------------------------------------------------------------------fromCharCode()");             
    //可接受一个指定的 Unicode 值，然后返回一个字符串。
    //这个方法是构造函数 String() 自身的方法，而不是单独的某个 String 对象的方法
    //console.log(oString.fromCharCode(65,66,67));//报错 fromCharCode is not a function
    console.log(String.fromCharCode(65,66,67));//ABC

    console.log("\n连接两个或多个字符串---------------------------------------------------------------------concat()");             
    //连接两个或多个字符串
    //stringObject.concat(stringX,stringX,...,stringX)
    //concat() 方法将把它的所有参数转换成字符串
    //然后按顺序连接到字符串 stringObject 的尾部
    //并返回连接后的字符串。
    //请注意，stringObject 本身并没有被更改。
    //@para stringX	必需。将被连接为一个字符串的一个或多个字符串对象。
    console.log(oString.concat(oString));//hello worldhello world

    console.log("\n用本地特定的顺序来比较两个字符串。---------------------------------------------------------------------localeCompare()");                 
    //用本地特定的顺序来比较两个字符串。
    //@para target	要以本地特定的顺序与 stringObject 进行比较的字符串。
    //说明比较结果的数字。如果 stringObject 小于 target，则 localeCompare() 返回小于 0 的数。
    //如果 stringObject 大于 target，则该方法返回大于 0 的数。
    //如果两个字符串相等，或根据本地排序规则没有区别，该方法返回 0。
    //把 < 和 > 运算符应用到字符串时，它们只用字符的 Unicode 编码比较字符串，而不考虑当地的排序规则。
    //以这种方法生成的顺序不一定是正确的。
    //ECMAscript 标准并没有规定如何进行本地特定的比较操作，它只规定该函数采用底层操作系统提供的排序规则。
    //可以用于有多个字符串的数组进行排序

    console.log(oString.localeCompare(""));//1
    console.log(oString.localeCompare("hello"));//1
    //var str = ["99","1","7","88","30","90","444","999"];
    //str.sort (function(a,b){return a.localeCompare(b)})
    //(8) ["1", "30", "444", "7", "88", "90", "99", "999"]

    console.log("\n返回某个指定的字符串值在字符串中首次出现的位置。---------------------------------------------------------------------indexOf()");                     
    //返回某个指定的字符串值在字符串中首次出现的位置。
    //stringObject.indexOf(searchvalue,fromindex)
    //searchvalue	必需。规定需检索的字符串值。
    //@para fromindex	可选的整数参数。规定在字符串中开始检索的位置。
    //它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
    //该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。
    //---------------开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。
    //---------------如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。
    //stringObject 中的字符位置是从 0 开始的。
    //这个是做的完全匹配,对大小写敏感
    console.log(oString.indexOf("Hello"));//-1
    console.log(oString.indexOf("l",1));//2

    console.log("\n返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。---------------------------------------------------------------------lastIndexOf()");                     
    //返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
    //stringObject.lastIndexOf(searchvalue,fromindex)
    //searchvalue	必需。规定需检索的字符串值。
    //@para fromindex	可选的整数参数。规定在字符串中开始检索的位置。
    //它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
    //该方法将从尾到头地检索字符串 stringObject，看它是否含有子串 searchvalue。
    //---------------开始检索的位置在字符串的 fromindex 处或字符串的结尾（没有指定 fromindex 时）。
    //---------------如果找到一个 searchvalue，则返回 searchvalue 的第一个字符在 stringObject 中的位置。
    //stringObject 中的字符位置是从 0 开始的。
    //这个是做的完全匹配,对大小写敏感
    console.log(oString.lastIndexOf("Hello"));//-1
    console.log(oString.lastIndexOf("l",1));//-1

    console.log("\n在字符串内检索指定的值，或找到一个或多个正则表达式的匹配---------------------------------------------------------------------match()");                         
    console.log("\n---------------------------------------------------------------------RegExp.test(stringObject)");                         
    console.log("\n---------------------------------------------------------------------RegExp.exec(stringObject)");                         
    //在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
    //存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。
    //searchvalue	必需。规定要检索的字符串值。
    console.log(oString.match("Hello"));//null
    console.log(oString.match("hello"));//[ 'hello', index: 0, input: 'hello world' ]
    console.log(oString.match("world").index);//6
    //regexp	必需。规定要匹配的模式的 RegExp 对象。
    //如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。
    //match() 方法将检索字符串 stringObject，以找到一个或多个与 regexp 匹配的文本。这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。
    //如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。
    //---------------如果没有找到任何匹配的文本， match() 将返回 null。
    //---------------否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。
    ///---------------该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。
    //---------------除了这些常规的数组元素之外，返回的数组还含有两个对象属性。
    //---------------index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。
    
    //如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 中的所有匹配子字符串。
    //---------------若没有找到任何匹配的子串，则返回 null。
    //---------------如果找到了一个或多个匹配子串，则返回一个数组。
    //---------------不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。
    //  /^[a-z0-9\.-]*$/g      正则中的$是匹配结束字符      ^ 是判断以什么开头  * 是判断字符串中是否包含某某内容
    var charReg1 = /[a-z]/g;//验证是否全部为字符
    var charReg2 = /[a-z]/;//验证是否全部为字符
    var charReg3 = /[a-z]*/g;//验证是否全部为字符
    //简而言之，就是正则中有g，能够进行匹配，则返回的数组只有一个值，就是传入的字符串值，不能匹配的话就返回空
    //就是正则中没有g，能够进行匹配，则返回的数组有三个值，就是传入的字符串值，index属性和input属性以及对应的值，不能匹配的话就返回空
    //如果RegExp中没有g 则  RegExp.exec(stringObject)  等价于  stringObject.match(RegExp)
    console.log(oString.match(charReg1));//[ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]
    console.log(oString.match(charReg2));//[ 'h', index: 0, input: 'hello world' ]
    console.log(oString.match(charReg3));//[ 'hello', '', 'world', '' ]    
    console.log(charReg1.test(oString));//true
    console.log(charReg2.test(oString));//true
    console.log(charReg3.test(oString));//true    
    console.log(charReg1.exec(oString));//[ 'e', index: 1, input: 'hello world' ]
    console.log(charReg2.exec(oString));//[ 'h', index: 0, input: 'hello world' ]
    console.log(charReg3.exec(oString));//[ '', index: 5, input: 'hello world' ]
    
    console.log("\n用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串---------------------------------------------------------------------replace()");                             
    //用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
    //regexp/substr 必需。规定子字符串或要替换的模式的 RegExp 对象。
    //---------------请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。
    //replacement	必需。一个字符串值。规定了替换文本或生成替换文本的函数。
    //返回值 一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
    //字符串 stringObject 的 replace() 方法执行的是查找并替换的操作。
    //---------------它将在 stringObject 中查找与 regexp 相匹配的子字符串，然后用 replacement 来替换这些子串。
    //---------------如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。
    //---------------否则，它只替换第一个匹配子串。
    //replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。
    //---------------但是 replacement 中的 $ 字符具有特定的含义。
    //---------------如下表所示，它说明从模式匹配得到的字符串将用于替换。
    // |       字符      |       替换文本    |
    // |:----------------|:-----------------|
    // |      $1、$2、...、$99      |       与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。    |
    // |      $&      |       与 regexp 相匹配的子串。    |
    // |      $`      |       位于匹配子串左侧的文本。    |
    // |      $'      |       位于匹配子串右侧的文本。    |
    // |      $$      |       直接量符号。    |
    //ECMAScript v3 规定，replace() 方法的参数 replacement 可以是函数而不是字符串。
    //---------------在这种情况下，每个匹配都调用该函数，它返回的字符串将作为替换文本使用。
    //---------------该函数的第一个参数是匹配模式的字符串。接下来的参数是与模式中的子表达式匹配的字符串，可以有 0 个或多个这样的参数。
    //---------------接下来的参数是一个整数，声明了匹配在 stringObject 中出现的位置。最后一个参数是 stringObject 本身。
    //Flag: i-----------标识ignore忽略大小，g-----------标识global 反复检索,m-----------标识多行检索(这个暂时没试验)
    console.log(oString.replace(/o/, "watermelon"));//hell watermelon  world  只会进行一次替换的replace
    console.log(oString.replace(/o/g, " watermelon "));//hell watermelon  w watermelon rld   加上g之后会对所有匹配的内容进行替换
    console.log(oString.replace(/o/g, " $` "));//hell hell  w hello w rld     原字符串中第一个匹配到o左侧文本是  hell所以 hello 变成了 hell hell   第二个匹配到o的左侧文本是 hello w ， 所以 world 变成了 w hello w rld  
    console.log(oString.replace(/o/g, " $' "));//hell  world  w rld rld    原字符串中第一个匹配到o右侧文本是  world 所以 hello 变成了 hell world   第二个匹配到o的右侧文本是 rld ， 所以 world 变成了 w rld rld  
    console.log(oString.replace(/o/g, "$$")); //hell$ w$rld   将所有匹配o的地方替换成 $
    console.log(oString.replace(/o/g, " $&+$& ")); //hell o+o  w o+o rld   这里的$&指代的就是替换条件 o    所以 $&+$& 等价于 o+o
    var ss="AaAB";
    console.log(ss.replace(/A/ig, "RR"));//RRRRRRB     加上ig之后会对所有匹配的内容进行替换，并且忽略大小写
    console.log(oString.replace(/(\w+)\s* \s*(\w+)/, "$2 $1"));//world hello    通过字符串中的空格，对字符串进行分割，$1是第一个匹配的文本，$2是第二个匹配的文本，然后进行反序输出
    console.log(oString.replace(/\b\w+\b/g, function(word){
        return word.substring(0,1).toUpperCase()+word.substring(1);}
        ));                                                     //Hello World   所有单词的首字母都转换为大写  也就是说replace的第二个参数是可以支持函数形式
   
   console.log("\n用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。 ---------------------------------------------------------------------search()");                                     
   //用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。   
   //regexp	 该参数可以是需要在 stringObject 中检索的子串，也可以是需要检索的 RegExp 对象。
   //---------------注释：要执行忽略大小写的检索，请追加标志 i。
   //返回值 stringObject 中第一个与 regexp 相匹配的子串的起始位置。
   //---------------注释：如果没有找到任何匹配的子串，则返回 -1。
   //search() 方法不执行全局匹配，它将忽略标志 g。
   //---------------它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。
   
   console.log(oString.search(/o/));//4
   console.log(oString.search(/O/));//-1   search()对大小写比较敏感
   console.log(oString.search(/O/i));//4   对字符串忽略大小写进行匹配
   //如果只是对一个具体字符串来查找，那么使用indexOf()的系统资源消耗更小，效率更高；
   //---------------如果是查找具有某些特征的字符串（比如查找以a开头，后面是数字的字符串）
   //---------------那么indexOf()就无能为力，必须要使用正则表达式和search()方法了。
   // 很多时候用indexOf()不是为了真的想知道子字符串的位置，而是想知道长字符串中没有包含这个子字符串。
   //---------------如果返回索引值是-1，那么说明没有：不等于-1，那么就是有。
   //一般情况下indexOf比search更省资源。
   
   console.log("\n提取字符串的某个部分，并以新的字符串返回被提取的部分。 ---------------------------------------------------------------------slice()");                                        
   //提取字符串的某个部分，并以新的字符串返回被提取的部分。
   //start	要抽取的片断的起始下标。  必填
   //---------------如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。
   //---------------也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。
   //end	紧接着要抽取的片段的结尾的下标。 选填
   //---------------若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。
   //---------------如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。   
   //返回值 一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
   //String 对象的方法 slice()、substring() 和 substr() （不建议使用）都可返回字符串的指定部分。
   //---------------slice() 比 substring() 要灵活一些，因为它允许使用负数作为参数。
   //---------------slice() 与 substr() 有所不同，因为它用两个字符的位置来指定子串，而 substr() 则用字符位置和长度来指定子串。
   //---------------还要注意的是，String.slice() 与 Array.slice() 相似。
   console.log(oString.slice(6));//world  提取从位置 6 开始的所有字符
   console.log(oString.slice(6,8));//wo   提取从位置 6 到位置 11 的所有字符
   console.log(oString.slice(6,6)); //     返回值为空   slice不支持start =end
   console.log(oString.slice(8,6)); //     返回值为空   slice不支持start >end   
   console.log(oString.slice(-3,-1));//rl  提取从倒数的位置 3 到倒数的位置 1 的所有字符

   console.log("\n在字符串中抽取从 start 下标开始的指定数目的字符。 ---------------------------------------------------------------------substr()");                                           
   //在字符串中抽取从 start 下标开始的指定数目的字符。
   //start	必需。要抽取的子串的起始下标。
   //---------------必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。
   //---------------也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
   //length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
   //返回值 一个新的字符串，包含从 stringObject 的 start（包括 start 所指的字符） 处开始的 length 个字符。
   //---------------如果没有指定 length，那么返回的字符串包含从 start 到 stringObject 的结尾的字符。
   //注释：substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。
   //ECMAscript 没有对该方法进行标准化，因此反对使用它。
   //在 IE 4 中，参数 start 的值无效。在这个 BUG 中，start 规定的是第 0 个字符的位置。在之后的版本中，此 BUG 已被修正。
   console.log(oString.substr(6));//world
   console.log(oString.substr(6,8));//world 
   console.log(oString.substr(-3));//rld
   console.log(oString.substr(-3,-1));//     返回值为空   substr不支持第二个参数为负数

   console.log("\n用于提取字符串中介于两个指定下标之间的字符。 ---------------------------------------------------------------------substring()");                                              
   //用于提取字符串中介于两个指定下标之间的字符。
   //start	必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
   //stop	 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。
   //---------------如果省略该参数，那么返回的子串会一直到字符串的结尾。
   //返回值 一个新的字符串，该字符串值包含 stringObject 的一个子字符串，
   //---------------其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。
   //substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
   //---------------如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
   //---------------如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。
   //与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数。
   console.log(oString.substring(6));//world
   console.log(oString.substring(6,8));//wo
   console.log(oString.substring(6,6));//     返回值为空   
   console.log(oString.substring(8,6));//wo   因为8比6大 所以替换了位置之后再请求的数据
   console.log(oString.substring(-3,-1));//     返回值为空   substring不支持参数为负数

   console.log("\n把一个字符串分割成字符串数组 ---------------------------------------------------------------------split()");                                                 
   //把一个字符串分割成字符串数组
   //separator	必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
   //howmany	可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。
   //---------------如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
   //返回值  一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。
   //---------------返回的数组中的字串不包括 separator 自身。
   //---------------但是，如果 separator 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。
   //如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
   //String.split() 执行的操作与 Array.join 执行的操作是相反的。
   console.log(oString.split(" "));//[ 'hello', 'world' ]
   console.log(oString.split(/\s+/));//[ 'hello', 'world' ]
   console.log(oString.split(""));//[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]   不写howmany  返回所有数据
   console.log(oString.split("",4));//[ 'h', 'e', 'l', 'l' ] 写howmany  返回符合从1到howmany的所有数据
   

   console.log("\n返回对象的原始字符串表示。 ---------------------------------------------------------------------toString()");                                                    
    //返回对象的原始字符串表示。
    //无论它是伪对象，还是真对象都有 toString() 方法
    //对于 Object 对象，这个方法就比较多余，所以ECMA-262 没有定义这个值。
    console.log(oString.toString());//hello world    

    console.log("\n返回最适合该对象的原始值。对于 Object 对象，会将object内容以键值对的形式返回。 ---------------------------------------------------------------------valueOf()");                                                        
    //返回最适合该对象的原始值。对于 Object 对象，会将object内容以键值对的形式返回。
    console.log(oString.valueOf()); //hello world
    
    // 字符串是 JavaScript 的一种基本的数据类型。
    // String 对象的 length 属性声明了该字符串中的字符数。
    // String 类定义了大量操作字符串的方法，例如从字符串中提取字符或子串，或者检索字符或子串。
    // 需要注意的是，JavaScript 的字符串是不可变的（immutable），String 类定义的方法都不能改变字符串的内容。
    // 像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。
    // 在较早的 Netscape 代码基的 JavaScript 实现中（例如 Firefox 实现中），字符串的行为就像只读的字符数组。
    // 例如，从字符串 s 中提取第三个字符，可以用 s[2] 代替更加标准的 s.charAt(2)。
    // 此外，对字符串应用 for/in 循环时，它将枚举字符串中每个字符的数组下标（但要注意，ECMAScript 标准规定，不能枚举 length 属性）。
    // 因为字符串的数组行为不标准，所以应该避免使用它。
}

//学习数组
function learnArray(){
    var oArray = new Array("demo","melon","water");
    console.log("\n 首先打印本身内容---------------------------------------------------------------------"); 
    //首先打印本身内容
    console.log(oArray);//[ 'demo', 'melon', 'water' ]
    console.log(typeof(oArray));//object 无论引用的是什么类型的对象，它都返回 "object"
    console.log(oArray instanceof(Array));//true
    console.log(oArray instanceof(Object));//true
    console.log(oArray instanceof(String));//false

    //----------------------------------------------------属性
    console.log("\n对创建对象的函数的引用（指针）。对于 Array 对象，该指针指向原始的 Array() 函数。---------------------------------------------------------------------constructor");               
    //对创建对象的函数的引用（指针）。对于 Array 对象，该指针指向原始的 Array() 函数。
    console.log(oArray.constructor);   //[Function: Array]
    console.log("\n对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型---------------------------------------------------------------------__proto__");               
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oArray.__proto__); //[]
    console.log("\n返回数组的长度---------------------------------------------------------------------length");           
    //返回字符串的长度
    console.log(oArray.length); // 11

    //----------------------------------------------------方法
    console.log("\n----------------------------------------------------柔和  不会改变数组本身的");                
    //----------------------------------------------------柔和  不会改变数组本身的
    console.log("\n从某个已有的数组返回选定的元素---------------------------------------------------------------------slice()");            
    //从某个已有的数组返回选定的元素
    //@para start	必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
    //---------------也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
    //@para end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，
    //---------------那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，
    //---------------那么它规定的是从数组尾部开始算起的元素。
    //返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
    //请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
    // 您可使用负值从数组的尾部选取元素。
    // 如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。
    //空数组使用这个方法不会报错
    console.log(oArray);//[ 'demo', 'melon', 'water' ]
    console.log(oArray.slice(1));//[ 'melon', 'water' ]
    console.log(oArray.slice(-1));//[ 'water' ]
    console.log(oArray.slice(-1,1));//[]
    console.log(oArray);//[ 'demo', 'melon', 'water' ]
    console.log([].slice(1));//[]    

    console.log("\n用于对数组的元素进行排序---------------------------------------------------------------------sort()");                
    //用于对数组的元素进行排序
    //@para sortby	可选。规定排序顺序。必须是函数。
    //对数组的引用。请注意，数组在原数组上进行排序，不生成副本。
    //如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，
    //---------------是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
    // 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，
    //---------------然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
    // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    // 若 a 等于 b，则返回 0。
    // 若 a 大于 b，则返回一个大于 0 的值。
    console.log(oArray);//[ 'demo', 'melon', 'water' ]
    console.log(oArray.sort());//[ 'demo', 'melon', 'water' ]
    console.log([ 'water', 'melon', 'demo' ].sort()); //[ 'demo', 'melon', 'water' ]
    [ 'water', 'melon', 'demo' ].sort (function(a,b){return a.localeCompare(b)});//[ 'demo', 'melon', 'water' ]
    var tempstr1 = ["99","1","7","88","30","90","444","999"];
    console.log(tempstr1.sort());//[ '1', '30', '444', '7', '88', '90', '99', '999' ] 默认是按照对应字符大小进行排序
    console.log(tempstr1.sort(function(a,b){return a.localeCompare(b)}));//[ '1', '30', '444', '7', '88', '90', '99', '999' ]  按照对应字符大小进行排序
    console.log(tempstr1.sort (function(a,b){return a - b}));//[ '1', '7', '30', '88', '90', '99', '444', '999' ]   按照对应数值大小进行排序
    console.log([].sort());//[] 

    console.log("\n数组中的所有元素放入一个字符串。---------------------------------------------------------------------join()");
    //数组中的所有元素放入一个字符串。
    //元素是通过指定的分隔符进行分隔的。
    //@para separator	可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
    //返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，
    //---------------然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。
    //如果不传入参数，调用这个函数和调用toString结果一样
    console.log(oArray.join());//water,melon,demo
    console.log(oArray.join()==oArray.toString());//true
    console.log(oArray.join('-'));//water-melon-demo 

    console.log("\n----------------------------------------------------强硬  会改变数组本身的");    
    //----------------------------------------------------强硬  会改变数组本身的
    console.log("\n用于颠倒数组中元素的顺序---------------------------------------------------------------------reverse() ");            
    //用于颠倒数组中元素的顺序
    //该方法会改变原来的数组，而不会创建新的数组。
    //空数组倒序就是他本身
    // console.log(oArray);//[ 'demo', 'melon', 'water' ]
    // console.log(oArray.reverse());//[ 'water', 'melon', 'demo' ]
    // console.log([].reverse());//[]   

    console.log("\n连接两个或更多的数组，并返回结果。---------------------------------------------------------------------concat()");
    //连接两个或更多的数组，并返回结果。
    //该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    //@para arrayX	必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
    //返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。
    //---------------如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
    console.log(oArray.concat("e")); // [ 'water', 'melon', 'demo', 'e' ]
    console.log(oArray.concat("e","e","e","e","e")); // [ 'water', 'melon', 'demo', 'e', 'e', 'e', 'e', 'e' ]]   
    console.log(oArray.concat(oArray)); // [ 'water', 'melon', 'demo', 'water', 'melon', 'demo' ]
    console.log(oArray.concat(oArray,oArray,oArray));// [ 'water', 'melon', 'demo','water', 'melon', 'demo', 'water', 'melon', 'demo', 'water', 'melon', 'demo' ]

    console.log("\n用于把数组的第一个元素从其中删除，并返回第一个元素的值。---------------------------------------------------------------------shift()");            
    //用于把数组的第一个元素从其中删除，并返回第一个元素的值。
    //数组原来的第一个元素的值。
    //如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。
    //请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。
    console.log(oArray);//[ 'water', 'melon', 'demo' ]
    console.log(oArray.shift());//water
    console.log(oArray);//[ 'melon', 'demo' ]
    console.log([].shift());//undefined    

    console.log("\n用于删除并返回数组的最后一个元素---------------------------------------------------------------------pop()");    
    //用于删除并返回数组的最后一个元素
    //arrayObject 的最后一个元素。
    //pop() 方法将删除 arrayObject 的最后一个元素，
    //---------------把数组长度减 1，并且返回它删除的元素的值。
    //---------------如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
    //注释：该方法会改变数组的长度。
    console.log(oArray);//[ 'melon', 'demo' ]
    console.log(oArray.pop());//demo
    console.log(oArray);//[ 'melon' ]
    console.log([].pop());//undefined

    console.log("\n可向数组的开头添加一个或更多元素，并返回新的长度。---------------------------------------------------------------------push()");            
    //可向数组的开头添加一个或更多元素，并返回新的长度。
    //@para newelement1,newelement2,....,newelementX  要添加到数组的第一个元素，至少要传入一个参数
    //把指定的值添加到数组后的新长度。
    //unshift() 方法将把它的参数插入 arrayObject 的头部，
    //---------------并将已经存在的元素顺次地移到较高的下标处，以便留出空间。
    //该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。
    //请注意，unshift() 方法不创建新的创建，而是直接修改原有的数组。
    //unshift() 方法无法在 Internet Explorer 中正确地工作
    console.log(oArray);//[ 'melon' ]
    console.log(oArray.unshift('oArray'));//2
    console.log(oArray);//[ 'oArray', 'melon' ]
    console.log(oArray.unshift(oArray));//3
    console.log(oArray);//[ [Circular], 'oArray', 'melon' ]
    console.log([].unshift(oArray));//1    

    console.log("\n向数组的末尾添加一个或多个元素，并返回新的长度。---------------------------------------------------------------------push()");        
    //向数组的末尾添加一个或多个元素，并返回新的长度。
    //@para newelement1,newelement2,....,newelementX  要添加到数组的第一个元素，至少要传入一个参数
    //把指定的值添加到数组后的新长度。
    //push() 方法可把它的参数顺序添加到 arrayObject 的尾部。
    //---------------它直接修改 arrayObject，而不是创建一个新的数组。
    //---------------push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。
    //注释：该方法会改变数组的长度。
    console.log(oArray);//[ [Circular], 'oArray', 'melon' ]
    console.log(oArray.push('oooArray'));//4
    console.log(oArray);//[ [Circular], 'oArray', 'melon', 'oooArray' ]
    console.log(oArray.push(oArray));//5
    console.log(oArray);//[ [Circular], 'oArray', 'melon', 'oooArray', [Circular] ]
    console.log([].push(oArray));//1     

    console.log("\n向/从数组中添加/删除项目，然后返回被删除的项目。---------------------------------------------------------------------splice() ");            
    //向/从数组中添加/删除项目，然后返回被删除的项目。
    //@para index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
    //@para howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
    //@para item1, ..., itemX	可选。向数组添加的新项目。
    //返回  Array	包含被删除项目的新数组，如果有的话。
    //splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
    //如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
    //请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
    // console.log(oArray);//,melon,
    // console.log(oArray.splice(2,0,"mmmelon")+"\n");//  返回值为空   从 index 2 添加一个新元素 ("melon")  不删除任何数据
    // console.log(oArray+"\n");//,melon,mmmelon,
    // console.log(oArray.splice(2,1,"mmelon")+"\n");//mmmelon 删除从 index 2 开始的第一个元素（mmmelon），并添加一个新元素 ("mmelon") 来替代被删除的元素
    // console.log(oArray+"\n");//,melon,mmelon,
    // console.log(oArray.splice(0,1,"mmmmmelon")+"\n");//mmmmmelon,melon,mmelon, 删除从 index 0 开始的第一个元素（mmmelon），并添加一个新元素 (mmmmmelon") 来替代被删除的元素
    // console.log(oArray+"\n");//mmmmmelon,melon,mmelon,
    // console.log(oArray.splice(2,1,oArray)+"\n");//mmelon
    // console.log(oArray+"\n");//mmmmmelon,melon,,
    // console.log(oArray.splice(0,oArray.length,"mmmmmelonnnnn")+"\n");//mmmmmelon,melon,mmmmmelonnnnn,mmmmmelonnnnn
    // console.log(oArray+"\n");//mmmmmelonnnnn

    console.log(oArray);//[ [Circular], 'oArray', 'melon', 'oooArray', [Circular] ]
    console.log("1 手动分割线\n");
    console.log(oArray.splice(2,0,"mmmelon"));//[]  返回值为空   从 索引为2(melon) 添加一个新元素 ("mmmelon") ，原有的元素顺势后移， 不删除任何数据
    console.log("2 手动分割线\n");
    console.log(oArray);//[ [Circular], 'oArray', 'mmmelon', 'melon', 'oooArray', [Circular] ]
    console.log("3 手动分割线\n");
    console.log(oArray.splice(2,1,"mmelon"));//[ 'mmmelon' ] 删除从 索引为2(mmmelon) 开始的第一个元素（mmmelon），并添加一个新元素 ("mmelon") 来替代被删除的元素
    console.log("4 手动分割线\n");
    console.log(oArray);//[ [Circular], 'oArray', 'mmelon', 'melon', 'oooArray', [Circular] ]
    console.log("5 手动分割线\n");
    console.log(oArray.splice(0,1,"mmmmmelon"));//[ [ 'mmmmmelon', 'oArray', 'mmelon', 'melon', 'oooArray', [Circular] ] ] 删除从 index 0 开始的第一个元素（[ 'mmmmmelon', 'oArray', 'mmelon', 'melon', 'oooArray', [Circular] ]），并添加一个新元素 (mmmmmelon") 来替代被删除的元素
    console.log("6 手动分割线\n");
    console.log(oArray);//[ 'mmmmmelon', 'oArray', 'mmelon', 'melon', 'oooArray', [Circular] ]
    console.log("7 手动分割线\n");
    // console.log(oArray.splice(2,1,oArray));//[ 'mmelon' ]
    // console.log("8 手动分割线\n");
    // console.log(oArray);//[ 'mmmmmelon','oArray',[Circular],'melon','oooArray',[Circular] ]
    // console.log("9 手动分割线\n");
    // console.log(oArray.splice(0,oArray.length,"mmmmmelonnnnn"));//[ 'mmmmmelon','oArray',[ 'mmmmmelonnnnn' ],'melon','oooArray',[ 'mmmmmelonnnnn' ] ]
    // console.log("10 手动分割线\n");
    // console.log(oArray);//[ 'mmmmmelonnnnn' ]    

    console.log("\n浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。 es6---------------------------------------------------------------------copyWithin()");    
    //浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
    //@para target 目标索引 必填 0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
    //---------------如果 target 大于等于 arr.length，将会不发生拷贝。
    //---------------如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
    //@para start 源开始索引 非必填
    //0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
    //---------------如果 start 被忽略，copyWithin 将会从0开始复制。
    //@para end 结束源索引 非必填
    //0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，
    //---------------但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
    //改变了的数组。
    //参数target,start和end 必须为整数。
    // 如果start为负，则其指定的索引位置等同于length+start，length为数组的长度。
    // end也是如此。
    // copyWithin方法不要求其this值必须是一个数组对象；
    // 除此之外，copyWithin是一个可变方法，它可以改变this对象本身，并且返回它，而不仅仅是它的拷贝。
    // copyWithin 就像 C 和 C++ 的 memcpy 函数一样，且它是用来移动 Array 或者 
    // The copyWithin 是一个可变方法，它不会改变 this 的 length，但是会改变 this 本身的内容，且需要时会创建新的属性。 
    console.log(oArray);//[ 'mmmmmelon', 'oArray', 'mmelon', 'melon', 'oooArray', [Circular] ]
    console.log(oArray.copyWithin(1));//[ 'mmmmmelon','mmmmmelon','oArray','mmelon','melon','oooArray' ]     将原数组中索引0到oArray.length的内容（'mmmmmelon', 'oArray', 'mmelon', 'melon', 'oooArray', [Circular]） 从 索引为1(mmmmmelon)开始覆盖原数组内容，超出数组长度的[Circular]被舍弃
    //console.log(oArray);//[ 'mmmmmelon','mmmmmelon','oArray','mmelon','melon','oooArray' ]    
    console.log(oArray.copyWithin(1,2));//[ 'mmmmmelon', 'oArray', 'mmelon', 'melon', 'oooArray', 'oooArray' ] 
    //将原数组中索引2到oArray.length的内容（'oArray','mmelon','melon','oooArray'） 从 索引为1(mmmmmelon)开始覆盖原数组内容 
    //---------------因为从索引2到oArray.length的长度 小于target 到oArray.length，所以原数组中的最后一个元素(oooArray)，没有被修改
    //console.log(oArray);//[ 'mmmmmelon', 'oArray', 'mmelon', 'melon', 'oooArray', 'oooArray' ]
    console.log(oArray.copyWithin(1,2,3));//[ 'mmmmmelon', 'mmelon', 'mmelon', 'melon', 'oooArray', 'oooArray' ]
    //因为不包含 索引为end的值 所以将原数组中索引2的内容（'mmelon'） 从 原索引为1(mmmmmelon)开始覆盖原数组内容 
    //---------------因为从索引2的长度 小于target(1) 到oArray.length，所以原数组中的最后四个元素('mmelon', 'melon', 'oooArray', 'oooArray')，没有被修改    
    //console.log(oArray);//  [ 'mmmmmelon', 'mmelon', 'mmelon', 'melon', 'oooArray', 'oooArray' ]
    console.log(oArray.copyWithin(oArray.length));//[ 'mmmmmelon', 'mmelon', 'mmelon', 'melon', 'oooArray', 'oooArray' ] 因为target 等于 arr.length，没有发生任何拷贝
    console.log(oArray.copyWithin(oArray.length+1));//[ 'mmmmmelon', 'mmelon', 'mmelon', 'melon', 'oooArray', 'oooArray' ] 因为target 大于 arr.length，没有发生任何拷贝
    console.log(oArray.copyWithin(1,0,3));  //[ 'mmmmmelon','mmmmmelon','mmelon','mmelon','oooArray','oooArray' ]  
    //因为target 大于 start 将两个数据对调
    //所以将原数组中索引0的内容(mmmmmelon) 从 原索引为1(mmmmmelon)开始覆盖原数组内容 

  
}

//学习日期
function learnDate(){
    var oDate = new Date();
    console.log("\n 首先打印本身内容---------------------------------------------------------------------"); 
    //首先打印本身内容
    console.log(oDate);//2017-11-07T09:51:08.076Z
    console.log(typeof(oDate));//object 无论引用的是什么类型的对象，它都返回 "object"
    console.log(oDate instanceof(Date));//true
    console.log(oDate instanceof(Object));//true
    console.log(oDate instanceof(String));//false

    //强制类型转化，将其他类型的变量转化成Date类型
    //false,true,undefined,null值,字符串值和object对象不能转换成Date类型
    console.log(Date(false))	//Tue Nov 07 2017 17:51:08 GMT+0800 (中国标准时间)
    console.log(Date(true))	//Tue Nov 07 2017 17:51:08 GMT+0800 (中国标准时间)
    console.log(Date(undefined))	//Tue Nov 07 2017 17:51:08 GMT+0800 (中国标准时间)
    console.log(Date(null))	//Tue Nov 07 2017 17:51:08 GMT+0800 (中国标准时间)
    console.log(Date("1.2.3"))	//Tue Nov 07 2017 17:51:08 GMT+0800 (中国标准时间)
    console.log(Date(new Object()))	//Tue Nov 07 2017 17:51:08 GMT+0800 (中国标准时间)

    //----------------------------------------------------属性
    //对创建对象的函数的引用（指针）。对于 Date 对象，该指针指向原始的 Date() 函数。
    console.log(oDate.constructor);   //[Function: Date]

    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oDate.__proto__); //Date {}

}

//learnObject();
//learnBoolean();
//learnNumber();
//learnString();
learnArray();
//learnDate();