/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurazione per sviluppo locale (senza static export)
  // Usa questo file per development se vuoi usare "next start"
  
  // output: 'export', // Commentato per development
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig