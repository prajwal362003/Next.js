/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export", // Exports static html for the next app
  images: {
    domains: ["images.assettype.com"],
  },
};

export default nextConfig;
