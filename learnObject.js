//学习引用类型通常叫做类（class）
//引用类型通常叫做类（class），也就是说，遇到引用值，所处理的就是对象。
//注意：从传统意义上来说，ECMAScript 并不真正具有类。事实上，除了说明不存在类，在 ECMA-262 中根本没有出现“类”这个词。ECMAScript 定义了“对象定义”，逻辑上等价于其他程序设计语言中的类。
//提示：本教程将使用术语“对象”。
//对象是由 new 运算符加上要实例化的对象的名字创建的。
//这种语法与 Java 语言的相似，不过当有不止一个参数时，ECMAScript 要求使用括号。
//如果没有参数，括号可以省略
//注意：尽管括号不是必需的，但是为了避免混乱，最好使用括号。

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

    //首先打印本身内容
    console.log(oo);//{ name: 'Wu Eva' } 
    console.log(typeof(oo));//object
    console.log(oo instanceof(Object));//true
    
    //----------------------------------------------------属性
    //对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数。
    console.log(oo.constructor);   //[Function: Object]
    
    //对该对象的对象原型的引用。对于 Object 对象，因为没有写原型链，所以返回未定义，不确定这个认知是否正确。
    //console.log(oo.Prototype);   //undefined
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oo.__proto__); // {}  
    
    //----------------------------------------------------方法
    //判断对象是否有某个特定的属性。必须用字符串指定该属性。
    console.log(oo.hasOwnProperty("name"));//true
    console.log(oo.hasOwnProperty("age"));//false

    //判断该对象是否为另一个对象的原型。
    console.log(oo.isPrototypeOf(Object));//false
    console.log(oo.isPrototypeOf(String));//false

    //判断给定的属性是否可以用 for...in 语句进行枚举。
    console.log(oo.propertyIsEnumerable());//false

    //返回对象的原始字符串表示。
    //无论它是伪对象，还是真对象都有 toString() 方法
    //对于 Object 对象，这个方法就比较多余，所以ECMA-262 没有定义这个值。
    console.log(oo.toString());//[object Object]    

    //返回最适合该对象的原始值。对于 Object 对象，会将object内容以键值对的形式返回。
    console.log(oo.valueOf()); //{ name: 'Wu Eva' }
    
}

