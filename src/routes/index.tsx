import { useQuery } from "@tanstack/react-query";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomePage,
});

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

function HomePage() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["todos"],
		queryFn: async (): Promise<Todo[]> => {
			const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
			if (!res.ok) throw new Error("Failed to fetch todos");
			return res.json();
		},
	});

	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold">Home</h1>
			<p className="text-gray-600">
				This template uses React, TanStack Router, TanStack Query, Tailwind CSS, and Biome.
			</p>

			<section className="space-y-3">
				<h2 className="text-xl font-semibold">Example: TanStack Query</h2>
				{isLoading && <p className="text-gray-500">Loading todos...</p>}
				{error && <p className="text-red-500">Error: {error.message}</p>}
				{data && (
					<ul className="space-y-2">
						{data.map((todo) => (
							<li
								key={todo.id}
								className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3"
							>
								<span
									className={`h-3 w-3 rounded-full ${todo.completed ? "bg-green-400" : "bg-gray-300"}`}
								/>
								<span className={todo.completed ? "text-gray-400 line-through" : ""}>
									{todo.title}
								</span>
							</li>
						))}
					</ul>
				)}
			</section>
		</div>
	);
}
