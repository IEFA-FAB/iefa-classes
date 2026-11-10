import { createFileRoute, notFound } from "@tanstack/react-router"
import { docsLlms, source } from "@/lib/source"

export const Route = createFileRoute("/llms.mdx/docs/$")({
	server: {
		handlers: {
			GET: async ({ params }) => {
				const slugs = params._splat?.split("/") ?? []
				slugs.pop()
				const page = source.getPage(slugs)
				if (!page) throw notFound()

				return new Response(await docsLlms.page(page), {
					headers: { "Content-Type": "text/markdown" },
				})
			},
		},
	},
})
