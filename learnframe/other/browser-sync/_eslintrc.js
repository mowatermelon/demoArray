module.exports = {
    extends: [
        'eslint-config-alloy',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // jQuery: false,
        // $: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
        "no-undef": 0,//不能有未定义的变量
        "max-params": [0, 10],//函数最多只能有10个参数
        "no-undefined": 0,//不能使用undefined
        "no-param-reassign":0,//禁止给参数重新赋值
        "guard-for-in": 0,//for in循环要用if语句过滤
        "no-unused-vars":0,//不能有声明后未被使用的变量或参数
        "no-loop-func":0,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        "max-depth": 0,//嵌套块深度
        "complexity":0,//循环复杂度
        "no-useless-call": 0,//禁止不必要的call和apply
        "no-extend-native": 0,//禁止扩展native对象
        "no-eval": 0,//禁止使用eval
        "new-cap": 0,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "max-nested-callbacks": [0, 5],//回调嵌套深度
    }
};