const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require('next-fonts');
const webpack = require("webpack");
const path = require("path");

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([[withSass], [withImages], [withCSS], [withFonts]], {
  enableSvg: true,
  assetPrefix: isProd ? '/checkout' : '',
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },    
  
});
