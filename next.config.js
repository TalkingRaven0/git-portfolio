/** @type {import('next').NextConfig} */
const env = process.env.NODE_ENV

var nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };

if (env == "production"){
    nextConfig['basePath'] = "/git-portfolio";
    nextConfig['assetPrefix'] = "/git-portfolio/out/"
}
  
  module.exports = nextConfig;