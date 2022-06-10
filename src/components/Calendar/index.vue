<script lang="ts" setup>
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { useCalendarStore } from './store';

const calendarStore = useCalendarStore();
const { curCalValue, loading } = storeToRefs(calendarStore);

// // watch(curCalValue, (value, prevValue) => {
// //     useCalendarStore().setMonthEventData();
// // });

const calendarRef = ref();

await calendarStore.initStore();

const selectDate = async (val: string) => {
    loading.value = true;
    calendarRef.value.selectDate(val);
    console.log('selectDate::', val);
    console.log('selectDate::', calendarRef);
    await useCalendarStore().setMonthData();
    loading.value = false;
};
</script>

<template>
    <el-calendar
        ref="calendarRef"
        v-model="curCalValue"
        v-loading.fullscreen.lock="loading"
    >
        <template #header>
            <span>{{ dayjs(curCalValue).format('YYYY年MM月') }}</span>
            <el-button-group>
                <el-button size="small" @click="selectDate('prev-month')"
                    >上个月</el-button
                >
                <el-button size="small" @click="selectDate('today')"
                    >今天</el-button
                >
                <el-button size="small" @click="selectDate('next-month')"
                    >下个月</el-button
                >
            </el-button-group>
        </template>
        <template #dateCell="{ data: { date, isSelected } }">
            <DateCell :date="date" :is-selected="isSelected" />
        </template>
    </el-calendar>
</template>

<style>
.el-calendar-table .el-calendar-day {
    overflow-y: auto;
}
.event-info {
    padding: 5px 0px;
    font-size: 14px;
}
.event-info .event-info-label {
}
</style>
