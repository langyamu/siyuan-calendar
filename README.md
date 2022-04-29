# siyuan-calendar 日历挂件

## 预览

![preview.png](./preview.png)

## 配置

手动改下当前目录下的 `config.json`

```json
{
    "auth_token": "", // siyuan token | 密码 | 没有置空
    "daily_note_book_id": "", // 笔记本 id ，每日笔记所在的笔记本
    "daily_note_save_path":"", // 笔记存放路径，在哪个文档下 举例 /Work Bench/2022/04/27 填的是 /Work Bench
    "daily_note_markdown_template":"" // 模板路径，目前没用，因为接口只渲染 markdown 无法渲染 思源的模板
}
```

## 功能

功能比较简单，点击日历中日期单元格跳转到当日笔记，如果文档未创建会提示创建，目前无法渲染 template（接口不支持）

