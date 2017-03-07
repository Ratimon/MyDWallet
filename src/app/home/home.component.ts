import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ss: SharedService) { }

  ngOnInit() {
  }

}
