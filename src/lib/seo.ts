import { DATA } from "@/data/resume";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: readonly string[] | string[];
	image?: string;
	url?: string;
	type?: "website" | "article" | "profile";
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	section?: string;
	tags?: string[];
}

export function seo({
	title,
	description = DATA.summary,
	keywords = DATA.skills,
	image = DATA.imageUrl,
	url = DATA.url,
	type = "website",
	publishedTime,
	modifiedTime,
	author = DATA.name,
	section,
	tags,
}: SEOProps = {}) {
	const defaultTitle = `${DATA.name} - Portfolio`;
	const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

	const meta = [
		// Basic meta tags
		{
			name: "description",
			content: description,
		},
		{
			name: "keywords",
			content: [...keywords].join(", "),
		},
		{
			name: "author",
			content: author,
		},
		{
			name: "robots",
			content: "index, follow",
		},
		{
			name: "language",
			content: "English",
		},
		{
			name: "revisit-after",
			content: "7 days",
		},

		// Open Graph tags
		{
			property: "og:title",
			content: fullTitle,
		},
		{
			property: "og:description",
			content: description,
		},
		{
			property: "og:image",
			content: image,
		},
		{
			property: "og:url",
			content: url,
		},
		{
			property: "og:type",
			content: type,
		},
		{
			property: "og:site_name",
			content: defaultTitle,
		},
		{
			property: "og:locale",
			content: "en_US",
		},

		// Twitter Card tags
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:url",
			content: url,
		},
		{
			name: "twitter:title",
			content: fullTitle,
		},
		{
			name: "twitter:description",
			content: description,
		},
		{
			name: "twitter:image",
			content: image,
		},
		{
			name: "twitter:creator",
			content: `@${DATA.contact.social.X?.name || "SooditK"}`,
		},
		{
			name: "twitter:site",
			content: `@${DATA.contact.social.X?.name || "SooditK"}`,
		},

		// Additional metadata
		{
			name: "theme-color",
			content: "#000000",
		},
		{
			name: "msapplication-TileColor",
			content: "#000000",
		},
	];

	// Add article-specific meta tags if type is article
	if (type === "article") {
		if (publishedTime) {
			meta.push({
				property: "article:published_time",
				content: publishedTime,
			});
		}
		if (modifiedTime) {
			meta.push({
				property: "article:modified_time",
				content: modifiedTime,
			});
		}
		if (author) {
			meta.push({
				property: "article:author",
				content: author,
			});
		}
		if (section) {
			meta.push({
				property: "article:section",
				content: section,
			});
		}
		if (tags && tags.length > 0) {
			tags.forEach((tag) => {
				meta.push({
					property: "article:tag",
					content: tag,
				});
			});
		}
	}

	return meta;
}
