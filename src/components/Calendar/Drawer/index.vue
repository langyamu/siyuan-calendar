<script setup lang="ts"></script>
<template>
    <!-- <el-drawer
        v-model="isShowDrawer"
        :size="'50%'"
        direction="rtl"
        :before-close="
            () => {
                isShowDrawer = false;
            }
        "
    >
        <template #header="{ titleId, titleClass }">
            <h3 :id="titleId" :class="titleClass">
                {{ curDrawerData?.fcontent }}
            </h3>
        </template>

        <div class="event-info">
            <span class="event-info-label">创建时间：</span>
            <span>{{ dayjs(curDrawerData.created).format('YYYY-MM-DD') }}</span>
        </div>
        <div class="event-info">
            <span>更新时间：</span>
            <span>{{ dayjs(curDrawerData.updated).format('YYYY-MM-DD') }}</span>
        </div>

        <div class="event-info">
            <el-link
                type="primary"
                :href="`siyuan://blocks/${curDrawerData.id}`"
                :underline="false"
            >
                <el-icon style="top: 1px; margin-right: 3px"
                    ><i-ep-link /></el-icon
                >跳转至笔记</el-link
            >
        </div>

        <el-collapse style="margin: 5px 0px">
            <el-collapse-item title="展开/收起详细信息"> </el-collapse-item>
        </el-collapse>
    </el-drawer> -->
    <div></div>
</template>

<style>
.el-drawer__body {
    padding-top: 0;
}
.el-drawer__header {
    margin-bottom: 20px;
}
</style>
