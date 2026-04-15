import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<HomeLayout {...baseOptions()}>
			{/* Hero */}
			<section className="flex flex-col items-center text-center px-4 py-20 md:py-32">
				<img
					src="/favicon.svg"
					alt="IEFA"
					width={80}
					height={80}
					className="mb-8 opacity-90"
				/>
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-fd-foreground">
					IEFA — CPAINT
				</h1>
				<p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mb-10 leading-relaxed">
					Estruturando o conhecimento para a excelência operacional na Força
					Aérea Brasileira.
				</p>
				<div className="flex gap-4 flex-wrap justify-center">
					<Link
						to="/docs/$"
						params={{ _splat: "cpaint" }}
						className="px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-semibold hover:opacity-90 transition-opacity"
					>
						Explorar Matérias →
					</Link>
					<Link
						to="/docs/$"
						params={{ _splat: "cpaint/ppc" }}
						className="px-6 py-3 rounded-lg border border-fd-border font-semibold text-fd-foreground hover:bg-fd-muted transition-colors"
					>
						Ver Documentação
					</Link>
				</div>
			</section>

			{/* Cards */}
			<section className="max-w-5xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
				<Link
					to="/docs/$"
					params={{ _splat: "cpaint" }}
					className="group block rounded-xl border border-fd-border bg-fd-card p-6 hover:bg-fd-accent/10 transition-colors"
				>
					<h3 className="font-semibold text-fd-foreground mb-2">
						Comece pelo CPAINT
					</h3>
					<p className="text-sm text-fd-muted-foreground leading-relaxed">
						Explore a estrutura do{" "}
						<strong>
							Curso Prático para Aspirantes a Oficial Intendentes (CPAINT)
						</strong>{" "}
						e entenda como as matérias estão organizadas.
					</p>
				</Link>

				<Link
					to="/docs/$"
					params={{ _splat: "cpaint/previsao-demanda" }}
					className="group block rounded-xl border border-fd-border bg-fd-card p-6 hover:bg-fd-accent/10 transition-colors"
				>
					<h3 className="font-semibold text-fd-foreground mb-2">
						Trilha de Previsão de Demanda
					</h3>
					<p className="text-sm text-fd-muted-foreground leading-relaxed">
						Mergulhe na especialização em <strong>Previsão de Demanda</strong>,
						o carro-chefe do curso, com 7 matérias em 3 níveis.
					</p>
				</Link>

				<div className="rounded-xl border border-fd-border bg-fd-card p-6">
					<h3 className="font-semibold text-fd-foreground mb-2">
						Foco Prático
					</h3>
					<p className="text-sm text-fd-muted-foreground leading-relaxed">
						O curso prioriza <strong>habilidades reais e aplicáveis</strong> no
						dia a dia da intendência, com estudos de caso da FAB e exercícios
						práticos.
					</p>
				</div>

				<div className="rounded-xl border border-fd-border bg-fd-card p-6">
					<h3 className="font-semibold text-fd-foreground mb-2">
						Base Estatística
					</h3>
					<p className="text-sm text-fd-muted-foreground leading-relaxed">
						Estatística como <strong>fundamento</strong>, métodos de previsão
						como <strong>núcleo</strong>, ferramentas como{" "}
						<strong>aplicação</strong>.
					</p>
				</div>
			</section>

			{/* Links rápidos */}
			<section className="max-w-5xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Link
					to="/docs/$"
					params={{ _splat: "cpaint/ppc" }}
					className="block rounded-lg border border-fd-border bg-fd-card p-5 hover:bg-fd-accent/10 transition-colors"
				>
					<h4 className="font-medium text-fd-foreground mb-1">
						Projeto Pedagógico de Curso (PPC)
					</h4>
					<p className="text-xs text-fd-muted-foreground">
						Consulte a ICA 38-758 que rege o funcionamento do CPAINT.
					</p>
				</Link>

				<Link
					to="/docs/$"
					params={{ _splat: "cpaint/sistema-de-codigos" }}
					className="block rounded-lg border border-fd-border bg-fd-card p-5 hover:bg-fd-accent/10 transition-colors"
				>
					<h4 className="font-medium text-fd-foreground mb-1">
						Sistema de Códigos
					</h4>
					<p className="text-xs text-fd-muted-foreground">
						Entenda como as matérias são codificadas seguindo a metodologia
						americana.
					</p>
				</Link>
			</section>
		</HomeLayout>
	);
}
