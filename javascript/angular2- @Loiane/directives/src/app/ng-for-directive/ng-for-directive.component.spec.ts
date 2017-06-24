import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirectiveComponent } from './ng-for-directive.component';

describe('NgForDirectiveComponent', () => {
  let component: NgForDirectiveComponent;
  let fixture: ComponentFixture<NgForDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
