import { createPinia } from 'pinia';

export { initStore };

const store = createPinia();

function initStore(app: any) {
    app.use(store);
}
export default store;
