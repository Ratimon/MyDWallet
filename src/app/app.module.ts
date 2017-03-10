import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

import {RouterModule} from "@angular/router"
import {routes} from "./routes";
import { SendetherComponent } from './sendether/sendether.component';
import { DepositFormComponent } from './deposit-form/deposit-form.component';
import { WithdrawFormComponent } from './withdraw-form/withdraw-form.component';

import {SharedService} from './service/shared.service';
import { PermissionComponent } from './permission/permission.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    SendetherComponent,
    DepositFormComponent,
    WithdrawFormComponent,
    PermissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
