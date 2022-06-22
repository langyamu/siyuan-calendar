## [0.0.6](https://gitee.com/lan-ran/agenda/compare/v0.0.5...v0.0.6) (2022-06-22)


### Bug Fixes

* **components:** :bug: 修复 Setting 笔记本列表刷新后数据不一致的问题 ([1d6ba23](https://gitee.com/lan-ran/agenda/commits/1d6ba234d90cc34d5f24307b21a9a3675e17b9d5))
* **components:** :bug: 修复 Setting 切换模式时 notebookConfList 存在 null 数据导致最终拼接成错误的 sql 的问题 ([3c4a579](https://gitee.com/lan-ran/agenda/commits/3c4a579c2429b39f6b82b909b5f5bf2b42954cf5))
* **components:** :bug: 修复在 SettingDialog 中修改配置 Calendar 数据不更新的问题 ([853299a](https://gitee.com/lan-ran/agenda/commits/853299a3975a79ba524aeb196a6899afa51eee79))
* **router,request,Layout:** :bug: 挂件环境下通过 url 访问挂件或 window.location.reload() ，显示无法找到地址 ([580fabb](https://gitee.com/lan-ran/agenda/commits/580fabbc150806740bc2cea3c6a419a9bc39aec7))


### Features

* **components:** :sparkles: 弹窗进行配置 ([90933cf](https://gitee.com/lan-ran/agenda/commits/90933cf6385e3c55f408d586bbec33d99a7b6243)), closes [#5](https://gitee.com/lan-ran/agenda/issues/5)
* **components:** :sparkles: 新增 LayoutHeader ([f0e4de6](https://gitee.com/lan-ran/agenda/commits/f0e4de63f7a5910f325fbb048b295f1e3b82badc))
* **components:** :sparkles: 新增“文档”显示模式 ([181abee](https://gitee.com/lan-ran/agenda/commits/181abeee91064c5f303bb5c2b0da253e726ce263))
* **components:** :sparkles: drawer 中只有一条数据时，默认展开 ([77bb185](https://gitee.com/lan-ran/agenda/commits/77bb18565d9eb2b7aaee36ecf47609f7644efe4e))
* **components:** :sparkles: layoutAside 数据持久化 ([36fd7e5](https://gitee.com/lan-ran/agenda/commits/36fd7e504bbbb1189b623130ac9f5ccc21d7bf45))
* **stores:** :sparkles: 数据持久化 ([fe65c0a](https://gitee.com/lan-ran/agenda/commits/fe65c0a9ce4e1b638644305f6402068f655f6914)), closes [#5](https://gitee.com/lan-ran/agenda/issues/5)



## [0.0.5](https://github.com/langyamu/siyuan-calendar/compare/v0.0.4...v0.0.5) (2022-06-16)


### Bug Fixes

* **components:** :bug: el-descriptions 组件 column 属性传参类型错误 ([d3101cf](https://github.com/langyamu/siyuan-calendar/commit/d3101cf94590ce67f1233f41ade06dca417840ec))


### Features

* **components:** :sparkles: 新增“文档”显示模式 ([181abee](https://github.com/langyamu/siyuan-calendar/commit/181abeee91064c5f303bb5c2b0da253e726ce263))
* **stores:** :sparkles: 兼容 YYYY.MM.DD 的日记路径格式 ([64425b4](https://github.com/langyamu/siyuan-calendar/commit/64425b46e41281123ba69ccb0093b06cc3bc46af)), closes [#4](https://github.com/langyamu/siyuan-calendar/issues/4)



## [0.0.4](https://github.com/langyamu/siyuan-calendar/compare/b707329a7a749c73ff3fb2c50cd403d4d8b03437...v0.0.4) (2022-06-12)

### Bug Fixes

* **components:** :bug: 刷新之后 当前点击的 menu 状态被重置 ([56a1d5e](https://github.com/langyamu/siyuan-calendar/commit/56a1d5e92624019617f2774642bbe44968033f37))
* **router:** :bug: 添加路由公共前缀 base ([bcffa5b](https://github.com/langyamu/siyuan-calendar/commit/bcffa5b4ee0c624dd02c73ec1088b94a75295b18))

### Features

* **components:** :sparkles: 通过 drawer 显示 日历单元格 详细信息 ([5188b04](https://github.com/langyamu/siyuan-calendar/commit/5188b0476cb99e91cc28c3a232dd3302650048bf))
* **components:** :sparkles: 完成 setting 页面的基本配置（笔记本切换） ([b707329](https://github.com/langyamu/siyuan-calendar/commit/b707329a7a749c73ff3fb2c50cd403d4d8b03437))
* **components:** :sparkles: 新增笔记本多选，每日笔记与事项模式 ([ee22c35](https://github.com/langyamu/siyuan-calendar/commit/ee22c35bc40d2248670ed34254bc7dcaaa978ba8))
