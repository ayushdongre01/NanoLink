import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Cuts peak RAM during webpack dev compile on low-memory hosts (VMs, laptops). */
  webpack: (config, { dev }) => {
    if (dev) {
      config.parallelism = 4;
    }
    return config;
  },
};

export default nextConfig;
