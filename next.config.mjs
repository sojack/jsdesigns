/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 75, 85, 100], // include 60 since something in your app requests it
  },
};

export default nextConfig;
