import { resolve } from 'path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
	},

	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},

	plugins: [
		// https://github.com/solidjs/vite-plugin-solid
		solid(),
	],
});
