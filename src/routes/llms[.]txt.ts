import { createFileRoute } from "@tanstack/react-router"
import { docsLlms } from "@/lib/source"

export const Route = createFileRoute("/llms.txt")({
	server: {
		handlers: {
			async GET() {
				return new Response(await docsLlms.index())
			},
		},
	},
})
