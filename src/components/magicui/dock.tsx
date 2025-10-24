"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
	type MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import React, { type PropsWithChildren, useRef } from "react";
import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
	className?: string;
	magnification?: number;
	distance?: number;
	children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
	"mx-auto w-max h-full p-2 flex items-end rounded-full border",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
	(
		{
			className,
			children,
			magnification = DEFAULT_MAGNIFICATION,
			distance = DEFAULT_DISTANCE,
			...props
		},
		ref,
	) => {
		const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

		const renderChildren = () => {
			return React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						mouseX,
						magnification,
						distance,
					} as DockIconProps);
				}
				return child;
			});
		};

		return (
			<motion.div
				ref={ref}
				onMouseMove={(e) => mouseX.set(e.pageX)}
				onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
				{...props}
				className={cn(dockVariants({ className }))}
			>
				{renderChildren()}
			</motion.div>
		);
	},
);

Dock.displayName = "Dock";

export interface DockIconProps {
	size?: number;
	magnification?: number;
	distance?: number;
	mouseX?: MotionValue<number>;
	className?: string;
	children?: React.ReactNode;
	props?: PropsWithChildren;
}

const DockIcon = ({
	size,
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	mouseX,
	className,
	children,
	...props
}: DockIconProps) => {
	const ref = useRef<HTMLDivElement>(null);
	mouseX = useMotionValue(Number.POSITIVE_INFINITY);

	const distanceCalc = useTransform(mouseX, (val: number) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[40, magnification, 40],
	);

	const width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width }}
			className={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-full",
				className,
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
