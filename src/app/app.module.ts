import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { NamePipe } from './shared/pipes/name.pipe';
import { SortFNamePipe } from './shared/pipes/sort-fname.pipe';
import { SortLNamePipe } from './shared/pipes/sort-lname.pipe';
import { SortPhonePipe } from './shared/pipes/sort-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    NamePipe,
    SortFNamePipe,
    SortLNamePipe,
    SortPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
