import { defineStore } from 'pinia';

const useSettingStore = defineStore('Setting', () => {
    const curNotebookId = ref('');

    return {
        curNotebookId,
    };
});

export default useSettingStore;
