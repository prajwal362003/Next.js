/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export", // Exports static html for the next app
  images: {
    domains: ["images.assettype.com"],
  },

  redirects: async () => {
    return [
      {
        // So,whenever redirect route is hir, it redirects to the home page
        source: "/redirect",
        destination: "/",
        permanent: false,
      },

      // this is for dynamic redirection
      {
        source: "/redirect/:id",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
