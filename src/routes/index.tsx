import { createFileRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const BLUR_FADE_DELAY = 0.04;
	return (
		<main className="flex min-h-dvh flex-col space-y-10 w-full max-w-2xl mx-auto">
			<section id="hero">
				<div className="mx-auto w-full space-y-8">
					<div className="flex justify-between gap-2">
						<div className="flex flex-1 flex-col space-y-1.5">
							<BlurFadeText
								className="font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none"
								delay={BLUR_FADE_DELAY}
								text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
								yOffset={8}
							/>
							<BlurFadeText
								className="max-w-[600px] md:text-xl"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="size-28 border">
								<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
								<AvatarFallback>{DATA.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>
			</section>
			<section id="about">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<h2 className="font-bold text-xl">About</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<div className="prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-sm">
						<Markdown>{DATA.summary}</Markdown>
					</div>
				</BlurFade>
			</section>
			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="font-bold text-xl">Work Experience</h2>
					</BlurFade>
					{DATA.work.map((work, id) => (
						<BlurFade
							className="cursor-pointer"
							delay={BLUR_FADE_DELAY * 6 + id * 0.05}
							key={work.company}
						>
							<ResumeCard
								altText={work.company}
								badges={work.badges}
								description={work.description}
								href={work.href}
								key={work.company}
								logoUrl={work.logoUrl}
								period={`${work.start} - ${work.end ?? "Present"}`}
								subtitle={work.title}
								title={work.company}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="education">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="font-bold text-xl">Education</h2>
					</BlurFade>
					{DATA.education.map((education, id) => (
						<BlurFade
							delay={BLUR_FADE_DELAY * 8 + id * 0.05}
							key={education.school}
						>
							<ResumeCard
								altText={education.school}
								href={education.href}
								key={education.school}
								logoUrl={education.logoUrl}
								period={`${education.start} - ${education.end}`}
								subtitle={education.degree}
								title={education.school}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="skills">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="font-bold text-xl">Skills</h2>
					</BlurFade>
					<div className="flex flex-wrap gap-1">
						{DATA.skills.map((skill, id) => (
							<BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.05} key={skill}>
								<Badge key={skill}>{skill}</Badge>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="projects">
				<div className="w-full space-y-12 py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
									My Projects
								</div>
								<h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
									Check out my latest work
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									I&apos;ve worked on a variety of projects, from simple
									websites to complex web applications. Here are a few of my
									favorites.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
						{DATA.projects.map((project, id) => (
							<BlurFade
								delay={BLUR_FADE_DELAY * 12 + id * 0.05}
								key={project.title}
							>
								<ProjectCard
									dates={project.dates}
									description={project.description}
									href={project.href}
									image={project.image}
									key={project.title}
									links={project.links}
									tags={project.technologies}
									title={project.title}
									video={project.video}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="hackathons">
				<div className="w-full space-y-12 py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 13}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
									Hackathons
								</div>
								<h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
									I like building things
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									During my time in university, I attended a lot of hackathons.
									It was eye-opening to see the endless possibilities brought to
									life by a group of motivated and passionate individuals.
								</p>
							</div>
						</div>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 14}>
						<ul className="mb-4 ml-4 divide-y divide-dashed border-l">
							{DATA.hackathons.map((project, id) => (
								<BlurFade
									delay={BLUR_FADE_DELAY * 15 + id * 0.05}
									key={project.title + project.dates}
								>
									<HackathonCard
										dates={project.dates}
										description={project.description}
										image={project.image}
										links={project.links}
										location={project.location}
										title={project.title}
									/>
								</BlurFade>
							))}
						</ul>
					</BlurFade>
				</div>
			</section>
			<section id="contact">
				<div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className="space-y-3">
							<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
								Contact
							</div>
							<h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
								Get in Touch
							</h2>
							<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Want to chat? Just shoot me a dm{" "}
								<Link
									className="text-blue-500 hover:underline"
									to={DATA.contact.social.X.url.toString()}
								>
									with a direct question on twitter
								</Link>{" "}
								and I&apos;ll respond whenever I can. I will ignore all
								soliciting.
							</p>
						</div>
					</BlurFade>
				</div>
			</section>
		</main>
	);
}
