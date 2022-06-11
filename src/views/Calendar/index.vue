<script setup lang="ts">
import Drawer from '@/components/Calendar/Drawer/index.vue';
import Calendar from '@/components/Calendar/index.vue';
</script>

<template>
    <el-container direction="vertical">
        <el-main>
            <Calendar />
            <Drawer />
        </el-main>
    </el-container>
</template>

<style scoped></style>
