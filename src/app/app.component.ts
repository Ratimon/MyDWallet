import { Component } from '@angular/core';
// import {bootstrap} from '@angular/platform-browser-dynamic'
import {SharedService} from './service/shared.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent {
  title = 'app works!';
}

// bootstrap
