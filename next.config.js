/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx'],
    async redirects() {
        return [
            {
                source: '/',
                destination: '/elemental-reaction-tool',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
