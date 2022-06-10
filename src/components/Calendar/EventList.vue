<script setup lang="ts">
import { IQueryRes } from '@/apis';
import { storeToRefs } from 'pinia';
import { useCalendarStore } from './store';

const props = defineProps<{
    dayEventData: IQueryRes[] | [];
}>();
const calendarStore = useCalendarStore();
let { isShowDrawer, curDrawerData } = storeToRefs(calendarStore);
const eventCount = computed(() => props.dayEventData.length);

function onClickEventItem(e: Event, item: IQueryRes) {
    e.stopPropagation();
    isShowDrawer.value = !isShowDrawer.value;
    curDrawerData.value = item;
}
</script>
<template>
    <div v-if="eventCount > 0" class="event-list-container">
        <ul class="event-list">
            <li
                v-for="item in dayEventData"
                :key="item.id"
                class="event-list-item"
                :style="{
                    backgroundColor: item.markdown.startsWith('* [X]')
                        ? '#67C23A'
                        : '#F56C6C',
                }"
                @click="onClickEventItem($event, item)"
            >
                {{ item.fcontent }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.event-list-container {
    font-size: 12px;
    height: auto;
}
.event-list {
    padding: 0;
}
.event-list-item,
.event-title {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #fff;
}

.event-info {
    padding: 5px 0px;
}
</style>
