import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';
import * as myGlobals from '../globals'



@Component({
  selector: 'sendether',
  templateUrl: './sendether.component.html',
  styleUrls: ['./sendether.component.css']
})
export class SendetherComponent implements OnInit {

  addresses: string[] = this.ss.accounts

  constructor(private ss: SharedService) {
    ss.accounts = myGlobals.web3.eth.accounts
  }

  ngOnInit() {

    this.addresses = this.ss.accounts
  }

}
