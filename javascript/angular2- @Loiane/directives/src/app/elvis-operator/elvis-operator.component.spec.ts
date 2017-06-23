import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvisOperatorComponent } from './elvis-operator.component';

describe('ElvisOperatorComponent', () => {
  let component: ElvisOperatorComponent;
  let fixture: ComponentFixture<ElvisOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvisOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvisOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
