import { Component, Pipe, Input, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SharedService} from '../service/shared.service'



@Component({
  selector: 'withdraw-form',
  templateUrl: './withdraw-form.component.html',
  styleUrls: ['./withdraw-form.component.css']
})
export class WithdrawFormComponent implements OnInit {

 addresses: string[] = [
    '1',
    '2',
    '3',
  ];
  myform: FormGroup;
  etherAmount: FormControl;
  addressTo: FormControl;


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
      this.myform.reset();
    }
  }

}
