import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { PracticeGridApiComponent } from './practice-grid-api/practice-grid-api.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    PracticeGridApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
