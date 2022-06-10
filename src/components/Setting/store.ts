import {
    getNotebookConf,
    IGetNotebookConfRes,
    INotebook,
    lsNotebooks,
} from '@/apis';
import { toReject, toResolve } from '@/utils';
import { defineStore } from 'pinia';
import { useCalendarStore } from '../Calendar/store';

export { initSettingStore, useSettingStore };

interface ISettingState {
    curNotebookId: string;
    openedNotebooks: Array<INotebook> | [];
    curNotebookConf: IGetNotebookConfRes | null;
}

const settingState: ISettingState = {
    curNotebookId: '',
    openedNotebooks: [],
    curNotebookConf: null,
};

const useSettingStore = defineStore('setting', {
    state() {
        return settingState;
    },
    getters: {
        curNotebookName(): string {
            return this.openedNotebooks.filter(
                (item) => item.id === this.curNotebookId,
            )[0]?.name;
        },
        dailyNoteSavePath(): string {
            if (this.curNotebookConf !== null)
                return this.curNotebookConf.conf.dailyNoteSavePath;
            else return '';
        },
    },
    actions: {
        switchNotebook: async function (notebookId: string) {
            this.curNotebookId = notebookId;
            const [error, res] = await getNotebookConf(this.curNotebookId);

            if (error) return toReject(error);
            this.curNotebookConf = res.data;

            const [error2] = await useCalendarStore().initStore();

            if (error2) return toReject(error2);

            return toResolve(true);
        },
    },
});

async function initSettingStore() {
    const [error, res] = await lsNotebooks();

    if (error) return toReject(error);

    const notebooks = res.data.notebooks;
    // item.closed === true (关闭) or false (打开)
    settingState.openedNotebooks = notebooks.filter(
        (item) => !item.closed && item.name !== '思源笔记用户指南',
    );

    settingState.curNotebookId = settingState.openedNotebooks[0].id;

    const [error2, notebookConfRes] = await getNotebookConf(
        settingState.curNotebookId,
    );

    if (error2) return toReject(error2);
    settingState.curNotebookConf = notebookConfRes.data;

    return toResolve(true);
}
