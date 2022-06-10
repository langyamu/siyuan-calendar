<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { useSettingStore } from './store';

const settingStore = useSettingStore();

const { curNotebookId, openedNotebooks, curNotebookName } =
    storeToRefs(settingStore);

async function onSwitchNotebook(notebookId: string) {
    const [error] = await settingStore.switchNotebook(notebookId);
    if (error) return error;

    ElMessage.success(`切换笔记本为：${curNotebookName.value}`);
}
</script>
<template>
    <el-form label-position="top">
        <el-form-item label="当前笔记本">
            <el-select v-model="curNotebookId" @change="onSwitchNotebook">
                <el-option
                    v-for="item in openedNotebooks"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                />
            </el-select>
        </el-form-item>
    </el-form>
</template>
<style scoped></style>
