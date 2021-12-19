import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-demo',
  templateUrl: './structural-demo.component.html',
  styleUrls: ['./structural-demo.component.scss'],
})
export class StructuralDemoComponent implements OnInit {
  isVisible = true;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isVisible = !this.isVisible;
  }
}
