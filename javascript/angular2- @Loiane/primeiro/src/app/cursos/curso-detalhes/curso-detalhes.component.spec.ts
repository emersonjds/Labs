import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalhesComponent } from './curso-detalhes.component';

describe('CursoDetalhesComponent', () => {
  let component: CursoDetalhesComponent;
  let fixture: ComponentFixture<CursoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
