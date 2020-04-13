import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CustomerComponent } from './customer/customer.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { RouterModule, Routes } from "@angular/router";
import { AlertService } from './alert.service';

const routes: Routes = [
  { path: "Home", component: CustomerComponent }
  //{ path: "about", component: AboutComponent }//
];
@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    FormComponent,
    CustomerComponent,
    StrikethroughDirective,
    DateCountPipe,

    //AboutComponent//
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule

  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
