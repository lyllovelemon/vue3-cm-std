module.exports={
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "vue"
    ],
    rules: {
        //allow paren-less arrow functions
        "arrow-parens": 0,
        //allow async await
        "generator-star-spacing": "off",
        //allow debugger during development
        "no-debugger": process.env.NODE_ENV==='production'?"error": "off",
        "no-tabs":"off",
        //关闭下划线检查
        "camelcase":"off",
        "no-unused-vars":["off",{
            //允许声明未使用变量
            "vars":"all",
            //参数不检查
            "args":"none"
        }],
        /**
         * 1."var":"always" 每个函数只能在顶部有一个var声明
         * 2."let":"never" 每个块有多个let声明
         * 3."const":"never" 每个块有多个const声明
         * **/
        "one-var":["error",{"var":"always","let":"never","const":"never"}],
        //关闭 禁止在return、throw、continue和break语句后出现不可达代码
        "no-unreachable":"off",
        //关闭 禁止使用空格和tab混合缩进
        "no-mixed-spaces-and-tabs":"off",
        //关闭 要求或禁止在注释前有空白(space 或 tab)
        "spaced-comment":"off",
        //不警告分号
        "semi": ["warn","never"]
    }
}
