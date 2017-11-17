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