import { Component, Pipe, Input, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SharedService} from '../service/shared.service';
import * as myGlobals from '../globals'




@Component({
  selector: 'deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.css']
})
export class DepositFormComponent implements OnInit {


  addresses: string[] = this.ss.accounts
  myform: FormGroup;
  etherAmount: FormControl;
  addressFrom: FormControl;
  public transfer_success: boolean = false;
  public has_errors: string = "";

  SimpleContract: any


  constructor(private ss: SharedService) {

    ss.accounts = myGlobals.web3.eth.accounts
    // ss.depositFunds = function(adrress :string, amount:number) {

      // myGlobals.web3.eth.sendTransaction({from: address, to: contract.address, value: myGlobals.web3.toWei(amount, "ether")}, function(error:any, result:any) {
      //           if(error) {
      //               ss.has_errors = "I did not work";
      //           } else {
      //               ss.transfer_success = true;
      //           }
      //       });
    // }

  }


  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.addresses = this.ss.accounts
  }

  createFormControls() {
    this.etherAmount = new FormControl('', [
      Validators.required
    ]);
    this.addressFrom = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      etherAmount: this.etherAmount,
      addressFrom: this.addressFrom
    });
  }

  onSubmit() {
  // onSubmit(adrress :string, amount:number) {
    if (this.myform.valid) {
      console.log("Form Submitted!");

      var that = this;
      console.log(that);
      // var myform = this.myform;
      myGlobals.SimpleWallet.deployed().then(function(contract :any) {

        console.log(contract.address);
        console.log(that.myform.value.addressFrom);
        console.log(myGlobals.web3.toWei(that.myform.value.etherAmount, "ether"));
  
        var addressStore = contract.address

          myGlobals.web3.eth.sendTransaction({from: that.myform.value.addressFrom, to: addressStore, value: myGlobals.web3.toWei(that.myform.value.etherAmount, "ether")}, function(error:any, result:any) {
            if(error) {
                that.has_errors = "I did not work";
            } else {
                that.transfer_success = true;
            }
 
        });   
      })

      


    }
    // this.myform.reset();
  }
}
