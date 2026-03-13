/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: false,    // generates /about/index.html instead of /about.html
    assetPrefix: '/',          // ← use '/' or an absolute URL (e.g. 'https://cdn.example.com')
    images: {
        unoptimized: true,    // required for static export
    },
};

export default nextConfig;
