import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
	name: "Soodit Kumar",
	initials: "SK",
	url: "https://sooditk.dev",
	location: "New Delhi, IN",
	locationLink: "https://www.google.com/maps/place/delhi",
	description: "I use NeoVim and Arch btw",
	summary:
		"Polyglot Software Engineer with a passion for building scalable and efficient systems. I write about software engineering and AI",
	imageUrl: "https://i.ibb.co/yFN6wC9c/image.png",
	avatarUrl: "https://i.ibb.co/xfcV5hv/image.png",
	skills: [
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Python",
		"Go",
		"Postgres",
		"Docker",
		"Kubernetes",
		"Langchain",
		"OpenAI",
		"Drizzle",
		"TailwindCSS",
		"Shadcn UI",
		"Stripe",
		"Prisma",
		"C++",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
		{ href: "#", icon: CodeIcon, label: "Projects" },
		{ href: "#", icon: PencilLine, label: "Notes" },
	],
	contact: {
		email: "sooditkumar@duck.com",
		tel: "+91 9211420420",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/SooditK",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/soodit-kumar-864a0a1b0",
				icon: Icons.linkedin,
				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/SooditK",
				icon: Icons.x,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "mailto:sooditkumar@duck.com",
				icon: Icons.email,
				navbar: false,
			},
		},
	},
	work: [
		{
			company: "Genloop",
			href: "https://genloop.ai",
			badges: [],
			location: "Hybrid",
			title: "Senior Software Engineer",
			logoUrl: "https://i.ibb.co/Mxkq6sQY/image.png",
			start: "Sept 2025",
			end: "Present",
			description:
				"Built the Genloop platform from the ground up. Allowing users to connect their BI tools and ask questions about their data in natural language. I handled the Frontend, Backend, and the Infrastructure.",
			technologies: [
				"Next.js",
				"Typescript",
				"React",
				"TailwindCSS",
				"Shadcn UI",
				"OpenAI",
				"AWS",
				"GCP",
				"Azure",
				"Postgres",
				"MongoDB",
				"Redis",
			],
		},
		{
			company: "Oren",
			href: "https://orennow.com",
			badges: [],
			location: "Remote",
			title: "Executive Product Engineer",
			logoUrl: "https://i.ibb.co/9sSYM3v/image.png",
			start: "Oct 2022",
			end: "Sept 2025",
			description:
				"Built and scaled the Oren platform from 0 to 1. Oren is a platform that allows companies to easily create and manage their BRSR Reports. I was responsible for the entire tech stack, from the frontend to the backend, and even the infrastructure.",
		},
		{
			company: "Plypicker",
			badges: [],
			href: "https://plypicker.com/",
			location: "Remote",
			title: "Software Engineer Intern",
			logoUrl: "https://i.ibb.co/qkwbt9d/image.png",
			start: "June 2022",
			end: "Sept 2022",
			description:
				"Developed the entire MVP of the Plypicker Website using Next.js, Typescript, and TailwindCSS. I also developed the backend using Node.js and Postgres.",
		},
		{
			company: "MathonGO",
			href: "https://www.mathongo.com/",
			badges: [],
			location: "Remote",
			title: "Backend Engineer Intern",
			logoUrl: "https://i.ibb.co/D86SGjg/image.png",
			start: "June 2022",
			end: "Aug 2022",
			description:
				"Developed the backend for their Quiz Platform using Node.js and MongoDB, Impletented Redis for caching and Msg91 for OTP verification.",
		},
		{
			company: "Devsnest",
			href: "https://www.devsnest.in/",
			badges: [],
			location: "Remote",
			title: "Software Engineer Intern",
			logoUrl: "https://i.ibb.co/znLLgBN/image.png",
			start: "Nov 2021",
			end: "May 2022",
			description:
				"Architected the frontend of an ed-tech platform and lead the migration to Next.js and TypeScript, which lead to initial load times going from 5s to 1.5s, improved SEO and faster deployments to production and preview environments. Architected Backend for the Frontend Code Editor. Integrated AWS S3, for the Direct Storage for User Submission using multer",
		},
		{
			company: "Trepare",
			href: "https://www.linkedin.com/company/trepare/",
			badges: [],
			location: "Remote",
			title: "Software Engineer Intern",
			logoUrl: "https://i.ibb.co/4dtWhZ3/image.png",
			start: "Sept 2021",
			end: "Jan 2022",
			description:
				"Developed their entire MVP using Next.js, Typescript, and TailwindCSS. I also developed the backend using Node.js and Postgres.",
		},
	],
	education: [
		{
			school: "Guru Gobind Singh Indraprastha University",
			href: "https://www.ipu.ac.in/",
			degree: "Bachelor of Technology in Computer Science",
			logoUrl:
				"https://www.pikpng.com/pngl/b/539-5390936_guru-gobind-singh-indraprastha-university-guru-gobind-singh.png",
			start: "2019",
			end: "2023",
		},
	],
	projects: [
		{
			title: "Benchmarking",
			href: "https://benchmarking-v2.vercel.app/",
			dates: "Jan 2024 - Feb 2024",
			active: true,
			description:
				"A platform that has all the information of top 1000 companies in India regarding their Policies, CSR, and more. This project was built using Next.js, Typescript, and TailwindCSS.",
			technologies: [
				"OpenAI",
				"Langchain",
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Drizzle",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://benchmarking-v2.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image:
				"https://i.ibb.co/3y19Nxj/Screenshot-2024-07-13-at-19-42-27-Benchmarking.png",
			video: "",
		},
		{
			title: "SQeeeL",
			href: "https://sqeeel.vercel.app/",
			dates: "June 2023 - Present",
			active: true,
			description:
				"A platform that has SQL questions and answers for students to practice.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://sqeeel.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image:
				"https://i.ibb.co/PjZNKRk/Screenshot-2024-07-13-at-19-47-25-SQeee-L.png",
			video: "",
		},
		{
			title: "Genre of Design",
			href: "https://god-v2.pages.dev/",
			dates: "Feb 2024 - May 2024",
			active: true,
			description: "A showcase of all the Projects of Genre of Design",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Drizzle",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://god-v2.pages.dev/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image:
				"https://i.ibb.co/HTywv2G/Screenshot-2024-07-13-at-19-55-06-Genre-of-Design.png",
			video: "",
		},
		{
			title: "NoteHub",
			href: "https://notehub-updated.vercel.app/",
			dates: "April 2022 - September 2022",
			active: true,
			description:
				"Developed an Notes Sharing Platform for students to share their notes and study materials.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
			],
			links: [
				{
					type: "Website",
					href: "https://notehub-updated.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/SooditK/notehub-updated",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "https://i.ibb.co/k2JmrK5/image.png",
			video: "",
		},
	],
	hackathons: [
		{
			title: "Dr Reddy's Digital Health Hackathon 2.0",
			dates: "January 13th - 15th, 2023",
			location: "Hyderabad, India",
			description:
				"Developed an AI Chatbot which helps patients with their medical queries and also helps them book appointments with doctors.",
			image:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbaselarea.swiss%2Fwp-content%2Fuploads%2F2020%2F06%2Fdr-reddys-logo.jpg&f=1&nofb=1&ipt=71e6506042d3f25538547a65c4729a4e74f6b24753499718a2c4b7152b5e58b4&ipo=images",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [
				{
					href: "https://www.linkedin.com/posts/soodit-kumar-864a0a1b0_hackathon-digitalhealth-teamwork-activity-7025133846278848512-Saw1?utm_source=share&utm_medium=member_desktop",
					title: "LinkedIn",
					icon: <Icons.linkedin className="h-4 w-4" />,
				},
			],
		},
		{
			title: "YPStem Hackathon 2022",
			dates: "Feb 14th - Mar 14th, 2022",
			location: "Remote",
			description:
				"Virtual Healthcare Platform for people to consult doctors and get prescriptions online.",
			image: "https://i.ibb.co/WgBzTNZ/image.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [
				{
					href: "https://devpost.com/software/medidesk",
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
				},
			],
		},
		{
			title: "Hackmerced VII",
			dates: "Mar 4 - 6, 2022",
			location: "Remote",
			description:
				"Virtual Healthcare Platform for people to consult doctors and get prescriptions online.",
			image:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd112y698adiu2z.cloudfront.net%2Fphotos%2Fproduction%2Fchallenge_thumbnails%2F001%2F826%2F721%2Fdatas%2Foriginal.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [
				{
					href: "https://devpost.com/software/medidesk",
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
				},
			],
		},
		{
			title: "A Hack A Day",
			dates: "Mar 4 - 6, 2022",
			location: "Remote",
			description:
				"Virtual Healthcare Platform for people to consult doctors and get prescriptions online.",
			image: "https://i.ibb.co/W5VGYh4/image.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [
				{
					href: "https://devpost.com/software/medidesk",
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
				},
			],
		},
		{
			title: "Don't Go Hacking My Heart",
			dates: "Feb 11 - 13, 2022",
			location: "Remote",
			description:
				"Developed a web application allowing users to select trees and plant them in real life. The app uses the OpenTreeMap API to get tree locations and allows users to plant trees in real life.",
			image:
				"https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/820/137/datas/medium.png",
			win: "",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/one-more-tree",
				},
				{
					title: "Server",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ST1LLWATER/onemoretree",
				},
			],
		},
	],
} as const;
