import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	modules: ["@vueuse/nuxt", "@vueuse/motion/nuxt", "@nuxtjs/tailwindcss"],
	typescript: {
		shim: false,
	},
	experimental: {
		reactivityTransform: true,
	},
	build: {
		transpile:
			process.env.NODE_ENV === "production"
				? [
					"naive-ui",
					"vueuc",
					"@css-render/vue3-ssr",
					"@juggle/resize-observer",
				]
				: ["@juggle/resize-observer"],
	},
	vite: {
		optimizeDeps: {
			include:
				process.env.NODE_ENV === "development"
					? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
					: [],
		},
		plugins: [
			Components({
				resolvers: [NaiveUiResolver()],
			}),
		],
	},
	imports: {
		presets: [
			{
				from: "naive-ui",
				imports: [
					"useMessage",
					"useNotification",
					"useDialog",
					"useLoadingBar",
				],
			},
		],
	},
});
