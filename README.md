# 实现简单的打字机效果

[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## 目录介绍

```
|- dist                                 # 输出目录
|- src                
    |- js                               # js文件
        |- typewrite.js                   # 打字机文件
        |- lib                            # 库文件
        |- dev                            # 开发版本
        |- typewrite.0.0.1.min.js         # 压缩文件
|- demo                                 # 例子
|- gulpfile.js                          # gulp入口
|- package.json
```

## 如何使用

    1. <script></script>中src引用压缩文件
    2. 在script文件中运行typewrite.init(元素选择器, 参数设置)
    3. 可在需要出现效果的元素中设置字符串的值，若含有标签，将被格式化

## 例子

``` html
<body>
<div id="type"></div>
<script src="../dist/typewrite.0.0.1.min.js"></script>
<script>
  typewrite.init('#type', {
    duration: 3000
  });
</script>
```

1. [例子一(没有设置值)]()
2. [例子二(自己设置值)]()
