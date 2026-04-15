import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type BadgeVariant = "note" | "tip" | "success" | "caution" | "danger";

interface BadgeProps {
	children: ReactNode;
	/** Compatível com variantes do Starlight */
	variant?: BadgeVariant;
	className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
	note: "bg-blue-500/15 text-blue-500 border-blue-500/30",
	tip: "bg-green-500/15 text-green-600 border-green-500/30",
	success: "bg-green-500/15 text-green-600 border-green-500/30",
	caution: "bg-amber-500/15 text-amber-600 border-amber-500/30",
	danger: "bg-red-500/15 text-red-500 border-red-500/30",
};

export function Badge({ children, variant = "note", className }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
				variantClasses[variant],
				className,
			)}
		>
			{children}
		</span>
	);
}
