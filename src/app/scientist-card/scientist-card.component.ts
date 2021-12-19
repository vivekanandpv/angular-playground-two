import { Component, Input, OnInit } from '@angular/core';
import { ScientistModel } from '../_models/scientist.model';

@Component({
  selector: 'app-scientist-card',
  templateUrl: './scientist-card.component.html',
  styleUrls: ['./scientist-card.component.scss'],
})
export class ScientistCardComponent implements OnInit {
  @Input() scientist: ScientistModel = {
    name: '',
    field: '',
    imageUrl: '',
    country: '',
    nobelPrize: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
