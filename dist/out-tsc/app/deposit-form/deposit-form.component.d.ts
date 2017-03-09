import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../service/shared.service';
export declare class DepositFormComponent implements OnInit {
    private ss;
    addresses: string[];
    myform: FormGroup;
    etherAmount: FormControl;
    addressFrom: FormControl;
    transfer_success: boolean;
    has_errors: string;
    SimpleContract: any;
    constructor(ss: SharedService);
    ngOnInit(): void;
    createFormControls(): void;
    createForm(): void;
    onSubmit(): void;
}
