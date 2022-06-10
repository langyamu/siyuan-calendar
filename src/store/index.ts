import { useSettingStore } from '@/components/Setting/store';
import { createPinia } from 'pinia';

export { initStore };

const store = createPinia();

async function initStore(app: any) {
    app.use(store);

    await useSettingStore().initStore();
}
export default store;
