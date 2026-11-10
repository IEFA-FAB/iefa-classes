import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import { fumadocsMdx } from "fumadocs-mdx/vite"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		fumadocsMdx(),
		tailwindcss(),
		tanstackStart({
			prerender: {
				enabled: false,
			},
		}),
		react(),
		nitro({
			preset: "vercel",
		}),
	],
	resolve: {
		tsconfigPaths: true,
	},
})
