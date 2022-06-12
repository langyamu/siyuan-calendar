<script setup lang="ts">
import { IQueryRes } from '@/apis';
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { useDrawerStore } from './store';

const drawerStore = useDrawerStore();
const { isShow, curData, title, model } = storeToRefs(drawerStore);

function retItemBgColor(block: IQueryRes) {
    if (model.value === 'Todo') {
        return block.markdown.startsWith('* [X]') ? '#67C23A' : '#F56C6C';
    } else {
        return '#409eff';
    }
}
</script>
<template>
    <el-drawer
        v-model="isShow"
        direction="rtl"
        :before-close="
            () => {
                isShow = false;
            }
        "
    >
        <template #header="{ titleId, titleClass }">
            <h3 :id="titleId" :class="titleClass">
                {{ title }}
            </h3>
        </template>

        <div class="info-list-container">
            <el-collapse>
                <el-collapse-item
                    v-for="block in curData"
                    :key="block.id"
                    :name="block.id"
                >
                    <template #title>
                        <div
                            class="info-list-item-title"
                            :style="{
                                backgroundColor: retItemBgColor(block),
                            }"
                        >
                            <el-scrollbar
                                wrap-class="info-list-item-title-scrollbar"
                                :wrap-style="{
                                    'font-weight': 'bold',
                                    'border-radius': '5px 0 0 5px',
                                    padding: '0 10px',
                                }"
                            >
                                <span>{{ block.fcontent }}</span>
                            </el-scrollbar>
                            <el-scrollbar
                                wrap-class="info-list-item-title-scrollbar"
                                style="
                                    padding: 0 10px;
                                    border-left: 1px solid #eee;
                                "
                            >
                                <el-tooltip placement="left" content="笔记路径">
                                    <span>{{ block.hpath }}</span>
                                </el-tooltip>
                            </el-scrollbar>
                        </div>
                    </template>

                    <el-link
                        :href="`siyuan://blocks/${block.id}`"
                        :underline="false"
                        type="primary"
                        style="margin: 10px 0"
                        ><el-icon> <i-ep-link /></el-icon>跳转至笔记</el-link
                    >

                    <el-descriptions column="1" border>
                        <el-descriptions-item
                            label="创建时间"
                            label-align="center"
                            >{{
                                dayjs(block.created).format(
                                    'YYYY-MM-DD HH:mm:ss',
                                )
                            }}</el-descriptions-item
                        >
                        <el-descriptions-item
                            label="更新时间"
                            label-align="center"
                            >{{
                                dayjs(block.created).format(
                                    'YYYY-MM-DD HH:mm:ss',
                                )
                            }}</el-descriptions-item
                        >
                    </el-descriptions>
                </el-collapse-item>
            </el-collapse>
        </div>
    </el-drawer>
</template>

<style>
.el-drawer__header {
    margin-bottom: 20px;
}

.el-collapse-item__arrow {
    margin-left: 10px;
}

.info-list-container {
    /*font-size: 12px;*/
    height: auto;
}
.info-list-item {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    padding: 0 8px;
    border-radius: 3px;
    border: 1px solid #fff;
}

.info-list-item-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    border-radius: 3px 0 0 3px;
}

.info-list-item-title span {
    width: 100px;
}

.info-list-item-title-scrollbar {
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
