/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    return [{ source: '/api/:path*', destination: `${api}/:path*` }];
  }
};
export default nextConfig;
