/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si tu sitio está en un subdirectorio, descomenta y configura:
  // basePath: '/ruta-de-tu-sitio',
  // assetPrefix: '/ruta-de-tu-sitio',
}

module.exports = nextConfig
