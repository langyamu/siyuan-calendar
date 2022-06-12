import { IQueryRes } from '@/apis';
import { useSettingStore } from '@/components/Setting/store';
import { defineStore } from 'pinia';
export { useDrawerStore };

interface IDrawerState {
    isShow: boolean;
    curData: IQueryRes[];
    title: string;
}

const useDrawerStore = defineStore('drawerStore', {
    state(): IDrawerState {
        return {
            isShow: false,
            curData: [],
            title: '',
        };
    },
    getters: {
        model() {
            return useSettingStore().model;
        },
    },
});
