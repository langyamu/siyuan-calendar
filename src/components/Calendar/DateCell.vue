<script setup lang="ts">
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { useDrawerStore } from './Drawer/store';
import { useCalendarStore } from './store';

const props = defineProps<{
    date: Date;
    isSelected: boolean;
}>();

const calendarStore = useCalendarStore();
const { curMonthData } = storeToRefs(calendarStore);

const dayData = computed(() =>
    curMonthData.value.filter(
        (item) =>
            dayjs(item.created).format('YYYYMMDD') ===
            dayjs(props.date).format('YYYYMMDD'),
    ),
);

async function onClickDateCell(e: Event) {
    console.log('dayData:', dayData);
    e.stopPropagation();
    if (dayData.value.length < 1) return ElMessage.success('没有笔记与事项');

    const { isShow, curData, title } = storeToRefs(useDrawerStore());

    isShow.value = !isShow.value;

    title.value = dayjs(props.date).format('YYYY-MM-DD');

    curData.value = dayData.value;
}
</script>

<template>
    <el-scrollbar
        height="var(--el-calendar-cell-width)"
        @click="onClickDateCell($event)"
    >
        <div class="date-cell-container">
            <div
                :class="{
                    'date-cell-header-selected': isSelected,
                }"
                class="date-cell-header"
            >
                {{ dayjs(date).format('DD') }}
            </div>
            <DateCellList :day-data="dayData" />
        </div>
    </el-scrollbar>
</template>

<style scoped>
.date-cell-container {
    width: 100%;
    height: 100%;
}

.date-cell-header-selected {
    background-color: var(--el-color-primary);
    color: #fff;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 15px;
}
</style>
