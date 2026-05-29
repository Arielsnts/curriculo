import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    'pdf-parse',
    '@napi-rs/canvas',
    '@napi-rs/canvas-linux-x64-gnu',
  ],
}

export default nextConfig;
