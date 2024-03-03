/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        domains: ['res.cloudinary.com'],
        domains: ['ik.imagekit.io'],
    },
    env: {
        DB_URI: 'PASTE_YOUR_DB_URL',
        JWT_TOKEN: 'PASTE_YOUR_TOKEN_KEY'
    }
};

export default nextConfig;

