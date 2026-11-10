import { Step, Steps } from "fumadocs-ui/components/steps"
import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { Badge } from "@/components/badge"
import { FigmaDeck, YouTube } from "@/components/embed"
import { Mermaid } from "@/components/mermaid"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		// Componentes customizados disponíveis em todos os MDX sem import explícito
		Badge,
		FigmaDeck,
		YouTube,
		Mermaid,
		Steps,
		Step,
		...components,
	} satisfies MDXComponents
}

declare global {
	type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
