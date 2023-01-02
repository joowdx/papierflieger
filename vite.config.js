import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from 'fs'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        svelte(),
    ],
    optimizeDeps: {
        include: [
            '@inertiajs/inertia',
            '@inertiajs/inertia-svelte',
        ]
    },
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
});
