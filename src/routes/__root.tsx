import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { seo } from "@/lib/seo";
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
				title: "Soodit Kumar - Portfolio",
			},
			...seo({
				title: "Portfolio",
				description:
					"Polyglot Software Engineer with a passion for building scalable and efficient systems. I write about software engineering and AI.",
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "canonical",
				href: "https://sooditk.dev",
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f921.svg",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f921.png",
			},
			{
				rel: "manifest",
				href: "/manifest.json",
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
