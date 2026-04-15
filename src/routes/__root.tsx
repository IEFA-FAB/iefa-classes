import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import * as React from "react";
import appCss from "@/styles/app.css?url";
import { RootProvider } from "fumadocs-ui/provider/tanstack";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "IEFA — CPAINT" },
			{
				name: "description",
				content:
					"Plano de Aula do Curso Prático para Aspirantes a Oficial Intendentes da Força Aérea Brasileira.",
			},
		],
		links: [
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
			{ rel: "stylesheet", href: appCss },
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<html suppressHydrationWarning lang="pt-BR">
			<head>
				<HeadContent />
			</head>
			<body className="flex flex-col min-h-screen">
				<RootProvider>
					<Outlet />
				</RootProvider>
				<Scripts />
			</body>
		</html>
	);
}
