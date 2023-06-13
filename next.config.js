/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/authentication/register",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
