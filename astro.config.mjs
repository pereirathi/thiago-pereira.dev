import { defineConfig } from "astro/config";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "http://thiago-pereira.dev/",
  integrations: [partytown()],
});
