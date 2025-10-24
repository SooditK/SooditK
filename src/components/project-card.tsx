import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
	title: string;
	href?: string;
	description: string;
	dates: string;
	tags: readonly string[];
	link?: string;
	image?: string;
	video?: string;
	links?: readonly {
		icon: React.ReactNode;
		type: string;
		href: string;
	}[];
	className?: string;
};

export function ProjectCard({
	title,
	href,
	description,
	dates,
	tags,
	link,
	image,
	video,
	links,
	className,
}: Props) {
	return (
		<Card
			className={
				"flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg"
			}
		>
			<Link className={cn("block cursor-pointer", className)} to={href || "#"}>
				{video && (
					<video
						autoPlay
						className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
						loop
						muted
						playsInline
						src={video} // needed because random black line at bottom of video
					/>
				)}
				{image && (
					<Image
						alt={title}
						className="h-40 w-full overflow-hidden object-cover object-top"
						height={1000}
						src={image}
						width={1000}
					/>
				)}
			</Link>
			<CardHeader className="px-2">
				<div className="space-y-1">
					<CardTitle className="mt-1 text-base">{title}</CardTitle>
					<time className="font-sans text-xs">{dates}</time>
					<div className="hidden font-sans text-xs underline print:visible">
						{link?.replace("https://", "").replace("www.", "").replace("/", "")}
					</div>
					<div className="prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-xs">
						<Markdown>{description}</Markdown>
					</div>
				</div>
			</CardHeader>
			<CardContent className="mt-auto flex flex-col px-2">
				{tags && tags.length > 0 && (
					<div className="mt-2 flex flex-wrap gap-1">
						{tags?.map((tag) => (
							<Badge
								className="px-1 py-0 text-[10px]"
								key={tag}
								variant="secondary"
							>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="px-2 pb-2">
				{links && links.length > 0 && (
					<div className="flex flex-row flex-wrap items-start gap-1">
						{links?.map((l) => (
							<a href={l.href} key={l.href} rel="noreferrer" target="_blank">
								<Badge className="flex gap-2 px-2 py-1 text-[10px]">
									{l.icon}
									{l.type}
								</Badge>
							</a>
						))}
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
