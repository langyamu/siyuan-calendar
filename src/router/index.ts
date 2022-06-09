import { createRouter, createWebHistory } from 'vue-router';
import base from './routes/base';
export { setupRouter };
const router = createRouter({
    routes: [...base],
    history: createWebHistory(),
});

function setupRouter(app: any) {
    app.use(router);
}

export default router;
