import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { swcReactRefresh } from 'vite-plugin-swc-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [swcReactRefresh()],
    esbuild: {
        jsx: 'automatic'
    },
    build: {
        outDir: '../qiankun',
        rollupOptions: {
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`
            }
        }
    },
    server: {
        proxy: {
            '/miku-plugin': {
                target: 'http://localhost:8000/miku-plugin/',
                changeOrigin: true
            }
        }
    }
});
