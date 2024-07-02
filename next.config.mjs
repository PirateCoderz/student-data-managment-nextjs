/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        domains: ['res.cloudinary.com'],
        domains: ['ik.imagekit.io'],
    },
    env: {
        DB_URI: 'mongodb+srv://pirateCoderz:studentPirateData@cluster0.j2phyin.mongodb.net/studentData?retryWrites=true&w=majority',
        JWT_TOKEN: 'PeakTokenData33'
    }
};

export default nextConfig;

