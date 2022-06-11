<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingStore } from './store';

const settingStore = useSettingStore();

const { curNotebookIdList, openedNotebooks, model, loading, limit } =
    storeToRefs(settingStore);

async function onSwitchNotebook(notebookIdList: string[]) {
    loading.value = true;
    if (notebookIdList.length === 0) {
        curNotebookIdList.value = openedNotebooks.value.map((item) => item.id);
        loading.value = false;
        return ElMessage.error(`请选择笔记本！`);
    }
    const [error] = await settingStore.switchNotebook(notebookIdList);
    if (error) return (loading.value = false);

    const notebookNameList = openedNotebooks.value
        .map((item) => (notebookIdList.includes(item.id) ? item.name : ''))
        .filter((item) => item !== '');

    loading.value = false;
    ElMessage.success(`切换笔记本为：${notebookNameList.join(' , ')}`);
}

function onChangeModel(val: 'Todo' | 'DailyNote') {
    model.value = val;
    ElMessage.success(`切换为显示 ${val === 'Todo' ? '事项' : '每日笔记'}`);
}
</script>
<template>
    <el-form v-loading="loading" label-position="top">
        <el-form-item label="显示模式">
            <el-switch
                v-model="model"
                active-color="#13ce66"
                inactive-color="#409eff"
                active-value="Todo"
                inactive-value="DailyNote"
                active-text="事项"
                inactive-text="每日笔记"
                @change="onChangeModel"
            />
        </el-form-item>
        <el-form-item label="笔记本">
            <el-select
                v-model="curNotebookIdList"
                multiple
                collapse-tags
                collapse-tags-tooltip
                @change="onSwitchNotebook"
            >
                <el-option
                    v-for="item in openedNotebooks"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                />
            </el-select>
        </el-form-item>
        <el-form-item label="最大显示数量">
            <el-input-number v-model="limit" :min="1" />
        </el-form-item>
    </el-form>
</template>
<style scoped></style>
