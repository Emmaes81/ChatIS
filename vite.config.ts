import cloudflare from "solid-start-cloudflare-workers";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ ssr: false, adapter: cloudflare({}) })],
});
