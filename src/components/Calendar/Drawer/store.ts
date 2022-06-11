import { IQueryRes } from '@/apis';
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
});
