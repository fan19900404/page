# page
一个简单、基础的翻页插件，提供基本逻辑于方法的半插件（无UI）

## TypeScript
基于TypeScript。

## 浏览器兼容
兼容IE8及以上浏览器

## API
- 初始化选项
  * `data` 渲染时的数据，默认数组
  * `total` 总页数
  * `render($page)` 页面渲染的方法
    + $page 是方法实例，包含pageNum，data，upBtnState，downBtnState等属性
- 实例方法
  * `next(data)` 下一页方法，参数为需要渲染的数据
  * `prev(data)` 上一页方法，参数为需要渲染的数据
- 实例属性
  * `pageNum` 当前页码
  * `data` 当前渲染的数据数组
  * `upBtnState` 上一页按钮，是否可以点击
  * `downBtnState` 下一页按钮，是否可以点击

## 案例
  请看`example`文件的一个简单例子

## 注意事项
应为这是基础功能翻页js插件，没有包涵UI方面的内容，如果有需要的，请自行在封装一层UI。然后在使用。