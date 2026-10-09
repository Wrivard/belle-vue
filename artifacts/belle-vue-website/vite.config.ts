import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { readFile } from "node:fs/promises";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { renderSeoHead, renderRobots, renderSitemap, normalizePath, PUBLIC_ROUTES } from "./src/lib/seo";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

export default defineConfig({
  base: basePath,
  plugins: [
    {
      name: "belle-vue-seo",
      transformIndexHtml: {
        order: "pre",
        handler(html, context) {
          const route = (context.originalUrl ?? context.path).split("?")[0];
          return html.replace("<!-- SEO_HEAD -->", renderSeoHead(route === "/index.html" ? "/" : route));
        },
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const pathname = req.url?.split("?")[0];
          if (pathname !== "/robots.txt" && pathname !== "/sitemap.xml") return next();
          res.setHeader("Content-Type", pathname === "/robots.txt" ? "text/plain; charset=utf-8" : "application/xml; charset=utf-8");
          res.end(pathname === "/robots.txt" ? renderRobots() : renderSitemap());
        });
      },
      // Vite's SPA preview fallback does not apply artifact production rewrites.
      // Serve the same pre-rendered documents when verifying the production build.
      configurePreviewServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.method !== "GET" && req.method !== "HEAD") return next();
          const route = normalizePath(req.url ?? "/");
          const known = (PUBLIC_ROUTES as readonly string[]).includes(route);
          if (!known && path.extname(route) && route !== "/404.html") return next();
          if (route.startsWith("/assets/") || route.startsWith("/images/")) return next();
          const file = known
            ? route === "/" ? "index.html" : `${route.slice(1)}/index.html`
            : "404.html";
          try {
            const html = await readFile(path.resolve(import.meta.dirname, "dist/public", file), "utf8");
            res.statusCode = known ? 200 : 404;
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(req.method === "HEAD" ? undefined : html);
          } catch (error) {
            next(error);
          }
        });
      },
    },
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
