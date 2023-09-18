// next.config.js

module.exports = {
  reactStrictMode: true,

  images: {
    domains: ["i.imgur.com", "res.cloudinary.com"], // Add other domains as needed
  },
  serverRuntimeConfig: {
    getServerSideProps: true,
  },
};
