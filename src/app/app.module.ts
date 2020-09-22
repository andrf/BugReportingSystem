import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CaretComponent } from './caret/caret.component';

@NgModule({
  declarations: [
    AppComponent,
    BugListComponent,
    HeaderComponent,
    FooterComponent,
    CaretComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
