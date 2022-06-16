# siyuan-calendar 日历挂件

[更新日志](./CHANGELOG.md)

![](./preview.png)
![](./task.png)

## 简介

一款简洁的日历挂件，初心是用来方便在日记间快速跳转的

## 配置

笔记本需要配置 日记 **存放路径**（如果需要不显示某个笔记本可以留空）
[![OpfBUH.png](https://s1.ax1x.com/2022/04/30/OpfBUH.png)](https://imgtu.com/i/OpfBUH)

## 功能

三种显示模式

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
- 文档
  - 日期单元格内显示的是当天创建的“文档块”
- 事项
  - 日期单元格内显示的是当天创建的“任务列表块”（文档最外层的）
  - 红色条目代表未完成，绿色条目表示已完成
