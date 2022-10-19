/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig, {
  headers: [
    { "Access-Control-Allow-Credentials": "true" },
    { "Access-Control-Allow-Origin": "*" },
    // ...
  ]
}