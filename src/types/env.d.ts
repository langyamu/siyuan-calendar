/// <reference types="vite/client" />

declare module '*.vue' {
    import { defineComponent } from 'vue';
    const component: ReturnType<typeof defineComponent>;
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_WIDGET_DATASET: string;
    readonly VITE_AUTH_TOKEN: string;
    readonly VITE_WORKSPACE_DIR: string;
    readonly VITE_OS: string;
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
