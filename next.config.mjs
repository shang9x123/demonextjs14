import { Domain } from 'domain';
import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    // swcMinify: false,
    // amp: true
    images: {
        domains: ['cdn.dummyjson.com'],
    },
};

export default nextConfig;
