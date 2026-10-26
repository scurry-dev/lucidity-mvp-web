import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://www.lucidityanalytics.com";

// GitHub Pages only knows the files in dist/, so a client-side route like
// /claude would otherwise be served by 404.html with a real 404 status and
// never get indexed. Give each public route its own copy of index.html (with
// its own canonical URL) so Pages serves it with a 200. The file name decides
// the URL Pages answers on without a redirect: claude.html serves /claude,
// privacy-policy/index.html serves /privacy-policy/ (the URL we link to).
const STATIC_ROUTES = [
  { file: "claude.html", url: "/claude" },
  { file: "privacy-policy/index.html", url: "/privacy-policy/" },
];

const staticRoutes = () => ({
  name: "static-routes",
  apply: "build" as const,
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    const html = fs.readFileSync(path.join(dist, "index.html"), "utf8");
    for (const route of STATIC_ROUTES) {
      const out = path.join(dist, route.file);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(
        out,
        html.replace(`<link rel="canonical" href="${SITE_URL}/" />`, `<link rel="canonical" href="${SITE_URL}${route.url}" />`),
      );
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), staticRoutes(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
}));
