import { INotebook, lsNotebooks } from '@/apis';
import { toReject, toResolve } from '@/utils';
import { defineStore } from 'pinia';
import { useCalendarStore } from '../Calendar/store';

export { useSettingStore };

interface ISettingState {
    model: 'Todo' | 'DailyNote';
    curNotebookIdList: string[];
    openedNotebooks: Array<INotebook> | [];
    loading: boolean;
}

const useSettingStore = defineStore('setting', {
    state(): ISettingState {
        return {
            model: 'Todo',
            curNotebookIdList: [],
            openedNotebooks: [],
            loading: true,
        };
    },
    getters: {},
    actions: {
        initStore: async function () {
            const [error, res] = await lsNotebooks();

            if (error) return toReject(error);
            const notebooks = res.data.notebooks;
            this.openedNotebooks = notebooks.filter(
                (item) => !item.closed && item.name !== '思源笔记用户指南',
            );
            this.curNotebookIdList = this.openedNotebooks.map(
                (item) => item.id,
            );
            this.loading = false;
            return toResolve(true);
        },
        switchNotebook: async function (notebookIdList: string[]) {
            this.curNotebookIdList = notebookIdList;
            return await useCalendarStore().setMonthData();
        },
    },
});
