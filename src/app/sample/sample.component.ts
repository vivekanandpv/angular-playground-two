import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { QueryComponent } from '../query/query.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, AfterViewInit {
  borderRequired = true;
  tableClass: object = {
    table: true,
    'table-sm': true,
    'table-striped': true,
    'table-bordered': true,
  };

  compStyle = {
    width: '10rem',
    'background-color': '#ddd',
    padding: '1rem',
    border: '2px solid #d20',
    'font-weight': '600',
    'font-style': 'monospace',
  };

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('query') queryComponentRef!: QueryComponent;

  ngAfterViewInit(): void {
    console.log(this.queryComponentRef);

    setTimeout(() => {
      this.queryComponentRef.message = 'Message changed from the parent';
    }, 2000);
  }

  changeSelection(args: any): void {
    console.log(args);
    if (args.target.value === 'yes') {
      this.tableClass = {
        table: true,
        'table-sm': true,
        'table-striped': true,
        'table-bordered': true,
      };

      this.compStyle = { ...this.compStyle, border: '2px solid #d20' };
    } else {
      this.tableClass = {
        table: true,
        'table-sm': true,
        'table-striped': true,
        'table-bordered': false,
      };

      this.compStyle = { ...this.compStyle, border: '' };
    }
  }
}
