// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// module.exports = {
//   images: {
//     domains: ["flowbite.s3.amazonaws.com", 'andridev.andrianto25.repl.co'],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Tambahkan konfigurasi untuk modul-modul yang perlu di-transpile di sisi klien
      config.resolve.fallback = {
        fs: false, // Hilangkan dukungan fs di sisi klien
        net: false, // Hilangkan dukungan net di sisi klien
      };
    }
    return config;
  },
};
module.exports = {
  ...nextConfig,
  images: {
    domains: ["flowbite.s3.amazonaws.com", "andridev.andrianto25.repl.co"],
  },
};
