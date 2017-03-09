import { OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
export declare class SendetherComponent implements OnInit {
    private ss;
    addresses: string[];
    constructor(ss: SharedService);
    ngOnInit(): void;
}
