import { Component, OnInit } from '@angular/core';
import { scientists } from '../scientists';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss'],
})
export class CardHolderComponent implements OnInit {
  scientistsList = scientists;

  constructor() {}

  ngOnInit(): void {}
}
