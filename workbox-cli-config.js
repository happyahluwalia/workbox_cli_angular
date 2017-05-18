module.exports = {
  "globDirectory": "dist\\",
  "globPatterns": [
    "**/*.{js,png,ico,svg,html,json,css}"
  ],
  "swDest": "dist/sw.js",
  "globIgnores": [
    "..\\workbox-cli-config.js"
  ],
   modifyUrlPrefix: {
    '/': ''
  }
};
