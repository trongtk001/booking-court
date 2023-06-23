/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },

  env: {
    NEXTAUTH_URL: 'http://localhost:3000/',
    NEXTAUTH_SECRET: 'secret',
  },
};

module.exports = nextConfig;
