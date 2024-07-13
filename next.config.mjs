/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
