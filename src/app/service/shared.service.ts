import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  name:string="test"
  accounts:any
  has_errors: string
  transfer_success:boolean
  balanceInEther: number
  // depositFunds: Function

  contract_address:string
  contract_abi:any
  

  constructor() {
    
  }


}
