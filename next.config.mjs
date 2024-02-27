// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } from "next/constants.js";
  
  /** @type {import("next").NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        { 
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        },
      ],
    },  
  
  };
  
  const nextConfigFunction = async (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
      const withPWA = (await import("@ducanh2912/next-pwa")).default({
        dest: "public",
        register:true ,
        reloadOnOnline:true,
        skipWaiting:true,
      });
      return withPWA(nextConfig);
    }
    return nextConfig;
  };
  
  export default nextConfigFunction;