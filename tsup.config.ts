import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	external: ['cloudflare:workers'],
});
