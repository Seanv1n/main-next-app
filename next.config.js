/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/PokeAPI/sprites/master/sprites/pokemon/**'
            }
        ]
    }
}

module.exports = nextConfig
