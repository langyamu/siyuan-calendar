import { SITE_BASE_PATH } from '@/constants';
import { createRouter, createWebHistory } from 'vue-router';
import base from './routes/base';
export { initRouter };
const router = createRouter({
    routes: [...base],
    history: createWebHistory(SITE_BASE_PATH),
});

function initRouter(app: any) {
    app.use(router);
}

export default router;
