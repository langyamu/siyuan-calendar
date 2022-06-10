import { createRouter, createWebHistory } from 'vue-router';
import base from './routes/base';
export { initRouter };
const router = createRouter({
    routes: [...base],
    history: createWebHistory(),
});

function initRouter(app: any) {
    app.use(router);
}

export default router;
