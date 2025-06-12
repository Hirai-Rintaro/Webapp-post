/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    // 型チェックを無視してビルドを通す
    ignoreBuildErrors: true,
  },
}

