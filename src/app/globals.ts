'use strict';
let Web3 = require('web3')

var web3Instance = new Web3();
console.log(web3Instance);
web3Instance.setProvider(new web3Instance.providers.HttpProvider('http://localhost:8545'));

export var web3=web3Instance;

