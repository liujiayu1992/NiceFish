import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
// declare var BootstrapTable:any;
@Directive({
    selector: 'bootstrap-table'
})
export class TableOptionDirective implements OnInit {
    @Input('tableType') chartType: any;

    constructor(private el: ElementRef) {}

    public ngOnInit(): void {
      // console.log(BootstrapTable.DEFAULTS);
      $(this.el).bootstrapTable({
          columns: [{
            field: 'id',
            title: 'Item ID'
          }, {
            field: 'name',
            title: 'Item Name'
          }, {
            field: 'price',
            title: 'Item Price'
          }],
          data: [{
            id: 1,
            name: 'Item 1',
            price: '$1'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }]
        });
    }
}
