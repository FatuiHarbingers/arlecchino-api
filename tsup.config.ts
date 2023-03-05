import { defineConfig } from 'tsup'

export default defineConfig( {
	clean: true,
	dts: false,
	entry: [ 'src/**/*.ts', '!src/**/*.d.ts' ],
	format: [ 'cjs', 'esm' ],
	minify: true,
	sourcemap: true,
	splitting: true,
	treeshake: true
} )
