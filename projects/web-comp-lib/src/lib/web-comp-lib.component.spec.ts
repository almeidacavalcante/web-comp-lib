import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCompLibComponent } from './web-comp-lib.component';

describe('WebCompLibComponent', () => {
  let component: WebCompLibComponent;
  let fixture: ComponentFixture<WebCompLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebCompLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCompLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
