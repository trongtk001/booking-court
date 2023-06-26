/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/browser-court',
        permanent: false,
      },
    ];
  },
  env: {
    API_URL: 'http://localhost:5108',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'secret',
    API_PREFIX: '/api',
  },
};

module.exports = nextConfig;
