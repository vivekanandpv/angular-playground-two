import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistCardComponent } from './scientist-card.component';

describe('ScientistCardComponent', () => {
  let component: ScientistCardComponent;
  let fixture: ComponentFixture<ScientistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
