import { useEffect, useRef, useState } from "react";

let initialized = false;
let counter = 0;

async function getMermaid() {
	const { default: mermaid } = await import("mermaid");
	if (!initialized) {
		initialized = true;
		mermaid.initialize({
			startOnLoad: false,
			theme: "dark",
			darkMode: true,
			fontFamily: "var(--font-geist-sans, sans-serif)",
			gantt: { fontSize: 11 },
		});
	}
	return mermaid;
}

interface MermaidProps {
	chart: string;
}

/**
 * Renderiza diagramas Mermaid client-side.
 * Usa DOMParser para montar o SVG sem manipular innerHTML diretamente.
 * Importa mermaid via dynamic import para não incluir no bundle SSR.
 */
export function Mermaid({ chart }: MermaidProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const id = `mermaid-${counter++}`;

		getMermaid()
			.then((mermaid) => mermaid.render(id, chart))
			.then((result) => {
				const el = containerRef.current;
				if (!el) return;
				// Parse SVG string via DOMParser e adiciona ao DOM via appendChild
				const parser = new DOMParser();
				const doc = parser.parseFromString(result.svg, "image/svg+xml");
				const svgEl = doc.documentElement;
				while (el.firstChild) el.removeChild(el.firstChild);
				el.appendChild(el.ownerDocument.adoptNode(svgEl));
			})
			.catch((err) => setError(String(err)));
	}, [chart]);

	if (error) {
		return (
			<pre className="overflow-x-auto rounded border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
				Mermaid error: {error}
			</pre>
		);
	}

	return (
		<div
			ref={containerRef}
			className="mermaid my-8 overflow-x-auto rounded-lg pb-4"
			aria-label="Diagrama Mermaid"
		/>
	);
}
