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


  addresses: string[] = [
    '1',
    '2',
    '3',
  ];
  myform: FormGroup;
  etherAmount: FormControl;
  addressFrom: FormControl;


  constructor(private ss: SharedService) {

    ss.name = '2'
    ss.accounts = myGlobals.web3.eth.accounts

  }


  ngOnInit() {
    this.createFormControls();
    this.createForm();
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
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.myform.reset();
    }
  }
}
