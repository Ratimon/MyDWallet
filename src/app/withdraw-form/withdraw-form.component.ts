import { Component, Pipe, Input, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SharedService} from '../service/shared.service'
import * as myGlobals from '../globals'



@Component({
  selector: 'withdraw-form',
  templateUrl: './withdraw-form.component.html',
  styleUrls: ['./withdraw-form.component.css']
})
export class WithdrawFormComponent implements OnInit {

  addresses: string[]
  myform: FormGroup;
  etherAmount: FormControl;
  addressTo: FormControl;
  public transfer_success: boolean = false;
  public has_errors: string = "";

  constructor(private ss: SharedService) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.etherAmount = new FormControl('', [
      Validators.required
    ]);
    this.addressTo = new FormControl('', [
      Validators.required,
      Validators.minLength(42),
      Validators.maxLength(42)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      etherAmount: this.etherAmount,
      addressTo: this.addressTo
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");

      var that = this;
      myGlobals.SimpleWallet.deployed().then(function(contract:any) {

      console.log(that.myform.value.etherAmount)
      console.log(that.myform.value.addressTo)

      contract.sendFunds(myGlobals.web3.toWei(that.myform.value.etherAmount, "ether"), that.myform.value.addressTo, {from: myGlobals.web3.eth.accounts[0], gas: 200000}).then(function () {
          that.transfer_success = true;

      }).catch(function (error:any) {
          console.error(error);
          that.has_errors = `${error}`;

      });
     });

      this.myform.reset();
    }
  }

}
