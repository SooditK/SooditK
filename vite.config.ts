import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

const config = defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup")
  return {
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    mdx.default({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrettyCode],
      jsx: true,
    }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: [
          'babel-plugin-react-compiler',
        ],
      },
    }),
  ],
  }
})

export default config
