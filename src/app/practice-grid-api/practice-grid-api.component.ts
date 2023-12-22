import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-practice-grid-api',
  templateUrl: './practice-grid-api.component.html',
  styleUrls: ['./practice-grid-api.component.css']
})
export class PracticeGridApiComponent {


  private GAoi!: GridApi;



  ApiGridReady(event: GridReadyEvent) {
    this.GAoi=event.api;
    this.GAoi.sizeColumnsToFit();
  }

  rowData: any[] = [];
  colDefs: ColDef[] = [
    { field: 'name' },
    { field: 'Email' },
    { field: 'Number' }
  ];












}
