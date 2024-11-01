/** @format */

import { defineConfig } from 'tsup';

export default defineConfig({
	plugins: [],
	entry: ['src/main.ts'],
	splitting: true,
	sourcemap: true,
	dts: true,
	clean: true,
	format: ['esm', 'cjs'],
	tsconfig: 'tsconfig.json',
	treeshake: true,
	shims: true,
	keepNames: true,
	target: 'es2022',
	skipNodeModulesBundle: true,
	platform: 'node',
});
