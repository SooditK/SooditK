"use client";

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ResumeCardProps = {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: string;
};
export const ResumeCard = ({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	badges,
	period,
	description,
}: ResumeCardProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<Link
			className="block cursor-pointer"
			to={href?.toString() || "#"}
			onClick={handleClick}
		>
			<Card className="flex gap-x-4 bg-background">
				<div className="flex-none">
					<Avatar className="m-auto size-12 rounded-full border bg-muted-background dark:bg-background">
						<AvatarImage
							alt={altText}
							className="object-contain"
							src={logoUrl}
						/>
						<AvatarFallback>{altText[0]}</AvatarFallback>
					</Avatar>
					{/* <Image
						alt={altText}
						className="size-12 object-contain rounded-full border bg-muted-background dark:bg-background"
						src={logoUrl}
						width={48}
						height={48}
					/> */}
				</div>
				<div className="group grow flex-col items-center dark:bg-background">
					<CardHeader>
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold text-xs leading-none sm:text-sm">
								{title}
								{badges && (
									<span className="inline-flex gap-x-1">
										{badges.map((badge) => (
											<Badge
												className="align-middle text-xs"
												key={badge}
												variant="secondary"
											>
												{badge}
											</Badge>
										))}
									</span>
								)}
								<ChevronRightIcon
									className={cn(
										"size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
										isExpanded ? "rotate-90" : "rotate-0",
									)}
								/>
							</h3>
							<div className="text-right text-muted-foreground text-xs tabular-nums sm:text-sm">
								{period}
							</div>
						</div>
						{subtitle && <div className="font-sans text-xs">{subtitle}</div>}
					</CardHeader>
					{description && (
						<motion.div
							animate={{
								opacity: isExpanded ? 1 : 0,

								height: isExpanded ? "auto" : 0,
							}}
							className="mt-2 text-xs sm:text-sm"
							initial={{ opacity: 0, height: 0 }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							{description}
						</motion.div>
					)}
				</div>
			</Card>
		</Link>
	);
};
