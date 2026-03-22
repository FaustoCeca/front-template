import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: AboutPage,
});

function AboutPage() {
	return (
		<div className="space-y-4">
			<h1 className="text-3xl font-bold">About</h1>
			<p className="text-gray-600">
				A minimal React template powered by Bun, Vite, and the TanStack ecosystem.
			</p>
			<ul className="list-inside list-disc space-y-1 text-gray-700">
				<li>React 19 + TypeScript</li>
				<li>TanStack Router for type-safe routing</li>
				<li>TanStack Query for data fetching</li>
				<li>Tailwind CSS v4 for styling</li>
				<li>Biome for linting and formatting</li>
				<li>Bun as runtime and package manager</li>
			</ul>
		</div>
	);
}
