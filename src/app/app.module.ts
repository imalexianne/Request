import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    DateCountPipe,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
