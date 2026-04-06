import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const basePath = process.env.BASE_PATH ?? "/dev-portfolio";
const siteUrl =
  process.env.SITE_URL ?? "https://Nikhil5hetty.github.io/dev-portfolio";

export default defineConfig({
  site: siteUrl,
  base: basePath,
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
