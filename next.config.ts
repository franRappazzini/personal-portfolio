import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // comentado porque uso rappazzini.dev.ar como dominio principal
  // basePath: "/personal-portfolio",
  // assetPrefix: "/personal-portfolio/",
};

export default nextConfig;
