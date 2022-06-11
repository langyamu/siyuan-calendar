<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DateCellList from '../DateCellList.vue';
import { useDrawerStore } from './store';

const drawerStore = useDrawerStore();
const { isShow, curData, title } = storeToRefs(drawerStore);
</script>
<template>
    <el-drawer
        v-model="isShow"
        :size="'50%'"
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
        <DateCellList :day-data="curData" />
    </el-drawer>
</template>

<style>
.el-drawer__body {
    padding-top: 0;
}
.el-drawer__header {
    margin-bottom: 20px;
}
</style>
