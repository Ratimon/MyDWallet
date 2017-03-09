import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service'
import * as myGlobals from '../globals'
import * as _ from "lodash";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ss: SharedService) {
        myGlobals.SimpleWallet.deployed().then(function(contract:any) {

          // var addressStore = contract.address
            ss.balanceInEther = myGlobals.web3.fromWei(myGlobals.web3.eth.getBalance(contract.address).toNumber(), "ether");

            ss.contract_address = contract.address;
            ss.contract_abi = JSON.stringify(contract.contract.abi);

            ss.accounts = [];
            _.forEach(myGlobals.web3.eth.accounts, function(obj:Object) {
                contract.isAllowedToSend.call(obj).then(function(isAllowed:any) {
                    ss.accounts.push({address: obj, isAllowed:isAllowed});
                      })
                });
            });

    
  }

  ngOnInit() {
  }

}
