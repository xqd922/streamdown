import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  redirects: async () => {
    return [
      {
        source: "/docs/cjk-support",
        destination: "/docs/plugins/cjk",
        permanent: true,
      },
      {
        source: "/docs/mermaid",
        destination: "/docs/plugins/mermaid",
        permanent: true,
      },
      {
        source: "/docs/mathematics",
        destination: "/docs/plugins/math",
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
