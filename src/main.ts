import App from '@/App.vue';
import { initRouter } from '@/router';
import { initStore } from '@/store';
import 'element-plus/es/components/message/style/css';
import { createApp } from 'vue';
import { initSettingStore } from './components/Setting/store';

async function bootstrap() {
    const app = createApp(App);

    initRouter(app);

    initStore(app);

    await initSettingStore();

    app.mount('#app');
}

bootstrap();
