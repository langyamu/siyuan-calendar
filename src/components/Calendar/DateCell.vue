<script setup lang="ts">
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
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

async function onClickDateCell() {
    // let { isShowDrawer, curDrawerData } = storeToRefs(calendarStore);
    // const rootId = dayEventData.value[0].root_id;
    // console.log(dayEventData.value);
    // const [error, dayNoteData] = await calendarStore.getDayNoteData(props.date);
    // if (error) return toReject(error);
    // if (dayNoteData.length < 1) {
    //     return ElMessage.success('没有笔记与事项');
    // }
    // curDrawerData.value = dayNoteData[0];
    // console.log(curDrawerData);
    // isShowDrawer.value = !isShowDrawer.value;
}
</script>

<template>
    <el-scrollbar height="var(--el-calendar-cell-width)">
        <div class="date-cell-container" @click="onClickDateCell">
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
