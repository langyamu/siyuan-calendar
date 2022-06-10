import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { SITE_BASE_PATH } from './src/constants';

export default defineConfig(({ command, mode }) => {
    const isDev = mode === 'development';
    return {
        plugins: [
            vue(),
            AutoImport({
                // Auto import functions from Vue, e.g. ref, reactive, toRef...
                // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
                imports: ['vue'],

                resolvers: [
                    // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
                    // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                    ElementPlusResolver(),
                    // Auto import icon components
                    // for::https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58
                    // 自动导入图标组件
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                dts: './src/types/auto-imports.d.ts',
            }),
            Components({
                resolvers: [
                    // Auto register icon components
                    // 自动注册图标组件
                    IconsResolver({
                        enabledCollections: ['ep'],
                    }),
                    // Auto register Element Plus components
                    // 自动导入 Element Plus 组件
                    ElementPlusResolver(),
                ],
                dts: './src/types/components.d.ts',
            }),
            Icons({
                autoInstall: true,
            }),
        ],
        base: SITE_BASE_PATH,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        server: {
            port: 8080, //启动端口
            hmr: {
                host: '127.0.0.1',
                port: 8080,
            },
            // 设置 https 代理
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:6806',
                    changeOrigin: true,
                    // rewrite: (path: string) => path.replace(/^\/api/, '')
                },
            },
        },
        build: {
            outDir: 'E:/_SiYuan_Workspace/data/widgets/siyuan-calendar',
            sourcemap: true,
            // assetsDir: 'static',
        },
    };
});
