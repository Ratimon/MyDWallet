import { OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
export declare class HistoryComponent implements OnInit {
    private ss;
    constructor(ss: SharedService);
    ngOnInit(): void;
}
