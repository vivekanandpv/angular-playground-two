import { Component, OnInit } from '@angular/core';

import { users } from '../users';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss'],
})
export class TableDemoComponent implements OnInit {
  systemUsers = users;

  colours = ['blue', 'red', 'green'];

  constructor() {}

  ngOnInit(): void {}
}
