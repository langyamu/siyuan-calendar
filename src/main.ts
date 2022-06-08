import App from '@/App.vue';
import store from '@/store';
import 'element-plus/es/components/message/style/css';
import { createApp } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
createApp(App).use(store).mount('#app');
