import { docs } from "collections/server"
import { type InferPageType, llms, loader } from "fumadocs-core/source"
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons"
import { docsContentRoute, docsRoute } from "./shared"

export const source = loader({
	source: docs.toFumadocsSource(),
	baseUrl: docsRoute,
	plugins: [lucideIconsPlugin()],
})

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
	const segments = [...page.slugs, "content.md"]
	return {
		segments,
		url: `${docsContentRoute}/${segments.join("/")}`,
	}
}

export const docsLlms = llms(source, {
	async renderPage(page) {
		const processed = await page.data.getText("processed")
		return `# ${page.data.title} (${page.url})\n\n${processed}`
	},
})
