import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.samuraior.dev/",
  integrations: [tailwind(), react(), mdx()],
  output: "server",
  adapter: vercel()
});