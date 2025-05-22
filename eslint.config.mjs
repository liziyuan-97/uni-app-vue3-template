import vuePlugin from 'eslint-plugin-vue';

export default [
  ...vuePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    // 启用额外的规则或者覆盖基础配置中的规则的默认选项
    rules: {
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-html': 'off',
      'no-v-for-template-key': 'off',
      'vue/no-template-shadow': 'off',
      'vue/valid-define-emits': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/no-mutating-props': 'off',
      'space-before-blocks': [
        'error',
        {
          functions: 'always',
        },
      ], // 在块之前强制保持一致的间距
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ], // 在 function 定义左括号之前强制保持一致的间距
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ], // 在对象字面属性中强制键和值之间的间距一致
      // 'indent': ['error', 2], // 强制一致的缩进
      'arrow-spacing': 2, // 在箭头函数中的箭头前后强制保持一致的间距
      'block-spacing': 2, // 在打开块之后和关闭块之前禁止或强制块内的空格
      'space-infix-ops': 2, // 中缀运算符周围需要间距
      'no-multi-spaces': 2, // 禁止多个空格
      'object-curly-spacing': ['error', 'always'], // 在大括号内强制保持一致的间距
      'quotes': ['error', 'single'], // 尽量单引号
      'vue/no-v-model-argument': 0, // 允许向自定义组件中使用的v-model添加参数
      'no-useless-catch': 0, // 允许无操作的catch
      'no-debugger': 1, // 警告使用 debugger
      'no-cond-assign': 2, // 禁止条件表达式中的赋值运算符
      'no-alert': 1, // 警告使用 alert
      'no-empty': 0, // 警告空块语句
      'no-extra-semi': 0, // 可以使用不必要的分号
      'no-func-assign': 2, // 禁止重新分配 function 声明
      'no-invalid-regexp': 1, // 警告在 RegExp 构造函数中使用无效的正则表达式字符串
      'no-case-declarations': 1, // 警告 case 子句中的词法声明
      'no-irregular-whitespace': 1, // 警告不规则空格
      'no-prototype-builtins': 1, // 警告直接在对象上调用某些 Object.prototype 方法
      'no-unexpected-multiline': 1, // 警告混淆多行表达式
      'no-return-assign': 0, // 关闭在 return 语句中不允许赋值运算符
      'no-self-assign': 1, // 警告两边完全相同的赋值
      'no-self-compare': 1, // 警告双方完全相同的比较
      'no-unmodified-loop-condition': 1, // 警告未修改的循环条件
      'no-unreachable': 1, // 在 return、throw、continue 和 break 语句之后警告无法访问的代码
      'no-eval': 2, // 禁止eval
      'no-label-var': 1, // 警告与变量共享名称的标签
      'no-fallthrough': 1, // 警告 case 语句的失败
      'no-use-before-define': 0, // 关闭在定义之前禁止使用变量
      'no-loop-func': 1, // 警告在循环语句中包含不安全引用的函数声明
      'block-scoped-var': 1, // 警告在定义的范围内强制使用变量
      // 'no-empty-function': ['warn', { allow: ['arrowFunctions'] }], // 警告空函数
      'no-unused-vars': 0, // 关闭禁止未使用的变量
      'no-console': 0, // 关闭禁止console
      'no-inner-declarations': 0, // 关闭禁止嵌套块中的变量或 function 声明
      'no-useless-escape': 0, // 警告不必要的转义字符
      'no-async-promise-executor': 1, // 警告使用异步函数作为 Promise 执行器
      'brace-style': 1, // 警告对块执行一致的大括号样式
      yoda: 1, // 警告 "Yoda" 条件
      'arrow-parens': 0, // 关闭箭头函数参数需要括号
      curly: ['error', 'multi-line'], // 对所有控制语句强制使用一致的大括号样式
      'generator-star-spacing': 0, // 关闭在生成器函数中强制围绕 * 运算符保持一致的间距
      'comma-dangle': ['error', 'only-multiline'], // 要求或不允许尾随逗号
      semi: 0, // 关闭要求或禁止使用分号
      // complexity: ['warn', { max: 22 }], // 强制执行程序中允许的最大圈复杂度
      'keyword-spacing': [
        2,
        {
          before: true,
          after: true,
        },
      ], // 关键字前后是否要空一格
      'vue/require-v-for-key': 1, // 警告v-kor循环必须要key
      'vue/valid-v-for': 1, // 警告v-for的有效性
      'vue/no-side-effects-in-computed-properties': 0, // 警告代码对计算的属性和函数产生副作用
      'vue/valid-v-on': 1, // 警告校验v-on有效性
      'vue/no-parsing-error': 1, // 警告不允许在＜template＞中出现分析错误
      'vue/require-default-prop': 0, // 警告必须要默认props
      'vue/require-prop-types': 1, // 警告必须要默认props类型
      'vue/html-indent': ['error', 2], // 在<template>中强制执行一致缩进
      'vue/script-indent': [
        'error',
        2,
        {
          baseIndent: 1,
          switchCase: 1,
        },
      ], // 在＜script＞中强制执行一致缩进
      'vue/html-self-closing': 1, // 警告执行自动关闭样式
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ], // 强制每行的最大属性数
      'vue/multi-word-component-names': 0, // 要求组件名称始终为多词
      'no-control-regex': 0, // 关闭校验正则表达式中使用控制字符
      'comma-spacing': 2, // 在逗号前后强制保持一致的间距
    },
  }
];
