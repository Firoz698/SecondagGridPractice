import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'; // Column Definitions Interface

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  private api!: GridApi;

  ngOnInit(): void {

  }
  rowData: any[] = [
    { name: 'Md Firoz Ali', age: '26', address: 'khoksha Mollik Para' },
    { name: 'Md Firoz Ali', age: '25', address: 'khoksha Mollik Para' },
    { name: 'Md Firoz Ali', age: '32', address: 'khoksha Mollik Para' },
    { name: 'Md Firoz Ali', age: '12', address: 'khoksha Mollik Para' }
  ]
  onGridReady(event: GridReadyEvent){
    this.api = event.api;
    this.api.sizeColumnsToFit();
  }
  colDefs: ColDef[] = [
    { field: 'name' },
    { field: 'age' },
    { field: 'address' }
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true
  }

  onSelectionChanged(event: CellClickedEvent) {

    console.log(event.value)
  }

}
