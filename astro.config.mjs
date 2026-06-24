import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://maxdeweese.github.io",
  integrations: [icon()],
 //base: "/maxdeweese.github.io",
});