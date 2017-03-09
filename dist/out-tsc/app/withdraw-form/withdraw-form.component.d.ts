import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../service/shared.service';
export declare class WithdrawFormComponent implements OnInit {
    private ss;
    addresses: string[];
    myform: FormGroup;
    etherAmount: FormControl;
    addressTo: FormControl;
    transfer_success: boolean;
    has_errors: string;
    constructor(ss: SharedService);
    ngOnInit(): void;
    createFormControls(): void;
    createForm(): void;
    onSubmit(): void;
}
