import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service'


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private ss: SharedService) {
    
  }

  ngOnInit() {
  }

}
