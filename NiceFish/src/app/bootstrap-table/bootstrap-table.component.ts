import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss']
})
export class BootstrapTableComponent implements OnInit,OnChanges {
  @Input() options: {};
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      $('#table').bootstrapTable(this.options).bootstrapTable('load',this.data);
    },20);

  }
  ngOnChanges(changes){
    if(changes.hasOwnProperty('data')){
      $('#table').bootstrapTable('load',changes.data.currentValue);
    }
  }

}