//学习Boolean对象
function learnBoolean(){
    //Boolean 对象是 Boolean 原始类型的引用类型。
    //要创建 Boolean 对象，只需要传递 Boolean 值作为参数
    //遗憾的是，在 ECMAScript 中很少使用 Boolean 对象，即使使用，也不易理解。
    var oBool = new Boolean(true); //构造函数

    //首先打印本身内容
    console.log(oBool);//[Boolean: true]
    console.log(typeof(oBool));//object 无论引用的是什么类型的对象，它都返回 "object"
    console.log(oBool instanceof(Boolean));//true
    console.log(oBool instanceof(Object));//true
    console.log(oBool instanceof(String));//false
    

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
    //对创建对象的函数的引用（指针）。对于 Boolean 对象，该指针指向原始的 Boolean() 函数。
    console.log(oBool.constructor);   //[Function: Boolean]
    
    //对该对象的对象原型的引用。这里对于 oBool，因为没有写原型链，所以返回未定义，不确定这个认知是否正确。
    //console.log(oBool.Prototype);   //undefined
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oBool.__proto__); //[Boolean: false]
    
    //----------------------------------------------------方法
    //返回对象的原始字符串表示，对于 Boolean 对象，返回字符串 "true" 或 "false"。
    console.log(oBool.toString()); //  true
    console.log(typeof oBool.toString()); //  string
     
    //返回最适合该对象的原始值，对于 Boolean 对象，返回原始值，即 true 和 false。
    console.log(oBool.valueOf()); // true   
    console.log(typeof oBool.valueOf()); // boolean   
    
    //判断该对象是否为另一个对象的原型。
    console.log(oBool.isPrototypeOf(Object));//false
    
    //判断给定的属性是否可以用 for...in 语句进行枚举。
    console.log(oBool.propertyIsEnumerable());//false  

    //返回该对象的源代码
    //可能有兼容问题，在chrome 61.0.3163.100（正式版本）（32 位）中，打印控制台报错说 oBool.toSource is not a function
    //但是在firefox 56.0（32 位）中 打印出结果(new Boolean(true))
    //console.log(oBool.toSource()); 

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

    //首先打印本身内容
    console.log(oString);//[String: 'hello world']
    console.log(typeof(oString));//object 无论引用的是什么类型的对象，它都返回 "object"
    console.log(oString instanceof(String));//true
    console.log(oString instanceof(Object));//true
    console.log(oString instanceof(Number));//false

    //强制类型转化，将其他类型的变量转化成String类型
    //对 null 和 undefined 值强制类型转换可以生成字符串而不引发错误
    // 但是 null 和 undefined 值强制使用toString()，会引发错误
    console.log(String(-0))	//0    
    console.log(String(null))	//null
    console.log(String(new Object()))	//[object Object]
    console.log(String(undefined))	//undefined
    console.log(String(NaN))	//NaN 

    //----------------------------------------------------属性
    //对创建对象的函数的引用（指针）。对于 String 对象，该指针指向原始的 String() 函数。
    console.log(oString.constructor);   //[Function: String]
    
    //对该对象的对象原型的引用。对于 oString 对象，因为没有写原型链，所以返回未定义，不确定这个认知是否正确。
    //console.log(oString.Prototype);   //undefined
    //对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
    //就是这个构造体的默认值
    console.log(oString.__proto__); // [String: '']  
    
    //----------------------------------------------------方法
    //创建 HTML 锚。将字符串输出为有唯一标识的纯粹HTML
    //@para anchorname 必需。为锚定义名称。
    console.log(oString.anchor("anchorDemo"));//<a name="anchorDemo">hello world</a>

    //把字符串显示为大号字体。只在页面中才会有大两个字体号效果。
    console.log(oString.big());//<big>hello world</big>

    //把字符串显示闪动的字符串，目前没有看到有浏览器支持
    console.log(oString.blink());//<blink>hello world</blink>

    //把字符串显示粗体的字符串，只在页面中才会有粗体效果，IE不兼容
    console.log(oString.bold());//<b>hello world</b>

    //返回在指定位置的字符
    //不提供参数就返回第一个字符的字符
    //提供游标值，就返回指定游标的字符    
    console.log(oString.charAt());//h
    console.log(oString.charAt(1));//e
    console.log(oString.charAt(2));//l

    //返回在指定的位置的字符的 Unicode 编码
    //不提供参数就返回第一个字符的编码值
    //提供游标值，就返回指定游标的编码值
    console.log(oString.charCodeAt());//104   （h对应的编码）
    console.log(oString.charCodeAt(1));//101   （e对应的编码）
    console.log(oString.charCodeAt(2));//108   （l对应的编码）
    
    //连接两个或多个字符串
    //stringObject.concat(stringX,stringX,...,stringX)
    //concat() 方法将把它的所有参数转换成字符串
    //然后按顺序连接到字符串 stringObject 的尾部
    //并返回连接后的字符串。
    //请注意，stringObject 本身并没有被更改。
    //@para stringX	必需。将被连接为一个字符串的一个或多个字符串对象。
    console.log(oString.concat(oString));//hello worldhello world

    //以打字机文本显示字符串。只在页面中才会有效果。
    console.log(oString.fixed());//<tt>hello world</tt>

    //返回指定的颜色的字符串。只在页面中才会有效果。
    //color	必需。为字符串规定 font-color。
    //该值必须是颜色名(red)、RGB 值(rgb(255,0,0))或者十六进制数(#FF0000)。
    console.log(oString.fontcolor("Red"));//<font color="Red">hello world</font>
    
    //size 参数必须是从 1 至 7 的数字，数字越大字体越大。
    console.log(oString.fontsize(6));//<font size="6">hello world</font>

    //把字符串显示为斜体。只在页面中才会有效果。
    console.log(oString.italics());//<i>hello world</i>    

    //把字符串显示为链接。只在页面中才会有效果。
    //@para url	必需。规定要链接的 URL。
    console.log(oString.link());//<a href="undefined">hello world</a> 
    console.log(oString.link("https://mowatermelon.github.io/"));//<a href="https://mowatermelon.github.io/">hello world</a> 
    
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

    //可接受一个指定的 Unicode 值，然后返回一个字符串。
    //这个方法是构造函数 String() 自身的方法，而不是单独的某个 String 对象的方法
    //console.log(oString.fromCharCode(65,66,67));//报错 fromCharCode is not a function
    console.log(String.fromCharCode(65,66,67));//ABC
    
    //返回某个指定的字符串值在字符串中首次出现的位置。
    //stringObject.indexOf(searchvalue,fromindex)
    //searchvalue	必需。规定需检索的字符串值。
    //@para fromindex	可选的整数参数。规定在字符串中开始检索的位置。
    //它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
    //该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。
    //开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。
    //如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。
    //stringObject 中的字符位置是从 0 开始的。
    //这个是做的完全匹配,对大小写敏感
    console.log(oString.indexOf("Hello"));//-1
    console.log(oString.indexOf("l",1));//2
    
    //返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
    //stringObject.lastIndexOf(searchvalue,fromindex)
    //searchvalue	必需。规定需检索的字符串值。
    //@para fromindex	可选的整数参数。规定在字符串中开始检索的位置。
    //它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
    //该方法将从尾到头地检索字符串 stringObject，看它是否含有子串 searchvalue。
    //开始检索的位置在字符串的 fromindex 处或字符串的结尾（没有指定 fromindex 时）。
    //如果找到一个 searchvalue，则返回 searchvalue 的第一个字符在 stringObject 中的位置。
    //stringObject 中的字符位置是从 0 开始的。
    //这个是做的完全匹配,对大小写敏感
    console.log(oString.lastIndexOf("Hello"));//-1
    console.log(oString.lastIndexOf("l",1));//-1

    //在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
    //存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。
    //searchvalue	必需。规定要检索的字符串值。
    //regexp	必需。规定要匹配的模式的 RegExp 对象。
    //如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。


    //返回对象的原始字符串表示。
    //无论它是伪对象，还是真对象都有 toString() 方法
    //对于 Object 对象，这个方法就比较多余，所以ECMA-262 没有定义这个值。
    console.log(oString.toString());//hello world    

    //返回最适合该对象的原始值。对于 Object 对象，会将object内容以键值对的形式返回。
    console.log(oString.valueOf()); //hello world
    

}

//learnObject();
//learnBoolean();
//learnNumber();
learnString();