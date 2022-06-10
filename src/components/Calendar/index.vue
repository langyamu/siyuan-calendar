<script lang="ts" setup>
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { useCalendarStore } from './store';
const calendarStore = useCalendarStore();
const { curCalValue, curMonthEventData, curDrawerData, isShowDrawer } =
    storeToRefs(calendarStore);

// watch(curCalValue, (value, prevValue) => {
//     useCalendarStore().setMonthEventData();
// });

const calendarRef = ref();

await calendarStore.initStore();

const selectDate = (val: string) => {
    calendarRef.value.selectDate(val);
    console.log('selectDate::', val);
    console.log('selectDate::', calendarRef);
    useCalendarStore().setMonthEventData();
};
</script>

<template>
    <el-calendar ref="calendarRef" v-model="curCalValue">
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
            <DateCell
                :date="date"
                :is-selected="isSelected"
                :month-event-data="curMonthEventData"
            />
        </template>
    </el-calendar>

    <el-drawer
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
    </el-drawer>
</template>

<style>
.el-calendar-table .el-calendar-day {
    overflow-y: auto;
}
.el-drawer__body {
    padding-top: 0;
}

.event-info {
    padding: 5px 0px;
    font-size: 14px;
}
.event-info .event-info-label {
}
.el-drawer__header {
    margin-bottom: 20px;
}
</style>
