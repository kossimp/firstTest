# Mongoose使用

## 1.安装

创建node.js项目后，安装mongoose：npm install mongoose

要求已经安装并打开了mongodb数据库服务器

## 2.使用流程

1)引入mongoose：

const mongoose = require（'mongoose'）；

2）连接数据库：

mongoose.connect（'mongodb://licalhost'）

3)

创建的schema只有在创建model时引用才可以起作用：mongoose.model('Cat',schema).

mongoose有自己的基础数据类型定义：

​	以下是 mongoose 的所有合法 SchemaTypes：

- [String](http://www.mongoosejs.net/docs/api.html#schema-string-js)
- [Number](http://www.mongoosejs.net/docs/api.html#schema-number-js)
- [Date](http://www.mongoosejs.net/docs/api.html#schema-date-js)
- [Buffer](http://www.mongoosejs.net/docs/api.html#schema-buffer-js)
- Boolean
- Mixed
- [ObjectId](http://www.mongoosejs.net/docs/api.html#schema-objectid-js)
- Array
- Decimal128

创建的schema生效后，存储到数据库的数据必须遵守，否则不能存储，但系统没有原生的错误提示，只是存储一个空数据

4）创建一个model：

const Cat = mongoose.model('Cat',schema);

5)写入数据库

kitty1.save()

6)数据查询

数据集.find({查询条件}，callback（err,查询结果）=>{})

查询结果是一个Array,data[]