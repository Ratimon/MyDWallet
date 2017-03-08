// 'use strict';
// let Web3 = require('../js/web3')
// import * as Web3  from '../js/web3'
var Web3 = require('../js/web3');

// import * as Web3  from 'web3';
// import * as Bignumber  from 'bignumber';

// declare var Web3: {
//     "new"(): Web3;  // Quotes to indicate this is not a construct signature
// }


// Web3.prototype.setProvider = function (provider) {
//     this._requestManager.setProvider(provider);
//     this.currentProvider = provider;
// };

//     this.providers = {
//         HttpProvider: HttpProvider,
//         // IpcProvider: IpcProvider
//     };

// var HttpProvider = require('./web3/httpprovider');

 // setTimeout(function(){ 
  
    var web3Instance : any = new Web3();
    console.log(web3Instance);
    web3Instance.setProvider(new web3Instance.providers.HttpProvider('http://localhost:8545'));
    export var web3:any




// }, 1000);

// export class myGlobals {
//     web3:any

//     constructor() {
//         setTimeout(function(){ 
//         var web3Instance :any = new Web3();
//         // console.log(web3Instance);
//         web3Instance.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'))
//         this.web3 = web3Instance;
//         }, 1000);
        
//     }
// }
