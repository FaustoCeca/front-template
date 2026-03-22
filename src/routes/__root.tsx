import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<nav className="flex items-center gap-6 border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
				<span className="text-lg font-bold">Front Template</span>
				<Link
					to="/"
					className="text-gray-600 hover:text-gray-900 [&.active]:font-semibold [&.active]:text-blue-600"
				>
					Home
				</Link>
				<Link
					to="/about"
					className="text-gray-600 hover:text-gray-900 [&.active]:font-semibold [&.active]:text-blue-600"
				>
					About
				</Link>
			</nav>
			<main className="mx-auto max-w-4xl p-6">
				<Outlet />
			</main>
		</div>
	);
}
