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
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('query') queryComponentRef!: QueryComponent;

  ngAfterViewInit(): void {
    console.log(this.queryComponentRef);

    setTimeout(() => {
      this.queryComponentRef.message = 'Message changed from the parent';
    }, 2000);
  }
}
