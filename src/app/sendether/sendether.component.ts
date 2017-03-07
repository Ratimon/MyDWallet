import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service'


@Component({
  selector: 'app-sendether',
  templateUrl: './sendether.component.html',
  styleUrls: ['./sendether.component.css']
})
export class SendetherComponent implements OnInit {

  constructor(private ss: SharedService) { }

  ngOnInit() {
  }

}
