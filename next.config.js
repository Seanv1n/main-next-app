/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            path: false
        };

        return config;
    },
    distDir: 'dist',
    images: {
        unoptimized: true,
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
