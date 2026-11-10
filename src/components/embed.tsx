import { ExternalLink } from "lucide-react"

interface FrameProps {
	src: string
	title: string
	href: string
	linkLabel: string
}

function Frame({ src, title, href, linkLabel }: FrameProps) {
	return (
		<figure className="not-prose my-6">
			<div className="aspect-video w-full overflow-hidden rounded-xl border bg-fd-muted">
				<iframe src={src} title={title} className="size-full" allow="fullscreen; clipboard-write" allowFullScreen loading="lazy" />
			</div>
			<figcaption className="mt-2 text-right text-xs">
				<a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-fd-foreground">
					{linkLabel}
					<ExternalLink className="size-3" />
				</a>
			</figcaption>
		</figure>
	)
}

interface FigmaDeckProps {
	/** URL de compartilhamento do deck (figma.com/deck/... ou figma.com/slides/...) */
	url: string
	title?: string
}

/** Slides do Figma incorporados. O deck precisa estar com link público de visualização. */
export function FigmaDeck({ url, title = "Apresentação" }: FigmaDeckProps) {
	const src = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`
	return <Frame src={src} title={title} href={url} linkLabel="Abrir no Figma" />
}

interface YouTubeProps {
	/** ID do vídeo (o trecho após "v=" ou "youtu.be/") */
	id: string
	title?: string
}

export function YouTube({ id, title = "Vídeo" }: YouTubeProps) {
	return (
		<Frame src={`https://www.youtube-nocookie.com/embed/${id}`} title={title} href={`https://www.youtube.com/watch?v=${id}`} linkLabel="Abrir no YouTube" />
	)
}
