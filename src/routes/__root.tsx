import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getThemeServerFn } from "@/lib/theme";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	loader: () => getThemeServerFn(),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const theme = Route.useLoaderData();
	return (
		<html
			lang="en"
			className={theme}
			suppressContentEditableWarning
			suppressHydrationWarning
		>
			<head>
				<HeadContent />
			</head>
			<body className="mx-auto min-h-screen bg-background py-12 font-sans antialiased sm:py-24">
				<ThemeProvider theme={theme}>
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
				</ThemeProvider>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
