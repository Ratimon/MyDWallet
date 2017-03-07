// 'use strict';
import * as Web3  from '../js/web3.js'
var web3Instance = new Web3();
console.log(web3Instance);
web3Instance.setProvider(new web3Instance.providers.HttpProvider('http://localhost:8545'));

// var Web3 = require('web3');
// var web3 = new Web3();
// var provider = web3.providers.HttpProvider("http://localhost:8545");
// web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

export  var web3 = web3Instance