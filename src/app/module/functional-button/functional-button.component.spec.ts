import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalButtonComponent } from './functional-button.component';

describe('FunctionalButtonComponent', () => {
  let component: FunctionalButtonComponent;
  let fixture: ComponentFixture<FunctionalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
