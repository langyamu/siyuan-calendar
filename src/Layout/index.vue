<!-- Layout.vue -->
<script setup lang="ts">
import Calendar from '@/views/Calendar/index.vue';
import Setting from '@/views/Setting/index.vue';
</script>

<template>
    <el-container direction="vertical">
        <el-tabs tab-position="left">
            <el-tab-pane>
                <template #label>
                    <span class="layout-tabs-pane-label"
                        ><el-icon> <i-ep-calendar /></el-icon> 日历</span
                    >
                </template>

                <Calendar />
            </el-tab-pane>

            <el-tab-pane>
                <template #label>
                    <span class="layout-tabs-pane-label"
                        ><el-icon> <i-ep-setting /></el-icon> 设置</span
                    >
                </template>
                <Setting />
            </el-tab-pane>
        </el-tabs>
    </el-container>
</template>

<style scoped>
.layout-tabs-pane-label .el-icon {
    top: 1.5px;
}
</style>
