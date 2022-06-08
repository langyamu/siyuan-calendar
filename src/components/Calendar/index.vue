<script lang="ts" setup>
import DateCell from './DateCell.vue';
const calValue = ref(new Date());
</script>

<template>
    <el-calendar v-model="calValue">
        <template #dateCell="{ data: { date } }">
            <DateCell :date="date" />
        </template>
    </el-calendar>
</template>

<style scoped></style>
