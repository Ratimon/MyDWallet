import { OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
export declare class PermissionComponent implements OnInit {
    private ss;
    loading: Boolean;
    success: Boolean;
    error: Boolean;
    constructor(ss: SharedService);
    ngOnInit(): void;
}
