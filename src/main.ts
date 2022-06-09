import App from '@/App.vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import 'element-plus/es/components/message/style/css';
import { createApp } from 'vue';

function bootstrap() {
    const app = createApp(App);

    setupRouter(app);

    setupStore(app);

    app.mount('#app');
}

bootstrap();
