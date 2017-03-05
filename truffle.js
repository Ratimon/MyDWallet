// module.exports = {
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*" // Match any network id
//     }
//   }
// };

// module.exports = {
//   build: {
//     "index.html": "index.html",
//     "app.js": [
//       "javascripts/app.js"
//     ],
//     "app.css": [
//       "stylesheets/app.css"
//     ],
//     "images/": "images/"
//   },
//   rpc: {
//     host: "localhost",
//     port: 8545
//   }
// };

var DefaultBuilder = require("truffle-default-builder");

module.exports = {
  build: new DefaultBuilder({
    "index.html": 'index.html',
    "app.js": [
      "vendor/angular/angular.js",
      "vendor/angular-route/angular-route.js",
      "javascript/app.js",
      "javascript/controllers/main.js",
      "javascript/controllers/sendfunds.js",
      "javascript/controllers/showevents.js",
      "javascript/controllers/permissions.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/",
    "views/": "views/"
  }),

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network
    }
  }
};

// var DefaultBuilder = require("truffle-default-builder");

// module.exports = {
//   build: new DefaultBuilder({
//     // "index.html": [
//     //   "../index.html"
//     // ],
//     "app.js": [
//       "javascripts/app.js"
//     ],
//     "app.css": [
//       "stylesheets/app.css"
//     ],
//     "images/": "images/"
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
