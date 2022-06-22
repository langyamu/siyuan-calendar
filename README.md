# siyuan-calendar 日历挂件

[更新日志](./CHANGELOG.md)

## 简介

一款简洁的日历挂件，初心是用来方便在日记间快速跳转的

## 功能

### 三种显示模式

- 日记
  - 日期单元格内显示的是当天创建的“日记”
  - 理论上支持 10 种日记的路径格式（指 笔记本配置中的类似 `{{now | date "2006/01"}}` 语法）
    - `/prefix/YYYY/YYYY-MM-DD`  或  `/YYYY/YYYY-MM-DD`
    - `/prefix/YYYY/MM/YYYY-MM-DD` 或 `/YYYY/MM/YYYY-MM-DD`
    - `/prefix/YYYY/MM-DD` 或 `/YYYY/MM-DD`
    - `/prefix/YYYY/MM/DD` 或 `/YYYY/MM/DD`
    - `/prefix/YYYY/MM/YYYY.MM.DD` 或 `/YYYY/MM/YYYY.MM.DD`
  - `prefix` 指的是 路径前缀  类似  `/Work Bench/{{now | date "2006/01"}}/{{now | date "02"}}` 中的 Work Bench
  - 另外 YYYY MM DD 指的就是 年（2006） 月（01） 日（02）了
  - 推荐 `/prefix/YYYY/MM/DD` ，其他稀奇古怪的路径格式后续也不会再兼容了
![](./preview.png)
- 文档
  - 日期单元格内显示的是当天创建的“文档块”
![](./image/doc.png)
- 事项
  - 日期单元格内显示的是当天创建的“任务列表块”（文档最外层的）
  - 红色条目代表未完成，绿色条目表示已完成
![](./image/task.png)

### 浏览器打开挂件

- 通过浏览器打开挂件可能会出现提示“未登录”的情况
  ![](./image/_1655857256902.png)
- 请点击阻止的弹窗去对应地址进行登录，之后再回到该页面并刷新
  