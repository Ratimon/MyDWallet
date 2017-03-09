'use strict';
let Web3  = require('web3')
// let Contract = require('../../migrations/2_deploy_contracts')
// var SimpleWallet = artifacts.require("../../../contracts/SimpleWallet.sol");


var web3Instance  = new Web3();
console.log(web3Instance);
var providerInstance = new web3Instance.providers.HttpProvider('http://localhost:8545')
web3Instance.setProvider(providerInstance);

var jsonC = require("../../build/contracts/SimpleWallet.json");
var contract = require("truffle-contract");
var SimpleWalletInstance :any = contract(jsonC)
// var SimpleWalletInstance = contract({
//     abi: [
// {
// "constant": true,
// "inputs": [
// {
//     "name": "_address",
//     "type": "address"
// }
// ],
// "name": "isAllowedToSend",
// "outputs": [
// {
//     "name": "",
//     "type": "bool"
// }
// ],
// "payable": false,
// "type": "function"
// },
// {
// "constant": true,
// "inputs": [
// {
//     "name": "_address",
//     "type": "address"
// }
// ],
// "name": "getAmountOfWithdrawls",
// "outputs": [
// {
//     "name": "",
//     "type": "uint256"
// }
// ],
// "payable": false,
// "type": "function"
// },
// {
// "constant": true,
// "inputs": [
// {
//     "name": "_address",
//     "type": "address"
// },
// {
//     "name": "index",
//     "type": "uint256"
// }
// ],
// "name": "getWithdrawlForAddress",
// "outputs": [
// {
//     "name": "",
//     "type": "address"
// },
// {
//     "name": "",
//     "type": "uint256"
// }
// ],
// "payable": false,
// "type": "function"
// },
// {
// "constant": false,
// "inputs": [
// {
//     "name": "amount",
//     "type": "uint256"
// },
// {
//     "name": "receiver",
//     "type": "address"
// }
// ],
// "name": "sendFunds",
// "outputs": [
// {
//     "name": "",
//     "type": "uint256"
// }
// ],
// "payable": false,
// "type": "function"
// },
// {
// "constant": false,
// "inputs": [],
// "name": "killWallet",
// "outputs": [],
// "payable": false,
// "type": "function"
// },
// {
// "constant": false,
// "inputs": [
// {
//     "name": "_address",
//     "type": "address"
// }
// ],
// "name": "allowAddressToSendMoney",
// "outputs": [],
// "payable": false,
// "type": "function"
// },
// {
// "constant": false,
// "inputs": [
// {
//     "name": "_address",
//     "type": "address"
// }
// ],
// "name": "disallowAddressToSendMoney",
// "outputs": [],
// "payable": false,
// "type": "function"
// },
// {
// "inputs": [],
// "payable": false,
// "type": "constructor"
// },
// {
// "payable": true,
// "type": "fallback"
// },
// {
// "anonymous": false,
// "inputs": [
// {
//     "indexed": false,
//     "name": "_sender",
//     "type": "address"
// },
// {
//     "indexed": false,
//     "name": "amount",
//     "type": "uint256"
// }
// ],
// "name": "Deposit",
// "type": "event"
// },
// {
// "anonymous": false,
// "inputs": [
// {
//     "indexed": false,
//     "name": "_sender",
//     "type": "address"
// },
// {
//     "indexed": false,
//     "name": "amount",
//     "type": "uint256"
// },
// {
//     "indexed": false,
//     "name": "_beneficiary",
//     "type": "address"
// }
// ],
// "name": "Withdrawl",
// "type": "event"
// }
// ],
//     unlinked_binary: `0x606060405234610000575b60008054600160a060020a03191633600160a060020a03161790555b5b610445806100366000396000f300606060405236156100675763ffffffff60e060020a6000350416630bc605ad81146100cb5780635ee3610c146100f85780637bac318b14610123578063b268677414610162578063b67ba1b514610190578063c40046481461019f578063e481553e146101ba575b6100c95b610074336101d5565b156100c15760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a16100c6565b610000565b5b565b005b34610000576100e4600160a060020a03600435166101d5565b604080519115158252519081900360200190f35b3461000057610111600160a060020a0360043516610211565b60408051918252519081900360200190f35b346100005761013f600160a060020a0360043516602435610234565b60408051600160a060020a03909316835260208301919091528051918290030190f35b3461000057610111600435600160a060020a036024351661026c565b60408051918252519081900360200190f35b34610000576100c9610373565b005b34610000576100c9600160a060020a036004351661039b565b005b34610000576100c9600160a060020a03600435166103dd565b005b600160a060020a03811660009081526001602052604081205460ff16806102095750600054600160a060020a038381169116145b90505b919050565b600160a060020a038116600090815260016020819052604090912001545b919050565b600160a060020a03828116600090815260016020818152604080842086855260020190915290912080549101549116905b9250929050565b6000610277336101d5565b1561036b57600160a060020a0330163183901061036b57604051600160a060020a0383169084156108fc029085906000818181858888f1935050505015156102be57610000565b60408051600160a060020a0333811682526020820186905284168183015290517f2ce435329ed2714bb4f4b7d0fe33307418dcf239c8c61d63a6b2fe052f7491c29181900360600190a15033600160a060020a0390811660009081526001602081815260408084208084018054850180825586526002909101909252808420805473ffffffffffffffffffffffffffffffffffffffff191687871617905590548352909120018390553016315b5b5b92915050565b60005433600160a060020a03908116911614156100c657600054600160a060020a0316ff5b5b565b60005433600160a060020a03908116911614156103d957600160a060020a0381166000908152600160208190526040909120805460ff191690911790555b5b50565b60005433600160a060020a03908116911614156103d957600160a060020a0381166000908152600160205260409020805460ff191690555b5b505600a165627a7a723058206df69e1b571f7e36e4a9edc695b86cb11834ede60a2c02ac09a37ea59011f1be0029`,
//     address: 0xa49a6490e433c5abd361ee3584bde9df7e1e8443,
//       networks: {
//     "1488981212175": {
//       "events": {
//         "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c": {
//           "anonymous": false,
//           "inputs": [
//             {
//               "indexed": false,
//               "name": "_sender",
//               "type": "address"
//             },
//             {
//               "indexed": false,
//               "name": "amount",
//               "type": "uint256"
//             }
//           ],
//           "name": "Deposit",
//           "type": "event"
//         },
//         "0x2ce435329ed2714bb4f4b7d0fe33307418dcf239c8c61d63a6b2fe052f7491c2": {
//           "anonymous": false,
//           "inputs": [
//             {
//               "indexed": false,
//               "name": "_sender",
//               "type": "address"
//             },
//             {
//               "indexed": false,
//               "name": "amount",
//               "type": "uint256"
//             },
//             {
//               "indexed": false,
//               "name": "_beneficiary",
//               "type": "address"
//             }
//           ],
//           "name": "Withdrawl",
//           "type": "event"
//         }
//       },
//       "links": {},
//       "address": "0xa49a6490e433c5abd361ee3584bde9df7e1e8443",
//       "updated_at": 1488995734643
//     }
//   }
// })

SimpleWalletInstance.setProvider(providerInstance)

export var web3=web3Instance;
export var SimpleWallet=SimpleWalletInstance

