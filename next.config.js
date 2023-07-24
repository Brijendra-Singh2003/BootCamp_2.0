/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['lh3.googleusercontent.com', "firebasestorage.googleapis.com"], // Add more domains if needed, separated by commas
    },
}

module.exports = nextConfig
