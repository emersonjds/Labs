import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassComponent } from './ng-class.component';

describe('NgClassComponent', () => {
  let component: NgClassComponent;
  let fixture: ComponentFixture<NgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
