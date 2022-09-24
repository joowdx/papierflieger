import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import fs from 'fs'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        // https: {
        //     key: fs.readFileSync('./docker/private/localhost.key'),
        //     cert: fs.readFileSync('./docker/private/localhost.crt'),
        // },
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
        }
    },
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
});
