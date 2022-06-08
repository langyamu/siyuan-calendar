<script setup lang="ts">
import { INotebook, lsNotebooks } from '@/apis';
import { storeToRefs } from 'pinia';
import { Ref } from 'vue';
import useSettingStore from './store';

const { curNotebookId } = storeToRefs(useSettingStore());

let openedNotebooks: Ref<Array<INotebook> | []> = ref([]);

const [error, res] = await lsNotebooks();

if (!error) {
    const notebooks = res.data.notebooks;
    // item.closed === true (关闭) or false (打开)
    openedNotebooks.value = notebooks.filter(
        (item) => !item.closed && item.name !== '思源笔记用户指南',
    );
    curNotebookId.value = openedNotebooks.value[0].id;
}

function onSwitchNotebook(notebookId: string) {
    if (notebookId !== '') {
        const notebookName = openedNotebooks.value.filter(
            (item) => item.id === notebookId,
        )[0].name;

        ElMessage.success(`切换笔记本为：${notebookName}`);
    }
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
