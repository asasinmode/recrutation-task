import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
	plugins: [
		vue(),
		UnoCSS(),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
			],
			dts: './src/types/auto-imports.d.ts',
			vueTemplate: true,
		}),
		Components({ dts: './src/types/components.d.ts' }),
	],
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
