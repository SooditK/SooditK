import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";

const SERVER_PORT = 3000;
// the url to access your blog during local
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog during production
const LIVE_URL = "https://yaga.cf";
// this is the astro command your bun script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    lottie(),
    sitemap(),
  ],
  output: "server",
  adapter: vercel(),
  site: BASE_URL,
  vite: {
    optimizeDeps: {
      exclude: ["globby"],
    },
  },
});
