module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};

// module.exports = {
//   build: {
//     "index.html": "dist/index.html",
//     "app.js": [
//       "dist/polyfills.006e9d55e6a80c0bba67.js",
//       "dist/vendor.006e9d55e6a80c0bba67.js",
//       "dist/app.006e9d55e6a80c0bba67.js",
//       "dist/twbs.006e9d55e6a80c0bba67.js"
//     ],
//     "app.css": [
//       "stylesheets/"
//     ],
//     "images/": "images/"
//   },
//   rpc: {
//     host: "localhost",
//     port: 8545
//   }
// };
// var path = require('path');

// var DefaultBuilder = require("truffle-default-builder");

// module.exports = {
//   build: new DefaultBuilder({
//     "index.html": path.resolve("dist/index.html"),
//     // "index.html": "/dist/index.html",
//     "app.js": [
//       "/dist/polyfills.006e9d55e6a80c0bba67.js",
//       "/dist/vendor.006e9d55e6a80c0bba67.js",
//       "/dist/app.006e9d55e6a80c0bba67.js",
//       "dist/twbs.006e9d55e6a80c0bba67.js"
//     ],
//     "app.css": [
//       "stylesheets/"
//     ],
//     "images/": "images/",
//     "views/": "views/"
//   }),

//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*" // match any network
//     },
//     live: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*" // match any network
//     }
//   }
// };

