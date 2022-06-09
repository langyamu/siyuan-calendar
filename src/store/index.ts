import { createPinia } from 'pinia';

export { setupStore };

const store = createPinia();

function setupStore(app: any) {
    app.use(store);
}
export default store;
