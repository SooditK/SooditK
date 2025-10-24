import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
	const currentDate = Date.now();
	if (!dateString.includes("T")) {
		dateString = `${dateString}T00:00:00`;
	}
	const targetDate = new Date(dateString).getTime();
	const timeDifference = Math.abs(currentDate - targetDate);
	const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	const fullDate = new Date(dateString).toLocaleString("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	if (daysAgo < 1) {
		return "Today";
	}
	if (daysAgo < 7) {
		return `${fullDate} (${daysAgo}d ago)`;
	}
	if (daysAgo < 30) {
		const weeksAgo = Math.floor(daysAgo / 7);
		return `${fullDate} (${weeksAgo}w ago)`;
	}
	if (daysAgo < 365) {
		const monthsAgo = Math.floor(daysAgo / 30);
		return `${fullDate} (${monthsAgo}mo ago)`;
	}
	const yearsAgo = Math.floor(daysAgo / 365);
	return `${fullDate} (${yearsAgo}y ago)`;
}
