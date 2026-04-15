import { defineConfig, defineDocs } from "fumadocs-mdx/config";

/** Remark plugin: transforma blocos ```mermaid em <Mermaid chart="..." /> */
function remarkMermaid() {
	return (tree: Record<string, unknown>) => {
		function visit(node: Record<string, unknown>) {
			if (!node.children) return;
			const children = node.children as Array<Record<string, unknown>>;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (child.type === "code" && child.lang === "mermaid") {
					children[i] = {
						type: "mdxJsxFlowElement",
						name: "Mermaid",
						attributes: [
							{
								type: "mdxJsxAttribute",
								name: "chart",
								value: child.value,
							},
						],
						children: [],
					};
				} else {
					visit(child);
				}
			}
		}
		visit(tree);
	};
}

export const docs = defineDocs({
	dir: "content/docs",
	docs: {
		postprocess: {
			includeProcessedMarkdown: true,
		},
	},
});

export default defineConfig({
	mdxOptions: {
		remarkPlugins: [remarkMermaid],
	},
});
