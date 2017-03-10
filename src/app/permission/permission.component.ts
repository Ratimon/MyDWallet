import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';
import * as myGlobals from '../globals'

@Component({
  selector: 'permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  loading : Boolean = false
  success : Boolean = false
  error : Boolean = false 

  constructor(private ss: SharedService) { }

  ngOnInit() {
  }

}
