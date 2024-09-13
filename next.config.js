/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2hg8ctx8thzji.cloudfront.net",
        port: "",
        pathname: "/reachplaza.com/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "dgkh6zl92a7px.cloudfront.net",
        port: "",
        pathname: `/assets/**`,
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
