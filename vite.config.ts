import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [tsconfigPaths(), react()],
		define: {
			"process.env": env,
		},
		// server: {
		// 	port: 3000,
		// },
	};
});
