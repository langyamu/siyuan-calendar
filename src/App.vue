<script lang="ts" setup>
import Layout from '@/Layout/index.vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>

<template>
    <suspense>
        <el-config-provider :locale="zhCn">
            <Layout />
        </el-config-provider>
    </suspense>
</template>

<style>
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
}
</style>
